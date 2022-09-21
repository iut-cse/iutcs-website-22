import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" = "up",
  duration = 0.5,
): Variants => {
  return {
    initial: {
      y: direction === "up" ? 30 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration,
        ease: "easeInOut",
      },
    },
  };
};

export const fadeOut = (): Variants => {
  return {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };
};

export const fade = (): Variants => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.1,
        // ease: "easeIn",
        type: "spring",
      },
    },
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};
