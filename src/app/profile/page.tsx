'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Mail, Lock, Bell, Shield, Eye, EyeOff,
  Save, Camera, Globe, Clock, Key, Trash2,
  AlertTriangle, CheckCircle, Settings
} from 'lucide-react';

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface SecurityLog {
  id: string;
  action: string;
  device: string;
  location: string;
  time: string;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [profile, setProfile] = useState({
    displayName: 'Anonymous Investigator',
    email: 'anon@proton.me',
    bio: 'Independent researcher focused on corporate accountability.',
    timezone: 'UTC-5',
    pgpPublicKey: ''
  });

  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: '1',
      label: 'Investigation Updates',
      description: 'Get notified when investigations you follow are updated',
      enabled: true
    },
    {
      id: '2',
      label: 'New Documents',
      description: 'Notifications when new documents are added',
      enabled: true
    },
    {
      id: '3',
      label: 'Workspace Activity',
      description: 'Updates from workspaces you belong to',
      enabled: true
    },
    {
      id: '4',
      label: 'Weekly Digest',
      description: 'Weekly summary of important updates',
      enabled: false
    },
    {
      id: '5',
      label: 'Security Alerts',
      description: 'Critical security notifications (recommended)',
      enabled: true
    }
  ]);

  const securityLogs: SecurityLog[] = [
    {
      id: '1',
      action: 'Login successful',
      device: 'Firefox on Windows',
      location: 'Unknown (VPN)',
      time: '2 hours ago'
    },
    {
      id: '2',
      action: 'Password changed',
      device: 'Firefox on Windows',
      location: 'Unknown (VPN)',
      time: '3 days ago'
    },
    {
      id: '3',
      action: 'Login successful',
      device: 'Tor Browser',
      location: 'Unknown (Tor)',
      time: '5 days ago'
    },
    {
      id: '4',
      action: '2FA enabled',
      device: 'Firefox on Windows',
      location: 'Unknown (VPN)',
      time: '1 week ago'
    }
  ];

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const toggleNotification = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, enabled: !n.enabled } : n)
    );
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
          <p className="text-zinc-400">Manage your profile, security, and preferences</p>
        </motion.div>

        {/* Success Toast */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 bg-green-900/90 border border-green-700 p-4 flex items-center gap-3 z-50"
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-200">Settings saved successfully</span>
          </motion.div>
        )}

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex border-b border-zinc-800 mb-8"
        >
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'notifications', label: 'Notifications', icon: Bell }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blood-500 text-blood-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Avatar */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Profile Picture</h3>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-zinc-800 flex items-center justify-center">
                    <User className="w-12 h-12 text-zinc-600" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-blood-500 p-2 text-white hover:bg-blood-600 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-zinc-400">
                  <p>Upload a profile picture (optional)</p>
                  <p className="mt-1">For maximum anonymity, consider using a generated avatar</p>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Display Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                      type="text"
                      value={profile.displayName}
                      onChange={e => setProfile({ ...profile, displayName: e.target.value })}
                      className="w-full bg-zinc-800 border border-zinc-700 text-white pl-10 pr-4 py-2.5 focus:border-blood-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={e => setProfile({ ...profile, email: e.target.value })}
                      className="w-full bg-zinc-800 border border-zinc-700 text-white pl-10 pr-4 py-2.5 focus:border-blood-500 focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    We recommend using a secure email provider (ProtonMail, Tutanota)
                  </p>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Bio</label>
                  <textarea
                    value={profile.bio}
                    onChange={e => setProfile({ ...profile, bio: e.target.value })}
                    rows={3}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Timezone</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <select
                      value={profile.timezone}
                      onChange={e => setProfile({ ...profile, timezone: e.target.value })}
                      className="w-full bg-zinc-800 border border-zinc-700 text-white pl-10 pr-4 py-2.5 focus:border-blood-500 focus:outline-none appearance-none"
                    >
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC">UTC</option>
                      <option value="UTC+1">Central European Time (UTC+1)</option>
                      <option value="UTC+8">China Standard Time (UTC+8)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* PGP Key */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-blood-500" />
                PGP Public Key
              </h3>
              <textarea
                value={profile.pgpPublicKey}
                onChange={e => setProfile({ ...profile, pgpPublicKey: e.target.value })}
                placeholder="Paste your PGP public key here for encrypted communications..."
                rows={4}
                className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none resize-none font-mono text-sm"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 bg-blood-600 hover:bg-blood-700 disabled:bg-blood-800 text-white font-semibold px-6 py-3 transition-colors"
            >
              <Save className="w-5 h-5" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </motion.div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Password */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Current Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full bg-zinc-800 border border-zinc-700 text-white pl-10 pr-12 py-2.5 focus:border-blood-500 focus:outline-none"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none"
                  />
                </div>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            {/* 2FA */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm">
                  Enabled
                </span>
              </div>
              <button className="mt-4 text-blood-400 hover:text-blood-300 text-sm">
                Manage 2FA settings →
              </button>
            </div>

            {/* Active Sessions */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {securityLogs.map(log => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0"
                  >
                    <div>
                      <p className="text-white text-sm">{log.action}</p>
                      <p className="text-zinc-500 text-xs">
                        {log.device} • {log.location}
                      </p>
                    </div>
                    <span className="text-zinc-500 text-xs">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-900/20 border border-red-800/50 p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Danger Zone
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600 text-red-400 px-4 py-2 transition-colors">
                <Trash2 className="w-4 h-4" />
                Delete Account
              </button>
            </div>
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Email Notifications</h3>
              <div className="space-y-4">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0"
                  >
                    <div>
                      <p className="text-white">{notification.label}</p>
                      <p className="text-zinc-500 text-sm">{notification.description}</p>
                    </div>
                    <button
                      onClick={() => toggleNotification(notification.id)}
                      className={`relative w-12 h-6 transition-colors ${
                        notification.enabled ? 'bg-blood-500' : 'bg-zinc-700'
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 bg-white transition-transform ${
                          notification.enabled ? 'left-7' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 bg-blood-600 hover:bg-blood-700 disabled:bg-blood-800 text-white font-semibold px-6 py-3 transition-colors"
            >
              <Save className="w-5 h-5" />
              {isSaving ? 'Saving...' : 'Save Preferences'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
