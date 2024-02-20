import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomButtontwo from "./reusable/CustomButton2";


const SectiontwoService = () => {
  const logo1 = require("../public/logo1.png").default;
  const logo2 = require("../public/logo2.png").default;
  const logo3 = require("../public/logo3.png").default;
  const logo4 = require("../public/logo4.png").default;

  const containerVariants1 = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5
      }
    }
  };

  return (
    <section className="h-300">
      <motion.div
        variants={containerVariants1}
        initial="hidden"
        animate="visible"
        className='flex flex-col md:flex-row items-center lg:items-start justify-center px-4 md:px-10 lg:px-20 gap-8'>
     <div className='flex flex-col gap-3 pt-10  lg:pt-32 lg:mx-0 pl-4 lg:pl-16 max-w-2xl  '>
  <h1 className='max-w-[300px] text-zinc-800 tracking-wide lg:text-4xl md:text-base sm:text-xl sm:font-serif md:font-sans lg:font-serif xl:font-sans ml-32'>
    Ambitious Studio with a Successful Concept & Ideas
  </h1>
  
  <CustomButtontwo text="View Projects"/>
</div>

        <div className='flex flex-col lg:gap-4 mt-12 max-w-screen-xl mx-auto'>
  <div className='flex flex-col md:flex-row gap-5'>
    <div className='flex flex-col gap-3 p-7'>
      <Image src={logo1} className='size-10' />
      <h1 className='text-zinc-800 lg:text-xl md:text-lg sm:text-sm'>Customer Focus</h1>
      <p className='max-w-[250px] text-zinc-400 lg:text-xl md:text-base sm:text-lg'>
        Customers choose us for the simplicity of communication and an understanding of what it’s necessary to receive in the end.
      </p>
    </div>
    <div className='flex flex-col gap-3 p-7'>
      <Image src={logo4} className='size-10' />
      <h1 className='text-zinc-800 lg:text-xl md:text-lg sm:text-sm'>Professionalism</h1>
      <p className='max-w-[250px] text-zinc-400 lg:text-xl md:text-base sm:text-lg'>
        We develop a full cycle of project documentation: an outline sketch, a design project, working documentation.
      </p>
    </div>
  </div>
  <div className='flex flex-col md:flex-row gap-5'>
    <div className='flex flex-col gap-3 p-7'>
      <Image src={logo3} className='size-10' />
      <h1 className='text-zinc-800 lg:text-xl md:text-lg sm:text-sm'>Multi Experience</h1>
      <p className='max-w-[250px] text-zinc-400 lg:text-xl md:text-base sm:text-lg'>
        We provide a wide range of services, we work in different styles, we project commercial and residential properties.
      </p>
    </div>
    <div className='flex flex-col gap-3 p-7'>
      <Image src={logo2} className='size-10' />
      <h1 className='text-zinc-800 lg:text-xl md:text-lg sm:text-sm'>Author`s Supervision</h1>
      <p className='max-w-[250px] text-zinc-400 lg:text-xl md:text-base sm:text-lg'>
        We develop an attractive and convenient space for work and leisure time, working on units, selecting materials, manufacturers.
      </p>
    </div>
  </div>
</div>

      </motion.div>
    </section>
  );
};

export default SectiontwoService;
