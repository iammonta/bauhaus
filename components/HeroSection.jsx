import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import tsImage from "../public/ts.png";
import 'typeface-titillium-web';
import 'typeface-raleway';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const charVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const charTransition = {
    duration: 0.5,
    delay: 0.2, // Adjust the delay between each character
  };

  return (
    <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${tsImage.src})` }}>
      <div className="flex items-center justify-center h-full relative">
        <div className="text-center space-y-4 relative z-10">
          <p className="text-white lg:text-7xl font-titillium-web font-thin relative z-10">New Level of Interior</p>
          <div className="relative z-10 ">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-white lg:text-8xl font-titillium-web font-thin absolute -left-10 top-1/4 transform -translate-y-1/2 opacity-30 -pt-28"
              style={{
                WebkitTextStroke: '0.5px white',
                WebkitTextFillColor: 'transparent',
                color: 'white',
                zIndex: '-1',
                fontFamily: 'Titillium Web',
                fontWeight: 900,
                lineHeight: '200px',
              }}
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={charVariants}
                transition={{ ...charTransition, delay: 0 }} // No delay for the first character
                style={{ letterSpacing: '0.3em', fontSize: '1.8em' }}
              >
                D
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={charVariants}
                transition={{ ...charTransition, delay: 0.3 }} // Delay for the second character
                style={{ letterSpacing: '0.3em', fontSize: '1.8em' }}
              >
                E
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={charVariants}
                transition={{ ...charTransition, delay: 0.5 }} // Delay for the third character
                style={{ letterSpacing: '0.3em', fontSize: '1.8em' }}
              >
                S
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={charVariants}
                transition={{ ...charTransition, delay: 0.7 }} // Delay for the fourth character
                style={{ letterSpacing: '0.3em', fontSize: '1.8em' }}
              >
                I
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={charVariants}
                transition={{ ...charTransition, delay: 0.9}} // Delay for the fifth character
                style={{ letterSpacing: '0.3em', fontSize: '1.8em' }}
              >
                G
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={charVariants}
                transition={{ ...charTransition, delay: 1.1 }} // Delay for the sixth character
                style={{ letterSpacing: '0.3em', fontSize: '1.8em' }}
              >
                N
              </motion.span>
            </motion.p>
          </div>
          <p className="text-white lg:text-xl text-center sm:text-left font-raleway font-medium mb-4 relative z-10">
            We pride ourselves on being builders — creating architectural and creative solutions
            to help<br /> people realize their vision and make them a reality. Wanna work with us?
          </p>
          <div className="flex items-center justify-center relative z-10">
            <button className="px-4 py-3 bg-zinc-900 text-white lg:w-32 md:w-28 sm:w-24 xs:w-20 text-lg md:text-base sm:text-sm hover:bg-white hover:text-black">
              <span className="relative lg:text-sm">VIEW PROJECTS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;