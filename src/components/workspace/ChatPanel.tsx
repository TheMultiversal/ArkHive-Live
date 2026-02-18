'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Paperclip, 
  Pin, 
  Reply, 
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { WorkspaceMessage, WorkspaceMember } from '@/types/workspace';
import { useWorkspaceStore } from '@/store/workspaceStore';

interface ChatPanelProps {
  workspaceId: string;
  messages: WorkspaceMessage[];
  members: WorkspaceMember[];
  currentUserId?: string;
}

export default function ChatPanel({ workspaceId, messages, members, currentUserId = '1' }: ChatPanelProps) {
  const [newMessage, setNewMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [showPinnedMessages, setShowPinnedMessages] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { addMessage, pinMessage } = useWorkspaceStore();

  const pinnedMessages = messages.filter(m => m.isPinned);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const msgDate = new Date(date);
    
    if (msgDate.toDateString() === today.toDateString()) return 'Today';
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (msgDate.toDateString() === yesterday.toDateString()) return 'Yesterday';
    
    return msgDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const currentMember = members.find(m => m.id === currentUserId);
    
    addMessage(workspaceId, {
      authorId: currentUserId,
      authorName: currentMember?.name || 'Anonymous',
      content: newMessage,
      type: 'text',
      replyTo: replyingTo || undefined,
    });

    setNewMessage('');
    setReplyingTo(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getReplyMessage = (messageId: string) => {
    return messages.find(m => m.id === messageId);
  };

  const groupedMessages = messages.reduce((groups, message) => {
    const date = formatDate(message.timestamp);
    if (!groups[date]) groups[date] = [];
    groups[date].push(message);
    return groups;
  }, {} as Record<string, WorkspaceMessage[]>);

  return (
    <div className="flex flex-col h-full bg-[#050505]">
      {/* Pinned Banner */}
      {pinnedMessages.length > 0 && (
        <button 
          className="w-full bg-blood-950/30 border-b border-blood-900/20 px-4 py-2 cursor-pointer hover:bg-blood-950/40 transition-colors text-left"
          onClick={() => setShowPinnedMessages(!showPinnedMessages)}
          aria-expanded={showPinnedMessages}
          aria-label={`${pinnedMessages.length} pinned messages. Click to ${showPinnedMessages ? 'hide' : 'show'}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-blood-400/80">
              <Pin className="w-3 h-3" aria-hidden="true" />
              <span>{pinnedMessages.length} pinned</span>
            </div>
            <ChevronDown className={`w-3 h-3 text-blood-400/60 transition-transform ${showPinnedMessages ? 'rotate-180' : ''}`} aria-hidden="true" />
          </div>
          
          <AnimatePresence>
            {showPinnedMessages && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-2 space-y-1 overflow-hidden"
                role="list"
                aria-label="Pinned messages"
              >
                {pinnedMessages.map(msg => (
                  <div key={msg.id} className="bg-black/30 rounded px-2 py-1.5 text-xs" role="listitem">
                    <span className="text-white/50">{msg.authorName}: </span>
                    <span className="text-white/70">{msg.content}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      )}

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-4"
        role="log"
        aria-label="Chat messages"
        aria-live="polite"
      >
        {Object.entries(groupedMessages).map(([date, msgs]) => (
          <div key={date}>
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/[0.04]" />
              <span className="text-[10px] text-white/20 uppercase tracking-widest">{date}</span>
              <div className="flex-1 h-px bg-white/[0.04]" />
            </div>

            <div className="space-y-2">
              {msgs.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.015 }}
                  className={`group ${message.type === 'system' ? 'flex justify-center' : ''}`}
                >
                  {message.type === 'system' ? (
                    <div className="px-3 py-1.5 bg-white/[0.02] rounded text-[11px] text-white/30 italic">
                      {message.content}
                    </div>
                  ) : (
                    <div className="flex gap-2.5 py-1 px-2 -mx-2 rounded hover:bg-white/[0.015] transition-colors">
                      <div className="flex-shrink-0 pt-0.5">
                        <div className="w-7 h-7 rounded-full bg-blood-900/50 flex items-center justify-center text-[10px] font-medium text-white/50">
                          {message.authorName.charAt(0)}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        {message.replyTo && (
                          <div className="flex items-center gap-1.5 mb-1 pl-2 border-l border-white/[0.08]">
                            <Reply className="w-2.5 h-2.5 text-white/20" />
                            <span className="text-[10px] text-white/25 truncate">
                              {getReplyMessage(message.replyTo)?.content.slice(0, 40)}...
                            </span>
                          </div>
                        )}

                        <div className="flex items-baseline gap-2 mb-0.5">
                          <span className="text-[12px] font-medium text-white/70">{message.authorName}</span>
                          <span className="text-[10px] text-white/20">{formatTime(message.timestamp)}</span>
                          {message.isPinned && <Pin className="w-2.5 h-2.5 text-blood-500/60" />}
                        </div>

                        <p className="text-[13px] text-white/55 leading-relaxed">{message.content}</p>
                      </div>

                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-start gap-0.5 pt-1">
                        <button 
                          className="p-1 hover:bg-white/[0.05] rounded text-white/20 hover:text-white/40 transition-colors"
                          onClick={() => setReplyingTo(message.id)}
                          aria-label={`Reply to ${message.authorName}'s message`}
                        >
                          <Reply className="w-3 h-3" aria-hidden="true" />
                        </button>
                        <button 
                          className="p-1 hover:bg-white/[0.05] rounded text-white/20 hover:text-blood-400/60 transition-colors"
                          onClick={() => pinMessage(workspaceId, message.id)}
                          aria-label={`${message.isPinned ? 'Unpin' : 'Pin'} message`}
                        >
                          <Pin className="w-3 h-3" aria-hidden="true" />
                        </button>
                        <button 
                          className="p-1 hover:bg-white/[0.05] rounded text-white/20 hover:text-white/40 transition-colors"
                          aria-label="More options"
                        >
                          <MoreHorizontal className="w-3 h-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Reply Preview */}
      <AnimatePresence>
        {replyingTo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 py-2 bg-blood-950/20 border-t border-blood-900/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <Reply className="w-3 h-3 text-white/30" />
                <span className="text-white/30">Replying to </span>
                <span className="text-white/50">{messages.find(m => m.id === replyingTo)?.authorName}</span>
              </div>
              <button 
                onClick={() => setReplyingTo(null)} 
                className="text-white/30 hover:text-white/50 text-sm"
                aria-label="Cancel reply"
              >×</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="p-4 border-t border-white/[0.04]">
        <div className="flex items-end gap-2">
          <div className="flex-1 bg-white/[0.02] border border-white/[0.06] rounded-lg focus-within:border-white/[0.1] transition-colors">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message..."
              aria-label="Type a message"
              className="w-full px-3 py-2.5 bg-transparent text-[13px] text-white/80 placeholder-white/20 focus:outline-none resize-none"
              rows={1}
            />
            <div className="flex items-center px-2 pb-2">
              <button 
                className="p-1.5 hover:bg-white/[0.04] rounded text-white/20 hover:text-white/40 transition-colors"
                aria-label="Attach file"
              >
                <Paperclip className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            aria-label="Send message"
            className="p-2.5 bg-blood-600/80 text-white/90 rounded-lg hover:bg-blood-500/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
