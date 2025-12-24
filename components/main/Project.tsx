





"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { useRouter } from "next/navigation";
import Image from "next/image";


const FiX = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const FiArrowRight = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);


interface Project {
  id: number;
  title: string;
  description: string;
  longDescriptions: string[];
  images: string[];
  video?: string;
  link?: string;
  sourceCode?: string;
  message?: string;
  tech: string[];
  keyFeatures: string[];
}


const projects: Project[] = [
  {
    id: 1,
    title: "Package Forge - Autonomous NPM Package Architect",
    description: "A Private PaaS that autonomously architects, tests in Docker, and publishes npm packages using a hybrid cloud-local engine.",
    longDescriptions: [
        "Package Forge bridges the gap between AI code generation and reliable software delivery. It utilizes a novel 'Hybrid Cloud' architecture where the frontend lives on the Edge (Vercel) while the heavy compute and secure sandboxing happen on your local machine.",
        "Unlike simple code generators, Package Forge implements a rigorous 'Quality Gate'. Every line of AI-generated code is compiled and tested inside an ephemeral Docker container. If the build fails, the AI self-heals and retries automatically before the user ever sees the code."
    ],
    
    images: ["/project/pack.png", "/project/Pack1.png", "/project/Pack2.png"],
    video: "/project/pack.mp4", 
    link: "https://package-forge-web.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/Package-Forge/", 
    tech: [
        "Next.js 14 (Turborepo)",
        "Node.js Worker",
        "Docker & Sandboxing",
        "Upstash Redis & BullMQ",
        "Google Gemini Pro",
        "Tailwind CSS"
    ],
    "message": "To generate packages, the companion 'Worker' script must be running on your local machine to handle Docker operations.",
    keyFeatures: [
        "🌩️ Hybrid 'Hacker' Architecture: Combines the accessibility of Vercel with the unlimited compute power of your local machine via a Redis bridge.",
        "☣️ Docker 'Hazard Suit': Safely executes and validates AI-generated code in ephemeral containers to prevent broken builds.",
        "🧠 Self-Healing AI: If a package fails unit tests, the system automatically feeds the error logs back to Gemini to fix the code without human intervention.",
        "📡 Mission Control Dashboard: A real-time UI featuring live streaming logs, file system exploration, and a visual heartbeat monitor.",
        "💓 Live System Heartbeat: Smart synchronization that detects if your local worker is online or sleeping and updates the UI instantly.",
        "🚀 One-Click NPM Publishing: Handles the complex process of versioning, packing, and pushing to the public npm registry automatically."
    ]
},
{
  "id": 3,
  "title": "OpsChat — Natural Language DevOps Interface",
  "description": "A chat-driven DevOps platform that allows developers to interact with Docker containers and Kubernetes workloads locally using plain English, without writing commands.",
  "longDescriptions": [
    "OpsChat is a safety-first DevOps interface designed to remove the cognitive burden of learning Docker and Kubernetes commands. Instead of exposing CLI tools, it translates natural language intent into bounded, read-only infrastructure operations, ensuring deterministic and secure execution.",
    "The system is built on a queue-based execution architecture with isolated workers for Docker and Kubernetes, real-time terminal log streaming, and intelligent health analysis. OpsChat also includes a local presence sensor that detects when the execution environment is unavailable and clearly communicates system readiness to the user, preventing silent failures."
  ],
  "images": [
    "/project/dev.png",
    "/project/dev1.png",
    "/project/dev2.png"
  ],
  "video": "/project/dev.mp4",
  "link": "https://chat-ops-steel.vercel.app/",
  "sourceCode": "https://github.com/vikasgautam2003/Chat-Ops",
  "tech": [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "BullMQ",
    "Redis",
    "Docker",
    "Kubernetes",
    "WebSockets",
    "Groq LLM API",
    "Tailwind CSS"
  ],
  "message": "OpsChat is intentionally scoped to local environments and read-only operations to prioritize safety, clarity, and beginner-friendly DevOps exploration.",
  "keyFeatures": [
    "Natural language interface for Docker and Kubernetes without CLI usage",
    "Deterministic intent-to-action routing with strict safety constraints",
    "Isolated worker architecture for Docker and Kubernetes operations",
    "Real-time terminal-style log streaming via WebSockets",
    "Kubernetes health intelligence with human-readable explanations",
    "Global system status indicator showing execution readiness",
    "Local execution presence detection to prevent unsafe operations",
    "Clean separation between visibility, generation, and execution layers"
  ]
}
,
     {
    "id": 2,
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
    "tech": ["Next.js", "Node.js","FastAPI", "Python", "MongoDB", "Socket.IO", "OpenCV", "WebRTC"],
    "message":"This website is best viewed on larger devices like desktops, laptops, or tablets. Mobile devices are not fully supported at the moment.",
    "keyFeatures": [
      "Real-time AI proctoring (face, voice, and tab-switch detection)",
      "Two-tiered violation system (Fatal Strikes & Suspicion Score)",
      "Multi-stage, secure test-taking environment with identity verification",
      "Comprehensive dashboards with analytics for both students and admins",
      "Full-stack, multi-service architecture with a dedicated, Dockerized AI backend"
    ]
  },


{
    id: 3,
    title: "Draftify.ai - The AI Frontend Web App Architect",
    description: "A next-generation AI coding platform that generates, previews, and refines Frontend instantly.",
    longDescriptions: [
        "Draftify.ai redefines rapid prototyping by combining the speed of LLMs with a secure, browser-based execution environment. It allows users to generate complex, interactive React applications just by describing them in plain English.",
        "Unlike standard code generators, Draftify features a 'Simulated Backend' architecture that mimics real-world database latency and state management, making generated apps feel fully functional."
    ],
  
    images: ["/project/gen.png", "/project/gen1.png", "/project/gen2.png"],
    video: "/project/gen.mp4", 
    link: "https://draftify-ai-omega.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/Draftify.ai", 
    tech: [
        "Next.js 14",
        "Google Gemini",
        "Sandpack",
        "Tailwind CSS & Lucide React",
        "Framer Motion",
        "Web Streams API"
    ],
    "message":"This website is best viewed on larger devices like desktops, laptops, or tablets. Mobile devices are not fully supported at the moment.",
    keyFeatures: [
        "🚀 Real-Time Streaming: Watch the code being written character-by-character with a 'Matrix-style' typing effect.",
        "🛡️ Sandboxed Execution: Safely renders generated React code in an isolated browser environment using Sandpack.",
        "🎨 Built-in UI Kit: Pre-loaded with a custom 'Shadcn-lite' component library so the AI generates polished, beautiful designs by default.",
        "💾 Simulated Backend: Mimics API calls, loading states, and database persistence using advanced state management techniques.",
        "🔄 Context-Aware Memory: The AI remembers your previous requests, allowing for iterative refinement (e.g., 'Make the button blue').",
        "📦 One-Click Export: Users can download their generated project as a production-ready React codebase."
    ]
},

{
    "id": 5,
    "title": "Minerva.ai : Medical RAG Assistant",
    "description": "An AI-powered system providing precise, health analysis based only on user-uploaded medical reports using Gemini and Pinecone.",
    "longDescriptions": [
        "Minerva.ai solves the core problem of generic AI in health by employing a strict Retrieval-Augmented Generation (RAG) architecture. When a user queries their health status, the system retrieves relevant information only from their indexed reports before calling the Gemini LLM for synthesis, ensuring high accuracy and reducing hallucination.",
        "The application features a secure, client-side document processing flow (File Upload -> Private Pinecone Indexing)."
    ],
    "images": ["/project/med.png", "/project/med1.png", "/project/med2.png"],
    "video": "/project/med.mp4",
    "link": "https://minervaai.vercel.app/",
    "sourceCode": "https://github.com/vikasgautam2003/minervaAI---RAG-chatbot",
    "tech": [
        "Next.js (TS)",
        "Gemini AI",
        "Pinecone",
        "LangChain.js",
        "Tailwind CSS",
        "Framer Motion"
    ],
    "keyFeatures": [
        "RAG for Health (Gemini + Pinecone)",
        "Zero-Knowledge Architecture (Client-side processing)",
        "Conversational Memory for Multi-Turn Consultations",
        "Isolated Data Handling (Pinecone Namespace per report)"
    ]
},

 {
    id: 6,
    title: "Hostel Committee Web Portal (HOSTYEL)",
    description: "A comprehensive Student Living OS and Hostel Management System powered by Generative AI.",
    longDescriptions: [
        "A full-scale digital ecosystem designed to digitize hostel life. It automates administrative tasks like room allocation, gate passes, and complaints while fostering a vibrant student community through a dedicated social feed.",
        "The platform stands out with its 'Hosty' AI Assistant—a RAG (Retrieval-Augmented Generation) chatbot that answers queries based on hostel rules. The UI features immersive, gamified elements like a 'System Boot' loader and magical modals, built with Framer Motion."
    ],
    images: ["/project/hostel2.png", "/project/hostel1.png", "/project/hostel.png"],
    video: "/project/hostel.mp4",
    link: "https://hostel-committee-full-stack-website.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/hostel-committee-full-stack-website",
    tech: [
        "React.js", 
        "Node.js & Express", 
        "MongoDB", 
        "Google Gemini AI", 
        "Pinecone Vector DB", 
        "Framer Motion", 
        "Cloudinary"
    ],
    keyFeatures: [
        "🧠 AI Concierge ('Hosty'): A RAG-based chatbot trained on hostel data to answer student queries instantly.",
        "🏨 Smart Booking Engine: Date-based room availability checks with conflict prevention logic.",
        "🛂 Gate Pass System: Digital leave application workflow with real-time Admin approval/rejection.",
        "📢 'Common Room' Feed: A social platform for students to post updates, photos, and view profiles.",
        "🛠️ 'Solve-It' Hub: A streamlined ticketing system for filing and tracking maintenance complaints.",
        "⚡ Immersive UI/UX: Features a 'Solo Leveling' style system-boot loader and animated interaction modals.",
        "🛡️ Admin Command Center: A dashboard to monitor bookings, manage requests, and broadcast announcements."
    ]
},

];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
  }, [selectedProject]);

  return (
    <section className="py-20 sm:py-28 px-4 md:px-10 text-white relative z-10 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 sm:mb-20 tracking-tighter">
          My Creations
          <span className="block text-base sm:text-lg md:text-xl mt-6 text-gray-500 tracking-wide leading-relaxed">
            Click on a project to explore its architecture, purpose, and story in detail.
          </span>
        </h2>

        <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="bg-black/20 border border-white/10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group relative backdrop-blur-xl"
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-4 sm:p-6 absolute bottom-0 w-full">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 mb-4">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <FiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <a
            href="/projects"
            className="px-7 py-3 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 transition"
          >
            ✦ View All Projects ✦
          </a>
        </div>

        <ProjectModal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </div>
    </section>
  );
}

function ProjectModal({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}) {
  return (
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900/70 border border-white/20 rounded-3xl w-full max-w-4xl h-[100vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full hover:bg-white/20"
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <p className="text-gray-300 text-lg font-bold mb-4">
                {selectedProject.description}
              </p>

              {selectedProject.message && (
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded-lg mb-6">
                  {selectedProject.message}
                </div>
              )}

              {selectedProject.longDescriptions.map((ld, i) => (
                <p key={i} className="text-gray-300 mb-4">
                  {ld}
                </p>
              ))}

              <h3 className="text-2xl font-bold mt-10 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {selectedProject.keyFeatures.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="flex justify-center my-10">
                <a
                  href={selectedProject.sourceCode}
                  target="_blank"
                  className="bg-green-600 px-6 py-3 rounded-full hover:bg-green-700"
                >
                  View Source Code
                </a>
              </div>

              {selectedProject.video && (
                <div className="rounded-xl overflow-hidden border border-white/10 mb-10 aspect-video">
                  <video
                    src={selectedProject.video}
                    autoPlay
                    loop
                    muted
                    className="w-full"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {selectedProject.images.slice(1).map((img, i) => (
                  <div
                    key={i}
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

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  className="flex-1 bg-purple-600 px-6 py-3 rounded-full text-center hover:bg-purple-700"
                >
                  View Project
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 bg-gray-800 px-6 py-3 rounded-full hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
