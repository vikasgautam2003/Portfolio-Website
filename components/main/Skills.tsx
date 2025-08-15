


"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import Skilltext from "../sub/Skilltext";

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center justify-center gap-12 min-h-screen w-full px-6 sm:px-10 lg:px-20 z-[20]"
    >
      <Skilltext />

      <div className="w-full max-w-5xl bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 text-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={`frontend-${index}`}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={`backend-${index}`}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={`fullstack-${index}`}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={`other-${index}`}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
