import { Variants } from 'framer-motion';

// Fade in animation from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Fade in animation from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Fade in animation from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Scale animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Text animation (letter by letter)
export const textAnimation = (delay = 0) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: delay,
      },
    },
  };
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const hoverElevate = {
  y: -3,
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  transition: { duration: 0.2 },
};

// Path drawing animation for SVGs
export const pathDrawing = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 0.1,
        duration: 1,
        ease: 'easeOut',
      },
      opacity: {
        delay: custom * 0.1,
        duration: 0.2,
      },
    },
  }),
};

// Infinite pulse animation
export const infinitePulse = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
  },
};

// Infinite float animation
export const infiniteFloat = {
  y: [0, -5, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

// Use this hook to get animation variants
const useAnimations = () => {
  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    textAnimation,
    letterAnimation,
    hoverScale,
    hoverElevate,
    pathDrawing,
    infinitePulse,
    infiniteFloat,
    pageTransition,
  };
};

export default useAnimations;
