import React, { useState } from 'react';

const CustomButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex justify-center items-center p-1 mt-7 relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className='bg-[#1A1A1A] text-white py-4 px-7 mr-72 hover:bg-white hover:text-black transition duration-300 ease-in-out'>
        {text}
      </button>
      {!isHovered && (
        <>
          <img
            src="/icons/horizontalLine.png"
            alt="line"
            className='absolute h-auto w-auto left-[100px] bottom-0 -ml-28'
          />
          <img
            src="/icons/veticalLine.png"
            alt="line"
            className={`absolute h-auto w-auto left-[115px] top-[13px] px-11 ${
              isHovered ? 'animate-line-top' : ''
            }`}
          />
        </>
      )}
    </div>
  );
};

export default CustomButton;