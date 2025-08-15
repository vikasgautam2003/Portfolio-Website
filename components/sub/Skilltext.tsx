"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

const Skilltext: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="Welcome-box py-2.5 px-4 border border-[#7042f88b] opacity-90"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-[14px] sm:text-[16px]">
          I just build cool stuff
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        className="text-3xl sm:text-4xl text-white font-medium mt-6 text-center mb-5"
      >
        Making apps with modern technologies
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.5)}
        className="cursive text-lg sm:text-xl text-gray-200 mb-10 mt-4 text-center"
      >
        I get the job done. Am not the fastest! but perfect!
      </motion.div>
    </div>
  );
};

export default Skilltext;
