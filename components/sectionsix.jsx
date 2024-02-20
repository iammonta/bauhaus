import React from "react";
import Image from "next/image";

const Sectiontsix = () => {
  const photo1 = require("../public/photo1.png").default;
  const photo2 = require("../public/photo2.png").default;
  const photo3 = require("../public/photo3.png").default;
  const photo4 = require("../public/photo4.png").default;
  const photo5 = require("../public/photo5.png").default;

  return (
    <section className="bg-gray-200 text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between">
          <div className="shadow-md overflow-hidden flex-grow transition-transform transform hover:scale-105 relative">
            <Image
              src={photo1}
              alt="Stylish Family Appartmnt"
              layout="responsive"
              width={1000}
              height={1500}
              className="px-0"
            />
            <div className="overlay">
              <p>Stylish Family Appartmnt</p>
            </div>
          </div>
          <div className="shadow-md overflow-hidden flex-grow transition-transform transform hover:scale-105 relative">
            <Image
              src={photo2}
              alt="Minimal guest House"
              layout="responsive"
              width={900}
              height={900}
            />
            <div className="overlay">
              <p>Minimal guest House</p>
            </div>
          </div>
          <div className="shadow-md overflow-hidden flex-grow transition-transform transform hover:scale-105 relative">
            <Image
              src={photo2}
              alt="Art Family Resdience"
              layout="responsive"
              width={900}
              height={900}
            />
            <div className="overlay">
              <p>Art Family Resdience</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="shadow-md overflow-hidden flex-grow transition-transform transform hover:scale-105 relative">
            <Image
              src={photo3}
              alt="Private House in spain"
              layout="responsive"
              width={900}
              height={900}
              className="px-0"
            />
            <div className="overlay">
              <p>Private House in spain</p>
            </div>
          </div>
          <div className="shadow-md overflow-hidden flex-grow transition-transform transform hover:scale-105 relative">
            <Image
              src={photo4}
              alt="Modern Villa in Belguim"
              layout="responsive"
              width={900}
              height={900}
            />
            <div className="overlay">
              <p>Modern Villa in Belguim</p>
            </div>
          </div>
          <div className="shadow-md overflow-hidden flex-grow transition-transform transform hover:scale-105 relative">
            <Image
              src={photo5}
              alt="Appartment"
              layout="responsive"
              width={900}
              height={900}
            />
            <div className="overlay">
              <p>Appartment</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.7s, transform 0.7s;
          width: 100%;
          box-sizing: border-box;
          animation: slideUp 0.8s Step-start;
        }
        
        .overlay p {
          
          color: white;
          margin: 0;
          font-size:30px;
          font-family: 'Titillium Web', sans-serif;
          background-color: #1A1A1A;
          ;
          padding: 5px;
          opacity: 0; /* initially hide the overlay */
          transition: opacity 0.8s ease; /* add transition for smoother appearance */
        }
        
        .flex-grow:hover .overlay p {
          opacity: 1; /* show the overlay text on hover */
        }
        
        .flex-grow:hover .overlay {
          opacity: 0.8; /* show the black background on hover */
          transform: translateY(-15%);
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-50%);
          }
        }
        
      `}</style>
    </section>
  );
};

export default Sectiontsix;
