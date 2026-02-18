'use client';

import { useRef, useCallback, useEffect } from 'react';

// ============================================================
// Types
// ============================================================

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}

export interface Sound {
  id: string;
  url: string;
  audio: HTMLAudioElement | null;
  loaded: boolean;
  playing: boolean;
}

export interface UseSoundOptions {
  preload?: boolean;
  volume?: number;
  muted?: boolean;
}

export interface UseSoundReturn {
  play: (id: string, options?: SoundOptions) => void;
  stop: (id: string) => void;
  stopAll: () => void;
  pause: (id: string) => void;
  resume: (id: string) => void;
  setVolume: (id: string, volume: number) => void;
  setGlobalVolume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
  isPlaying: (id: string) => boolean;
  preloadSound: (id: string, url: string) => void;
  register: (sounds: Record<string, string>) => void;
}

// ============================================================
// Default Sounds
// ============================================================

const DEFAULT_SOUNDS: Record<string, string> = {
  notification: '/sounds/notification.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  warning: '/sounds/warning.mp3',
  click: '/sounds/click.mp3',
  message: '/sounds/message.mp3',
};

// ============================================================
// Hook Implementation
// ============================================================

export function useSound(options: UseSoundOptions = {}): UseSoundReturn {
  const { preload = false, volume: initialVolume = 1, muted: initialMuted = false } = options;

  const soundsRef = useRef<Map<string, Sound>>(new Map());
  const globalVolumeRef = useRef(initialVolume);
  const mutedRef = useRef(initialMuted);

  // Preload a sound
  const preloadSound = useCallback((id: string, url: string) => {
    if (soundsRef.current.has(id)) return;

    const audio = new Audio(url);
    audio.preload = 'auto';
    audio.volume = globalVolumeRef.current;

    const sound: Sound = {
      id,
      url,
      audio,
      loaded: false,
      playing: false,
    };

    audio.addEventListener('canplaythrough', () => {
      sound.loaded = true;
    });

    audio.addEventListener('ended', () => {
      sound.playing = false;
    });

    soundsRef.current.set(id, sound);
  }, []);

  // Register multiple sounds
  const register = useCallback(
    (sounds: Record<string, string>) => {
      Object.entries(sounds).forEach(([id, url]) => {
        preloadSound(id, url);
      });
    },
    [preloadSound]
  );

  // Preload default sounds
  useEffect(() => {
    if (preload) {
      register(DEFAULT_SOUNDS);
    }
  }, [preload, register]);

  // Play sound
  const play = useCallback((id: string, soundOptions?: SoundOptions) => {
    if (mutedRef.current) return;

    let sound = soundsRef.current.get(id);

    // If sound not registered, try to load from defaults
    if (!sound && DEFAULT_SOUNDS[id]) {
      preloadSound(id, DEFAULT_SOUNDS[id]);
      sound = soundsRef.current.get(id);
    }

    if (!sound?.audio) {
      console.warn(`Sound "${id}" not found`);
      return;
    }

    const audio = sound.audio;

    // Reset to start
    audio.currentTime = 0;

    // Apply options
    audio.volume = (soundOptions?.volume ?? 1) * globalVolumeRef.current;
    audio.loop = soundOptions?.loop ?? false;
    audio.playbackRate = soundOptions?.playbackRate ?? 1;

    // Play
    audio.play().catch((err) => {
      console.warn(`Failed to play sound "${id}":`, err);
    });

    sound.playing = true;
  }, [preloadSound]);

  // Stop sound
  const stop = useCallback((id: string) => {
    const sound = soundsRef.current.get(id);
    if (sound?.audio) {
      sound.audio.pause();
      sound.audio.currentTime = 0;
      sound.playing = false;
    }
  }, []);

  // Stop all sounds
  const stopAll = useCallback(() => {
    soundsRef.current.forEach((sound) => {
      if (sound.audio) {
        sound.audio.pause();
        sound.audio.currentTime = 0;
        sound.playing = false;
      }
    });
  }, []);

  // Pause sound
  const pause = useCallback((id: string) => {
    const sound = soundsRef.current.get(id);
    if (sound?.audio) {
      sound.audio.pause();
      sound.playing = false;
    }
  }, []);

  // Resume sound
  const resume = useCallback((id: string) => {
    if (mutedRef.current) return;

    const sound = soundsRef.current.get(id);
    if (sound?.audio) {
      sound.audio.play().catch(() => {});
      sound.playing = true;
    }
  }, []);

  // Set volume for specific sound
  const setVolume = useCallback((id: string, volume: number) => {
    const sound = soundsRef.current.get(id);
    if (sound?.audio) {
      sound.audio.volume = Math.max(0, Math.min(1, volume)) * globalVolumeRef.current;
    }
  }, []);

  // Set global volume
  const setGlobalVolume = useCallback((volume: number) => {
    globalVolumeRef.current = Math.max(0, Math.min(1, volume));
    soundsRef.current.forEach((sound) => {
      if (sound.audio) {
        sound.audio.volume = globalVolumeRef.current;
      }
    });
  }, []);

  // Mute all sounds
  const mute = useCallback(() => {
    mutedRef.current = true;
    soundsRef.current.forEach((sound) => {
      if (sound.audio && sound.playing) {
        sound.audio.pause();
      }
    });
  }, []);

  // Unmute all sounds
  const unmute = useCallback(() => {
    mutedRef.current = false;
  }, []);

  // Check if sound is playing
  const isPlaying = useCallback((id: string): boolean => {
    const sound = soundsRef.current.get(id);
    return sound?.playing ?? false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    const sounds = soundsRef.current;
    return () => {
      sounds.forEach((sound) => {
        if (sound.audio) {
          sound.audio.pause();
          sound.audio.src = '';
        }
      });
      sounds.clear();
    };
  }, []);

  return {
    play,
    stop,
    stopAll,
    pause,
    resume,
    setVolume,
    setGlobalVolume,
    mute,
    unmute,
    isPlaying,
    preloadSound,
    register,
  };
}

export default useSound;
