


"use client";

import { Socials } from "@/constants";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  // Array of your social media links
  const socialLinks = [
    "https://www.facebook.com/profile.php?id=100010620193214",
     "https://www.instagram.com/vikasgautam_385?igsh=MWQwazE0bXZkZ3h3Zw==",
    
    "https://github.com/vikasgautam2003",
    "http://www.linkedin.com/in/vikas-gautam-ab5ab8278",
    
   
  ];

  return (
    <div className="w-full h-[65px] sticky-navbar fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/DSC_5412.JPG"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer hover:animate-slowspin rounded-full"
            priority
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Vikas Gautam
          </span>
        </a>

        <div className="w-full md:w-[500px] h-full hidden md:flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <a
              href={socialLinks[index]}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;