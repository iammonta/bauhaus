import React, { useState } from "react";
import Image from 'next/image';

const SectionsixService = () => {
  const makingidea = require("../public/makingidea.png").default;
  const modeling = require("../public/modeling.png").default;
  const prototype = require("../public/prototype.png").default;
  const design = require("../public/design.png").default;
  const planing = require("../public/planing.png").default;

  const buttonTexts = {
    1: [
      "-best office for interior desgin",
      "-betwenn tradion and invoation dutch desgin week,2017.",
      "-Another award-winning project description."
    ],
    2: [
      "-best office for interior desgin",
     
    ],
    3: [
      "-best office for interior desgin",
      "-betwenn tradion and invoation dutch desgin week,2017.",
      
    ],
  };

  const [selectedButton, setSelectedButton] = useState(1);
  const [textIndex, setTextIndex] = useState(-1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    setTextIndex(0); // Reset text index when a button is clicked
  };

  const handleNextText = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts[selectedButton].length);
  };

  return (
    <section className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-center py-8 lg:py-16 bg-zinc-900">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <Image src={makingidea} width={125} height={100} alt="Making Idea" />
          <Image src={modeling} width={125} height={100} alt="Modeling" />
          <Image src={prototype} width={125} height={100} alt="Prototype" />
        </div>
        <div className="flex items-center justify-center gap-5 mt-8">
          <Image src={planing} width={125} height={100} alt="Planning" />
          <Image src={design} width={125} height={100} alt="Design" />
        </div>
      </div>
      <div className='flex flex-col items-center lg:items-start justify-center gap-5 mt-8 lg:ml-7'>
        <div className='flex gap-14'>
          <button
            className=' border-zinc-300 max-w-[200px] text-zinc-400 p-2 hover:text-white  '
            onClick={() => handleButtonClick(1)}
          >
            AWARDS
          </button>
          <button
            className=' border-zinc-300 max-w-[200px] text-zinc-400 p-2 hover:text-white'
            onClick={() => handleButtonClick(2)}
          >
            CONCEPT
          </button>
          <button
            className=' border-zinc-300 max-w-[200px] text-zinc-400 p-2 hover:text-white '
            onClick={() => handleButtonClick(3)}
          >
            HISTORY
          </button>
        </div>
        <div className='text-zinc-200 max-w-[400px] text-center mx-4 lg:mx-0 lg:text-4xl mt-4'>
          {selectedButton === 1 && (
            buttonTexts[1].map((text, index) => (
              <p key={index} className="visible text-sm">{text}</p>
            ))
          )}
          {selectedButton === 2 && (
            buttonTexts[2].map((text, index) => (
              <p key={index} className="visible text-sm">{text}</p>
            ))
          )}
          {selectedButton === 3 && (
            buttonTexts[3].map((text, index) => (
              <p key={index} className="visible text-sm">{text}</p>
            ))
          )}
          {/* {selectedButton === 1 && (
            <button onClick={handleNextText} className="text-zinc-400 mt-4">Next</button>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SectionsixService;
