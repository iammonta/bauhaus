import React from "react";
import Image from "next/image";

import img11 from "../public/img11.png";
import img12 from "../public/img12.png";
import img13 from "../public/img13.png";
import bg1 from "../public/bg1.png";
import bg2 from "../public/bg2.png";
import bg3 from "../public/bg3.png";

const Sectiontfive = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16">
      <div className="flex flex-col gap-8 md:gap-10 ">
        <h1 className="text-zinc-900 lg:text-4xl md:text-3xl sm:text-2xl">What Can We Offer</h1>
        <p className="font-bold">................</p>
        <div className="flex flex-wrap gap-8 md:gap-10 lg:gap-12">
          {[
            { bg: bg1, img: img11, title: "Design & Planning", description: "We will help you to get the result you dreamed of" },
            { bg: bg2, img: img12, title: "Custom Solutions", description: "We provide personalized services to meet your unique needs" },
            { bg: bg3, img: img13, title: "Furniture & Decor", description: "Discover our wide range of furniture and decor options" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cover bg-center relative flex flex-col gap-5 justify-center items-center p-4 md:p-6 lg:p-8 w-96 h-96" // Adjust width and height using Tailwind CSS classes
              style={{
                backgroundImage: `url(${item.bg.src})`,
              }}
            >
              <Image src={item.img} className="size-13" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
              <h1 className="text-xl text-zinc-950 lg:text-2xl md:text-base sm:text-xs hover:text-white">{item.title}</h1>
              <p className="text-zinc-400 max-w-[180px] lg:text-base md:text-sm text-center sm:text-left">
                {item.description}
              </p>
              <button className="border border-zinc-950 max-w-[200px] text-zinc-950 p-2 rounded-md">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectiontfive;