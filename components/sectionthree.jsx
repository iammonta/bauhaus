import React from "react";
import Image from "next/image";
import CustomButton from "./reusable/CustomButton";

const Sectionthree = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 md:mr-4 flex justify-center items-center">
        <div style={{ maxWidth: '550px' }}>
          <Image
            src={require("../public/img1.png").default}
            alt="Image description"
            // Adjust the height to maintain aspect ratio
            className="w-full"
            layout="responsive"
          />
        </div>
      </div>
      <div className="lg:mt-40 md:mt-0 w-full md:w-1/2 max-w-md">
        <p
          className="lg:text-4xl leading-tight text-black md:text-xl md:leading-snug text-center sm:text-left sm:text-xl mb-6"
        >
          From Sketch to Life
        </p>
        <p className="font-bold">.............</p>
        <p
          className="lg:text-xl md:text-base sm:text-xs text-center sm:text-left leading-6 text-gray-700"
        >
          
          The basic philosophy of our studio is to create individual, aesthetically stunning solutions
          for our customers by lightning-fast development of projects employing unique styles and
          architecture. Even if you don’t have a ready sketch of what you want – we will help you to
          get the result you dreamed of.
        </p>
        <CustomButton text="View Projects" className="md:w-auto " />
      </div>
    </section>
  );
};

export default Sectionthree;
