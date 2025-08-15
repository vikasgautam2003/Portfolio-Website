"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const barVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const PreLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex items-center justify-center gap-2"
      >
        <motion.div
          variants={barVariants}
          className="w-4 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
        />
        <motion.div
          variants={barVariants}
          className="w-4 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
        />
        <motion.div
          variants={barVariants}
          className="w-4 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
