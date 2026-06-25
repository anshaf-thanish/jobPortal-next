"use client";

import {useState , useEffect } from "react";
import Link from "next/link";
import { LuNetwork } from "react-icons/lu";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from "@/constant/constant";
import ThemeToggler from "@/components/Helper/ThemeToggler";


type Props = {
  openNav : () => void
}


const Nav = ({openNav}:Props) => {
  const [navBg , setNavBg] = useState(false)


  useEffect(() => {
    const handler = () => {
  if (window.scrollY >= 90) {
    setNavBg(true);
  } else {
    setNavBg(false); 
  }
};
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`transition-all ${ navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] w-full`}>
      <div className="flex items-center h-full justify-between w-[92%] mx-auto">
        
        <div className="flex items-center sm:space-x-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
          <LuNetwork className="text-white dark:text-black w-5 h-5" />
            </div>
          <h1 className="hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold">
            ThaHire
          </h1>
          </div>
        </div>

        {/* NAVLINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900  hover:bg-gray-300 transition-all duration-300">
            Login / Register
          </button>
          <button className="px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white">
            Job Post
          </button>
          {/* theme toggler */}
          <ThemeToggler/>
          {/* burger menu */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
