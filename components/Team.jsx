import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import 'typeface-titillium-web';
import 'typeface-raleway';


const Team = () => {
  const member1 = require("../public/member1.png").default;
  const member2 = require("../public/member2.png").default;
  const member3 = require("../public/member3.png").default;
  const member4 = require("../public/member4.png").default;
  const member5 = require("../public/member5.png").default;
   const background = require("../public/background.png").default
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [member1, member2, member3, member4, member5, member1, member2, member3, member4, member5];

  return (
    <div className="flex flex-col gap-10 mt-20" style={{ height: '500px', backgroundColor: '#fff',fontFamily:'titillium-web', backgroundImage: `url(${background})`
  }}>
      <h1 className="text-xl font-mono text-center pt-10 font-titillium-web">Meet Our Skilled Team</h1>
      <div className="">
        <Slider {...settings}>
          {slides.map((s, index) => (
            <div key={index}>
              <Image src={s} alt={`Member ${index + 1}`} width={300} height={200} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
