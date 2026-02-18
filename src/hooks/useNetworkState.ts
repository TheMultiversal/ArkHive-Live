/**
 * useNetworkState Hook
 * Tracks network connectivity status
 */

import { useState, useEffect } from 'react';

interface NetworkState {
  /** Whether browser is online */
  online: boolean;
  /** Time since last status change */
  since: Date | null;
  /** Effective connection type (slow-2g, 2g, 3g, 4g) */
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  /** Downlink speed in Mbps */
  downlink?: number;
  /** Estimated round-trip time in ms */
  rtt?: number;
  /** Whether user has data saver enabled */
  saveData?: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
    addEventListener: (type: string, listener: EventListener) => void;
    removeEventListener: (type: string, listener: EventListener) => void;
  };
}

function getNetworkState(): NetworkState {
  const nav = navigator as NavigatorWithConnection;
  const connection = nav.connection;

  return {
    online: navigator.onLine,
    since: null,
    effectiveType: connection?.effectiveType,
    downlink: connection?.downlink,
    rtt: connection?.rtt,
    saveData: connection?.saveData,
  };
}

export function useNetworkState(): NetworkState {
  const [state, setState] = useState<NetworkState>(() => {
    if (typeof navigator === 'undefined') {
      return { online: true, since: null };
    }
    return getNetworkState();
  });

  useEffect(() => {
    const handleOnline = () => {
      setState(prev => ({
        ...getNetworkState(),
        online: true,
        since: prev.online === false ? new Date() : prev.since,
      }));
    };

    const handleOffline = () => {
      setState(prev => ({
        ...getNetworkState(),
        online: false,
        since: prev.online === true ? new Date() : prev.since,
      }));
    };

    const handleConnectionChange = () => {
      setState(prev => ({
        ...getNetworkState(),
        since: prev.since,
      }));
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection;
    connection?.addEventListener('change', handleConnectionChange);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      connection?.removeEventListener('change', handleConnectionChange);
    };
  }, []);

  return state;
}

/**
 * useOnline - Simple online status
 */
export function useOnline(): boolean {
  const { online } = useNetworkState();
  return online;
}

/**
 * useOffline - Simple offline status
 */
export function useOffline(): boolean {
  const { online } = useNetworkState();
  return !online;
}

export default useNetworkState;
