'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Lock, 
  Globe, 
  AlertTriangle,
  ChevronDown,
  Plus,
  X,
  Users
} from 'lucide-react';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { WorkspacePriority, WorkspaceVisibility } from '@/types/workspace';

export default function CreateWorkspacePage() {
  const router = useRouter();
  const { createWorkspace } = useWorkspaceStore();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<WorkspacePriority>('medium');
  const [visibility, setVisibility] = useState<WorkspaceVisibility>('private');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    const newWorkspace = createWorkspace({
      name: name.trim(),
      description: description.trim(),
      investigation: '',
      status: 'active',
      priority,
      visibility,
      createdBy: '1',
      members: [{
        id: '1',
        name: 'You',
        role: 'owner',
        joinedAt: new Date(),
        lastActive: new Date(),
        contributions: 0,
        isOnline: true,
      }],
      tags,
      isPublic: visibility === 'public',
    });

    setTimeout(() => {
      router.push(`/workspaces/${newWorkspace.id}`);
    }, 300);
  };

  const priorityOptions: { value: WorkspacePriority; label: string; description: string }[] = [
    { value: 'critical', label: 'Critical', description: 'Urgent investigation requiring immediate attention' },
    { value: 'high', label: 'High', description: 'Important investigation with significant implications' },
    { value: 'medium', label: 'Medium', description: 'Standard priority investigation' },
    { value: 'low', label: 'Low', description: 'Background research or long-term investigation' },
  ];

  const getPriorityColor = (p: WorkspacePriority) => {
    switch (p) {
      case 'critical': return 'bg-blood-500';
      case 'high': return 'bg-blood-600/80';
      case 'medium': return 'bg-blood-700/60';
      default: return 'bg-white/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] pt-16 lg:pt-20">
      {/* Page Header */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Link 
              href="/workspaces" 
              className="p-1.5 rounded hover:bg-white/[0.03] text-white/25 hover:text-white/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-sm font-medium text-white/70">Create Workspace</h1>
              <p className="text-[10px] text-white/25">Set up a new collaborative investigation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-2">
              Workspace Name <span className="text-blood-500/60">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., FDA Approval Investigation"
              className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-lg text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief overview of the investigation scope and objectives..."
              rows={4}
              className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.06] rounded-lg text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors resize-none"
            />
          </div>

          {/* Priority & Visibility */}
          <div className="grid grid-cols-2 gap-4">
            {/* Priority */}
            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-2">
                Priority
              </label>
              <div className="space-y-1">
                {priorityOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPriority(option.value)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                      priority === option.value 
                        ? 'bg-white/[0.03] border-white/[0.1]' 
                        : 'border-white/[0.04] hover:border-white/[0.06]'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(option.value)}`} />
                    <div>
                      <div className={`text-[11px] font-medium ${priority === option.value ? 'text-white/60' : 'text-white/40'}`}>
                        {option.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-2">
                Visibility
              </label>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setVisibility('private')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                    visibility === 'private' 
                      ? 'bg-white/[0.03] border-white/[0.1]' 
                      : 'border-white/[0.04] hover:border-white/[0.06]'
                  }`}
                >
                  <Lock className={`w-4 h-4 ${visibility === 'private' ? 'text-white/40' : 'text-white/20'}`} />
                  <div>
                    <div className={`text-[11px] font-medium ${visibility === 'private' ? 'text-white/60' : 'text-white/40'}`}>
                      Private
                    </div>
                    <div className="text-[10px] text-white/25">Invite only</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setVisibility('team')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                    visibility === 'team' 
                      ? 'bg-white/[0.03] border-white/[0.1]' 
                      : 'border-white/[0.04] hover:border-white/[0.06]'
                  }`}
                >
                  <Users className={`w-4 h-4 ${visibility === 'team' ? 'text-white/40' : 'text-white/20'}`} />
                  <div>
                    <div className={`text-[11px] font-medium ${visibility === 'team' ? 'text-white/60' : 'text-white/40'}`}>
                      Team
                    </div>
                    <div className="text-[10px] text-white/25">All team members</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setVisibility('public')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                    visibility === 'public' 
                      ? 'bg-white/[0.03] border-white/[0.1]' 
                      : 'border-white/[0.04] hover:border-white/[0.06]'
                  }`}
                >
                  <Globe className={`w-4 h-4 ${visibility === 'public' ? 'text-white/40' : 'text-white/20'}`} />
                  <div>
                    <div className={`text-[11px] font-medium ${visibility === 'public' ? 'text-white/60' : 'text-white/40'}`}>
                      Public
                    </div>
                    <div className="text-[10px] text-white/25">Anyone can view</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-widest mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-1 bg-white/[0.03] rounded text-[10px] text-white/40"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-white/20 hover:text-white/40 transition-colors"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                placeholder="Add tags..."
                className="flex-1 px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 py-2 bg-white/[0.03] text-white/40 rounded text-[11px] hover:bg-white/[0.05] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4 border-t border-white/[0.04]">
            <Link
              href="/workspaces"
              className="flex-1 px-4 py-3 bg-white/[0.02] text-white/40 rounded-lg text-[11px] font-medium text-center hover:bg-white/[0.04] transition-colors"
            >
              Cancel
            </Link>
            <motion.button
              type="submit"
              disabled={!name.trim() || isSubmitting}
              className="flex-1 px-4 py-3 bg-blood-600/30 text-blood-400/80 rounded-lg text-[11px] font-medium hover:bg-blood-600/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Creating...' : 'Create Workspace'}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
