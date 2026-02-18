'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

// ============================================================
// Types
// ============================================================

export interface GeolocationPosition {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
  timestamp: number;
}

export interface GeolocationError {
  code: number;
  message: string;
}

export interface UseGeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
  watch?: boolean;
}

export interface UseGeolocationReturn {
  position: GeolocationPosition | null;
  error: GeolocationError | null;
  loading: boolean;
  supported: boolean;
  permissionState: PermissionState | null;
  getCurrentPosition: () => void;
  watchPosition: () => void;
  clearWatch: () => void;
}

// ============================================================
// Hook Implementation
// ============================================================

export function useGeolocation(
  options: UseGeolocationOptions = {}
): UseGeolocationReturn {
  const {
    enableHighAccuracy = true,
    timeout = 10000,
    maximumAge = 0,
    watch = false,
  } = options;

  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationError | null>(null);
  const [loading, setLoading] = useState(false);
  const [permissionState, setPermissionState] = useState<PermissionState | null>(null);

  const watchIdRef = useRef<number | null>(null);
  const supported = typeof navigator !== 'undefined' && 'geolocation' in navigator;

  // Convert GeolocationPosition to our interface
  const convertPosition = (pos: globalThis.GeolocationPosition): GeolocationPosition => ({
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
    altitude: pos.coords.altitude,
    accuracy: pos.coords.accuracy,
    altitudeAccuracy: pos.coords.altitudeAccuracy,
    heading: pos.coords.heading,
    speed: pos.coords.speed,
    timestamp: pos.timestamp,
  });

  // Convert GeolocationPositionError to our interface
  const convertError = (err: globalThis.GeolocationPositionError): GeolocationError => ({
    code: err.code,
    message: err.message,
  });

  // Check permission state
  useEffect(() => {
    if (!supported) return;

    navigator.permissions
      ?.query({ name: 'geolocation' })
      .then((result) => {
        setPermissionState(result.state);
        result.addEventListener('change', () => {
          setPermissionState(result.state);
        });
      })
      .catch(() => {
        // Permissions API not supported
      });
  }, [supported]);

  // Get current position
  const getCurrentPosition = useCallback(() => {
    if (!supported) {
      setError({ code: 0, message: 'Geolocation is not supported' });
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(convertPosition(pos));
        setLoading(false);
      },
      (err) => {
        setError(convertError(err));
        setLoading(false);
      },
      { enableHighAccuracy, timeout, maximumAge }
    );
  }, [supported, enableHighAccuracy, timeout, maximumAge]);

  // Watch position
  const watchPosition = useCallback(() => {
    if (!supported) {
      setError({ code: 0, message: 'Geolocation is not supported' });
      return;
    }

    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }

    setLoading(true);
    setError(null);

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition(convertPosition(pos));
        setLoading(false);
      },
      (err) => {
        setError(convertError(err));
        setLoading(false);
      },
      { enableHighAccuracy, timeout, maximumAge }
    );
  }, [supported, enableHighAccuracy, timeout, maximumAge]);

  // Clear watch
  const clearWatch = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  // Auto-watch if enabled
  useEffect(() => {
    if (watch) {
      watchPosition();
    }

    return () => {
      clearWatch();
    };
  }, [watch, watchPosition, clearWatch]);

  return {
    position,
    error,
    loading,
    supported,
    permissionState,
    getCurrentPosition,
    watchPosition,
    clearWatch,
  };
}

// ============================================================
// Helper Functions
// ============================================================

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: 'km' | 'mi' = 'km'
): number {
  const R = unit === 'km' ? 6371 : 3959; // Earth's radius
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function formatCoordinates(
  latitude: number,
  longitude: number,
  format: 'decimal' | 'dms' = 'decimal'
): string {
  if (format === 'decimal') {
    return `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
  }

  const latDir = latitude >= 0 ? 'N' : 'S';
  const lonDir = longitude >= 0 ? 'E' : 'W';
  const lat = Math.abs(latitude);
  const lon = Math.abs(longitude);

  const latDeg = Math.floor(lat);
  const latMin = Math.floor((lat - latDeg) * 60);
  const latSec = ((lat - latDeg) * 60 - latMin) * 60;

  const lonDeg = Math.floor(lon);
  const lonMin = Math.floor((lon - lonDeg) * 60);
  const lonSec = ((lon - lonDeg) * 60 - lonMin) * 60;

  return `${latDeg}°${latMin}'${latSec.toFixed(2)}"${latDir} ${lonDeg}°${lonMin}'${lonSec.toFixed(2)}"${lonDir}`;
}

export default useGeolocation;
