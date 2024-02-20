// NavLink.js

import Link from "next/link";
import { useState } from "react";
import styles from './styles.module.css';

const NavLink = ({ href, title }) => {
  const [arrowVisible, setArrowVisible] = useState(false);

  const handleMouseEnter = () => {
    setArrowVisible(true);
  };

  const handleMouseLeave = () => {
    setArrowVisible(false);
  };

  return (
    <a
      href={href}
      className={`${styles.navLink} block relative py-2 pl-3 pr-4 text-[#dee1e4] sm:text-xl rounded md:p-0 hover:text-white hover:transform hover:scale-105 transition-transform duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      {arrowVisible && (
        <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2">
          <span className="block w-4 h-4 bg-white rounded-full"></span>
        </span>
      )}
    </a>
  );
};

export default NavLink;
