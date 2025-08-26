







// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";

// // --- SVG ICONS ---
// const FiX = () => (
//   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//     <line x1="18" y1="6" x2="6" y2="18"></line>
//     <line x1="6" y1="6" x2="18" y2="18"></line>
//   </svg>
// );

// const FiArrowRight = () => (
//   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//     <polyline points="12 5 19 12 12 19"></polyline>
//   </svg>
// );

// const FiChevronsDown = () => (
//   <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//     <polyline points="7 13 12 18 17 13"></polyline>
//     <polyline points="7 6 12 11 17 6"></polyline>
//   </svg>
// );


// // ## FIX 1: Define a strict type for your project data.
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   images: string[];
//   video?: string;
//   link: string;
//   tech: string[];
// }


// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Bonzo Games",
//     description: "A happy place where you can play classic games for some fun.",
//     images: ["/project/bonzo.png", "/project/bonzo1.png", "/project/bonzo2.png"],
//     video: "/project/bonzoVideo.mp4",
//     link: "https://bonzo-gaming-website.onrender.com",
//     tech: ["Socket.IO", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript", "EJS"],
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "My personal portfolio built with Next.js and Tailwind CSS.",
//     images: ["/project/portfolio.png", "/project/portfolio1.png", "/project/portfolio2.png"],
//     link: "https://portfolio-website-git-main-vikas-gautams-projects-44fbb49c.vercel.app/",
//     tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
//     video: "/project/portfolio.mp4",
//   },
//   {
//     id: 3,
//     title: "CogniCare AI",
//     description: "Your Personal Mental Therapist.",
//     images: ["/project/cogni1.png", "/project/cogni.png", "/project/cogni2.png"],
//     link: "https://cogni-care-your-supportive-chatbot.vercel.app/",
//     tech: ["Next.js", "Gemini AI", "Tailwind CSS", "TypeScript"],
//     video: "/project/cogniVideo.mp4",
//   },
//   {
//       id: 4,
//       title: "Multithreaded Java Web Server",
//       description: "A high-performance TCP server in Java supporting multiple concurrent clients using a thread pool.",
//       images: [
//         "/project/multi.png", // screenshot of console or UI
//         "/project/multi2.png", // Docker setup screenshot
//         "/project/multi3.png"  // optional: code snippet
//       ],
//       video: "/project/multi.mp4", // recorded live demo
//       link: "https://github.com/yourusername/multithreaded-java-server",
//       tech: ["Java", "Sockets"]
// }

// ];





// // --- ANIMATION VARIANTS ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 50, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// const modalVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.8,
//     transition: {
//       duration: 0.3,
//       ease: "easeIn",
//     },
//   },
// };

// // --- MAIN COMPONENT ---
// export default function ProjectSection() { // Renamed from App to be more descriptive
//   // ## FIX 2: Use the new Project type for the state, instead of 'any'.
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   // ## FIX 3: Add this useEffect hook to control body scrolling.
//   useEffect(() => {
//     if (selectedProject) {
//       // When modal is open, disable scrolling on the body
//       document.body.style.overflow = 'hidden';
//     } else {
//       // When modal is closed, restore scrolling
//       document.body.style.overflow = 'unset';
//     }

//     // Cleanup function to restore scrolling when the component unmounts
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedProject]); // This effect runs only when selectedProject changes

//   // Custom Image component to replicate basic Next.js Image behavior
//   const Image = ({ src, alt, fill, className }: { src: string; alt: string; fill?: boolean; className?: string }) => (
//     <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
//         <img src={src} alt={alt} className={`object-cover ${className}`} style={{ position: fill ? 'absolute' : 'relative', width: '100%', height: '100%' }} />
//     </div>
//   );

//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       variants={containerVariants}
//       viewport={{ once: true, amount: 0.2 }}
//       className="py-20 sm:py-28 px-4 md:px-10 text-white relative z-10 min-h-screen bg-transparent"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 sm:mb-20 tracking-tighter"
//         >
//           My Creations
//         </motion.h2>

//         <motion.div
//           variants={containerVariants}
//           className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               onClick={() => setSelectedProject(project)}
//               className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group relative"
//               style={{
//                 transformStyle: "preserve-3d",
//                 transform: "perspective(1000px)",
//               }}
//             >
//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                   rotateX: 10,
//                   rotateY: -10,
//                   boxShadow: "0px 30px 60px -10px rgba(128, 90, 213, 0.5)",
//                 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="relative w-full h-64 sm:h-80"
//               >
//                 <Image
//                   src={project.images[0]}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//               </motion.div>

//               <div className="p-6 sm:p-8 absolute bottom-0 left-0 right-0">
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-tight">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {project.description}
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
//                 <FiArrowRight />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedProject(null)}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-slate-900/70 border border-white/20 rounded-3xl w-full max-w-4xl h-[90vh] overflow-y-auto shadow-2xl relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white z-50 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors text-2xl"
//               >
//                 <FiX />
//               </button>

//               <div className="relative h-64 sm:h-96">
//                 <Image
//                   src={selectedProject.images[0]}
//                   alt={selectedProject.title}
//                   fill
//                   className="object-cover rounded-t-3xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
//                 <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
//                   <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">
//                     {selectedProject.title}
//                   </h2>
//                 </div>
//               </div>

//               <div className="p-6 sm:p-10">
//                 <p className="text-base sm:text-lg text-gray-300 mb-8">
//                   {selectedProject.description}
//                 </p>

//                 {selectedProject.video && (
//                   <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">
//                     <video
//                       src={selectedProject.video}
//                       // controls
//                       className="w-full  object-cover"
//                       autoPlay
//                       loop
//                       muted
//                       poster={selectedProject.images[0]}

//                     />
//                   </div>
//                 )}

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//                   {selectedProject.images.slice(1).map((img: string) => (
//                     <div
//                       key={img}
//                       className="relative h-48 sm:h-64 rounded-xl overflow-hidden"
//                     >
//                       <Image
//                         src={img}
//                         alt={selectedProject.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
// {/* 
//                 <div className="flex justify-center">
//                   <a
//                     href={selectedProject.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-8 inline-block text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
//                   >
//                     View Project
//                   </a>
//                 </div>
//                  <div className="flex justify-center">
//                  <button className="mt-8 inline-block text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
//                   onClick={() => setSelectedProject(null)}
//                   >
//                   Close
//                  </button>
//                 </div> */}
//                 <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//                     <a
//                       href={selectedProject.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
//                     >
//                       View Project
//                     </a>
//                     <button
//                       className="flex-1 text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
//                       onClick={() => setSelectedProject(null)}
//                     >
//                       Close
//                     </button>
//                   </div>

//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1 }}
//         viewport={{ once: true, amount: 0.2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white hidden sm:flex"
//       >
//         <span className="text-sm uppercase tracking-widest">Scroll Down</span>
//         <div className="text-2xl animate-bounce">
//             <FiChevronsDown />
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// };








"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Icons ---
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

const FiGithub = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

// --- Data & Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string[];
  keyFeatures: string[];
  images: string[];
  video?: string;
  link: string;
  sourceCode?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bonzo Games",
    description: "A happy place where you can play classic games for some fun.",
    longDescription: [
      "Bonzo Games is an interactive web platform that brings classic multiplayer games to life. It leverages real-time communication through Socket.IO to create a seamless and engaging user experience.",
      "The backend is powered by Node.js and MongoDB, ensuring robust data management and scalability. User authentication is handled securely with JWT, protecting user data and session information."
    ],
    keyFeatures: [
      "Real-time multiplayer functionality with Socket.IO.",
      "Secure user authentication using JSON Web Tokens (JWT).",
      "Classic games like Tic-Tac-Toe and Rock-Paper-Scissors.",
      "Scalable backend with Node.js and MongoDB."
    ],
    images: ["/project/bonzo.png", "/project/bonzo1.png", "/project/bonzo2.png"],
    video: "/project/bonzoVideo.mp4",
    link: "https://bonzo-gaming-website.onrender.com",
    sourceCode: "https://github.com/yourusername/bonzo-games",
    tech: ["Socket.IO", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript", "EJS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    longDescription: [
        "This portfolio is a modern, fully responsive single-page application built with Next.js, showcasing my skills and projects in a clean and visually appealing manner.",
        "It features smooth page transitions and animations powered by Framer Motion, providing an exceptional user experience. The design is implemented with Tailwind CSS for rapid and consistent styling."
    ],
    keyFeatures: [
        "Built with Next.js for server-side rendering and performance.",
        "Fluid animations and transitions using Framer Motion.",
        "Fully responsive design with Tailwind CSS.",
        "TypeScript for type safety and improved developer experience."
    ],
    images: ["/project/portfolio.png", "/project/portfolio1.png", "/project/portfolio2.png"],
    link: "https://portfolio-website-git-main-vikas-gautams-projects-44fbb49c.vercel.app/",
    sourceCode: "https://github.com/yourusername/portfolio-website",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    video: "/project/portfolio.mp4",
  },
  {
    id: 3,
    title: "CogniCare AI",
    description: "Your Personal Mental Therapist.",
    longDescription: [
        "CogniCare AI is a supportive chatbot designed to provide a safe space for users to express their thoughts and feelings. It's built to be an empathetic listener and a helpful companion for mental well-being.",
        "The core of the application is powered by the Gemini AI API, enabling natural and context-aware conversations. The frontend is built with Next.js and TypeScript, ensuring a type-safe and performant user interface."
    ],
    keyFeatures: [
        "Intelligent and empathetic conversations powered by Gemini AI.",
        "Real-time chat interface built with Next.js.",
        "Modern and calming UI designed with Tailwind CSS.",
        "A safe and non-judgmental space for users."
    ],
    images: ["/project/cogni1.png", "/project/cogni.png", "/project/cogni2.png"],
    link: "https://cogni-care-your-supportive-chatbot.vercel.app/",
    sourceCode: "https://github.com/yourusername/cognicare-ai",
    tech: ["Next.js", "Gemini AI", "Tailwind CSS", "TypeScript"],
    video: "/project/cogniVideo.mp4",
  },
  {
    id: 4,
    title: "Multithreaded Java Web Server",
    description: "A high-performance TCP server in Java supporting multiple concurrent clients.",
    longDescription: [
        "This project is a robust, multithreaded TCP server built from scratch in Java. It demonstrates core concepts of network programming and concurrency by efficiently handling multiple simultaneous client connections using a thread pool.",
        "It is designed for high performance and low latency, making it suitable for applications that require reliable and concurrent data handling. The implementation uses Java's native Socket library."
    ],
    keyFeatures: [
        "Handles over 10,000 concurrent requests depending on device.",
        "Efficiently manages client connections using a thread pool.",
        "Built from scratch using Java Sockets for low-level control.",
        "Demonstrates a strong understanding of concurrency and networking."
    ],
    images: ["/project/multi.png", "/project/multi2.png", "/project/multi3.png"],
    video: "/project/multi.mp4",
    link: "https://github.com/yourusername/multithreaded-java-server",
    sourceCode: "https://github.com/yourusername/multithreaded-java-server",
    tech: ["Java", "Sockets", "Concurrency"]
  }
];

// --- Animation Variants ---
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

// --- Custom Hook for Scroll Lock ---
const useScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
};


export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Use the custom hook to handle scroll locking
  useScrollLock(!!selectedProject);

  const Image = ({ src, alt, fill, className }: { src: string; alt: string; fill?: boolean; className?: string }) => (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
        <img src={src} alt={alt} className={`object-cover ${className}`} style={{ position: fill ? 'absolute' : 'relative', width: '100%', height: '100%' }} />
    </div>
  );

  return (
    <motion.section
      id="projects" 
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
                className="absolute top-6 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 text-white z-50 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors text-2xl"
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
                <div className="space-y-4 text-base sm:text-lg text-gray-300 mb-8">
                    {selectedProject.longDescription.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                </div>


                {selectedProject.video && (
                  <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <video
                      src={selectedProject.video}
                      className="w-full object-cover"
                      autoPlay
                      loop
                      muted
                      poster={selectedProject.images[0]}
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

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 text-center bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        View Live Project <FiArrowRight />
                    </a>
                    {selectedProject.sourceCode && (
                         <a
                         href={selectedProject.sourceCode}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-full sm:w-auto flex items-center justify-center gap-2 text-center bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                       >
                         Source Code <FiGithub />
                       </a>
                    )}
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