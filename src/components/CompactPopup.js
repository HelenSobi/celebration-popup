import { motion } from 'framer-motion';

const CompactPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 }, // Start slightly rotated and smaller
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: i * 0.2, // Stagger the animations
      },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}>
        <div className="fixed inset-0 bg-black opacity-90"></div>
        <div 
        className="bg-white p-6 rounded-lg w-full max-w-screen-sm relative"
        style={{ backgroundImage: `url('/popupReward.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button 
            className="absolute top-4 right-4 z-40"
            onClick={onClose}
            aria-label="Close" >
            <span className="text-lg text-white border rounded px-1"> &times; </span>
            </button>
            <h1 className="text-3xl font-extrabold text-[#F3BA2F] drop-shadow-md mt-2">Congratulations!</h1>
            <p className="mt-2 text-lg font-bold text-[#F3BA2F]">Command completed Successfully!</p>
            <p className="mt-4 text-xs text-[#C8AA7A]">You have successfully completed a command! Here are your well-earned rewards. Keep exploring the Command Center for even more exciting missions and bigger rewards!</p>
            <p className="text-sm text-[#C8AA7A]">You have gained:</p>
        
            {/* Reward Title with before and after icons */}
            <div className="flex justify-center items-center space-x-4 mt-4">
            <motion.img
                src="/beforeReward.png" 
                alt="Before Reward Icon"
                className="w-28 h-1 ml-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            />
            <p className="text-sm text-white styled-reward">Rewards</p>
            <motion.img
                src="/afterReward.png" 
                alt="After Reward Icon"
                className="w-28 h-1 ml-2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            />
            </div>

            {/* Rewards with animations */}
            <div className="flex justify-center items-center space-x-4 mt-4">
            <motion.img
                src="/Reward1.png" 
                alt="Reward 1"
                className="w-24 h-24 ml-2"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={imageVariants}
            />
            <motion.img
                src="/Reward2.png" 
                alt="Reward 2"
                className="w-24 h-24 ml-2"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={imageVariants}
            />
            </div>
      </div>
    </motion.div>
  );
};

export default CompactPopup;
