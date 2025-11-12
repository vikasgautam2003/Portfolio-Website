"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  Variants,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

// A reusable SVG icon component for LinkedIn
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// New AnimatedCounter component to "flex" the CGPA
interface AnimatedCounterProps {
  to: number;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(2));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2, // Animation duration
      ease: "easeOut",
    });
    return controls.stop;
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
};


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Skill data array for easier management
const skills = [
  { name: "Next.js", icon: "📦" },
  { name: "MERN Stack", icon: "📚" },
  { name: "Databases", icon: "🗃️" },
  { name: "AI / ML", icon: "🤖" },
  { name: "Deployment", icon: "🚀" },
  { name: "DSA", icon: "💻" },
  { name: "LLM", icon: "🧠"},
];

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const rotateX = useTransform(mouseY, [0, 500], [20, -20]);
  const rotateY = useTransform(mouseX, [0, 500], [-20, 20]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(Infinity);
    mouseY.set(Infinity);
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-screen w-full px-6 sm:px-10 lg:px-20 py-24 overflow-hidden"
    >
      {/* LEFT COLUMN - 3D INTERACTIVE IMAGE */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d", // FIXED: Moved inside style object
        }}
        variants={itemVariants}
        className="relative w-full max-w-sm mx-auto lg:max-w-md h-[400px] sm:h-[500px] rounded-3xl bg-slate-900/40 border border-white/10 shadow-2xl transition-all duration-300"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-5"
        >
          <img
            src="/about/vikas.png"
            alt="Vikas"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div 
          style={{ transform: "translateZ(20px)" }}
          className="absolute inset-0 rounded-3xl border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20" 
        />
      </motion.div>

      {/* RIGHT COLUMN - TEXT CONTENT */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-6 max-w-xl text-center lg:text-start items-center lg:items-start"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white"
        >
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Me
          </span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300">
          My passion for software development stems from a love for creative
          problem-solving. I thrive on turning complex challenges into elegant,
          user-friendly applications.
        </motion.p>
        
        <motion.div variants={itemVariants} className="w-full max-w-xs lg:max-w-none mt-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/10">
            <p className="text-md sm:text-lg text-gray-300 uppercase tracking-widest">Academic CGPA</p>
            <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
               <AnimatedCounter to={9.39} />
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full mt-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Core Skills</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map(skill => (
                    <motion.div 
                        key={skill.name}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2 text-sm text-gray-200"
                    >
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center lg:justify-start">
           <motion.a
            href="https://www.linkedin.com/in/vikas-gautam-ab5ab8278/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 w-full sm:w-auto justify-center py-3 px-6 bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-500 transition-all duration-300"
          >
            <LinkedInIcon />
            Connect with Me
          </motion.a>

          <motion.a
            href="/project/resume1.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 w-full sm:w-auto justify-center py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            <ArrowDownTrayIcon className="w-6 h-6" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;