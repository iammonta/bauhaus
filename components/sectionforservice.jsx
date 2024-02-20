import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const SectionForService = () => {
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 3 } },
  };
  

  const backgrounds3 = require("../public/backgrounds3.png").default;

  return (
<section className=" sectionBg  py-0 px-1 md:py-1 md:px-1 lg:px-2 xl:px-0 2xl:px-1 relative">

  {/* <Image
  src={backgrounds3}
  alt="Background Image"
  layout="fill"
  objectFit="cover"
  quality={100}
  objectPosition="top"
  
  /> */}
      <div
    className='flex flex-col md:flex-row items-start justify-start h-full relative'>
      
 <div className='text-center'>
  <Image src="/sectionservice2.png" alt="Your Image Alt Text" width={750} height={900}  />
</div> 

         <motion.div
          variants={childVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 gap-4 md:w-1/2 order-1 md:order-2'>
          <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>A Sketch of Each Detail</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col'>
              <h1 className='text-zinc-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>01</h1>
              <h1 className='text-zinc-800 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Apartment Design</h1>
              <p className='text-zinc-500 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-[200px] py-2'>
                We’re committed to building sustainable and high-quality Java solutions.
              </p>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-zinc-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>02</h1>
              <h1 className='text-zinc-800 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Office Design</h1>
              <p className='text-zinc-500 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-[200px] py-2'>
                We’re committed to building sustainable and high-quality Java solutions.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col'>
              <h1 className='text-zinc-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>03</h1>
              <h1 className='text-zinc-800 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Shop Design</h1>
              <p className='text-zinc-500 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-[200px] py-2'>
                We’re committed to building sustainable and high-quality Java solutions.
              </p>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-zinc-300 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>04</h1>
              <h1 className='text-zinc-800 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>House Design</h1>
              <p className='text-zinc-500 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl max-w-[200px] py-2'>
                We’re committed to building sustainable and high-quality Java solutions.
              </p>
            </div>
          </div>
        </motion.div> 
      </div>
    </section>
  );
};

export default SectionForService;
