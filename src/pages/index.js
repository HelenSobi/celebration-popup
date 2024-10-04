import React, { useState } from 'react';
import FullPagePopup from '../components/FullPagePopup'; 
import CompactPopup from '../components/CompactPopup'; 

const HomePage = () => {
  const [popupType, setPopupType] = useState(null); // Consolidate popup handling

  const handleShowPopup = (type) => setPopupType(type);
  const closePopup = () => setPopupType(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] text-white p-4">
      <h1 className="text-xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400 mb-6">
        Welcome to Celebration Popups
      </h1>
      <p className="text-lg text-gray-300 mb-10">
        Experience dynamic popups with smooth animations for your rewards and achievements.
      </p>

      {/* Buttons to trigger popups */}
      <div className="flex flex-col md:flex-row text-white text-xl font-bold gap-4">
        <button 
          onClick={() => handleShowPopup('full')} 
          className="p-4 bg-gradient-to-b from-orange-500 to-orange-700  rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Show Full Page Popup
        </button>
        <button 
          onClick={() => handleShowPopup('compact')} 
          className="p-4 bg-gradient-to-b from-yellow-300 to-yellow-700  rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Show Compact Popup
        </button>
      </div>

      {/* Popups */}
      {popupType === 'full' && <FullPagePopup isVisible={true} onClose={closePopup} />}
      {popupType === 'compact' && <CompactPopup isVisible={true} onClose={closePopup} />}
    </div>
  );
};

export default HomePage;
