


"use client";

import React, { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const About: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center justify-center min-h-screen w-full px-6 sm:px-10 lg:px-20 py-16 md:py-20 z-[20] overflow-hidden"
    >
      <div className="relative h-[350px] sm:h-[450px] w-full max-w-xs sm:max-w-sm mx-auto md:max-w-none md:mx-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72"
        >
          <img
            src="/about/vikas4.png"
            alt="Collage Image 1"
            className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-slate-800"
          />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/4 left-1/4 w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 z-10"
        >
          <img
            src="/about/vikas2.png"
            alt="Collage Image 2"
            className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-slate-800"
          />
        </motion.div>
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/2 left-1/2 w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 z-20"
        >
          <img
            src="/about/vikas.png"
            alt="Collage Image 3"
            className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-slate-800"
          />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-5 max-w-xl text-center md:text-start items-center md:items-start"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white"
        >
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Me
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300"
        >
          My passion for software development stems from a love for creative
          problem-solving. I thrive on turning complex challenges into elegant,
          user-friendly applications.
        </motion.p>
        
        <motion.div variants={itemVariants} className="w-full mt-4">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <p className="text-lg text-gray-300">Academic CGPA</p>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">9.39</p>
            </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full mt-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Core Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                    <span className="text-gray-300">Next.js</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                    <span className="text-gray-300">MERN Stack</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    <span className="text-gray-300">Databases</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <span className="text-gray-300">Deployment</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <span className="text-gray-300">DSA</span>
                </div>
            </div>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href="/project/Resume.pdf"
          download
          className="mt-6 py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center gap-2"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download CV
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default About;

