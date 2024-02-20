import React from "react";
import CustomButtonfour from "./reusable/CustomButton4";

const Sectionsevenhome = () => {
  const bg7 = "/bg7.png"; // Assuming bg7.png is in the public folder

  return (
    <section className="h-64 bg-cover bg-center flex flex-col sm:flex-row justify-center items-center px-4" style={{ backgroundImage: `url(${bg7})` }}>
      <div className="flex flex-col sm:flex-row items-center sm:ml-24 mb-4 sm:mb-0">
        <div className="mr-4">
          <p className="text-white lg:text-2xl md:text-xl sm:text-base">Get Incredible Interior Design Right Now!</p>
          <p className=" text-gray-400 lg:text-base md:text-xl sm:text-sm">At every stage, we could supervise your project – controlling all the details and consulting the builders.</p>
        </div>
        {/* <a href="#view-projects" className="relative inline-block px-4 py-2 font-medium group ml-36">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">Get in Touch</span>
        </a> */}
        <CustomButtonfour text=" Get in Touch"/>
      </div>
    </section>
  );
};

export default Sectionsevenhome;