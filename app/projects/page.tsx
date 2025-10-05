



"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";


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

// --- PROJECT TYPE ---
interface Project {
  id: number;
  title: string;
  description: string;
  longDescriptions: string[];
  images: string[];
  video?: string;
  link: string;
  sourceCode: string;
  tech: string[];
  keyFeatures: string[];
}


const projects: Project[] = [

           {
    "id": 1,
    "title": "Sentinel.ai Mock Test Platform",
    "description": "A full-stack, AI-powered proctoring platform to ensure academic integrity in online examinations.",
    "longDescriptions": [
      "Sentinel.ai provides a secure and fair environment for online testing, utilizing a sophisticated, multi-service architecture to monitor, detect, and report suspicious activities in real-time.",
      "The platform features a Next.js frontend, a Node.js backend for core logic, and a separate Python/FastAPI microservice for AI analysis. It leverages OpenCV for visual analysis, WebRTC for real-time streams, and Socket.IO for instant communication, all deployed in a modern cloud environment."
    ],
    "images": ["/project/s2.png", "/project/s.png", "/project/s1.png"],
    "video": "/project/s.mp4",
    "link": "https://sentinalai-jade.vercel.app/",
    "sourceCode": "https://github.com/vikasgautam2003/ai_cheating_in_test_detector",
    "tech": ["Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "Python", "MongoDB", "Socket.IO", "JWT", "OpenCV", "WebRTC", "Tailwind CSS", "Docker", "Vercel", "Render"],
    "keyFeatures": [
      "Real-time AI proctoring (face, voice, and tab-switch detection)",
      "Two-tiered violation system (Fatal Strikes & Suspicion Score)",
      "Multi-stage, secure test-taking environment with identity verification",
      "Comprehensive dashboards with analytics for both students and admins",
      "Full-stack, multi-service architecture with a dedicated, Dockerized AI backend"
    ]
  }, 

               
    {
  "id": 2,
  "title": "QueryAI",
  "description": "An AI-powered answer engine that provides summarized, sourced answers from real-time web results, inspired by Perplexity.",
  "longDescriptions": [
    "QueryAI is a full-stack, AI-native search engine designed to move beyond traditional links. It fetches real-time information from the web using SerpApi, then leverages the Google Gemini LLM to synthesize comprehensive, accurate answers with inline citations.",
    "The platform features a decoupled architecture with a Next.js/React frontend and a custom Express.js backend. It includes a complete user authentication system using JWT, a personalized dashboard with search history, a multi-widget 'Discover' page with live data, and a cutting-edge voice-to-voice conversational chat interface."
  ],
  "images": [
    "/project/q.png",
    "/project/q1.png",
    "/project/q2.png",
    
  ],
  "video": "/project/q.mp4",
  "link": "https://query-ai-five.vercel.app/",
  "sourceCode": "https://github.com/vikasgautam2003/query-ai-search-engine",
  "tech": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcryptjs",
    "SerpApi",
    "Google Gemini API",
    "GNews API",
    "OpenWeatherMap API",
    "Alpha Vantage API",
    "Web Speech API"
  ],
  "keyFeatures": [
    "AI-powered answers with real-time web search (SerpApi & Gemini)",
    "Full user authentication system with JWT (Express & MongoDB)",
    "Voice-to-voice conversational search interface",
    "Personalized user dashboard with search history",
    "Multi-widget 'Discover' page with live news, weather, and market data",
    "Distinct 'Search' vs. 'Research' modes with different data sources (Google vs. Google Scholar)"
  ]
},

  {
    id: 3,
    title: "Bonzo Games",
    description: "A happy place where you can play classic games for some fun.",
    longDescriptions: [
      "Bonzo Games allows users to connect and play real-time multiplayer games with smooth animations and responsive design across devices.",
      "The platform is built with Node.js and Socket.IO, providing secure authentication, persistent storage, and an engaging user interface using Tailwind CSS."
    ],
    images: ["/project/bonzo.png", "/project/bonzo1.png", "/project/bonzo2.png"],
    video: "/project/bonzoVideo.mp4",
    link: "https://bonzo-gaming-website.onrender.com",
    sourceCode: "https://github.com/vikasgautam2003/Bonzo-Gaming-Website",
    tech: ["Socket.IO", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript", "EJS"],
    keyFeatures: [
      "Real-time multiplayer gaming",
      "User authentication with JWT",
      "Responsive design with Tailwind CSS",
      "Interactive UI with animations"
    ]
  },
  {
    id: 4,
    title: "Hostel Committee Website",
    description: "A full-stack platform for managing hostel events, student participation, and discussions.",
    longDescriptions: [
        "This website allows admins to create and manage hostel events, while students can register, participate, and engage in discussions.",
        "It features secure JWT authentication, media uploads via Cloudinary, responsive design, and a dynamic interface built with React for a smooth user experience."
    ],
    images: ["/project/hostel2.png", "/project/hostel1.png", "/project/hostel.png"],
    video: "/project/hostel.mp4",
    link: "https://hostel-committee-full-stack-website-vsa3.onrender.com/",
    sourceCode: "https://github.com/vikasgautam2003/hostel-committee-full-stack-website",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary", "JWT"],
    keyFeatures: [
        "Event creation and management",
        "Student registration for events",
        "Discussion forum for hostel residents",
        "Secure media uploads with Cloudinary"
    ]
}
,
  {
    id: 5,
    title: "CogniCare AI",
    description: "Your Personal Mental Therapist.",
    longDescriptions: [
      "CogniCare AI offers personalized mental health support using advanced AI chat technology for interactive and empathetic guidance.",
      "The platform is built with Next.js, Gemini API, and TypeScript, providing secure sessions and a modern, responsive UI with Tailwind CSS."
    ],
    images: ["/project/cogni1.png", "/project/cogni.png", "/project/cogni2.png"],
    video: "/project/cogniVideo.mp4",
    link: "https://cogni-care-your-supportive-chatbot.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/CogniCare---Your-Supportive-Chatbot",
    tech: ["Next.js", "Gemini AI", "Tailwind CSS", "TypeScript"],
    keyFeatures: [
      "AI-based mental health support",
      "Interactive chat interface",
      "Customizable user sessions",
      "Secure authentication"
    ]
  },
  {
    id: 6,
    title: "Multithreaded Java Web Server",
    description: "A high-performance TCP server in Java supporting multiple concurrent clients using a thread pool.",
    longDescriptions: [
      "This Java web server manages multiple clients simultaneously using a custom thread pool, ensuring high efficiency and scalability.",
      "It includes detailed logging, performance monitoring, and demonstrates advanced multithreading and networking concepts for robust server-side applications."
    ],
    images: ["/project/multi.png", "/project/multi2.png", "/project/multi3.png"],
    video: "/project/multi.mp4",
    link: "https://github.com/vikasgautam2003/Multithreaded-Web-server",
    sourceCode: "https://github.com/vikasgautam2003/Multithreaded-Web-server",
    tech: ["Java", "Sockets"],
    keyFeatures: [
      "High-performance multithreading",
      "Concurrent client handling",
      "Can handle upto 10000 requests simultaneously(depending on the device)",
      "Detailed logging and monitoring"
    ]
  }, 

  
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
};

// --- MAIN COMPONENT ---
export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const Image = ({ src, alt, fill, className }: { src: string; alt: string; fill?: boolean; className?: string }) => (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <img src={src} alt={alt} className={`object-cover ${className}`} style={{ position: fill ? 'absolute' : 'relative', width: '100%', height: '100%' }} />
    </div>
  );

  return (
    <motion.section initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.2 }} className="py-20 sm:py-28 px-4 md:px-10 text-white relative z-10 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 sm:mb-20 tracking-tighter">
          My Creations
        </motion.h2>

        <motion.div variants={containerVariants} className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2">
          {projects.map(project => (
            <motion.div key={project.id} variants={itemVariants} onClick={() => setSelectedProject(project)} className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group relative" style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}>
              <motion.div whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10, boxShadow: "0px 30px 60px -10px rgba(128, 90, 213, 0.5)" }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative w-full h-64 sm:h-80">
                <Image src={project.images[0]} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </motion.div>

              <div className="p-6 sm:p-8 absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-tight">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">{tech}</span>)}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl"><FiArrowRight /></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="bg-slate-900/70 border border-white/20 rounded-3xl w-full max-w-4xl h-[90vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white z-50 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors text-2xl"><FiX /></button>

              <div className="relative h-64 sm:h-96">
                <Image src={selectedProject.images[0]} alt={selectedProject.title} fill className="object-cover rounded-t-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <p className="text-base sm:text-lg text-gray-300 mb-4 font-bold">{selectedProject.description}</p>


                {selectedProject.id === 2 && (
                  <div className="mb-6 p-4 rounded-lg bg-yellow-900/20 border-l-4 border-yellow-500">
                    <p className="text-yellow-400 text-sm sm:text-base font-medium leading-relaxed">
                      Currently in development. Users may experience some issues. Nonetheless, the application is fully operational, so feel free to explore and provide feedback.
                    </p>
                  </div>
                )}

                {/* TWO LONG DESCRIPTIONS */}
                {selectedProject.longDescriptions.map((ld, idx) => (
                  <p key={idx} className="text-gray-300 text-sm sm:text-base mb-4">{ld}</p>
                ))}

                {/* KEY FEATURES */}
                <div className="mb-6 pt-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {selectedProject.keyFeatures.map((feature, idx) => <li key={idx}>{feature}</li>)}
                  </ul>
                </div>

                {/* SOURCE CODE BUTTON */}
                {/* <div className="flex justify-center mb-6">
                  <a href={selectedProject.sourceCode} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    View Source Code
                  </a>
                </div> */}

                {/* SOURCE CODE BUTTON */}
                    <div className="flex justify-center mb-12 pt-7">
                      <a 
                        href={selectedProject.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        {/* Code Icon */}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="currentColor" 
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                        </svg>
                        View Source Code
                      </a>
                    </div>


              {selectedProject.video && (
                  <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <video src={selectedProject.video} className="w-full object-cover" autoPlay loop muted poster={selectedProject.images[0]} />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {selectedProject.images.slice(1).map(img => (
                    <div key={img} className="relative h-48 sm:h-64 rounded-xl overflow-hidden">
                      <Image src={img} alt={selectedProject.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>

                {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">View Project</a>
                  <button className="flex-1 text-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg" onClick={() => setSelectedProject(null)}>Close</button>
                </div> */}

<div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
  {/* View Project Button */}
  <a
    href={selectedProject.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-white text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    {/* External Link Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h7m0 0v7m0-7L10 20" />
    </svg>
    View Project
  </a>

  {/* Close Button */}
  <button
    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-white text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
    onClick={() => setSelectedProject(null)}
  >
    {/* Close Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    Close
  </button>
</div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     
    </motion.section>
  );
}
