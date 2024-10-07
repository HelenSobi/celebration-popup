export const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
export const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };
export const badgeVariants = {
    rest: { rotate: 0 },
    visible: { rotate: 360, transition: { duration: 1 } },
  };
export const rewardVariants1 = {
    hidden:{ x: -50, opacity: 0 },
    visible:{ x: 0, opacity: 1, transition: { duration: 0.5 }}
  };
export const rewardVariants2 = {
    hidden:{ x: 50, opacity: 0 },
    visible:{ x: 0, opacity: 1, transition: { duration: 0.5 }}
  };
export const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: 0.5 + i * 0.5, // Adjust this delay for better sequential effect
      },
    }),
  };
  