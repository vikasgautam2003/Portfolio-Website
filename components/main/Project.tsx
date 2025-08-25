







"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- SVG ICONS ---
const FiX = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const FiArrowRight = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const FiChevronsDown = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <polyline points="7 13 12 18 17 13"></polyline>
    <polyline points="7 6 12 11 17 6"></polyline>
  </svg>
);


// ## FIX 1: Define a strict type for your project data.
interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  video?: string;
  link: string;
  tech: string[];
}

// --- DATA ---
const projects: Project[] = [
  {
    id: 1,
    title: "Bonzo Games",
    description: "A happy place where you can play classic games for some fun.",
    images: ["/project/bonzo.png", "/project/bonzo1.png", "/project/bonzo2.png"],
    video: "/project/bonzoVideo.mp4",
    link: "https://bonzo-gaming-website.onrender.com",
    tech: ["React", "Socket.IO", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    images: ["/project/portfolio.png", "/project/portfolio1.png", "/project/portfolio2.png"],
    link: "https://portfolio-website-git-main-vikas-gautams-projects-44fbb49c.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    video: "/project/portfolio.mp4",
  },
  {
    id: 3,
    title: "CogniCare AI",
    description: "Your Personal Mental Therapist.",
    images: ["/project/cogni1.png", "/project/cogni.png", "/project/cogni2.png"],
    link: "https://cogni-care-your-supportive-chatbot.vercel.app/",
    tech: ["Next.js", "Gemini AI", "Tailwind CSS", "Firebase"],
    video: "/project/cogniVideo.mp4",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// --- MAIN COMPONENT ---
export default function ProjectSection() { // Renamed from App to be more descriptive
  // ## FIX 2: Use the new Project type for the state, instead of 'any'.
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // ## FIX 3: Add this useEffect hook to control body scrolling.
  useEffect(() => {
    if (selectedProject) {
      // When modal is open, disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // When modal is closed, restore scrolling
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]); // This effect runs only when selectedProject changes

  // Custom Image component to replicate basic Next.js Image behavior
  const Image = ({ src, alt, fill, className }: { src: string; alt: string; fill?: boolean; className?: string }) => (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
        <img src={src} alt={alt} className={`object-cover ${className}`} style={{ position: fill ? 'absolute' : 'relative', width: '100%', height: '100%' }} />
    </div>
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 sm:py-28 px-4 md:px-10 text-white relative z-10 min-h-screen bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 sm:mb-20 tracking-tighter"
        >
          My Creations
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group relative"
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: -10,
                  boxShadow: "0px 30px 60px -10px rgba(128, 90, 213, 0.5)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-64 sm:h-80"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </motion.div>

              <div className="p-6 sm:p-8 absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                <FiArrowRight />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-slate-900/70 border border-white/20 rounded-3xl w-full max-w-4xl h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white z-50 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors text-2xl"
              >
                <FiX />
              </button>

              <div className="relative h-64 sm:h-96">
                <Image
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <p className="text-base sm:text-lg text-gray-300 mb-8">
                  {selectedProject.description}
                </p>

                {selectedProject.video && (
                  <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <video
                      src={selectedProject.video}
                      // controls
                      className="w-full  object-cover"
                      autoPlay
                      loop
                      muted

                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {selectedProject.images.slice(1).map((img: string) => (
                    <div
                      key={img}
                      className="relative h-48 sm:h-64 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
{/* 
                <div className="flex justify-center">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    View Project
                  </a>
                </div>
                 <div className="flex justify-center">
                 <button className="mt-8 inline-block text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => setSelectedProject(null)}
                  >
                  Close
                 </button>
                </div> */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      View Project
                    </a>
                    <button
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={() => setSelectedProject(null)}
                    >
                      Close
                    </button>
                  </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white hidden sm:flex"
      >
        <span className="text-sm uppercase tracking-widest">Scroll Down</span>
        <div className="text-2xl animate-bounce">
            <FiChevronsDown />
        </div>
      </motion.div>
    </motion.section>
  );
};




