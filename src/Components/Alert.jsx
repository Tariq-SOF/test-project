// Alert.js
import React, { useState } from 'react';

const Alert = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={`bg-${type}-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4`}>
        {/* Add your icon here */}
        <span className={`text-${type}-800`}>{message}</span>
        <button className="ml-auto" onClick={handleClose}>
          {/* Add a close icon or text */}
          Close
        </button>
      </div>
    )
  );
};

export default Alert;
