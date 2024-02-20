// Footer.js
import Image from "next/image";
import styles from "../components/Footer.module.css";
import 'typeface-titillium-web';
import 'typeface-raleway';
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  const white = require("../public/white.png").default;

  return (
    <>
      <div className={`${styles.container} ${styles.wave} h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 bg-zinc-900 -50` }>
        <div className="p-5">
          <ul>
            <div className="mb-6">
              <Image
                src={white}
                alt="Image description"
                layout="responsive"
                width={70}
                height={80}
              />
            </div>
            <div className="flex gap-6 pb-5">
              <FaInstagram className={`text-2xl cursor-pointer ${styles.iconHover}`} />
              <FaTwitter className={`text-2xl cursor-pointer ${styles.iconHover}`} />
              <FaLinkedin className={`text-2xl cursor-pointer ${styles.iconHover}`} />
              <FaYoutube className={`text-2xl cursor-pointer ${styles.iconHover}`} />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white text-2xl pb-4" style={{ fontFamily: 'Titillium Web', fontSize: '20px', lineHeight: '20px' }}>Contact</p>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Location
            </li>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Mail@gmail.com
            </li>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', height: '16px', color: '#a3a3a3' }}>
              +216 00 00 0000
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white text-2xl pb-4" style={{ fontFamily: 'Titillium Web', fontSize: '20px', lineHeight: '20px' }}>Latest Projects</p>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Stylish Family Apartment
            </li>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Modern Villa in Tunisia
            </li>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Private House in Tunisia
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white text-2xl pb-4" style={{ fontFamily: 'Titillium Web', fontSize: '20px', lineHeight: '20px' }}>Subscribe</p>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Your EMAIL
            </li>
            <li className={`text-gray-500 text-md pb-2 ${styles.linkHover} cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
              Follow our newsletter to stay updated about the agency.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-zinc-900 -50">
        <h1 className="text-gray-800 font-semibold" style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
          © 2021-2022 All rights reserved | Build with ❤ by{" "}
          <span className={`${styles.linkHover} font-semibold cursor-pointer`} style={{ fontFamily: 'Raleway', fontSize: '16px', lineHeight: '16px', color: '#a3a3a3' }}>
            DunDill{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
