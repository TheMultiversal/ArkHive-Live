'use client';

import { useState, useCallback, useMemo } from 'react';
import type { User } from './useAuth';

// ============================================================
// Types
// ============================================================

export type Permission =
  | 'read:investigations'
  | 'write:investigations'
  | 'delete:investigations'
  | 'read:entities'
  | 'write:entities'
  | 'delete:entities'
  | 'read:documents'
  | 'write:documents'
  | 'delete:documents'
  | 'read:workspaces'
  | 'write:workspaces'
  | 'delete:workspaces'
  | 'manage:members'
  | 'manage:roles'
  | 'admin:settings'
  | 'admin:audit'
  | 'admin:users';

export type Role = 'admin' | 'investigator' | 'analyst' | 'viewer' | 'guest';

export interface RolePermissions {
  [key: string]: Permission[];
}

export interface PermissionCheck {
  permission: Permission;
  granted: boolean;
  reason?: string;
}

export interface UsePermissionsOptions {
  user: User | null;
  customPermissions?: Permission[];
}

export interface UsePermissionsReturn {
  permissions: Permission[];
  role: Role | null;
  can: (permission: Permission) => boolean;
  canAny: (permissions: Permission[]) => boolean;
  canAll: (permissions: Permission[]) => boolean;
  cannot: (permission: Permission) => boolean;
  checkPermission: (permission: Permission) => PermissionCheck;
  isAdmin: boolean;
  isInvestigator: boolean;
  isAnalyst: boolean;
  isViewer: boolean;
  isGuest: boolean;
}

// ============================================================
// Role Permission Mapping
// ============================================================

const ROLE_PERMISSIONS: RolePermissions = {
  admin: [
    'read:investigations',
    'write:investigations',
    'delete:investigations',
    'read:entities',
    'write:entities',
    'delete:entities',
    'read:documents',
    'write:documents',
    'delete:documents',
    'read:workspaces',
    'write:workspaces',
    'delete:workspaces',
    'manage:members',
    'manage:roles',
    'admin:settings',
    'admin:audit',
    'admin:users',
  ],
  investigator: [
    'read:investigations',
    'write:investigations',
    'read:entities',
    'write:entities',
    'read:documents',
    'write:documents',
    'read:workspaces',
    'write:workspaces',
    'manage:members',
  ],
  analyst: [
    'read:investigations',
    'write:investigations',
    'read:entities',
    'read:documents',
    'write:documents',
    'read:workspaces',
  ],
  viewer: [
    'read:investigations',
    'read:entities',
    'read:documents',
    'read:workspaces',
  ],
  guest: [
    'read:investigations',
    'read:entities',
  ],
};

// ============================================================
// Hook Implementation
// ============================================================

export function usePermissions(options: UsePermissionsOptions): UsePermissionsReturn {
  const { user, customPermissions = [] } = options;

  // Calculate all permissions
  const permissions = useMemo<Permission[]>(() => {
    if (!user) return [];

    const rolePermissions = ROLE_PERMISSIONS[user.role] || [];
    const userPermissions = (user.permissions || []) as Permission[];
    
    const allPermissions = new Set([
      ...rolePermissions,
      ...userPermissions,
      ...customPermissions,
    ]);

    return Array.from(allPermissions);
  }, [user, customPermissions]);

  const role = user?.role || null;

  // Check single permission
  const can = useCallback(
    (permission: Permission): boolean => {
      if (!user) return false;
      if (user.role === 'admin') return true;
      return permissions.includes(permission);
    },
    [user, permissions]
  );

  // Check if user has any of the permissions
  const canAny = useCallback(
    (perms: Permission[]): boolean => {
      return perms.some((p) => can(p));
    },
    [can]
  );

  // Check if user has all permissions
  const canAll = useCallback(
    (perms: Permission[]): boolean => {
      return perms.every((p) => can(p));
    },
    [can]
  );

  // Check if user cannot perform action
  const cannot = useCallback(
    (permission: Permission): boolean => {
      return !can(permission);
    },
    [can]
  );

  // Detailed permission check with reason
  const checkPermission = useCallback(
    (permission: Permission): PermissionCheck => {
      if (!user) {
        return {
          permission,
          granted: false,
          reason: 'User not authenticated',
        };
      }

      if (user.role === 'admin') {
        return {
          permission,
          granted: true,
          reason: 'Admin role has all permissions',
        };
      }

      const hasPermission = permissions.includes(permission);
      return {
        permission,
        granted: hasPermission,
        reason: hasPermission
          ? `Permission granted via ${user.role} role`
          : `Permission not included in ${user.role} role`,
      };
    },
    [user, permissions]
  );

  // Role checks
  const isAdmin = role === 'admin';
  const isInvestigator = role === 'investigator';
  const isAnalyst = role === 'analyst';
  const isViewer = role === 'viewer';
  const isGuest = role === 'guest';

  return {
    permissions,
    role,
    can,
    canAny,
    canAll,
    cannot,
    checkPermission,
    isAdmin,
    isInvestigator,
    isAnalyst,
    isViewer,
    isGuest,
  };
}

// ============================================================
// Higher Order Component for Permission Guard
// ============================================================

export function withPermission<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requiredPermission: Permission
) {
  return function PermissionGuard(props: P) {
    // This would need to be used with AuthContext in real implementation
    return <WrappedComponent {...props} />;
  };
}

export default usePermissions;
