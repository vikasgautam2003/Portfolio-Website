"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 - About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Vikas Gautam</h2>
          <p className="text-sm leading-relaxed">
            Passionate web developer focused on creating interactive, user-friendly
            experiences with modern technologies.
          </p>
        </div>

        {/* Column 2 - Projects */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Projects</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="https://bonzo-gaming-website.onrender.com" target="_blank" className="hover:text-purple-400">
                Bonzo Games
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className="hover:text-purple-400">
                Portfolio Website
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className="hover:text-purple-400">
                V Shiksha
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
          <div className="flex space-x-4 text-xl">
            <Link href="https://www.facebook.com/profile.php?id=100010620193214" target="_blank" className="hover:text-purple-400">
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com/vikasgautam_385?igsh=MWQwazE0bXZkZ3h3Zw==" target="_blank" className="hover:text-purple-400">
              <FaInstagram />
            </Link>
           
            <Link href="https://github.com/vikasgautam2003" target="_blank" className="hover:text-purple-400">
              <FaGithub />
            </Link>
            <Link href="http://www.linkedin.com/in/vikas-gautam-ab5ab8278" target="_blank" className="hover:text-purple-400">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">📞 +91 98776 19409</p>
          <p className="text-sm">📧 vikasgautamug@gmail.com</p>
          <p className="text-sm">📍 New Delhi, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Vikas Gautam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
