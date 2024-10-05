import { motion } from 'framer-motion';
import { usePopup } from '../components/context/PopupContext'; 
import { backdropVariants, popupVariants, rewardVariants1, rewardVariants2, imageVariants } from './animationVariants';

const CompactPopup = () => {
  const { isVisible, hidePopup } = usePopup();
  if (!isVisible) return null;
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial="hidden" animate="visible" exit="hidden" variants={backdropVariants}>
      <div className="fixed inset-0 bg-black opacity-90"></div>
      <motion.div className="p-10 rounded-lg w-full max-w-3xl opacity-90 relative"
        initial="hidden" animate="visible" exit="hidden" variants={popupVariants}>
        <div className=" p-6 rounded-lg w-full max-w-screen-md relative"
          style={{ backgroundImage: `url('/popupReward.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <button className="absolute top-1 right-4 z-40" onClick={hidePopup} aria-label="Close">
            <span className="text-lg text-white border rounded px-1"> &times; </span>
          </button>
          <h1 className="text-3xl font-extrabold text-[#F3BA2F] drop-shadow-md mt-2">Congratulations!</h1>
          <p className="mt-2 text-lg font-bold text-[#F3BA2F]">Command completed Successfully!</p>
          <p className="mt-4 text-xs text-[#C8AA7A]">You have successfully completed a command! Here are your well-earned rewards. Keep exploring the Command Center for even more exciting missions and bigger rewards!</p>
          <p className="text-sm text-[#C8AA7A]">You have gained:</p>
          
          {/* Reward Title with before and after icons */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <motion.img src="/beforeReward.png" alt="Before Reward Icon" className="w-28 h-1 ml-2"
              initial="hidden" animate="visible" variants={rewardVariants1}/>
            <p className="text-sm text-white styled-reward">Rewards</p>
            <motion.img src="/afterReward.png" alt="After Reward Icon" className="w-28 h-1 ml-2"
               initial="hidden" animate="visible" variants={rewardVariants2}/>
          </div>
          {/* Rewards with animations */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <motion.img src="/Reward1.png" alt="Reward 1" className="w-24 h-24 ml-2"
              initial="hidden" animate="visible" variants={imageVariants} custom={0} />
            <motion.img src="/Reward2.png" alt="Reward 2" className="w-24 h-24 ml-2"
              initial="hidden" animate="visible" variants={imageVariants} custom={1} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default CompactPopup;
