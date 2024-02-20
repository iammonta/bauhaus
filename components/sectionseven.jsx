import React from "react";
import Image from "next/image";
import CustomButtonthree from "./reusable/CustomButton3";

const Sectionseven = () => {
  const imageStyle = {
    width: "90%", // Make the image responsive
    height: "auto", // Allow height to adjust automatically
  };

  return (
    <section className="bg-white relative w-full h-auto md:h-[800px] flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-12 gap-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col max-w-full md:max-w-[300px] gap-5 md:mr-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-zinc-950">
            Our Interior and Exterior Services
          </h1>
          <p className="text-base md:text-xl text-zinc-400">
            The basic philosophy of our studio is to create individual,
            aesthetically stunning solutions for our customers by
            lightning-fast development of projects employing unique styles.
          </p>
         <CustomButtonthree text='View Projects'/>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4 md:w-full lg:w-1/2">
            <Image src="/interiordesgin.svg" width={300} height={300} style={imageStyle} />
            <h1 className="text-xl md:text-2xl lg:text-3xl">Interior Design </h1>
            <p className="text-zinc-500 text-base md:text-lg max-w-[250px] text-center">
              Original design project of high quality raises profit – this is
              proved practice customers.
            </p>
            <button className="border border-zinc-950 max-w-[200px] text-zinc-950 p-2 rounded-md transition duration-300 ease-in-out hover:border-zinc-900 hover:text-zinc-900">
              Read More
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:w-full lg:w-1/2">
            <Image src="/exterior.svg" width={300} height={300} style={imageStyle} />
            <h1 className="text-xl md:text-2xl lg:text-3xl">Exterior Design </h1>
            <p className="text-zinc-500 text-base md:text-lg max-w-[250px] text-center">
              Original design project of high quality raises profit – this is
              proved practice customers.
            </p>
            <button className="border border-zinc-950 max-w-[200px] text-zinc-950 p-2 rounded-md transition duration-300 ease-in-out hover:border-zinc-900 hover:text-zinc-900">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionseven;
