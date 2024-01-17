import { Variants } from 'framer-motion';

export const defaultMotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const defaultEasing = [0.4, -0.05, 0.01, 0.99];

export const fadeInTranstiion: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.4, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: defaultEasing },
  },
};
