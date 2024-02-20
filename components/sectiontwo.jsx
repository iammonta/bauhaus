import React from "react";
import Image from "next/image";

const SectionTwo = () => {
  const bg7 = "/bg7.png"; // Assuming bg7.png is in the public folder
  const founder = require("../public/founder.png").default;

  const sectionStyle = {
    height: '44vh',
    backgroundImage: `url(${bg7})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '0 20px', // Add padding to the left and right for spacing
  };

  return (
    <section
      style={sectionStyle}
      className="text-white font-titillium-web text-3xl font-light leading-48 flex flex-col md:flex-row items-center justify-between h-screen p-4 md:p-8"
    >
      <div className="w-full md:w-1/2 md:ml-10 lg:ml-32 mb-8 md:mb-0 text-center md:text-left md:mr-9">
        <p className="md:ml-20 text-lg sm:text-xl md:text-2xl lg:text-3xl pt-0 md:pt-4 md:px-5 lg:px-5 text-center sm:text-left">
          “Even if you don’t have a ready sketch of<br/> what you want
          we will help you to get the<br/> result you dreamed of.”
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:mr-20 mt-4 md:mt-0">
        <div className="flex items-center">
          <Image
            src={founder}
            className="max-w-full h-auto lg:w-40 lg:h-40 sm:w-11 sm:h-10 md:w-20 md:h-24 md:mb-4 pt-2 sm:pt-5 sm:mb-8"
          />
          <div className="ml-4">
            <p className="text-lg font-medium">David Oswald </p>
            <p className="text-sm text-slate-400 ">FOUNDER OF THE COMPANY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;