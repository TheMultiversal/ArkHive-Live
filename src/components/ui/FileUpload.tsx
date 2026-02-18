'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, File, FileText, Image as ImageIcon, Film, Music, Archive, AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadedFile {
  id: string;
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'complete' | 'error';
  error?: string;
  preview?: string;
}

interface FileUploadProps {
  accept?: string;
  maxSize?: number; // in bytes
  maxFiles?: number;
  multiple?: boolean;
  onUpload: (files: File[]) => Promise<void>;
  onRemove?: (fileId: string) => void;
  className?: string;
  disabled?: boolean;
}

const fileTypeIcons: Record<string, React.ReactNode> = {
  'image': <ImageIcon className="w-6 h-6" />,
  'video': <Film className="w-6 h-6" />,
  'audio': <Music className="w-6 h-6" />,
  'application/pdf': <FileText className="w-6 h-6" />,
  'application/zip': <Archive className="w-6 h-6" />,
  'default': <File className="w-6 h-6" />,
};

function getFileIcon(type: string) {
  if (type.startsWith('image')) return fileTypeIcons['image'];
  if (type.startsWith('video')) return fileTypeIcons['video'];
  if (type.startsWith('audio')) return fileTypeIcons['audio'];
  return fileTypeIcons[type] || fileTypeIcons['default'];
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default function FileUpload({
  accept,
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 10,
  multiple = true,
  onUpload,
  onRemove,
  className,
  disabled = false,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${formatFileSize(maxSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(',').map((t) => t.trim());
      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        if (type.endsWith('/*')) {
          return file.type.startsWith(type.replace('/*', ''));
        }
        return file.type === type;
      });
      if (!isAccepted) {
        return 'File type not accepted';
      }
    }
    return null;
  }, [maxSize, accept]);

  const processFiles = useCallback(async (newFiles: File[]) => {
    const remainingSlots = maxFiles - files.length;
    const filesToProcess = newFiles.slice(0, remainingSlots);

    const uploadedFiles: UploadedFile[] = filesToProcess.map((file) => {
      const error = validateFile(file);
      return {
        id: `${file.name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file,
        progress: 0,
        status: error ? 'error' : 'pending',
        error: error || undefined,
        preview: file.type.startsWith('image') ? URL.createObjectURL(file) : undefined,
      };
    });

    setFiles((prev) => [...prev, ...uploadedFiles]);

    // Upload valid files
    const validFiles = uploadedFiles.filter((f) => f.status !== 'error');
    if (validFiles.length > 0) {
      // Simulate upload progress
      for (const uploadFile of validFiles) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === uploadFile.id ? { ...f, status: 'uploading' } : f
          )
        );

        // Simulate progress
        for (let progress = 0; progress <= 100; progress += 10) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setFiles((prev) =>
            prev.map((f) =>
              f.id === uploadFile.id ? { ...f, progress } : f
            )
          );
        }

        setFiles((prev) =>
          prev.map((f) =>
            f.id === uploadFile.id ? { ...f, status: 'complete', progress: 100 } : f
          )
        );
      }

      try {
        await onUpload(validFiles.map((f) => f.file));
      } catch {
        setFiles((prev) =>
          prev.map((f) =>
            validFiles.some((vf) => vf.id === f.id)
              ? { ...f, status: 'error', error: 'Upload failed' }
              : f
          )
        );
      }
    }
  }, [files.length, maxFiles, onUpload, validateFile]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }, [disabled, processFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    processFiles(selectedFiles);
    // Reset input
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [processFiles]);

  const handleRemove = (fileId: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === fileId);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter((f) => f.id !== fileId);
    });
    onRemove?.(fileId);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Drop zone */}
      <div
        onClick={() => !disabled && inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          'relative border-2 border-dashed p-8 text-center cursor-pointer transition-colors',
          isDragging
            ? 'border-blood-500 bg-blood-900/10'
            : 'border-zinc-700 hover:border-zinc-600',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
          disabled={disabled}
        />
        
        <motion.div
          animate={isDragging ? { scale: 1.05 } : { scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className={cn(
            'w-16 h-16 flex items-center justify-center',
            isDragging ? 'text-blood-500' : 'text-zinc-500'
          )}>
            <Upload className="w-10 h-10" />
          </div>
          <div>
            <p className="text-zinc-300 font-medium">
              {isDragging ? 'Drop files here' : 'Click or drag files to upload'}
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              {accept ? `Accepted: ${accept}` : 'All file types accepted'}
              {maxSize && ` • Max ${formatFileSize(maxSize)}`}
            </p>
          </div>
        </motion.div>
      </div>

      {/* File list */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            {files.map((uploadFile) => (
              <motion.div
                key={uploadFile.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={cn(
                  'flex items-center gap-4 p-3 border',
                  uploadFile.status === 'error'
                    ? 'border-red-800 bg-red-900/20'
                    : 'border-zinc-800 bg-zinc-900/50'
                )}
              >
                {/* Preview or icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-zinc-800 relative overflow-hidden">
                  {uploadFile.preview ? (
                    <Image
                      src={uploadFile.preview}
                      alt={uploadFile.file.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="text-zinc-500">
                      {getFileIcon(uploadFile.file.type)}
                    </div>
                  )}
                </div>

                {/* File info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-zinc-300 truncate">
                    {uploadFile.file.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {formatFileSize(uploadFile.file.size)}
                  </p>
                  
                  {/* Progress bar */}
                  {uploadFile.status === 'uploading' && (
                    <div className="mt-2 h-1 bg-zinc-700 overflow-hidden">
                      <motion.div
                        className="h-full bg-blood-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadFile.progress}%` }}
                      />
                    </div>
                  )}
                  
                  {/* Error message */}
                  {uploadFile.error && (
                    <p className="text-xs text-red-400 mt-1">{uploadFile.error}</p>
                  )}
                </div>

                {/* Status icon */}
                <div className="flex-shrink-0">
                  {uploadFile.status === 'complete' && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {uploadFile.status === 'error' && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  {uploadFile.status === 'uploading' && (
                    <div className="w-5 h-5 border-2 border-blood-500 border-t-transparent rounded-full animate-spin" />
                  )}
                </div>

                {/* Remove button */}
                <button
                  onClick={() => handleRemove(uploadFile.id)}
                  className="flex-shrink-0 p-1 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* File count */}
      {files.length > 0 && (
        <p className="text-sm text-zinc-500">
          {files.length} of {maxFiles} files
        </p>
      )}
    </div>
  );
}

// Simple file input with preview
interface SimpleFileInputProps {
  accept?: string;
  onChange: (file: File | null) => void;
  preview?: string;
  className?: string;
}

export function SimpleFileInput({
  accept,
  onChange,
  preview,
  className,
}: SimpleFileInputProps) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(preview);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type.startsWith('image')) {
      setPreviewUrl(URL.createObjectURL(file));
    }
    onChange(file);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className={cn(
        'relative border-2 border-dashed border-zinc-700 hover:border-zinc-600 cursor-pointer transition-colors overflow-hidden',
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
      {previewUrl ? (
        <Image src={previewUrl} alt="Preview" fill className="object-cover" unoptimized />
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <Upload className="w-8 h-8 text-zinc-500 mb-2" />
          <p className="text-sm text-zinc-500">Click to upload</p>
        </div>
      )}
    </div>
  );
}
