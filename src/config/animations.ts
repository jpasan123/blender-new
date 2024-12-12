export const thankYouAnimations = {
  container: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  icon: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { delay: 0.3, type: "spring" }
  },
  title: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4 }
  },
  text: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.5 }
  },
  button: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.6 }
  }
};