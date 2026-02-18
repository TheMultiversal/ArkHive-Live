'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Link,
  Image,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Eye,
  Edit3,
  Columns,
  Upload,
  Table,
  Minus,
  CheckSquare,
  HelpCircle,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  readOnly?: boolean;
  showToolbar?: boolean;
  showPreview?: boolean;
  enableImageUpload?: boolean;
  onImageUpload?: (file: File) => Promise<string>;
  className?: string;
}

type ViewMode = 'edit' | 'preview' | 'split';

interface ToolbarButton {
  id: string;
  icon: typeof Bold;
  label: string;
  action: (text: string, selection: { start: number; end: number }) => { text: string; cursor: number };
  shortcut?: string;
}

// ============================================================
// Toolbar Actions
// ============================================================

const wrapSelection = (
  text: string,
  selection: { start: number; end: number },
  before: string,
  after: string
): { text: string; cursor: number } => {
  const selected = text.slice(selection.start, selection.end);
  const newText =
    text.slice(0, selection.start) +
    before +
    selected +
    after +
    text.slice(selection.end);
  return { text: newText, cursor: selection.start + before.length + selected.length + after.length };
};

const insertAtCursor = (
  text: string,
  selection: { start: number; end: number },
  insert: string
): { text: string; cursor: number } => {
  const newText = text.slice(0, selection.start) + insert + text.slice(selection.end);
  return { text: newText, cursor: selection.start + insert.length };
};

const toolbarButtons: ToolbarButton[] = [
  {
    id: 'bold',
    icon: Bold,
    label: 'Bold',
    shortcut: 'Ctrl+B',
    action: (text, selection) => wrapSelection(text, selection, '**', '**'),
  },
  {
    id: 'italic',
    icon: Italic,
    label: 'Italic',
    shortcut: 'Ctrl+I',
    action: (text, selection) => wrapSelection(text, selection, '*', '*'),
  },
  {
    id: 'underline',
    icon: Underline,
    label: 'Underline',
    action: (text, selection) => wrapSelection(text, selection, '<u>', '</u>'),
  },
  {
    id: 'strikethrough',
    icon: Strikethrough,
    label: 'Strikethrough',
    action: (text, selection) => wrapSelection(text, selection, '~~', '~~'),
  },
  {
    id: 'code',
    icon: Code,
    label: 'Inline Code',
    shortcut: 'Ctrl+`',
    action: (text, selection) => wrapSelection(text, selection, '`', '`'),
  },
  {
    id: 'h1',
    icon: Heading1,
    label: 'Heading 1',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '# ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 2 };
    },
  },
  {
    id: 'h2',
    icon: Heading2,
    label: 'Heading 2',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '## ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 3 };
    },
  },
  {
    id: 'h3',
    icon: Heading3,
    label: 'Heading 3',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '### ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 4 };
    },
  },
  {
    id: 'quote',
    icon: Quote,
    label: 'Quote',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '> ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 2 };
    },
  },
  {
    id: 'ul',
    icon: List,
    label: 'Bulleted List',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '- ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 2 };
    },
  },
  {
    id: 'ol',
    icon: ListOrdered,
    label: 'Numbered List',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '1. ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 3 };
    },
  },
  {
    id: 'checklist',
    icon: CheckSquare,
    label: 'Checklist',
    action: (text, selection) => {
      const lineStart = text.lastIndexOf('\n', selection.start - 1) + 1;
      const newText = text.slice(0, lineStart) + '- [ ] ' + text.slice(lineStart);
      return { text: newText, cursor: selection.start + 6 };
    },
  },
  {
    id: 'link',
    icon: Link,
    label: 'Link',
    shortcut: 'Ctrl+K',
    action: (text, selection) => {
      const selected = text.slice(selection.start, selection.end);
      const linkText = selected || 'link text';
      const insert = `[${linkText}](url)`;
      const newText = text.slice(0, selection.start) + insert + text.slice(selection.end);
      return { text: newText, cursor: selection.start + insert.length };
    },
  },
  {
    id: 'image',
    icon: Image,
    label: 'Image',
    action: (text, selection) => insertAtCursor(text, selection, '![alt text](image-url)'),
  },
  {
    id: 'table',
    icon: Table,
    label: 'Table',
    action: (text, selection) =>
      insertAtCursor(
        text,
        selection,
        '\n| Header 1 | Header 2 | Header 3 |\n|----------|----------|----------|\n| Cell 1   | Cell 2   | Cell 3   |\n'
      ),
  },
  {
    id: 'hr',
    icon: Minus,
    label: 'Horizontal Rule',
    action: (text, selection) => insertAtCursor(text, selection, '\n---\n'),
  },
  {
    id: 'codeblock',
    icon: Code,
    label: 'Code Block',
    action: (text, selection) => wrapSelection(text, selection, '\n```\n', '\n```\n'),
  },
];

// ============================================================
// Simple Markdown Renderer
// ============================================================

function renderMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-white mt-4 mb-2">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-white mt-4 mb-2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-white mt-4 mb-2">$1</h1>');

  // Bold, Italic, Strikethrough
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white">$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  html = html.replace(/~~(.*?)~~/gim, '<del class="text-zinc-500">$1</del>');

  // Inline code
  html = html.replace(/`(.*?)`/gim, '<code class="px-1 py-0.5 bg-zinc-800 text-blood-400 font-mono text-sm">$1</code>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/gim, '<pre class="p-4 bg-zinc-800 overflow-x-auto my-2"><code class="text-sm font-mono text-zinc-300">$1</code></pre>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blood-500 hover:underline" target="_blank">$1</a>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="max-w-full my-2" />');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blood-500 pl-4 py-1 my-2 text-zinc-400">$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gim, '<hr class="border-zinc-700 my-4" />');

  // Unordered lists
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-zinc-300">$1</li>');

  // Ordered lists
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal text-zinc-300">$1</li>');

  // Checklists
  html = html.replace(/^\- \[x\] (.*$)/gim, '<li class="ml-4 flex items-center gap-2"><input type="checkbox" checked disabled class="accent-blood-500" /><span class="text-zinc-300 line-through">$1</span></li>');
  html = html.replace(/^\- \[ \] (.*$)/gim, '<li class="ml-4 flex items-center gap-2"><input type="checkbox" disabled /><span class="text-zinc-300">$1</span></li>');

  // Line breaks
  html = html.replace(/\n\n/gim, '</p><p class="my-2 text-zinc-300">');
  html = html.replace(/\n/gim, '<br />');

  return `<p class="text-zinc-300">${html}</p>`;
}

// ============================================================
// Component
// ============================================================

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Write your content here...',
  minHeight = 300,
  maxHeight,
  readOnly = false,
  showToolbar = true,
  showPreview = true,
  enableImageUpload = false,
  onImageUpload,
  className,
}: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('edit');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  // Track selection
  const handleSelect = () => {
    if (textareaRef.current) {
      setSelection({
        start: textareaRef.current.selectionStart,
        end: textareaRef.current.selectionEnd,
      });
    }
  };

  // Apply toolbar action
  const handleToolbarAction = useCallback((button: ToolbarButton) => {
    if (readOnly) return;

    const result = button.action(value, selection);
    onChange(result.text);

    // Restore cursor position
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(result.cursor, result.cursor);
      }
    }, 0);
  }, [readOnly, value, selection, onChange]);

  // Handle file drop for images
  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      if (!enableImageUpload || !onImageUpload || readOnly) return;

      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).filter((f) =>
        f.type.startsWith('image/')
      );

      for (const file of files) {
        const url = await onImageUpload(file);
        const insert = `![${file.name}](${url})\n`;
        onChange(value + insert);
      }
    },
    [enableImageUpload, onImageUpload, onChange, value, readOnly]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!textareaRef.current || document.activeElement !== textareaRef.current) return;

      if (e.ctrlKey || e.metaKey) {
        const button = toolbarButtons.find((b) => {
          const shortcut = b.shortcut?.toLowerCase();
          return shortcut === `ctrl+${e.key.toLowerCase()}`;
        });

        if (button) {
          e.preventDefault();
          handleToolbarAction(button);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [value, selection, handleToolbarAction]);

  const containerStyle = isFullscreen
    ? 'fixed inset-0 z-50 bg-zinc-900'
    : '';

  return (
    <div
      className={cn(
        'bg-zinc-900 border border-zinc-800 flex flex-col',
        containerStyle,
        className
      )}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {/* Toolbar */}
      {showToolbar && !readOnly && (
        <div className="flex items-center flex-wrap gap-1 p-2 border-b border-zinc-800 bg-zinc-800/50">
          {/* Formatting buttons */}
          {toolbarButtons.map((button, index) => (
            <button
              key={button.id}
              onClick={() => handleToolbarAction(button)}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              title={`${button.label}${button.shortcut ? ` (${button.shortcut})` : ''}`}
            >
              <button.icon className="w-4 h-4" />
            </button>
          ))}

          <div className="flex-1" />

          {/* View mode toggle */}
          {showPreview && (
            <div className="flex items-center border border-zinc-700">
              <button
                onClick={() => setViewMode('edit')}
                className={cn(
                  'px-2 py-1 text-sm transition-colors',
                  viewMode === 'edit'
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-white'
                )}
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={cn(
                  'px-2 py-1 text-sm transition-colors',
                  viewMode === 'split'
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-white'
                )}
              >
                <Columns className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('preview')}
                className={cn(
                  'px-2 py-1 text-sm transition-colors',
                  viewMode === 'preview'
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-white'
                )}
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Fullscreen toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors ml-2"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

          {/* Help */}
          <button
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            title="Markdown help"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Editor / Preview */}
      <div
        className={cn(
          'flex-1 flex',
          viewMode === 'split' && 'divide-x divide-zinc-800'
        )}
        style={{
          minHeight: isFullscreen ? 'calc(100vh - 50px)' : minHeight,
          maxHeight: isFullscreen ? undefined : maxHeight,
        }}
      >
        {/* Editor */}
        {(viewMode === 'edit' || viewMode === 'split') && (
          <div className={cn('flex-1', viewMode === 'split' && 'w-1/2')}>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onSelect={handleSelect}
              placeholder={placeholder}
              readOnly={readOnly}
              className={cn(
                'w-full h-full p-4 bg-transparent text-zinc-300 placeholder-zinc-600 resize-none focus:outline-none font-mono text-sm',
                readOnly && 'cursor-not-allowed opacity-70'
              )}
              style={{
                minHeight: isFullscreen ? 'calc(100vh - 50px)' : minHeight,
              }}
            />
          </div>
        )}

        {/* Preview */}
        {(viewMode === 'preview' || viewMode === 'split') && showPreview && (
          <div
            className={cn(
              'flex-1 p-4 overflow-auto prose prose-invert max-w-none',
              viewMode === 'split' && 'w-1/2 bg-zinc-800/30'
            )}
            style={{
              minHeight: isFullscreen ? 'calc(100vh - 50px)' : minHeight,
            }}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
          />
        )}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-800 text-xs text-zinc-500">
        <span>
          {value.length} characters • {value.split(/\s+/).filter(Boolean).length} words
        </span>
        <span>Markdown</span>
      </div>
    </div>
  );
}

export { MarkdownEditor };
