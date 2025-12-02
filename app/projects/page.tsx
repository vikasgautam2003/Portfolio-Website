






















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
  message?: string;
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
    id: 2,
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
    id: 3,
    title: "Draftify.ai - The AI Web App Architect",
    description: "A next-generation AI coding platform that generates, previews, and refines full-stack web applications instantly.",
    longDescriptions: [
        "Draftify.ai redefines rapid prototyping by combining the speed of LLMs with a secure, browser-based execution environment. It allows users to generate complex, interactive React applications just by describing them in plain English.",
        "Unlike standard code generators, Draftify features a 'Simulated Backend' architecture that mimics real-world database latency and state management, making generated apps feel fully functional."
    ],
  
    images: ["/project/gen.png", "/project/gen1.png", "/project/gen2.png"],
    video: "/project/gen.mp4", 
    link: "https://draftify-ai-builder.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/draftify-ai", 
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
    id: 4,
    title: "BackNest.ai – The AI Backend Architect",
    description: "A powerful AI-driven backend generator that produces complete, production-grade backend architectures with modular files, controllers, routes, models, middleware, and services — all from a single prompt.",
    longDescriptions: [
        "BackNest.ai transforms backend development by converting natural-language descriptions into fully modular, multi-file backend architectures. It supports Express, Next.js App Router, multiple databases, and generates clean, scalable folder structures.",
        "Unlike conventional API generators, BackNest.ai creates entire ecosystems — from routing layers and controllers to services, authentication logic, schemas, middleware, and utilities — ensuring production-ready quality out of the box."
    ],
  
    images: ["/project/back.png", "/project/back1.png", "/project/back2.png"],
    video: "/project/back.mp4",
    link: "https://backend-code-generator-node-js-next.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/Backend-code-generator-NODE-JS-NEXT-",
    
    tech: [
        "Next.js 14",
        "Google Gemini ",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "REST & Modular Architecture Standards"
    ],
    
    message: "For optimal experience, BackNest.ai is best used on desktop or laptop devices due to its multi-pane, development-style interface.",

    keyFeatures: [
        "🧩 Multi-File Backend Generation: Produces a complete folder structure including controllers, models, routes, middleware, utils, config, and services.",
        "⚙️ Runtime-Aware Engineering: Generates code tailored for Express.js or Next.js App Router with correct handlers, patterns, and conventions.",
        "🗄️ Database-Specific Logic: Mongoose, Prisma, PostgreSQL (pg), and Sequelize logic automatically integrated based on user selection.",
        "📁 File Tabs Interface: Users can switch between generated files (server.js, models/user.js, controllers/auth.js, etc.) in a smooth IDE-style UI.",
        "🧠 Smart Prompt Interpretation: Converts natural-language instructions into robust backend business logic with validation, sanitization, and error-handling.",
        "🔒 Production-Grade Patterns: Async/await, error boundaries, status codes, JWT auth, and modular folder structure generated by default.",
        "🚀 Zero Setup: Generate full backend projects instantly without any boilerplate or manual configuration."
    ]
}
,
{
    id: 5,
    title: "BlueprintX – AI System Architecture Generator",
    description: "An advanced AI architect that converts ideas into production-ready diagrams, tech stacks, and system explanations instantly.",
    
    longDescriptions: [
        "BlueprintX is a next-generation AI architecture assistant built to help engineers, founders, and students design scalable backend systems with unprecedented speed and clarity.",
        "The platform generates fully structured Mermaid diagrams, categorized tech stacks, scaling strategies, and deep system explanations – all through a Devin-style interface polished for a premium user experience."
    ],

    images: [
        "/project/sys.png",
        "/project/sys1.png",
        "/project/sys2.png"
    ],

    video: "/sys.mp4",

    link: "https://blueprintx.vercel.app/",
    sourceCode: "https://github.com/vikasgautam2003/BlueprintX.ai",

    tech: [
        "Next.js 15",
        "Google Gemini 2.5 Flash",
        "Groq LLM",
        "Mermaid.js",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI (custom components)",
        "Vercel Deployment"
    ],

    message: "Best experienced on desktops, laptops, or large tablets. The platform's diagramming and modals require a wider viewport for the full architecture workflow.",

    keyFeatures: [
        "🧠 Dual AI Modes: Architecture Mode (Gemini) and Tech Mentor Mode (Groq) for two completely different problem-solving experiences.",
        "📊 Instant Architecture Generation: Converts any idea into a clean, valid Mermaid diagram with strict grammar enforcement and auto-repair for broken syntax.",
        "🧰 Full Tech Stack Generator: Produces categorized tech stacks—Frontend, Backend, Database, Cache, DevOps, AI/ML, Queue, and more—with recommended + alternative technologies.",
        "📘 Deep Explanation Engine: Creates highly structured breakdowns covering architecture reasoning, scaling, protocols, caching, and security layers.",
        "🪟 Futuristic Modal System: Premium polished modals for Explanations, Tech Stacks, and Video Demo with glassmorphism and motion effects.",
        "🔍 Fullscreen Diagram Mode: View the architecture in full-screen for presentations or detailed inspection.",
        "⬇️ SVG Export: Download generated diagrams instantly in high-quality vector format.",
        "🤖 Devin-Style UI: Gradient glass panels, neon glows, depth shadows, and smooth animations for a futuristic developer experience.",
        "💬 Persistent Chat Memory: Conversations in both Architect and Tech modes retain context for iterative refinement.",
        "📽️ Demo Video Popup: Plays the project demo inside a premium 800px modal with descriptions below."
    ]
}
,


    {
  "id": 6,
  "title": "QueryAI",
  "description": "An AI-powered search engine that provides summarized, sourced answers from real-time web results, inspired by Perplexity.",
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
    "Node.js",
    "MongoDB",
    "SerpApi",
    "Google Gemini API",
    "WebRTC"
  ],
      "message":"This website is best viewed on larger devices like desktops, laptops, or tablets. Mobile devices are not fully supported at the moment.",

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
  "id": 7,
  "title": "CogniCare AI: RAG Mental Health Chatbot",
  "description": "A RAG-powered, empathetic AI chatbot for mental health support.",
  "longDescriptions": [
    "CogniCare AI provides safe, empathetic mental health support. It uses a **Retrieval-Augmented Generation (RAG)** pipeline to ensure all answers are grounded in a curated knowledge base of authoritative sources (like NIMH, WHO).",
    "Built with Next.js, LangChain, and Google Gemini, the AI retrieves factual context from a **Pinecone** vector database. This prevents AI hallucinations and provides users with reliable, evidence-based information in a supportive, interactive chat."
  ],
  "images": [
    "/project/cogni1.png",
    "/project/cogni.png",
    "/project/cogni2.png"
  ],
  "video": "/project/cogniVideo.mp4",
  "link": "https://cogni-care-your-supportive-chatbot.vercel.app/",
  "sourceCode": "https://github.com/vikasgautam2003/CogniCare---Your-Supportive-Chatbot",
  "tech": [
    "Next.js",
    "Google Gemini",
    "LangChain",
    "Pinecone",
    "Tailwind CSS",
    "TypeScript"
  ],
  "keyFeatures": [
    "**RAG-powered responses** for safe, factual answers",
    "Grounded in an **authoritative mental health knowledge base**",
    "**Critical safety system** for crisis language detection",
    "Empathetic, context-aware AI chat interface",
    "Prevents AI hallucinations on sensitive topics"
  ]
},
{
    "id": 8,
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
    id: 9,
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
{
    "id": 10,
    "title": "NeuraPost : Autonomous Social Media Agent",
    "description": "An AI-powered, multi-platform content automation system that autonomously creates and posts intelligent content across X, LinkedIn, and Instagram using Gemini and MCP architecture.",
    "longDescriptions": [
        "NeuraPost is an advanced social media automation agent that fuses Google's Gemini LLM with an MCP-based modular backend to intelligently generate, curate, and post content across multiple platforms. Each integration (X, LinkedIn, Instagram) is handled as a distinct MCP tool, enabling seamless multi-platform orchestration and contextual post optimization.",
        "The project demonstrates an end-to-end autonomous AI workflow — from natural language idea generation and post synthesis to automated platform publishing — all through a real-time, futuristic chat interface inspired by agentic AI design principles. NeuraPost also features a scalable architecture, separating its Vercel-hosted Next.js frontend from the Render-hosted MCP backend for enhanced performance and modularity."
    ],
    "images": [
        "/project/post1.png",
        "/project/post2.png",
        "/project/post.png"
    ],
    "video": "/project/post1.mp4",
    "link": "https://ai-first-agent-tweet.vercel.app/",
    "sourceCode": "https://github.com/vikasgautam2003/ai-first-agent-tweet",
    "tech": [
        "Next.js",
        "Gemini AI",
        "Node.js + Express",
        "MCP Tool System",
        "Twitter API v2",
        "Framer Motion",
        "Vercel",
        "Render"
    ],
    "keyFeatures": [
        "Tweeter-Platform AI Posting (X)",
        "Gemini-Powered Content Generation",
        "Modular MCP Tool Architecture",
        "Real-Time Agentic Chat Interface",
        "CORS-Secure Multi-Deployment Communication",
        "Futuristic UI with Glassmorphism & Glow Animations",
        "Auto-Length Controlled Post Generation (<280 characters)",
        "Decoupled Frontend-Backend Hosting (Vercel + Render)"
    ]
}
,

{
  "id": 11,
  "title": "OnePngAi",
  "description": "An AI-powered image generator for creating high-quality, transparent PNG assets.",
  "longDescriptions": [
    "OnePngAi simplifies creative workflows by using **Pollination.ai** model to generate high-resolution images from text prompts. Users can request assets with transparent backgrounds directly.",
   
  ],
  "images": [
    "/project/image3.png",
    "/project/image.png",
    "/project/image2.png"
  ],
  "video": "/project/image.mp4",
  "link": "https://image-gernerator-app.vercel.app",
  "sourceCode": "https://github.com/vikasgautam2003/image-gernerator-app",
  "tech": [
    "Next.js",
    "TypeScript",
    "Pollination.ai",
    "Tailwind CSS",
    "Vercel"
  ],
  "keyFeatures": [
    "**Text-to-Image generation** powered by Pollination.ai",
    "Ability to generate **transparent PNGs** directly",
    "Clean, minimalist UI for asset management",
    "Optimized for fast performance with Next.js"
  ]
},
{
  "id": 12,
  "title": "VidQuery: YouTube RAG Chatbot",
  "description": "An AI-powered RAG chatbot that allows users to ask questions about YouTube videos and receive answers based on the video's transcript.",
  "longDescriptions": [
    "VidQuery uses Retrieval-Augmented Generation (RAG) to provide contextually accurate answers. It fetches the video transcript, chunks it, creates vector embeddings (using Google Gemini models via LangChain), and stores them in a FAISS vector database.",
    "When a user asks a question, the system retrieves the most relevant transcript chunks and feeds them, along with the question, to a generative AI model (Gemini) to produce an answer grounded in the video's content. Features include handling missing English transcripts via translation."
  ],
  "images": ["/project/vidq2.png", "/project/vidq1.png", "/project/vidq.png"],
  "video": "/project/vidq.mp4", 
  "link":  "",
  "sourceCode": "https://github.com/vikasgautam2003/youtuber-video-RAG-Project", // Replace with your GitHub repository link
  "message" : "Due to Youtube blocking API requests from deployed applications, the live demo is currently unavailable. Please check the source code to run it locally.",
  "tech": [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "LangChain",
    "Google Gemini",
    "FAISS",
    "Tailwind CSS",
    "youtube-transcript-api"
  ],
  "keyFeatures": [
    "Chat with YouTube videos via URL",
    "AI-powered Q&A based on transcripts",
    "Retrieval-Augmented Generation (RAG)",
    "Automatic transcript fetching",
    "Interactive chat interface with video preview",
  ]
},

 
  {
  id: 13,
  title: "Syntaxly.ai",
  description: "AI-Powered Code Reviewer for Developers.",
  longDescriptions: [
    "Syntaxly.ai is an advanced AI-driven platform that reviews, analyzes, and improves your code instantly — providing intelligent suggestions and bug insights in real-time.",
    "Built with React, Node.js, and the Gemini API, Syntaxly.ai features a sleek neon interface, real-time linting feedback, and seamless GitHub integration for professional-grade code analysis."
  ],
  images: ["/project/code1.png", "/project/code.png", "/project/code2.png"],
  video: "/project/code.mp4",
  link: "https://ai-code-reviewer-project-gamma.vercel.app/",
  sourceCode: "https://github.com/vikasgautam2003/Ai-Code-Reviewer-Project",
  tech: ["React", "Node.js", "Gemini AI", "Tailwind CSS", "Express.js"],
  keyFeatures: [
    "AI-driven code review and optimization",
    "Real-time syntax and bug detection",
    "Modern neon-themed UI for developers",
   
  ]
},

{
  id: 14,
  title: "FormForge.ai – AI Form Generator",
  description:
    "An AI-powered tool that converts natural language prompts into clean JSON form schemas and instantly renders a fully styled, production-ready UI.",

  longDescriptions: [
    "FormForge.ai allows users to describe any form in plain language and instantly generates a structured JSON schema. The schema is then rendered into a modern, beautifully styled React form using a premium UI layout.",
    
    "With built-in export tools, users can copy the form schema to the clipboard or download it as a JSON file. The interface features a polished SaaS-style design with animations, staggered reveals, and a fully responsive layout."
  ],

  images: [
    "/project/form.png",
    "/project/form1.png",
    "/project/form2.png"
  ],

  video: "/project/form.mp4",

  link: "https://form-forge-ai.vercel.app/",
  sourceCode: "https://github.com/vikasgautam2003/FormForge.ai",

  tech: [
    "Next.js 14",
    "React + Client Components",
    "Google Gemini Flash-Latest",
    "Tailwind CSS",
    "Framer Motion",
    "Clipboard",
    "JSON File Export"
  ],


  keyFeatures: [
    "⚡ AI Form Generation – Converts any natural language prompt into a structured JSON form schema.",
    
    "🖥️ Live Form Rendering – Renders the generated schema instantly into a premium styled React form.",
    
    "📋 Copy Schema – One-click copy-to-clipboard for the generated JSON.",
    
    "📁 Export JSON File – Download the generated schema as a production-ready .json file.",
    
    "✨ Premium UI & Animations – Glassmorphism cards, modern gradients, smooth hover effects, and Framer Motion animations.",
    
    "📱 Responsive Layout – Fully optimized for desktop and modern browsers."
  ]
}
,


 {
    id: 15,
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
    id: 16,
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

  {
    "id": 17,
    "title": "Locatrix : Live Location Tracker",
    "description": "A real-time web application that visualizes and shares users’ live GPS positions using Leaflet, OpenStreetMap, and Socket.IO for instant updates.",
    "longDescriptions": [
        "Locatrix enables users to view, track, and share their live location on an interactive map in real time. By leveraging the browser’s Geolocation API and Socket.IO, it continuously synchronizes user coordinates and broadcasts updates seamlessly across connected clients.",
        "The system integrates OpenStreetMap’s Nominatim API for reverse geocoding, converting raw coordinates into human-readable addresses, and uses Unsplash API to dynamically fetch contextual images of the detected locations. The entire interface is designed with Tailwind CSS and optimized for responsive, cross-device performance."
    ],
    "images": ["/project/live1.png", "/project/live2.png", "/project/live.png"],
    "video": "/project/live.mp4",
    "link": "https://location-tracker-app-07th.onrender.com/",
    "sourceCode": "https://github.com/vikasgautam2003/Location_Tracker__app",
    "tech": [
        "Node.js",
        "Express.js",
        "Socket.IO",
        "Leaflet.js",
        "OpenStreetMap (Nominatim)",
        "Unsplash API",
        "Tailwind CSS"
    ],
    "keyFeatures": [
        "Real-Time Location Tracking via Socket.IO",
        "Reverse Geocoding with OpenStreetMap Nominatim API",
        "Dynamic Location-Based Photos from Unsplash API",
        "Interactive Leaflet Map with Live Marker Updates",
        "Responsive Sidebar UI with Coordinates and Address Display",
        "Lightweight, Fast, and Zero-Database Architecture"
    ]
}


];






const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
};


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
    <section className="py-20 sm:py-28 px-4 md:px-10 text-white relative z-10 min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 sm:mb-20 tracking-tighter">
          My Creations
          <span className="block text-base sm:text-lg md:text-xl mt-6 text-gray-500 tracking-wide leading-relaxed">
            Click on a project to explore its architecture, purpose, and story in detail.
          </span>
        </h2>

        <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2">
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group relative"
              style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10, boxShadow: "0px 30px 60px -10px rgba(128, 90, 213, 0.5)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-64 sm:h-80"
              >
                <Image src={project.images[0]} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </motion.div>

              {/* --- POLISHED CARD CONTENT --- */}
              <div className="p-4 sm:p-6 absolute bottom-0 left-0 right-0 w-full">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 tracking-tight break-words">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 mb-4 break-words">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL SECTION (kept animated) --- */}
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
              className="bg-slate-900/70 border border-white/20 rounded-3xl w-full max-w-4xl h-[100vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white z-50 bg-black/50 p-2 rounded-full hover:bg-white/20 transition-colors text-2xl"
              >
                <FiX />
              </button>

              <div className="relative h-64 sm:h-96">
                <Image src={selectedProject.images[0]} alt={selectedProject.title} fill className="object-cover rounded-t-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 mt-10">
                  <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <p className="text-base sm:text-lg text-gray-300 mb-4 font-bold">{selectedProject.description}</p>

                {selectedProject?.message && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-100 border border-yellow-400 text-yellow-800 mt-10 mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    <p className="font-medium">{selectedProject.message}</p>
                  </div>
                )}

                {selectedProject.longDescriptions.map((ld, idx) => (
                  <p key={idx} className="text-gray-300 text-sm sm:text-base mb-4">{ld}</p>
                ))}

                <div className="mb-6 pt-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {selectedProject.keyFeatures.map((feature, idx) => <li key={idx}>{feature}</li>)}
                  </ul>
                </div>

                <div className="flex justify-center mb-12 pt-7">
                  <a href={selectedProject.sourceCode} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
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

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-white text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h7m0 0v7m0-7L10 20" />
                    </svg>
                    View Project
                  </a>

                  <button
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-white text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
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
    </section>
  );
}
