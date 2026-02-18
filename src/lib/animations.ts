import { Variants, Transition } from 'framer-motion';

// ============================================================
// Timing Constants
// ============================================================

export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

export const easings = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  sharp: [0.4, 0.0, 0.6, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
} as const;

// ============================================================
// Transition Presets
// ============================================================

export const transitions: Record<string, Transition> = {
  default: {
    duration: durations.normal,
    ease: easings.easeOut,
  },
  fast: {
    duration: durations.fast,
    ease: easings.easeOut,
  },
  slow: {
    duration: durations.slow,
    ease: easings.easeInOut,
  },
  bounce: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  stiff: {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  },
};

// ============================================================
// Fade Variants
// ============================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: transitions.fast,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: transitions.fast,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: transitions.fast,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: transitions.fast,
  },
};

// ============================================================
// Scale Variants
// ============================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.spring,
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: transitions.fast,
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.bounce,
  },
  exit: { 
    opacity: 0, 
    scale: 0.5,
    transition: transitions.fast,
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
    },
  },
  exit: { 
    opacity: 0, 
    scale: 0,
    transition: transitions.fast,
  },
};

// ============================================================
// Slide Variants
// ============================================================

export const slideInFromLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: transitions.default,
  },
  exit: { 
    x: '-100%', 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: transitions.default,
  },
  exit: { 
    x: '100%', 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const slideInFromTop: Variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: transitions.default,
  },
  exit: { 
    y: '-100%', 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const slideInFromBottom: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: transitions.default,
  },
  exit: { 
    y: '100%', 
    opacity: 0,
    transition: transitions.fast,
  },
};

// ============================================================
// Stagger Variants (for lists/grids)
// ============================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0, 
    y: -10,
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.spring,
  },
};

// ============================================================
// Special Effects
// ============================================================

export const glitch: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: [0, -2, 2, -1, 1, 0],
    filter: [
      'hue-rotate(0deg)',
      'hue-rotate(90deg)',
      'hue-rotate(-90deg)',
      'hue-rotate(0deg)',
    ],
    transition: {
      duration: 0.3,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

export const shake: Variants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

export const pulse: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const float: Variants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const glow: Variants = {
  glow: {
    boxShadow: [
      '0 0 0px rgba(214, 69, 69, 0)',
      '0 0 20px rgba(214, 69, 69, 0.5)',
      '0 0 0px rgba(214, 69, 69, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// ============================================================
// Hover Variants
// ============================================================

export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const hoverLift: Variants = {
  initial: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { 
    y: -4, 
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transition: transitions.fast,
  },
};

export const hoverGlow: Variants = {
  initial: { 
    boxShadow: '0 0 0px rgba(214, 69, 69, 0)' 
  },
  hover: { 
    boxShadow: '0 0 20px rgba(214, 69, 69, 0.3)',
    transition: transitions.fast,
  },
};

// ============================================================
// Page Transitions
// ============================================================

export const pageTransition: Variants = {
  initial: { 
    opacity: 0, 
    y: 20,
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: durations.fast,
    },
  },
};

export const pageSlide: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.default,
  },
  exit: { 
    opacity: 0, 
    x: -50,
    transition: transitions.fast,
  },
};

// ============================================================
// Modal Variants
// ============================================================

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: transitions.fast,
  },
  exit: { 
    opacity: 0,
    transition: { delay: 0.1 },
  },
};

export const modalContent: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 20,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: transitions.spring,
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    y: 20,
    transition: transitions.fast,
  },
};

// ============================================================
// Notification/Toast Variants
// ============================================================

export const toastSlideIn: Variants = {
  hidden: { 
    opacity: 0, 
    x: 100,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: transitions.spring,
  },
  exit: { 
    opacity: 0, 
    x: 100,
    scale: 0.9,
    transition: transitions.fast,
  },
};

// ============================================================
// Loading Variants
// ============================================================

export const loadingDots: Variants = {
  animate: {
    opacity: [0.2, 1, 0.2],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const loadingSpin: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const loadingPulse: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================
// Drawer/Panel Variants
// ============================================================

export const drawerLeft: Variants = {
  hidden: { x: '-100%' },
  visible: { 
    x: 0,
    transition: transitions.default,
  },
  exit: { 
    x: '-100%',
    transition: transitions.fast,
  },
};

export const drawerRight: Variants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: transitions.default,
  },
  exit: { 
    x: '100%',
    transition: transitions.fast,
  },
};

export const drawerBottom: Variants = {
  hidden: { y: '100%' },
  visible: { 
    y: 0,
    transition: transitions.default,
  },
  exit: { 
    y: '100%',
    transition: transitions.fast,
  },
};
