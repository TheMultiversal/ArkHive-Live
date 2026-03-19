'use client';

/**
 * WebSocket Infrastructure
 * Real-time communication layer for ArkHive collaborative features
 */

// ============================================================================
// Types
// ============================================================================

export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'reconnecting' | 'error';

export type MessageType =
  | 'presence'
  | 'cursor'
  | 'edit'
  | 'annotation'
  | 'chat'
  | 'notification'
  | 'sync'
  | 'conflict'
  | 'lock'
  | 'unlock';

export interface WebSocketMessage<T = unknown> {
  id: string;
  type: MessageType;
  channel: string;
  payload: T;
  timestamp: number;
  sender: {
    id: string;
    name: string;
  };
}

export interface PresencePayload {
  status: 'online' | 'away' | 'busy';
  currentDocument?: string;
  lastActivity: number;
}

export interface CursorPayload {
  x: number;
  y: number;
  documentId: string;
  selection?: {
    start: number;
    end: number;
  };
}

export interface EditPayload {
  documentId: string;
  operation: 'insert' | 'delete' | 'replace';
  position: number;
  content?: string;
  length?: number;
  version: number;
}

export interface ChatPayload {
  workspaceId: string;
  content: string;
  replyTo?: string;
  mentions?: string[];
}

export interface SyncPayload {
  resourceType: 'evidence' | 'document' | 'entity' | 'investigation';
  resourceId: string;
  action: 'create' | 'update' | 'delete';
  data: Record<string, unknown>;
  version: number;
}

export interface WebSocketConfig {
  url: string;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  heartbeatInterval?: number;
  debug?: boolean;
}

// ============================================================================
// Event Emitter
// ============================================================================

type EventListener<T = unknown> = (data: T) => void;

class EventEmitter {
  private events: Map<string, Set<EventListener>> = new Map();

  on<T>(event: string, listener: EventListener<T>): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event)!.add(listener as EventListener);
    
    return () => this.off(event, listener as EventListener);
  }

  off(event: string, listener: EventListener): void {
    this.events.get(event)?.delete(listener);
  }

  emit<T>(event: string, data: T): void {
    this.events.get(event)?.forEach(listener => {
      try {
        listener(data);
      } catch (error) {
        console.error(`Error in event listener for ${event}:`, error);
      }
    });
  }

  removeAllListeners(event?: string): void {
    if (event) {
      this.events.delete(event);
    } else {
      this.events.clear();
    }
  }
}

// ============================================================================
// WebSocket Client
// ============================================================================

export class WebSocketClient extends EventEmitter {
  private ws: WebSocket | null = null;
  private config: Required<WebSocketConfig>;
  private status: ConnectionStatus = 'disconnected';
  private reconnectCount = 0;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private messageQueue: WebSocketMessage[] = [];
  private subscribedChannels: Set<string> = new Set();
  private userId: string;
  private userName: string;

  constructor(config: WebSocketConfig, userId: string, userName: string) {
    super();
    this.config = {
      reconnectAttempts: 5,
      reconnectInterval: 3000,
      heartbeatInterval: 30000,
      debug: false,
      ...config,
    };
    this.userId = userId;
    this.userName = userName;
  }

  // Connection Management
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        resolve();
        return;
      }

      this.setStatus('connecting');
      this.log('Connecting to WebSocket...');

      try {
        this.ws = new WebSocket(this.config.url);

        this.ws.onopen = () => {
          this.setStatus('connected');
          this.reconnectCount = 0;
          this.startHeartbeat();
          this.flushMessageQueue();
          this.resubscribeChannels();
          this.log('WebSocket connected');
          resolve();
        };

        this.ws.onclose = (event) => {
          this.log(`WebSocket closed: ${event.code} - ${event.reason}`);
          this.stopHeartbeat();
          this.handleDisconnect();
        };

        this.ws.onerror = (error) => {
          this.log('WebSocket error:', error);
          this.setStatus('error');
          reject(error);
        };

        this.ws.onmessage = (event) => {
          this.handleMessage(event.data);
        };
      } catch (error) {
        this.setStatus('error');
        reject(error);
      }
    });
  }

  disconnect(): void {
    this.stopHeartbeat();
    this.stopReconnect();
    if (this.ws) {
      this.ws.close(1000, 'Client disconnect');
      this.ws = null;
    }
    this.setStatus('disconnected');
    this.log('WebSocket disconnected');
  }

  private handleDisconnect(): void {
    if (this.status === 'disconnected') return;

    if (this.reconnectCount < this.config.reconnectAttempts) {
      this.setStatus('reconnecting');
      this.scheduleReconnect();
    } else {
      this.setStatus('disconnected');
      this.emit('max_reconnect_attempts', null);
    }
  }

  private scheduleReconnect(): void {
    this.reconnectTimer = setTimeout(() => {
      this.reconnectCount++;
      this.log(`Reconnect attempt ${this.reconnectCount}/${this.config.reconnectAttempts}`);
      this.connect().catch(() => {
        // Error handled in connect
      });
    }, this.config.reconnectInterval * Math.pow(1.5, this.reconnectCount));
  }

  private stopReconnect(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  // Heartbeat
  private startHeartbeat(): void {
    this.heartbeatTimer = setInterval(() => {
      this.sendRaw({ type: 'ping', timestamp: Date.now() });
    }, this.config.heartbeatInterval);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  // Message Handling
  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);
      
      if (message.type === 'pong') {
        this.emit('heartbeat', { latency: Date.now() - message.timestamp });
        return;
      }

      this.emit('message', message);
      this.emit(message.type, message);
      
      if (message.channel) {
        this.emit(`channel:${message.channel}`, message);
      }
    } catch (error) {
      this.log('Failed to parse message:', error);
    }
  }

  send<T>(type: MessageType, channel: string, payload: T): void {
    const message: WebSocketMessage<T> = {
      id: this.generateId(),
      type,
      channel,
      payload,
      timestamp: Date.now(),
      sender: {
        id: this.userId,
        name: this.userName,
      },
    };

    if (this.ws?.readyState === WebSocket.OPEN) {
      this.sendRaw(message);
    } else {
      this.messageQueue.push(message as WebSocketMessage);
    }
  }

  private sendRaw(data: unknown): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }

  private flushMessageQueue(): void {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message) {
        this.sendRaw(message);
      }
    }
  }

  // Channel Subscription
  subscribe(channel: string): void {
    this.subscribedChannels.add(channel);
    this.sendRaw({ type: 'subscribe', channel });
    this.log(`Subscribed to channel: ${channel}`);
  }

  unsubscribe(channel: string): void {
    this.subscribedChannels.delete(channel);
    this.sendRaw({ type: 'unsubscribe', channel });
    this.log(`Unsubscribed from channel: ${channel}`);
  }

  private resubscribeChannels(): void {
    this.subscribedChannels.forEach(channel => {
      this.sendRaw({ type: 'subscribe', channel });
    });
  }

  // Status
  private setStatus(status: ConnectionStatus): void {
    const prevStatus = this.status;
    this.status = status;
    this.emit('status', { status, prevStatus });
  }

  getStatus(): ConnectionStatus {
    return this.status;
  }

  isConnected(): boolean {
    return this.status === 'connected';
  }

  // Utilities
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }

  private log(...args: unknown[]): void {
    if (this.config.debug) {
      console.log('[WebSocket]', ...args);
    }
  }
}

// ============================================================================
// Channel Manager
// ============================================================================

export class ChannelManager {
  private client: WebSocketClient;
  private channels: Map<string, Set<EventListener>> = new Map();

  constructor(client: WebSocketClient) {
    this.client = client;
  }

  join(channel: string, listener: EventListener<WebSocketMessage>): () => void {
    if (!this.channels.has(channel)) {
      this.channels.set(channel, new Set());
      this.client.subscribe(channel);
    }
    
    this.channels.get(channel)!.add(listener as EventListener);
    const cleanup = this.client.on(`channel:${channel}`, listener);

    return () => {
      cleanup();
      this.channels.get(channel)?.delete(listener as EventListener);
      if (this.channels.get(channel)?.size === 0) {
        this.client.unsubscribe(channel);
        this.channels.delete(channel);
      }
    };
  }

  leave(channel: string): void {
    if (this.channels.has(channel)) {
      this.client.unsubscribe(channel);
      this.channels.delete(channel);
    }
  }

  broadcast<T>(channel: string, type: MessageType, payload: T): void {
    this.client.send(type, channel, payload);
  }

  getActiveChannels(): string[] {
    return Array.from(this.channels.keys());
  }
}

// ============================================================================
// Presence Manager
// ============================================================================

export interface PresenceUser {
  id: string;
  name: string;
  status: 'online' | 'away' | 'busy';
  currentDocument?: string;
  lastSeen: number;
}

export class PresenceManager {
  private client: WebSocketClient;
  private channel: string;
  private users: Map<string, PresenceUser> = new Map();
  private currentStatus: PresencePayload['status'] = 'online';
  private activityTimer: NodeJS.Timeout | null = null;
  private readonly AWAY_TIMEOUT = 5 * 60 * 1000; // 5 minutes

  constructor(client: WebSocketClient, channel: string) {
    this.client = client;
    this.channel = channel;
    this.setupListeners();
    this.startActivityTracking();
  }

  private setupListeners(): void {
    this.client.on('presence', (message: WebSocketMessage<PresencePayload>) => {
      const user: PresenceUser = {
        id: message.sender.id,
        name: message.sender.name,
        status: message.payload.status,
        currentDocument: message.payload.currentDocument,
        lastSeen: message.timestamp,
      };
      this.users.set(user.id, user);
      this.client.emit('presence_update', this.getUsers());
    });
  }

  private startActivityTracking(): void {
    if (typeof window === 'undefined') return;

    const resetActivity = () => {
      if (this.currentStatus === 'away') {
        this.setStatus('online');
      }
      
      if (this.activityTimer) {
        clearTimeout(this.activityTimer);
      }
      
      this.activityTimer = setTimeout(() => {
        this.setStatus('away');
      }, this.AWAY_TIMEOUT);
    };

    window.addEventListener('mousemove', resetActivity);
    window.addEventListener('keydown', resetActivity);
    window.addEventListener('click', resetActivity);
    
    resetActivity();
  }

  setStatus(status: PresencePayload['status'], currentDocument?: string): void {
    this.currentStatus = status;
    this.client.send<PresencePayload>('presence', this.channel, {
      status,
      currentDocument,
      lastActivity: Date.now(),
    });
  }

  setDocument(documentId: string): void {
    this.setStatus(this.currentStatus, documentId);
  }

  getUsers(): PresenceUser[] {
    return Array.from(this.users.values());
  }

  getUser(id: string): PresenceUser | undefined {
    return this.users.get(id);
  }

  cleanup(): void {
    if (this.activityTimer) {
      clearTimeout(this.activityTimer);
    }
  }
}

// ============================================================================
// Cursor Sync
// ============================================================================

export interface RemoteCursor {
  userId: string;
  userName: string;
  x: number;
  y: number;
  color: string;
  documentId: string;
  selection?: {
    start: number;
    end: number;
  };
  timestamp: number;
}

export class CursorSync {
  private client: WebSocketClient;
  private channel: string;
  private cursors: Map<string, RemoteCursor> = new Map();
  private throttleTimer: NodeJS.Timeout | null = null;
  private pendingUpdate: CursorPayload | null = null;
  private readonly THROTTLE_MS = 50;
  private readonly CURSOR_TIMEOUT = 10000;

  private static CURSOR_COLORS = [
    '#ef4444', '#f97316', '#eab308', '#22c55e',
    '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
  ];

  constructor(client: WebSocketClient, channel: string) {
    this.client = client;
    this.channel = channel;
    this.setupListeners();
    this.startCleanupTimer();
  }

  private setupListeners(): void {
    this.client.on('cursor', (message: WebSocketMessage<CursorPayload>) => {
      const cursor: RemoteCursor = {
        userId: message.sender.id,
        userName: message.sender.name,
        x: message.payload.x,
        y: message.payload.y,
        color: this.getColorForUser(message.sender.id),
        documentId: message.payload.documentId,
        selection: message.payload.selection,
        timestamp: message.timestamp,
      };
      this.cursors.set(cursor.userId, cursor);
      this.client.emit('cursor_update', this.getCursors());
    });
  }

  private startCleanupTimer(): void {
    setInterval(() => {
      const now = Date.now();
      let changed = false;
      
      this.cursors.forEach((cursor, userId) => {
        if (now - cursor.timestamp > this.CURSOR_TIMEOUT) {
          this.cursors.delete(userId);
          changed = true;
        }
      });
      
      if (changed) {
        this.client.emit('cursor_update', this.getCursors());
      }
    }, this.CURSOR_TIMEOUT);
  }

  updateCursor(x: number, y: number, documentId: string, selection?: { start: number; end: number }): void {
    this.pendingUpdate = { x, y, documentId, selection };
    
    if (!this.throttleTimer) {
      this.throttleTimer = setTimeout(() => {
        if (this.pendingUpdate) {
          this.client.send<CursorPayload>('cursor', this.channel, this.pendingUpdate);
          this.pendingUpdate = null;
        }
        this.throttleTimer = null;
      }, this.THROTTLE_MS);
    }
  }

  getCursors(documentId?: string): RemoteCursor[] {
    const cursors = Array.from(this.cursors.values());
    return documentId ? cursors.filter(c => c.documentId === documentId) : cursors;
  }

  private getColorForUser(userId: string): string {
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = ((hash << 5) - hash) + userId.charCodeAt(i);
      hash = hash & hash;
    }
    return CursorSync.CURSOR_COLORS[Math.abs(hash) % CursorSync.CURSOR_COLORS.length];
  }

  cleanup(): void {
    if (this.throttleTimer) {
      clearTimeout(this.throttleTimer);
    }
  }
}

// ============================================================================
// Document Lock Manager
// ============================================================================

export interface DocumentLock {
  documentId: string;
  userId: string;
  userName: string;
  lockedAt: number;
  expiresAt: number;
  reason?: string;
}

export class LockManager {
  private client: WebSocketClient;
  private channel: string;
  private locks: Map<string, DocumentLock> = new Map();
  private readonly DEFAULT_LOCK_DURATION = 5 * 60 * 1000; // 5 minutes

  constructor(client: WebSocketClient, channel: string) {
    this.client = client;
    this.channel = channel;
    this.setupListeners();
  }

  private setupListeners(): void {
    this.client.on('lock', (message: WebSocketMessage<{ documentId: string; duration?: number; reason?: string }>) => {
      const lock: DocumentLock = {
        documentId: message.payload.documentId,
        userId: message.sender.id,
        userName: message.sender.name,
        lockedAt: message.timestamp,
        expiresAt: message.timestamp + (message.payload.duration || this.DEFAULT_LOCK_DURATION),
        reason: message.payload.reason,
      };
      this.locks.set(lock.documentId, lock);
      this.client.emit('lock_update', { action: 'lock', lock });
    });

    this.client.on('unlock', (message: WebSocketMessage<{ documentId: string }>) => {
      const lock = this.locks.get(message.payload.documentId);
      if (lock) {
        this.locks.delete(message.payload.documentId);
        this.client.emit('lock_update', { action: 'unlock', lock });
      }
    });
  }

  acquireLock(documentId: string, duration?: number, reason?: string): boolean {
    const existingLock = this.locks.get(documentId);
    
    if (existingLock && Date.now() < existingLock.expiresAt) {
      return false;
    }

    this.client.send('lock', this.channel, {
      documentId,
      duration: duration || this.DEFAULT_LOCK_DURATION,
      reason,
    });
    
    return true;
  }

  releaseLock(documentId: string): void {
    this.client.send('unlock', this.channel, { documentId });
  }

  isLocked(documentId: string): boolean {
    const lock = this.locks.get(documentId);
    return lock !== undefined && Date.now() < lock.expiresAt;
  }

  getLock(documentId: string): DocumentLock | undefined {
    const lock = this.locks.get(documentId);
    if (lock && Date.now() >= lock.expiresAt) {
      this.locks.delete(documentId);
      return undefined;
    }
    return lock;
  }

  getAllLocks(): DocumentLock[] {
    const now = Date.now();
    const activeLocks: DocumentLock[] = [];
    
    this.locks.forEach((lock, documentId) => {
      if (now < lock.expiresAt) {
        activeLocks.push(lock);
      } else {
        this.locks.delete(documentId);
      }
    });
    
    return activeLocks;
  }
}

// ============================================================================
// React Hooks
// ============================================================================

import { useState, useEffect, useCallback, useRef, useMemo, createContext, useContext } from 'react';

// Context for WebSocket client
interface WebSocketContextValue {
  client: WebSocketClient | null;
  status: ConnectionStatus;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const WebSocketContext = createContext<WebSocketContextValue>({
  client: null,
  status: 'disconnected',
  connect: async () => {},
  disconnect: () => {},
});

export function useWebSocketContext(): WebSocketContextValue {
  return useContext(WebSocketContext);
}

// Hook: Connection status
export function useConnectionStatus(client: WebSocketClient | null): ConnectionStatus {
  const [status, setStatus] = useState<ConnectionStatus>('disconnected');

  useEffect(() => {
    if (!client) return;

    const cleanup = client.on('status', ({ status }: { status: ConnectionStatus }) => {
      setStatus(status);
    });

    setStatus(client.getStatus());

    return cleanup;
  }, [client]);

  return status;
}

// Hook: Channel subscription
export function useChannel<T = unknown>(
  client: WebSocketClient | null,
  channel: string,
  onMessage?: (message: WebSocketMessage<T>) => void
): {
  send: (type: MessageType, payload: T) => void;
  isSubscribed: boolean;
} {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (!client || !channel) return;

    client.subscribe(channel);
    setIsSubscribed(true);

    let cleanup: (() => void) | undefined;
    if (onMessage) {
      cleanup = client.on(`channel:${channel}`, onMessage as EventListener<WebSocketMessage<T>>);
    }

    return () => {
      cleanup?.();
      client.unsubscribe(channel);
      setIsSubscribed(false);
    };
  }, [client, channel, onMessage]);

  const send = useCallback((type: MessageType, payload: T) => {
    client?.send(type, channel, payload);
  }, [client, channel]);

  return { send, isSubscribed };
}

// Hook: Presence
export function usePresence(
  client: WebSocketClient | null,
  channel: string
): {
  users: PresenceUser[];
  setStatus: (status: PresencePayload['status']) => void;
  setDocument: (documentId: string) => void;
} {
  const [users, setUsers] = useState<PresenceUser[]>([]);
  const presenceRef = useRef<PresenceManager | null>(null);

  useEffect(() => {
    if (!client || !channel) return;

    presenceRef.current = new PresenceManager(client, channel);
    
    const cleanup = client.on('presence_update', (updatedUsers: PresenceUser[]) => {
      setUsers(updatedUsers);
    });

    return () => {
      cleanup();
      presenceRef.current?.cleanup();
    };
  }, [client, channel]);

  const setStatus = useCallback((status: PresencePayload['status']) => {
    presenceRef.current?.setStatus(status);
  }, []);

  const setDocument = useCallback((documentId: string) => {
    presenceRef.current?.setDocument(documentId);
  }, []);

  return { users, setStatus, setDocument };
}

// Hook: Remote cursors
export function useRemoteCursors(
  client: WebSocketClient | null,
  channel: string,
  documentId: string
): {
  cursors: RemoteCursor[];
  updateCursor: (x: number, y: number, selection?: { start: number; end: number }) => void;
} {
  const [cursors, setCursors] = useState<RemoteCursor[]>([]);
  const cursorSyncRef = useRef<CursorSync | null>(null);

  useEffect(() => {
    if (!client || !channel) return;

    cursorSyncRef.current = new CursorSync(client, channel);
    
    const cleanup = client.on('cursor_update', (allCursors: RemoteCursor[]) => {
      setCursors(allCursors.filter(c => c.documentId === documentId));
    });

    return () => {
      cleanup();
      cursorSyncRef.current?.cleanup();
    };
  }, [client, channel, documentId]);

  const updateCursor = useCallback((x: number, y: number, selection?: { start: number; end: number }) => {
    cursorSyncRef.current?.updateCursor(x, y, documentId, selection);
  }, [documentId]);

  return { cursors, updateCursor };
}

// Hook: Document locking
export function useDocumentLock(
  client: WebSocketClient | null,
  channel: string,
  documentId: string
): {
  lock: DocumentLock | undefined;
  isLocked: boolean;
  isLockedByMe: boolean;
  acquire: (duration?: number, reason?: string) => boolean;
  release: () => void;
} {
  const [lock, setLock] = useState<DocumentLock | undefined>();
  const lockManagerRef = useRef<LockManager | null>(null);
  const userIdRef = useRef<string>('');

  useEffect(() => {
    if (!client || !channel) return;

    lockManagerRef.current = new LockManager(client, channel);
    
    const cleanup = client.on('lock_update', () => {
      setLock(lockManagerRef.current?.getLock(documentId));
    });

    return cleanup;
  }, [client, channel, documentId]);

  const acquire = useCallback((duration?: number, reason?: string) => {
    return lockManagerRef.current?.acquireLock(documentId, duration, reason) ?? false;
  }, [documentId]);

  const release = useCallback(() => {
    lockManagerRef.current?.releaseLock(documentId);
  }, [documentId]);

  const isLocked = lock !== undefined;
  const isLockedByMe = lock?.userId === userIdRef.current;

  return { lock, isLocked, isLockedByMe, acquire, release };
}

// ============================================================================
// Connection Status Component
// ============================================================================

import React from 'react';
import { Wifi, WifiOff, RefreshCw, AlertCircle } from 'lucide-react';

interface ConnectionStatusIndicatorProps {
  status: ConnectionStatus;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onReconnect?: () => void;
}

export function ConnectionStatusIndicator({
  status,
  showLabel = true,
  size = 'md',
  onReconnect,
}: ConnectionStatusIndicatorProps): React.ReactElement {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const iconSize = sizeClasses[size];

  const statusConfig: Record<ConnectionStatus, { icon: React.ReactNode; color: string; label: string }> = {
    connected: {
      icon: <Wifi className={iconSize} />,
      color: 'text-emerald-500',
      label: 'Connected',
    },
    connecting: {
      icon: <RefreshCw className={`${iconSize} animate-spin`} />,
      color: 'text-yellow-500',
      label: 'Connecting...',
    },
    reconnecting: {
      icon: <RefreshCw className={`${iconSize} animate-spin`} />,
      color: 'text-orange-500',
      label: 'Reconnecting...',
    },
    disconnected: {
      icon: <WifiOff className={iconSize} />,
      color: 'text-zinc-500',
      label: 'Disconnected',
    },
    error: {
      icon: <AlertCircle className={iconSize} />,
      color: 'text-blood-500',
      label: 'Connection Error',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <span className={config.color}>{config.icon}</span>
      {showLabel && (
        <span className={`text-sm ${config.color}`}>{config.label}</span>
      )}
      {(status === 'disconnected' || status === 'error') && onReconnect && (
        <button
          onClick={onReconnect}
          className="text-xs text-blood-400 hover:text-blood-300 underline"
        >
          Reconnect
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Factory Function
// ============================================================================

export function createWebSocketClient(
  url: string,
  userId: string,
  userName: string,
  options?: Partial<WebSocketConfig>
): WebSocketClient {
  return new WebSocketClient(
    { url, ...options },
    userId,
    userName
  );
}

// Default export
export default WebSocketClient;
