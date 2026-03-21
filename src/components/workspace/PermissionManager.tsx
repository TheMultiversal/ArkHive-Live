"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Unlock,
  Eye,
  Edit,
  Trash2,
  Users,
  User,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  AlertTriangle,
  Settings,
  Key,
  Plus,
  Copy,
  ExternalLink,
  Search,
  Crown,
  UserPlus,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type Permission =
  | "view"
  | "comment"
  | "edit"
  | "delete"
  | "manage"
  | "admin";

export type ResourceType =
  | "workspace"
  | "investigation"
  | "evidence"
  | "document"
  | "annotation";

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  isSystem: boolean;
  color: string;
}

export interface MemberPermission {
  userId: string;
  userName: string;
  userEmail: string;
  userAvatar?: string;
  roleId: string;
  customPermissions?: Permission[];
  invitedAt: Date;
  invitedBy: string;
  acceptedAt?: Date;
}

export interface AccessLink {
  id: string;
  token: string;
  roleId: string;
  expiresAt?: Date;
  maxUses?: number;
  usedCount: number;
  createdAt: Date;
  createdBy: string;
  active: boolean;
}

// ============================================================================
// DEFAULT ROLES
// ============================================================================

export const DEFAULT_ROLES: Role[] = [
  {
    id: "owner",
    name: "Owner",
    description: "Full control over the workspace",
    permissions: ["view", "comment", "edit", "delete", "manage", "admin"],
    isSystem: true,
    color: "#6b6b6b",
  },
  {
    id: "admin",
    name: "Administrator",
    description: "Can manage members and settings",
    permissions: ["view", "comment", "edit", "delete", "manage"],
    isSystem: true,
    color: "#f59e0b",
  },
  {
    id: "editor",
    name: "Editor",
    description: "Can edit and add content",
    permissions: ["view", "comment", "edit"],
    isSystem: true,
    color: "#22c55e",
  },
  {
    id: "commenter",
    name: "Commenter",
    description: "Can view and comment only",
    permissions: ["view", "comment"],
    isSystem: true,
    color: "#3b82f6",
  },
  {
    id: "viewer",
    name: "Viewer",
    description: "Can only view content",
    permissions: ["view"],
    isSystem: true,
    color: "#71717a",
  },
];

// ============================================================================
// UTILITIES
// ============================================================================

const permissionLabels: Record<Permission, string> = {
  view: "View",
  comment: "Comment",
  edit: "Edit",
  delete: "Delete",
  manage: "Manage Members",
  admin: "Full Admin",
};

const permissionDescriptions: Record<Permission, string> = {
  view: "Can view content and files",
  comment: "Can add comments and annotations",
  edit: "Can edit and create content",
  delete: "Can delete content",
  manage: "Can invite/remove members and change roles",
  admin: "Full control including settings and billing",
};

const permissionIcons: Record<Permission, React.ReactNode> = {
  view: <Eye className="w-4 h-4" />,
  comment: <Edit className="w-4 h-4" />,
  edit: <Edit className="w-4 h-4" />,
  delete: <Trash2 className="w-4 h-4" />,
  manage: <Users className="w-4 h-4" />,
  admin: <Crown className="w-4 h-4" />,
};

export function hasPermission(
  member: MemberPermission,
  roles: Role[],
  permission: Permission
): boolean {
  const role = roles.find((r) => r.id === member.roleId);
  if (!role) return false;

  // Check custom permissions first
  if (member.customPermissions) {
    return member.customPermissions.includes(permission);
  }

  return role.permissions.includes(permission);
}

// ============================================================================
// PERMISSION BADGE
// ============================================================================

interface PermissionBadgeProps {
  permission: Permission;
  className?: string;
}

export function PermissionBadge({
  permission,
  className = "",
}: PermissionBadgeProps) {
  const colors: Record<Permission, string> = {
    view: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
    comment: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    edit: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    delete: "bg-red-500/20 text-red-400 border-red-500/30",
    manage: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    admin: "bg-zinc-500/20 text-zinc-400 border-zinc-600/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border text-xs ${colors[permission]} ${className}`}
    >
      {permissionIcons[permission]}
      {permissionLabels[permission]}
    </span>
  );
}

// ============================================================================
// ROLE BADGE
// ============================================================================

interface RoleBadgeProps {
  role: Role;
  size?: "sm" | "md";
  className?: string;
}

export function RoleBadge({
  role,
  size = "md",
  className = "",
}: RoleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border ${
        size === "sm" ? "px-1.5 py-0.5 text-xs" : "px-2 py-1 text-sm"
      } ${className}`}
      style={{
        backgroundColor: `${role.color}20`,
        borderColor: `${role.color}50`,
        color: role.color,
      }}
    >
      {role.id === "owner" && <Crown className="w-3 h-3" />}
      {role.name}
    </span>
  );
}

// ============================================================================
// ROLE SELECTOR
// ============================================================================

interface RoleSelectorProps {
  roles: Role[];
  selectedRoleId: string;
  onSelect: (roleId: string) => void;
  excludeRoles?: string[];
  className?: string;
}

export function RoleSelector({
  roles,
  selectedRoleId,
  onSelect,
  excludeRoles = [],
  className = "",
}: RoleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const availableRoles = roles.filter((r) => !excludeRoles.includes(r.id));
  const selectedRole = roles.find((r) => r.id === selectedRoleId);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors w-full"
      >
        {selectedRole ? (
          <RoleBadge role={selectedRole} size="sm" />
        ) : (
          <span className="text-zinc-500 text-sm">Select role</span>
        )}
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 ml-auto transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-800 shadow-xl"
          >
            {availableRoles.map((role) => (
              <button
                key={role.id}
                onClick={() => {
                  onSelect(role.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-start gap-3 p-3 hover:bg-zinc-800 transition-colors ${
                  role.id === selectedRoleId ? "bg-zinc-800" : ""
                }`}
              >
                <div
                  className="w-3 h-3 mt-1"
                  style={{ backgroundColor: role.color }}
                />
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{role.name}</span>
                    {role.isSystem && (
                      <span className="text-xs text-zinc-500">System</span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {role.description}
                  </p>
                </div>
                {role.id === selectedRoleId && (
                  <Check className="w-4 h-4 text-emerald-400" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MEMBER PERMISSION ROW
// ============================================================================

interface MemberPermissionRowProps {
  member: MemberPermission;
  roles: Role[];
  currentUserId: string;
  canManage: boolean;
  onRoleChange: (userId: string, roleId: string) => void;
  onRemove: (userId: string) => void;
  className?: string;
}

export function MemberPermissionRow({
  member,
  roles,
  currentUserId,
  canManage,
  onRoleChange,
  onRemove,
  className = "",
}: MemberPermissionRowProps) {
  const role = roles.find((r) => r.id === member.roleId);
  const isCurrentUser = member.userId === currentUserId;
  const isOwner = member.roleId === "owner";

  return (
    <div
      className={`flex items-center gap-4 p-4 border-b border-zinc-800/50 last:border-0 ${className}`}
    >
      {/* Avatar */}
      <div
        className="w-10 h-10 flex items-center justify-center text-sm font-bold text-white"
        style={{ backgroundColor: role?.color || "#71717a" }}
      >
        {member.userAvatar ? (
          <img
            src={member.userAvatar}
            alt={member.userName}
            className="w-full h-full object-cover"
          />
        ) : (
          member.userName.charAt(0).toUpperCase()
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white truncate">
            {member.userName}
          </span>
          {isCurrentUser && (
            <span className="text-xs text-zinc-500">(you)</span>
          )}
          {!member.acceptedAt && (
            <span className="px-1.5 py-0.5 text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Pending
            </span>
          )}
        </div>
        <div className="text-sm text-zinc-500 truncate">{member.userEmail}</div>
      </div>

      {/* Role */}
      <div className="w-48">
        {canManage && !isOwner ? (
          <RoleSelector
            roles={roles}
            selectedRoleId={member.roleId}
            onSelect={(roleId) => onRoleChange(member.userId, roleId)}
            excludeRoles={["owner"]}
          />
        ) : (
          role && <RoleBadge role={role} />
        )}
      </div>

      {/* Actions */}
      {canManage && !isOwner && !isCurrentUser && (
        <button
          onClick={() => onRemove(member.userId)}
          className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
          title="Remove member"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

// ============================================================================
// PERMISSION MATRIX
// ============================================================================

interface PermissionMatrixProps {
  roles: Role[];
  onRoleUpdate?: (roleId: string, permissions: Permission[]) => void;
  editable?: boolean;
  className?: string;
}

export function PermissionMatrix({
  roles,
  onRoleUpdate,
  editable = false,
  className = "",
}: PermissionMatrixProps) {
  const allPermissions: Permission[] = [
    "view",
    "comment",
    "edit",
    "delete",
    "manage",
    "admin",
  ];

  const handleToggle = (role: Role, permission: Permission) => {
    if (!editable || role.isSystem || !onRoleUpdate) return;

    const newPermissions = role.permissions.includes(permission)
      ? role.permissions.filter((p) => p !== permission)
      : [...role.permissions, permission];

    onRoleUpdate(role.id, newPermissions);
  };

  return (
    <div className={`glass-card overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="p-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
                Role
              </th>
              {allPermissions.map((permission) => (
                <th
                  key={permission}
                  className="p-3 text-center text-xs font-medium text-zinc-400 uppercase tracking-wider"
                >
                  <div className="flex flex-col items-center gap-1">
                    {permissionIcons[permission]}
                    <span>{permissionLabels[permission]}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr
                key={role.id}
                className="border-b border-zinc-800/50 last:border-0"
              >
                <td className="p-3">
                  <RoleBadge role={role} />
                </td>
                {allPermissions.map((permission) => {
                  const hasPermission = role.permissions.includes(permission);
                  const canEdit = editable && !role.isSystem;

                  return (
                    <td key={permission} className="p-3 text-center">
                      <button
                        onClick={() => handleToggle(role, permission)}
                        disabled={!canEdit}
                        className={`p-2 transition-colors ${
                          hasPermission
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-zinc-800/50 text-zinc-600"
                        } ${
                          canEdit
                            ? "hover:opacity-80 cursor-pointer"
                            : "cursor-default"
                        }`}
                      >
                        {hasPermission ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <X className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// INVITE MEMBER DIALOG
// ============================================================================

interface InviteMemberDialogProps {
  roles: Role[];
  onInvite: (email: string, roleId: string) => void;
  onClose: () => void;
  className?: string;
}

export function InviteMemberDialog({
  roles,
  onInvite,
  onClose,
  className = "",
}: InviteMemberDialogProps) {
  const [email, setEmail] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState("viewer");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }
    onInvite(email.trim(), selectedRoleId);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card w-full max-w-md mx-4"
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <UserPlus className="w-5 h-5 text-zinc-300" />
            Invite Member
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              placeholder="colleague@example.com"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
            />
            {error && (
              <p className="text-sm text-red-400 mt-1">{error}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-2">Role</label>
            <RoleSelector
              roles={roles}
              selectedRoleId={selectedRoleId}
              onSelect={setSelectedRoleId}
              excludeRoles={["owner"]}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
          >
            Send Invite
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// ACCESS LINK MANAGER
// ============================================================================

interface AccessLinkManagerProps {
  links: AccessLink[];
  roles: Role[];
  onCreateLink: (roleId: string, expiresIn?: number, maxUses?: number) => void;
  onRevokeLink: (linkId: string) => void;
  className?: string;
}

export function AccessLinkManager({
  links,
  roles,
  onCreateLink,
  onRevokeLink,
  className = "",
}: AccessLinkManagerProps) {
  const [showCreate, setShowCreate] = useState(false);
  const [newLinkRole, setNewLinkRole] = useState("viewer");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (link: AccessLink) => {
    const url = `${window.location.origin}/invite/${link.token}`;
    await navigator.clipboard.writeText(url);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className={`glass-card ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <Key className="w-5 h-5 text-zinc-300" />
          Access Links
        </h3>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create Link
        </button>
      </div>

      {/* Create form */}
      <AnimatePresence>
        {showCreate && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-zinc-800"
          >
            <div className="p-4 flex items-end gap-3">
              <div className="flex-1">
                <label className="block text-xs text-zinc-500 mb-1">Role</label>
                <RoleSelector
                  roles={roles}
                  selectedRoleId={newLinkRole}
                  onSelect={setNewLinkRole}
                  excludeRoles={["owner", "admin"]}
                />
              </div>
              <button
                onClick={() => {
                  onCreateLink(newLinkRole);
                  setShowCreate(false);
                }}
                className="px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
              >
                Create
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Links list */}
      <div className="max-h-60 overflow-y-auto">
        {links.length === 0 ? (
          <div className="p-8 text-center text-sm text-zinc-500">
            No access links created
          </div>
        ) : (
          links.map((link) => {
            const role = roles.find((r) => r.id === link.roleId);
            const isExpired = link.expiresAt && new Date() > link.expiresAt;
            const isMaxedOut = link.maxUses && link.usedCount >= link.maxUses;

            return (
              <div
                key={link.id}
                className={`flex items-center gap-3 p-4 border-b border-zinc-800/50 last:border-0 ${
                  !link.active || isExpired || isMaxedOut ? "opacity-50" : ""
                }`}
              >
                <Key className="w-5 h-5 text-zinc-500" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {role && <RoleBadge role={role} size="sm" />}
                    {(!link.active || isExpired || isMaxedOut) && (
                      <span className="px-1.5 py-0.5 text-xs bg-red-500/20 text-red-400">
                        {!link.active
                          ? "Revoked"
                          : isExpired
                          ? "Expired"
                          : "Max Uses"}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1">
                    <span>Used: {link.usedCount}</span>
                    {link.maxUses && <span>Max: {link.maxUses}</span>}
                    {link.expiresAt && (
                      <span>
                        Expires: {link.expiresAt.toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                {link.active && !isExpired && !isMaxedOut && (
                  <>
                    <button
                      onClick={() => copyToClipboard(link)}
                      className="p-2 text-zinc-500 hover:text-white transition-colors"
                      title="Copy link"
                    >
                      {copiedId === link.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => onRevokeLink(link.id)}
                      className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                      title="Revoke link"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
