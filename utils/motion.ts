import { Variants } from "framer-motion";

export const slideInFromLeft = (delay: number = 0): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",     // smoother than "spring"
      delay,
      duration: 2,       // ⬅️ slowmo: increase duration to 2s
      ease: "easeOut",
    },
  },
});

  
export const slideInFromRight = (delay: number = 0): Variants => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween", // smoother than spring
      delay,
      duration: 2,   // adjust for slowmo effect
      ease: "easeOut",
    },
  },
});

  
export const slideInFromTop = (delay: number = 0): Variants => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration: 2, // slow motion
      ease: "easeOut",
    },
  },
});



export const scrollIntoView = (delay: number = 0): Variants => ({
  hidden: { y: 50, opacity: 0 }, // starts below and invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration: 1.5,
      ease: "easeOut",
    },
  },
});



