import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import 'typeface-titillium-web';
import 'typeface-raleway';
import Image from "next/image";

const Sectioneighthome = () => {
  const imageconcept = require("../public/imageconcept.png").default;

  // State for progress values
  const [interiorSketchProgress, setInteriorSketchProgress] = useState(0);
  const [modelingProgress, setModelingProgress] = useState(0);
  const [planningProgress, setPlanningProgress] = useState(0);

  // Effect to update progress values over time
  useEffect(() => {
    const interval = setInterval(() => {
      setInteriorSketchProgress((prev) => (prev < 62 ? prev + 1 : prev));
      setModelingProgress((prev) => (prev < 85 ? prev + 1 : prev));
      setPlanningProgress((prev) => (prev < 55 ? prev + 1 : prev));
    }, 50); // Adjust the interval duration as needed

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[800px] bg-white flex justify-center items-center">
      <div className="ml-4 md:ml-8">
        <p className="lg:text-4xl md:text-xl sm:text-lg  pb-7">The Core Company Values</p>
        <p className="text-gray-500 mb-4 lg:text-lg md:text-base sm:text-xl">
          We are constantly growing, learning, and improving, and our <br />partners
          are steadily increasing. 200 projects is a sizable number.
        </p> 
        <div className="text-base font-semibold lg:text-base md:text-sm sm:text-xs">INTERIOR SKETCH</div>
        {/* Progress bar for INTERIOR SKETCH */}
        <div className="flex items-center mb-4">
          <div style={{ width: "100%" }}>
            <ProgressBar isLabelVisible={false}
              completed={interiorSketchProgress}
              bgColor="#000000"
              height="4px"
              borderRadius="5px"
            />
          </div>
          <span className="ml-2">{interiorSketchProgress}%</span>
        </div>

        <div className="font-semibold lg:text-base md:text-sm sm:text-xs">3D MODELING</div>
        {/* Progress bar for 3D MODELING */}
        <div className="flex items-center mb-4">
          <div style={{ width: "100%" }}>
            <ProgressBar
            isLabelVisible={false}
              completed={modelingProgress}
              bgColor="#000000"
              height="4px"
              borderRadius="4px"
            />
          </div>
          <span className="ml-2">{modelingProgress}%</span>
        </div>

        <div className="font-semibold lg:text-base md:text-sm sm:text-xs">2D PLANNING</div>
        {/* Progress bar for 2D PLANNING */}
        <div className="flex items-center">
          <div style={{ width: "100%" }}>
            <ProgressBar
            isLabelVisible={false}
              completed={planningProgress}
              bgColor="#000000"
              height="4px"
              borderRadius="4px"
            />
          </div>
          <span className="ml-2">{planningProgress}%</span>
        </div>
      </div>
      <div className=" ml-20 md:mr-8">
        <Image
          src={imageconcept}
          width={600}
          height={700}
          alt="image concept"
          className="w-full"
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Sectioneighthome;