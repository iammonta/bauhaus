import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import tsImage from "../public/backgroundform2.jpg"; // Update the import
import ContactForm from "@/components/ContactForm";

const FormBackgroundsection = () => {
  const sectionStyle = {
    backgroundImage: `url(${tsImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="h-screen flex items-center justify-center" style={sectionStyle}>
      <div className="my-12 mx-auto max-w-xl bg-white font-[sans-serif] p-8 rounded-md">
        {/* Add some margin-top to move the form slightly down */}
        <h1 className="text-3xl text-[#333] font-extrabold text-center mb-4"></h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default FormBackgroundsection;
