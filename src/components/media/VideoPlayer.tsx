'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Settings,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Subtitles,
  PictureInPicture,
  Download,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface VideoSource {
  src: string;
  quality: string;
  type?: string;
}

interface SubtitleTrack {
  src: string;
  label: string;
  language: string;
  default?: boolean;
}

interface VideoPlayerProps {
  sources: VideoSource[];
  poster?: string;
  title?: string;
  subtitles?: SubtitleTrack[];
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  showQuality?: boolean;
  showPlaybackSpeed?: boolean;
  showPIP?: boolean;
  enableDownload?: boolean;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
}

// ============================================================
// Utility Functions
// ============================================================

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return '0:00';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================================
// Component
// ============================================================

export default function VideoPlayer({
  sources,
  poster,
  title,
  subtitles = [],
  autoPlay = false,
  muted: initialMuted = false,
  loop = false,
  controls = true,
  showQuality = true,
  showPlaybackSpeed = true,
  showPIP = true,
  enableDownload = false,
  className,
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [buffered, setBuffered] = useState(0);
  const [currentQuality, setCurrentQuality] = useState(sources[0]?.quality || '');
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState<string | null>(
    subtitles.find((s) => s.default)?.language || null
  );

  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Get current source
  const currentSource = sources.find((s) => s.quality === currentQuality) || sources[0];

  // Play/Pause toggle
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      onPause?.();
    } else {
      videoRef.current.play();
      onPlay?.();
    }
  }, [isPlaying, onPause, onPlay]);

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Picture-in-Picture
  const togglePIP = async () => {
    if (!videoRef.current) return;

    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await videoRef.current.requestPictureInPicture();
    }
  };

  // Seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * duration;
  };

  // Skip forward/backward
  const skip = useCallback((seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(
      0,
      Math.min(duration, videoRef.current.currentTime + seconds)
    );
  }, [duration]);

  // Volume controls
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
    setIsMuted(vol === 0);
  };

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  // Quality change
  const handleQualityChange = (quality: string) => {
    const currentTime = videoRef.current?.currentTime || 0;
    const wasPlaying = isPlaying;
    setCurrentQuality(quality);

    // After source change, restore position
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = currentTime;
        if (wasPlaying) videoRef.current.play();
      }
    }, 100);
  };

  // Playback speed
  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  // Mouse activity for showing controls
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimer.current) {
      clearTimeout(hideControlsTimer.current);
    }
    if (isPlaying) {
      hideControlsTimer.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      onTimeUpdate?.(video.currentTime);
    };
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        setBuffered(video.buffered.end(video.buffered.length - 1));
      }
    };
    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onEnded, onTimeUpdate]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;

      switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlay();
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'm':
          toggleMute();
          break;
        case 'arrowleft':
          skip(-10);
          break;
        case 'arrowright':
          skip(10);
          break;
        case 'j':
          skip(-10);
          break;
        case 'l':
          skip(10);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleFullscreen, skip, toggleMute]);

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  const playbackSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative bg-black group',
        isFullscreen && 'fixed inset-0 z-50',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={currentSource?.src}
        poster={poster}
        autoPlay={autoPlay}
        muted={isMuted}
        loop={loop}
        className="w-full h-full"
        onClick={togglePlay}
      >
        {subtitles.map((sub) => (
          <track
            key={sub.language}
            kind="subtitles"
            src={sub.src}
            srcLang={sub.language}
            label={sub.label}
            default={sub.default}
          />
        ))}
      </video>

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      {/* Big play button (when paused) */}
      {!isPlaying && !isLoading && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-5 bg-blood-500/80 hover:bg-blood-500 transition-colors"
          >
            <Play className="w-12 h-12 text-white" />
          </motion.div>
        </button>
      )}

      {/* Controls */}
      {controls && (
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4"
            >
              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={handleSeek}
                className="w-full h-1 bg-zinc-700 mb-3 cursor-pointer group/progress"
              >
                {/* Buffered */}
                <div
                  className="absolute h-1 bg-zinc-500"
                  style={{ width: `${(buffered / duration) * 100}%` }}
                />
                {/* Progress */}
                <div
                  className="absolute h-1 bg-blood-500"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                {/* Scrubber */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blood-500 opacity-0 group-hover/progress:opacity-100 transition-opacity"
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                {/* Left controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 text-white hover:text-blood-500 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    onClick={() => skip(-10)}
                    className="p-2 text-white hover:text-blood-500 transition-colors"
                    title="Rewind 10s"
                  >
                    <Rewind className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => skip(10)}
                    className="p-2 text-white hover:text-blood-500 transition-colors"
                    title="Forward 10s"
                  >
                    <FastForward className="w-4 h-4" />
                  </button>

                  {/* Volume */}
                  <div className="flex items-center gap-1 group/vol">
                    <button
                      onClick={toggleMute}
                      className="p-2 text-white hover:text-blood-500 transition-colors"
                    >
                      <VolumeIcon className="w-4 h-4" />
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-0 group-hover/vol:w-20 transition-all h-1 bg-zinc-700 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white"
                    />
                  </div>

                  {/* Time */}
                  <span className="text-sm text-white ml-2">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-1">
                  {/* Subtitles */}
                  {subtitles.length > 0 && (
                    <div className="relative">
                      <button
                        onClick={() => setShowSubtitles(!showSubtitles)}
                        className={cn(
                          'p-2 transition-colors',
                          currentSubtitle
                            ? 'text-blood-500'
                            : 'text-white hover:text-blood-500'
                        )}
                      >
                        <Subtitles className="w-4 h-4" />
                      </button>
                      {showSubtitles && (
                        <div className="absolute bottom-full right-0 mb-2 bg-zinc-900 border border-zinc-800 p-2 min-w-[150px]">
                          <button
                            onClick={() => {
                              setCurrentSubtitle(null);
                              setShowSubtitles(false);
                            }}
                            className={cn(
                              'block w-full text-left px-2 py-1 text-sm',
                              !currentSubtitle
                                ? 'text-blood-500'
                                : 'text-zinc-400 hover:text-white'
                            )}
                          >
                            Off
                          </button>
                          {subtitles.map((sub) => (
                            <button
                              key={sub.language}
                              onClick={() => {
                                setCurrentSubtitle(sub.language);
                                setShowSubtitles(false);
                              }}
                              className={cn(
                                'block w-full text-left px-2 py-1 text-sm',
                                currentSubtitle === sub.language
                                  ? 'text-blood-500'
                                  : 'text-zinc-400 hover:text-white'
                              )}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Settings */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className="p-2 text-white hover:text-blood-500 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                    </button>

                    {showSettings && (
                      <div className="absolute bottom-full right-0 mb-2 bg-zinc-900 border border-zinc-800 p-2 min-w-[180px]">
                        {/* Quality */}
                        {showQuality && sources.length > 1 && (
                          <div className="mb-2">
                            <p className="text-xs text-zinc-500 px-2 mb-1">Quality</p>
                            {sources.map((source) => (
                              <button
                                key={source.quality}
                                onClick={() => {
                                  handleQualityChange(source.quality);
                                  setShowSettings(false);
                                }}
                                className={cn(
                                  'block w-full text-left px-2 py-1 text-sm',
                                  currentQuality === source.quality
                                    ? 'text-blood-500'
                                    : 'text-zinc-400 hover:text-white'
                                )}
                              >
                                {source.quality}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Playback speed */}
                        {showPlaybackSpeed && (
                          <div>
                            <p className="text-xs text-zinc-500 px-2 mb-1">Speed</p>
                            <div className="grid grid-cols-4 gap-1">
                              {playbackSpeeds.map((speed) => (
                                <button
                                  key={speed}
                                  onClick={() => {
                                    handleSpeedChange(speed);
                                    setShowSettings(false);
                                  }}
                                  className={cn(
                                    'px-2 py-1 text-xs',
                                    playbackSpeed === speed
                                      ? 'bg-blood-500 text-white'
                                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                                  )}
                                >
                                  {speed}x
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* PIP */}
                  {showPIP && document.pictureInPictureEnabled && (
                    <button
                      onClick={togglePIP}
                      className="p-2 text-white hover:text-blood-500 transition-colors"
                      title="Picture in Picture"
                    >
                      <PictureInPicture className="w-4 h-4" />
                    </button>
                  )}

                  {/* Download */}
                  {enableDownload && (
                    <a
                      href={currentSource?.src}
                      download
                      className="p-2 text-white hover:text-blood-500 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 text-white hover:text-blood-500 transition-colors"
                  >
                    {isFullscreen ? (
                      <Minimize className="w-4 h-4" />
                    ) : (
                      <Maximize className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Title */}
              {title && (
                <div className="absolute top-4 left-4 text-white font-medium">
                  {title}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export { VideoPlayer };
