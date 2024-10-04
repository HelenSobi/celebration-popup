import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FullPagePopup = ({ isVisible, onClose }) => {
  const [progress, setProgress] = useState(0); // Track XP progress

  useEffect(() => {
    if (isVisible) {
      // Simulate the XP bar filling up after the popup appears
      setTimeout(() => setProgress(50), 500); // Adjust the percentage here (currently 30%)
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  const popupVariants = {
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
  const xpBarVariants = {
    initial: { width: '0%' },
    animate: { width: `${progress}%`, transition: { duration: 2, ease: 'easeInOut' } },
  };
  // Badge animation - move in from outside the screen with a flash effect
  const badgeVariants = {
    rest: { rotate: 0 },
    visible: { rotate: 360, transition: { duration: 0.4 } }
  };

  return (
    <motion.div className="fixed inset-0 flex justify-center z-40"
      style={{
        backgroundImage: 'url("/NewLevelBg.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
    >
      <button 
        className="absolute top-4 right-4 text-xl font-bold text-white z-50"
        onClick={onClose}
      >
        &times; {/* Close button */}
      </button>
      <motion.div
        className="p-10 rounded-lg w-full max-w-3xl opacity-90 relative"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={popupVariants}
      >
        <h1 className="text-5xl font-extrabold uppercase text-[#FFE02E] text-shadow mt-2">level up</h1>
         {/* Badge Animation with Flash */}
         <motion.div
          className="mt-6 p-6 text-xl font-bold inline-block"
          initial="hidden"
          animate="visible"
          variants={badgeVariants}
        >
          <img 
            src="/Lieutenant101.png" // Use the correct path to your badge image
            alt="New Badge"
            className="w-24 h-24 mx-auto"
          />
         
        </motion.div>
        <p className="text-3xl font-bold text-[#291911] mt-8 drop-shadow-md">corporal</p>
        {/* XP Bar */}
        <div className="relative w-full mt-2">
          <div className="flex justify-between">
            <p className="text-white">XP : <span className="text-[#F08E3C]">34,500</span></p>
            <p className="text-white">50,000</p>
          </div>
         
        <div className="w-full bg-[#35241C] h-5 rounded-md mt-1 p-1">
          <motion.div
            className="bg-[#F7931E] h-full"
            initial="initial"
            animate="animate"
            variants={xpBarVariants}
          />
        </div>
        </div>
        <button 
        className="my-4 py-2 px-4 rounded-md bg-gradient-to-b from-[#F3AC59] via-[#EC6615] to-[#944617] border-b-4 border-[#35241C] border text-sm font-bold text-[#35241C] transition-all">
        Claim NFT Badge
        </button>
       <p className="text-[#35241C] font-semibold text-lg">You’ve leveled up and earned a new badge!</p>
       <p className="text-[#DCC794] text-sm">Claim your <span className="font-bold text-[#FFC850]">NFT badge</span> now, or retrieve it later from your Inventory.</p>
       <p className="text-[#DCC794] text-xs mt-4">To claim your new badge, you'll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one. 
       If there's insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.</p>
      </motion.div>
    </motion.div>
  );
};

export default FullPagePopup;
