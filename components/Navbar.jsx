import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "HOME",
    path: "#home",
  },
  {
    title: "SERVICES",
    path: "/service",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
  {
    title: "PORTFOLIO",
    path: "#Portfolio",
  },
  {
    title: "BLOG",
    path: "#Blog",
  },
];

const logo = require("../public/white.webp").default;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 bg-transparent bg-opacity-100 ${
        scrolling ? "hidden" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <Link href={"/"} className="text-2xl md:text-4xl text-white font-semibold flex items-center">
            <Image src={logo} width={100} height={80} />
          </Link>
          <div className="hidden md:flex items-center justify-center flex-grow">
            <ul className="flex items-center space-x-8 ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
