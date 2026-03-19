/**
 * Testing Utilities
 * Test helpers, mocks, and fixtures for ArkHive
 */

import React, { ReactElement } from 'react';

// ============================================================================
// Types
// ============================================================================

export interface MockInvestigation {
  id: string;
  slug: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'active' | 'ongoing' | 'resolved' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  entityCount: number;
  evidenceCount: number;
}

export interface MockEntity {
  id: string;
  slug: string;
  name: string;
  type: 'agency' | 'corporation' | 'individual' | 'organization';
  description: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  connectionCount: number;
}

export interface MockEvidence {
  id: string;
  title: string;
  type: 'document' | 'image' | 'video' | 'audio' | 'link' | 'other';
  status: 'pending' | 'verified' | 'disputed' | 'rejected';
  confidenceScore: number;
  sourceUrl?: string;
  uploadedAt: Date;
}

export interface MockWorkspace {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  evidenceCount: number;
  visibility: 'public' | 'private' | 'restricted';
  createdAt: Date;
}

export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'editor' | 'viewer';
  status: 'online' | 'away' | 'offline';
}

// ============================================================================
// Mock Data Generators
// ============================================================================

let idCounter = 0;
const generateId = (prefix = 'mock'): string => `${prefix}_${++idCounter}_${Date.now()}`;

export function createMockInvestigation(overrides: Partial<MockInvestigation> = {}): MockInvestigation {
  const id = generateId('inv');
  return {
    id,
    slug: `investigation-${id}`,
    title: 'Test Investigation',
    description: 'A test investigation for unit testing purposes.',
    severity: 'medium',
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['test', 'mock'],
    entityCount: 5,
    evidenceCount: 10,
    ...overrides,
  };
}

export function createMockEntity(overrides: Partial<MockEntity> = {}): MockEntity {
  const id = generateId('ent');
  return {
    id,
    slug: `entity-${id}`,
    name: 'Test Entity',
    type: 'organization',
    description: 'A test entity for unit testing purposes.',
    riskLevel: 'medium',
    connectionCount: 3,
    ...overrides,
  };
}

export function createMockEvidence(overrides: Partial<MockEvidence> = {}): MockEvidence {
  const id = generateId('evd');
  return {
    id,
    title: 'Test Evidence',
    type: 'document',
    status: 'pending',
    confidenceScore: 75,
    uploadedAt: new Date(),
    ...overrides,
  };
}

export function createMockWorkspace(overrides: Partial<MockWorkspace> = {}): MockWorkspace {
  const id = generateId('wsp');
  return {
    id,
    name: 'Test Workspace',
    description: 'A test workspace for unit testing.',
    memberCount: 3,
    evidenceCount: 15,
    visibility: 'private',
    createdAt: new Date(),
    ...overrides,
  };
}

export function createMockUser(overrides: Partial<MockUser> = {}): MockUser {
  const id = generateId('usr');
  return {
    id,
    name: 'Test User',
    email: 'test@example.com',
    role: 'viewer',
    status: 'online',
    ...overrides,
  };
}

// Bulk generators
export function createMockInvestigations(count: number, overrides: Partial<MockInvestigation> = {}): MockInvestigation[] {
  return Array.from({ length: count }, (_, i) =>
    createMockInvestigation({ title: `Investigation ${i + 1}`, ...overrides })
  );
}

export function createMockEntities(count: number, overrides: Partial<MockEntity> = {}): MockEntity[] {
  return Array.from({ length: count }, (_, i) =>
    createMockEntity({ name: `Entity ${i + 1}`, ...overrides })
  );
}

export function createMockEvidenceList(count: number, overrides: Partial<MockEvidence> = {}): MockEvidence[] {
  return Array.from({ length: count }, (_, i) =>
    createMockEvidence({ title: `Evidence ${i + 1}`, ...overrides })
  );
}

// ============================================================================
// Test Fixtures
// ============================================================================

export const fixtures = {
  investigations: {
    critical: createMockInvestigation({
      severity: 'critical',
      title: 'Critical Security Breach',
      status: 'active',
    }),
    resolved: createMockInvestigation({
      severity: 'low',
      title: 'Resolved Incident',
      status: 'resolved',
    }),
    complex: createMockInvestigation({
      severity: 'high',
      entityCount: 50,
      evidenceCount: 200,
      tags: ['regulatory', 'financial', 'government'],
    }),
  },
  entities: {
    agency: createMockEntity({
      type: 'agency',
      name: 'Federal Agency',
      riskLevel: 'high',
    }),
    corporation: createMockEntity({
      type: 'corporation',
      name: 'Mega Corp Inc.',
      riskLevel: 'critical',
    }),
    individual: createMockEntity({
      type: 'individual',
      name: 'John Doe',
      riskLevel: 'medium',
    }),
  },
  users: {
    admin: createMockUser({ role: 'admin', name: 'Admin User' }),
    editor: createMockUser({ role: 'editor', name: 'Editor User' }),
    viewer: createMockUser({ role: 'viewer', name: 'Viewer User' }),
  },
};

// ============================================================================
// Mock Functions
// ============================================================================

export interface MockFn<T extends (...args: unknown[]) => unknown> {
  (...args: Parameters<T>): ReturnType<T>;
  calls: Array<Parameters<T>>;
  callCount: number;
  lastCall: Parameters<T> | undefined;
  mockImplementation: (fn: T) => void;
  mockReturnValue: (value: ReturnType<T>) => void;
  mockResolvedValue: (value: Awaited<ReturnType<T>>) => void;
  mockRejectedValue: (error: Error) => void;
  mockClear: () => void;
  mockReset: () => void;
}

export function createMockFn<T extends (...args: unknown[]) => unknown>(
  initialImpl?: T
): MockFn<T> {
  let implementation = initialImpl;
  let returnValue: ReturnType<T> | undefined;
  let resolvedValue: Awaited<ReturnType<T>> | undefined;
  let rejectedError: Error | undefined;
  const calls: Array<Parameters<T>> = [];

  const mockFn = ((...args: Parameters<T>): ReturnType<T> => {
    calls.push(args);

    if (rejectedError) {
      return Promise.reject(rejectedError) as ReturnType<T>;
    }
    if (resolvedValue !== undefined) {
      return Promise.resolve(resolvedValue) as ReturnType<T>;
    }
    if (returnValue !== undefined) {
      return returnValue;
    }
    if (implementation) {
      return implementation(...args);
    }
    return undefined as ReturnType<T>;
  }) as MockFn<T>;

  Object.defineProperty(mockFn, 'calls', { get: () => calls });
  Object.defineProperty(mockFn, 'callCount', { get: () => calls.length });
  Object.defineProperty(mockFn, 'lastCall', { get: () => calls[calls.length - 1] });

  mockFn.mockImplementation = (fn: T) => {
    implementation = fn;
  };

  mockFn.mockReturnValue = (value: ReturnType<T>) => {
    returnValue = value;
  };

  mockFn.mockResolvedValue = (value: Awaited<ReturnType<T>>) => {
    resolvedValue = value;
  };

  mockFn.mockRejectedValue = (error: Error) => {
    rejectedError = error;
  };

  mockFn.mockClear = () => {
    calls.length = 0;
  };

  mockFn.mockReset = () => {
    calls.length = 0;
    implementation = initialImpl;
    returnValue = undefined;
    resolvedValue = undefined;
    rejectedError = undefined;
  };

  return mockFn;
}

// ============================================================================
// Async Utilities
// ============================================================================

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  options: { timeout?: number; interval?: number } = {}
): Promise<void> {
  const { timeout = 5000, interval = 50 } = options;
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    if (await condition()) {
      return;
    }
    await wait(interval);
  }

  throw new Error(`waitFor timed out after ${timeout}ms`);
}

export async function flushPromises(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 0));
}

// ============================================================================
// Event Utilities
// ============================================================================

export function createEvent<T extends Event>(
  type: string,
  options: Partial<T> = {}
): T {
  return new Event(type, options) as T;
}

export function createMouseEvent(
  type: string,
  options: Partial<MouseEventInit> = {}
): MouseEvent {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

export function createKeyboardEvent(
  type: string,
  options: Partial<KeyboardEventInit> = {}
): KeyboardEvent {
  return new KeyboardEvent(type, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

export function fireEvent(element: Element, event: Event): boolean {
  return element.dispatchEvent(event);
}

// ============================================================================
// DOM Utilities
// ============================================================================

export function querySelector<T extends Element = Element>(
  selector: string,
  container: ParentNode = document
): T | null {
  return container.querySelector<T>(selector);
}

export function querySelectorAll<T extends Element = Element>(
  selector: string,
  container: ParentNode = document
): T[] {
  return Array.from(container.querySelectorAll<T>(selector));
}

export function getByText(
  text: string | RegExp,
  container: ParentNode = document
): Element | null {
  const elements = querySelectorAll('*', container);
  return elements.find(el => {
    const content = el.textContent || '';
    return typeof text === 'string' ? content.includes(text) : text.test(content);
  }) || null;
}

export function getByTestId(
  testId: string,
  container: ParentNode = document
): Element | null {
  return querySelector(`[data-testid="${testId}"]`, container);
}

export function getByRole(
  role: string,
  container: ParentNode = document
): Element | null {
  return querySelector(`[role="${role}"]`, container);
}

// ============================================================================
// Mock Storage
// ============================================================================

export function createMockStorage(): Storage {
  const store: Record<string, string> = {};

  return {
    get length() {
      return Object.keys(store).length;
    },
    key(index: number) {
      return Object.keys(store)[index] || null;
    },
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      Object.keys(store).forEach(key => delete store[key]);
    },
  };
}

// ============================================================================
// Mock Fetch
// ============================================================================

export interface MockFetchResponse {
  status?: number;
  ok?: boolean;
  json?: () => Promise<unknown>;
  text?: () => Promise<string>;
  headers?: Headers;
}

export function createMockFetch(
  responses: Map<string, MockFetchResponse> = new Map()
): typeof fetch {
  return async (input: RequestInfo | URL): Promise<Response> => {
    const url = typeof input === 'string' ? input : input.toString();
    const mockResponse = responses.get(url);

    if (!mockResponse) {
      return new Response(null, { status: 404 });
    }

    return {
      ok: mockResponse.ok ?? true,
      status: mockResponse.status ?? 200,
      json: mockResponse.json ?? (() => Promise.resolve({})),
      text: mockResponse.text ?? (() => Promise.resolve('')),
      headers: mockResponse.headers ?? new Headers(),
      clone: () => ({ ...mockResponse }) as Response,
    } as Response;
  };
}

// ============================================================================
// Mock WebSocket
// ============================================================================

export class MockWebSocket {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;

  readyState = MockWebSocket.CONNECTING;
  url: string;
  onopen: ((event: Event) => void) | null = null;
  onclose: ((event: CloseEvent) => void) | null = null;
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;

  private sentMessages: string[] = [];

  constructor(url: string) {
    this.url = url;
    setTimeout(() => this.simulateOpen(), 0);
  }

  simulateOpen(): void {
    this.readyState = MockWebSocket.OPEN;
    this.onopen?.(new Event('open'));
  }

  simulateMessage(data: unknown): void {
    const event = new MessageEvent('message', {
      data: typeof data === 'string' ? data : JSON.stringify(data),
    });
    this.onmessage?.(event);
  }

  simulateError(): void {
    this.onerror?.(new Event('error'));
  }

  simulateClose(code = 1000, reason = ''): void {
    this.readyState = MockWebSocket.CLOSED;
    const event = new CloseEvent('close', { code, reason });
    this.onclose?.(event);
  }

  send(data: string): void {
    this.sentMessages.push(data);
  }

  close(): void {
    this.readyState = MockWebSocket.CLOSING;
    this.simulateClose();
  }

  getSentMessages(): string[] {
    return this.sentMessages;
  }

  clearSentMessages(): void {
    this.sentMessages = [];
  }
}

// ============================================================================
// Test Wrapper Component
// ============================================================================

interface TestWrapperProps {
  children: React.ReactNode;
}

export function TestWrapper({ children }: TestWrapperProps): ReactElement {
  return (
    <div data-testid="test-wrapper">
      {children}
    </div>
  );
}

// ============================================================================
// Assertion Helpers
// ============================================================================

export function assertDefined<T>(value: T | undefined | null, message?: string): asserts value is T {
  if (value === undefined || value === null) {
    throw new Error(message || 'Expected value to be defined');
  }
}

export function assertType<T>(value: unknown, typeName: string): asserts value is T {
  if (typeof value !== typeName) {
    throw new Error(`Expected ${typeName}, got ${typeof value}`);
  }
}

export function assertArrayLength<T>(arr: T[], length: number): void {
  if (arr.length !== length) {
    throw new Error(`Expected array length ${length}, got ${arr.length}`);
  }
}

export function assertContains(text: string, substring: string): void {
  if (!text.includes(substring)) {
    throw new Error(`Expected "${text}" to contain "${substring}"`);
  }
}

export function assertMatches(text: string, pattern: RegExp): void {
  if (!pattern.test(text)) {
    throw new Error(`Expected "${text}" to match ${pattern}`);
  }
}

// ============================================================================
// Snapshot Helpers
// ============================================================================

export function toJSON(element: Element): object {
  const obj: Record<string, unknown> = {
    tagName: element.tagName.toLowerCase(),
    attributes: {},
    children: [],
  };

  Array.from(element.attributes).forEach(attr => {
    (obj.attributes as Record<string, string>)[attr.name] = attr.value;
  });

  Array.from(element.children).forEach(child => {
    (obj.children as object[]).push(toJSON(child));
  });

  if (element.children.length === 0 && element.textContent) {
    obj.text = element.textContent.trim();
  }

  return obj;
}

export function toSnapshot(element: Element): string {
  return JSON.stringify(toJSON(element), null, 2);
}

// ============================================================================
// Performance Testing
// ============================================================================

export interface BenchmarkResult {
  name: string;
  iterations: number;
  totalTime: number;
  avgTime: number;
  minTime: number;
  maxTime: number;
  opsPerSecond: number;
}

export async function benchmark(
  name: string,
  fn: () => void | Promise<void>,
  iterations = 1000
): Promise<BenchmarkResult> {
  const times: number[] = [];

  // Warm up
  for (let i = 0; i < 10; i++) {
    await fn();
  }

  // Actual benchmark
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    await fn();
    times.push(performance.now() - start);
  }

  const totalTime = times.reduce((a, b) => a + b, 0);
  const avgTime = totalTime / iterations;
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const opsPerSecond = 1000 / avgTime;

  return {
    name,
    iterations,
    totalTime,
    avgTime,
    minTime,
    maxTime,
    opsPerSecond,
  };
}

// ============================================================================
// Reset Utilities
// ============================================================================

export function resetIdCounter(): void {
  idCounter = 0;
}

export function resetAll(): void {
  resetIdCounter();
}

// Default export
export default {
  createMockInvestigation,
  createMockEntity,
  createMockEvidence,
  createMockWorkspace,
  createMockUser,
  createMockFn,
  fixtures,
  wait,
  waitFor,
  TestWrapper,
};
