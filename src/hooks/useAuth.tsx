'use client';

import { useState, useEffect, useCallback, useMemo, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

// ============================================================
// Types
// ============================================================

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'investigator' | 'analyst' | 'viewer' | 'guest';
  permissions: string[];
  createdAt: Date;
  lastLogin?: Date;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  emailDigest: 'daily' | 'weekly' | 'never';
  twoFactorEnabled: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface UseAuthReturn extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  refreshSession: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: User['role'] | User['role'][]) => boolean;
}

// ============================================================
// Auth Context
// ============================================================

const AuthContext = createContext<UseAuthReturn | null>(null);

// ============================================================
// Mock Auth (replace with real auth in production)
// ============================================================

const MOCK_USER: User = {
  id: 'user_1',
  email: 'investigator@arkhive.io',
  name: 'John Investigator',
  avatar: '/avatars/default.png',
  role: 'investigator',
  permissions: [
    'read:investigations',
    'write:investigations',
    'read:entities',
    'write:entities',
    'read:documents',
    'write:documents',
    'read:workspaces',
    'write:workspaces',
  ],
  createdAt: new Date('2024-01-01'),
  lastLogin: new Date(),
  preferences: {
    theme: 'dark',
    notifications: true,
    emailDigest: 'daily',
    twoFactorEnabled: false,
  },
};

// ============================================================
// Hook Implementation
// ============================================================

export function useAuth(): UseAuthReturn {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Check session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const stored = localStorage.getItem('arkhive_auth');
        if (stored) {
          const parsed = JSON.parse(stored);
          setState({
            user: {
              ...parsed.user,
              createdAt: new Date(parsed.user.createdAt),
              lastLogin: parsed.user.lastLogin ? new Date(parsed.user.lastLogin) : undefined,
            },
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } else {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: error instanceof Error ? error : new Error('Session check failed'),
        });
      }
    };

    checkSession();
  }, []);

  // Login
  const login = useCallback(async (credentials: LoginCredentials) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock validation
      if (credentials.email !== 'demo@arkhive.io' && !credentials.email.includes('@')) {
        throw new Error('Invalid email format');
      }

      const user = { ...MOCK_USER, email: credentials.email };
      
      if (credentials.rememberMe) {
        localStorage.setItem('arkhive_auth', JSON.stringify({ user }));
      } else {
        sessionStorage.setItem('arkhive_auth', JSON.stringify({ user }));
      }

      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error : new Error('Login failed'),
      });
      throw error;
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      localStorage.removeItem('arkhive_auth');
      sessionStorage.removeItem('arkhive_auth');
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error : new Error('Logout failed'),
      }));
    }
  }, []);

  // Register
  const register = useCallback(async (data: RegisterData) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const user: User = {
        ...MOCK_USER,
        id: `user_${Date.now()}`,
        email: data.email,
        name: data.name,
        createdAt: new Date(),
        role: 'viewer',
        permissions: ['read:investigations', 'read:entities'],
      };

      localStorage.setItem('arkhive_auth', JSON.stringify({ user }));
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error : new Error('Registration failed'),
      });
      throw error;
    }
  }, []);

  // Reset password
  const resetPassword = useCallback(async (email: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // In a real app, this would send a password reset email
    // TODO: Implement actual password reset email service
    void email; // Acknowledge parameter until implementation
  }, []);

  // Update profile
  const updateProfile = useCallback(async (data: Partial<User>) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      setState((prev) => {
        const updatedUser = prev.user ? { ...prev.user, ...data } : null;
        if (updatedUser) {
          localStorage.setItem('arkhive_auth', JSON.stringify({ user: updatedUser }));
        }
        return {
          ...prev,
          user: updatedUser,
          isLoading: false,
        };
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error : new Error('Update failed'),
      }));
      throw error;
    }
  }, []);

  // Refresh session
  const refreshSession = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In a real app, this would refresh the auth token
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error : new Error('Session refresh failed'),
      });
    }
  }, []);

  // Check permission
  const hasPermission = useCallback(
    (permission: string) => {
      if (!state.user) return false;
      if (state.user.role === 'admin') return true;
      return state.user.permissions.includes(permission);
    },
    [state.user]
  );

  // Check role
  const hasRole = useCallback(
    (role: User['role'] | User['role'][]) => {
      if (!state.user) return false;
      const roles = Array.isArray(role) ? role : [role];
      return roles.includes(state.user.role);
    },
    [state.user]
  );

  return {
    ...state,
    login,
    logout,
    register,
    resetPassword,
    updateProfile,
    refreshSession,
    hasPermission,
    hasRole,
  };
}

// ============================================================
// Auth Provider Component
// ============================================================

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// ============================================================
// Hook to use Auth Context
// ============================================================

export function useAuthContext(): UseAuthReturn {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}

export default useAuth;
