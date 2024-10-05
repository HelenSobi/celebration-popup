import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePopup } from './context/PopupContext'; 
import { backdropVariants, popupVariants, badgeVariants} from './animationVariants';
import Image from 'next/image';

const FullPagePopup = () => {
  const { isVisible, hidePopup } = usePopup(); // Use hidePopup from context
  const [progress, setProgress] = useState(0); // Track XP progress
  const xpBarVariants = {
    initial: { width: '0%' },
    animate: { width: `${progress}%`, transition: { duration: 2, ease: 'easeInOut' } },
  };
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setProgress(50), 500); // Adjust the percentage here (currently 50%)
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div className="fixed inset-0 flex justify-center z-40"
      style={{ backgroundImage: 'url("/NewLevelBg.png")',  backgroundSize: 'cover', backgroundPosition: 'center'}}
      initial="hidden" animate="visible" exit="hidden" variants={backdropVariants}>
      <button  className="absolute top-4 right-4 text-xl font-bold text-white z-50" onClick={hidePopup}>&times; </button>
      <motion.div className="p-10 rounded-lg w-full max-w-3xl opacity-90 relative"
        initial="hidden" animate="visible" exit="hidden" variants={popupVariants}>
        <h1 className="text-5xl font-extrabold uppercase text-[#FFE02E] text-shadow mt-2">level up</h1>

        <motion.img src="/Lieutenant101.png" alt="New Badge" className="w-24 h-24 mx-auto mt-8"
              initial="rest" animate="visible" variants={badgeVariants}/>
        {/* <motion.div className="mt-6 p-6 text-xl font-bold inline-block"
          initial="rest" animate="visible" variants={badgeVariants} >
          <Image src="/Lieutenant101.png" alt="New Badge" layout="responsive" width={100} height={50} className="w-24 h-24 mx-auto"/>
        </motion.div> */}
        <p className="text-3xl font-bold text-[#291911] mt-8 drop-shadow-md">corporal</p>
        {/* XP Bar */}
        <div className="relative w-full mt-2">
          <div className="flex justify-between">
            <p className="text-white">XP : <span className="text-[#F08E3C]">34,500</span></p>
            <p className="text-white">50,000</p>
          </div>
          <div className="w-full bg-[#35241C] h-5 rounded-md mt-1 p-1">
            <motion.div className="bg-[#F7931E] h-full" 
            initial="initial" animate="animate" variants={xpBarVariants}/>
          </div>
        </div>
        <button className="my-4 py-2 px-4 rounded-md bg-gradient-to-b from-[#F3AC59] via-[#EC6615] to-[#944617] border-b-4 border-[#35241C] border text-sm font-bold text-[#35241C] transition-all">
          Claim NFT Badge
        </button>
        <p className="text-[#35241C] font-semibold text-lg">You&apos;ve leveled up and earned a new badge!</p>
        <p className="text-[#DCC794] text-sm">Claim your <span className="font-bold text-[#FFC850]">NFT badge</span> now, or retrieve it later from your Inventory.</p>
        <p className="text-[#DCC794] text-xs mt-4">To claim your new badge, you&apos;ll need to transfer your previous badge from your wallet for it to be burned in exchange for the new one. 
        If there&apos;s insufficient gas in your wallet, the transaction will be canceled. You can always visit your Inventory and claim your badge at any time.</p>
      </motion.div>
    </motion.div>
  );
};

export default FullPagePopup;
