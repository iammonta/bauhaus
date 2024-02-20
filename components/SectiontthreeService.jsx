import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const SectionthreeService = () => {
  const icon1 = require("../public/icon1.png").default;
  const icon2 = require("../public/icon2.png").default;
  const icon3 = require("../public/icon3.png").default;

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 2,
        duration: 1.2
      }
    }
  };

  return (
    <section className="py-0 md:py-0 lg:py-0 xl:py-0 2xl:py-0">
      <div className='w-full bg-zinc-900'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className='flex flex-col md:flex-row items-center justify-center p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 gap-5'>
          <div className='flex border border-zinc-100 border-opacity-5 p-4 md:p-7 gap-4'>
            <Image src={icon1} className='size-8 md:size-10' />
            <div className='flex flex-col gap-2 '>
              <h1 className='text-zinc-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl' >Professionalism</h1>
              <p className='text-zinc-500 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>Certified high-class specialists.</p>
            </div>
          </div>
          <div className='flex border border-zinc-100 border-opacity-5 p-4 md:p-7 gap-4'>
            <Image src={icon2} className='size-8 md:size-10' />
            <div className='flex flex-col gap-2 '>
              <h1 className='text-zinc-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl' >Experience & Skills</h1>
              <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-zinc-500'>Certified high-class specialists.</p>
            </div>
          </div>
          <div className='flex border border-zinc-100 border-opacity-5 p-4 md:p-7 gap-4'>
            <Image src={icon3} className='size-8 md:size-10' />
            <div className='flex flex-col gap-2 '>
              <h1 className='text-zinc-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl' >Customer Focus</h1>
              <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-zinc-500'>Certified high-class specialists.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionthreeService;
