import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
 import tsImage from "../public/ourserviceimage.webp"; // Update the import

const HeroSectionService = () => {
  const sectionStyle = {
     backgroundImage: `url(${tsImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   
  };

  return (
    <section className="h-[50vh]" style={sectionStyle}>
    
    </section>
  );
};

export default HeroSectionService;
