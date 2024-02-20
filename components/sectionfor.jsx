import React from "react";
import Image from "next/image";

const SectionFor = () => {
  const img2 = require("../public/img2.png").default;
  const img3 = require("../public/img3.png").default;
  const img4 = require("../public/img4.png").default;
  const img5 = require("../public/img5.png").default;
  const img6 = require("../public/img6.png").default;
  const img7 = require("../public/img7.png").default;
  const img8 = require("../public/img8.png").default;
  const img9 = require("../public/img9.png").default;
  const img10 = require("../public/img10.png").default;

  return (
    <section className="bg-gray-100 py-10 flex flex-col items-center justify-center">
      <div className="flex flex-row mb-9">
        {[img2, img3, img4, img5, img6, img7].map((img, index) => (
          <div key={index} className="mx-14">
            <Image
              src={img}
              alt={`Image ${index + 2} description`}
              layout="responsive"
              className="w-full h-auto md:w-36 md:h-40 lg:w-96 lg:h-48 xl:w-96 xl:h-48 sm:h-20 sm:w-24"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {img8 && (
          <div className="relative mx-4">
            <div className="hover-bright">
              <Image src={img8} alt="Image 8 description" className="w-full h-auto md:w-96 md:h-48 lg:w-96 lg:h-48 xl:w-96 xl:h-48" layout="responsive" />
            </div>
            <div className="absolute bottom-11 left-8 text-white p-2">
              <p className="text-white font-titillium-web text-4xl font-light">
                Office Spaces <span className="stroke-text" style={{ letterSpacing: '0.1em', fontSize: '4em' }}>01</span>
              </p>
            </div>
          </div>
        )}
        {img9 && (
          <div className="relative mx-4">
            <div className="hover-bright">
              <Image src={img9} alt="Image 9 description" className="w-full h-auto md:w-96 md:h-48 lg:w-96 lg:h-48 xl:w-96 xl:h-48" layout="responsive" />
            </div>
            <div className="absolute bottom-11 left-8 text-white p-2">
              <p className="text-white font-titillium-web text-4xl font-light">
                Public Spaces <span className="stroke-text" style={{ letterSpacing: '0.1em', fontSize: '4em' }}>02</span>
              </p>
            </div>
          </div>
        )}
        {img10 && (
          <div className="relative mx-4">
            <div className="hover-bright">
              <Image src={img10} alt="Image 10 description" className="w-full h-auto md:w-96 md:h-48 lg:w-96 lg:h-48 xl:w-96 xl:h-48" layout="responsive" />
            </div>
            <div className="absolute bottom-11 left-8 text-white p-2">
              <p className="text-black font-titillium-web text-4xl font-light">
                Office Spaces <span className="stroke-text" style={{ letterSpacing: '0.1em', fontSize: '4em' }}>03</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
          -webkit-text-fill-color: transparent;
          text-stroke: 1px white;
          color: white;
          z-index: -1;
          font-family: 'Titillium Web';
          font-weight: 900;
        }
        
        .hover-bright {
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .hover-bright:hover {
          filter: brightness(130%);
        }
      `}</style>
    </section>
  );
};

export default SectionFor;