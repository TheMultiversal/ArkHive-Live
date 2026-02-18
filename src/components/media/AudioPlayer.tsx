'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Volume1,
  Repeat,
  Shuffle,
  Download,
  Music,
  ListMusic,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface AudioTrack {
  id: string;
  title: string;
  artist?: string;
  album?: string;
  src: string;
  cover?: string;
  duration?: number;
}

interface AudioPlayerProps {
  tracks: AudioTrack[];
  autoPlay?: boolean;
  showPlaylist?: boolean;
  showWaveform?: boolean;
  variant?: 'full' | 'compact' | 'mini';
  className?: string;
  onTrackChange?: (track: AudioTrack, index: number) => void;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

// ============================================================
// Utility Functions
// ============================================================

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================================
// Component
// ============================================================

export default function AudioPlayer({
  tracks,
  autoPlay = false,
  showPlaylist = true,
  showWaveform = false,
  variant = 'full',
  className,
  onTrackChange,
  onPlayStateChange,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showPlaylistPanel, setShowPlaylistPanel] = useState(showPlaylist);

  const currentTrack = tracks[currentIndex];

  // Play/Pause
  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    onPlayStateChange?.(!isPlaying);
  }, [isPlaying, onPlayStateChange]);

  // Track navigation
  const playTrack = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    onTrackChange?.(tracks[index], index);
  }, [tracks, onTrackChange]);

  const playNext = useCallback(() => {
    let nextIndex: number;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * tracks.length);
    } else {
      nextIndex = (currentIndex + 1) % tracks.length;
    }
    playTrack(nextIndex);
  }, [currentIndex, isShuffle, tracks.length, playTrack]);

  const playPrevious = () => {
    if (currentTime > 3) {
      // Restart current track if more than 3 seconds in
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    } else {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : tracks.length - 1;
      playTrack(prevIndex);
    }
  };

  // Seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
    setIsMuted(vol === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNext();
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    if (autoPlay) {
      audio.play().catch(() => {});
    }

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [autoPlay, isRepeat, playNext]);

  // Auto-play when track changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex, isPlaying]);

  // Volume icon
  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  // Mini variant
  if (variant === 'mini') {
    return (
      <div
        className={cn(
          'flex items-center gap-3 p-2 bg-zinc-900 border border-zinc-800',
          className
        )}
      >
        <audio ref={audioRef} src={currentTrack?.src} />
        <button
          onClick={togglePlay}
          className="p-2 bg-blood-500 text-white"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white truncate">{currentTrack?.title}</p>
          <p className="text-xs text-zinc-500 truncate">{currentTrack?.artist}</p>
        </div>
        <span className="text-xs text-zinc-500">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    );
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'bg-zinc-900 border border-zinc-800',
          className
        )}
      >
        <audio ref={audioRef} src={currentTrack?.src} />
        <div className="flex items-center gap-4 p-3">
          {/* Cover */}
          <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
            {currentTrack?.cover ? (
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <Music className="w-6 h-6 text-zinc-600" />
            )}
          </div>

          {/* Info & Controls */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">{currentTrack?.title}</p>
            <p className="text-xs text-zinc-500 truncate">{currentTrack?.artist}</p>
          </div>

          {/* Playback controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={playPrevious}
              className="p-1 text-zinc-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="p-2 bg-blood-500 text-white"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={playNext}
              className="p-1 text-zinc-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-3 pb-3">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-zinc-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blood-500"
          />
          <div className="flex justify-between text-xs text-zinc-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div
      className={cn(
        'bg-zinc-900 border border-zinc-800',
        className
      )}
    >
      <audio ref={audioRef} src={currentTrack?.src} />

      {/* Main player */}
      <div className="p-4">
        {/* Cover & Info */}
        <div className="flex gap-4 mb-4">
          <div className="w-24 h-24 bg-zinc-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
            {currentTrack?.cover ? (
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <Music className="w-10 h-10 text-zinc-600" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold text-white truncate">
              {currentTrack?.title || 'No track selected'}
            </p>
            <p className="text-sm text-zinc-400 truncate">{currentTrack?.artist}</p>
            {currentTrack?.album && (
              <p className="text-xs text-zinc-500 truncate mt-1">
                {currentTrack.album}
              </p>
            )}
          </div>
        </div>

        {/* Waveform placeholder */}
        {showWaveform && (
          <div className="h-16 bg-zinc-800 mb-4 flex items-center justify-center">
            <div className="flex items-end gap-1 h-12">
              {Array.from({ length: 40 }, (_, i) => (
                <motion.div
                  key={i}
                  animate={isPlaying ? { height: ['20%', '100%', '40%', '80%', '20%'] } : {}}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.02,
                  }}
                  className="w-1 bg-blood-500"
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Progress */}
        <div className="mb-4">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-zinc-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blood-500"
          />
          <div className="flex justify-between text-xs text-zinc-500 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Left controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={cn(
                'p-2 transition-colors',
                isShuffle ? 'text-blood-500' : 'text-zinc-400 hover:text-white'
              )}
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          {/* Center controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={playPrevious}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={togglePlay}
              className="p-3 bg-blood-500 text-white hover:bg-blood-600 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={playNext}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={cn(
                'p-2 transition-colors',
                isRepeat ? 'text-blood-500' : 'text-zinc-400 hover:text-white'
              )}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 mt-4">
          <button onClick={toggleMute} className="text-zinc-400 hover:text-white">
            <VolumeIcon className="w-4 h-4" />
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-zinc-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white"
          />

          <div className="flex-1" />

          {/* Playlist toggle */}
          {tracks.length > 1 && (
            <button
              onClick={() => setShowPlaylistPanel(!showPlaylistPanel)}
              className={cn(
                'p-2 transition-colors',
                showPlaylistPanel ? 'text-blood-500' : 'text-zinc-400 hover:text-white'
              )}
            >
              <ListMusic className="w-4 h-4" />
            </button>
          )}

          {/* Download */}
          <a
            href={currentTrack?.src}
            download
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Playlist */}
      {showPlaylistPanel && tracks.length > 1 && (
        <div className="border-t border-zinc-800 max-h-60 overflow-y-auto">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => playTrack(index)}
              className={cn(
                'w-full flex items-center gap-3 p-3 text-left transition-colors',
                index === currentIndex
                  ? 'bg-blood-500/10 text-blood-500'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              )}
            >
              <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                {track.cover ? (
                  <Image
                    src={track.cover}
                    alt={track.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <Music className="w-4 h-4 text-zinc-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{track.title}</p>
                <p className="text-xs text-zinc-500 truncate">{track.artist}</p>
              </div>
              {index === currentIndex && isPlaying && (
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={{ height: ['4px', '12px', '4px'] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: bar * 0.1,
                      }}
                      className="w-1 bg-blood-500"
                    />
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { AudioPlayer };
