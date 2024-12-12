import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
};

export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const dotAnimation = (index: number) => ({
  animate: {
    y: ["0%", "-30%", "0%"],
  },
  transition: {
    duration: 0.6,
    repeat: Infinity,
    delay: index * 0.1,
  }
});