





"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';


interface AiProject {
  id: number; 
  category: "LLM" | "Computer Vision" | "NLP" | "Agentic AI" | "Reinforcement Learning" | "Generative AI" | "RAG" |"Other";
  title: string;
  description: string;
  longDescriptions: string[];
  keyFeatures: string[];
  tech: string[];
  images: string[]; // Expects at least 1 image for the card
  video: string;
  sourceCodeLink: string;
  liveDemoLink: string | null;
}


const aiProjects: AiProject[] = [
  {
  id: 1,
  category: "Agentic AI",
  title: "Smart Restaurant Assistant Chatbot",
  description: "An AI-powered chatbot to assist restaurant customers with orders, inquiries, and reservations.",
  longDescriptions: [
    "This smart assistant enhances the dining experience by providing instant responses to customer queries about the menu.",
    "Leveraging agentic AI, the chatbot can handle complex tasks like taking multi-item orders and making reservations.",
    "It helps restaurants improve operational efficiency and customer satisfaction by automating routine interactions."
  ],
  keyFeatures: [
    "Conversational Ordering System",
    "Instant Menu Information and Queries",
    "Agentic AI for Complex Task Handling",
    "Seamless Integration for Restaurant Operations"
  ],
  tech: ["LangChain", "Gemini LLM", "Node.js", "Express"],
   images: ["/project/ai.png"],
    video: "/project/ai.mp4",
  sourceCodeLink: "https://huggingface.co/spaces/vikasgautam2003/smart_restaurant_ai_assistant/tree/main/smart-restaurent-aisitant",
  liveDemoLink: "https://smart-restaurant-ai-assistant.onrender.com"
},
{
  "id": 2,
  "category": "RAG",
  "title": "Contradiction Auditor (Distributed RAG Engine)",
  "description": "A high-performance verification engine designed to solve the 'Conflicting Information Problem' by forcing multiple LLMs to structurally extract and attribute contradictory facts from various sources.",
  "longDescriptions": [
    "The primary goal is to automate the extraction of all conflicting claims (e.g., different revenue figures, dates, or statistics) related to a single query, providing the human analyst with a complete, auditable evidence trail.",
    "The system implements a robust, distributed 5-stage RAG pipeline to ensure reliability and bypass single-provider rate limits, guaranteeing data integrity and availability.",
    "It demonstrates expertise in leveraging advanced models for specialized tasks: a fast model for creative text expansion and a reliable model for strict JSON validation."
  ],
  "keyFeatures": [
    "Distributed LLM Workload (Gemini for Query, Llama 3/Groq for Extraction)",
    "Auditable Output (Links every extracted fact back to its source document ID)",
    "Structured Verification (Enforces JSON Schema via Zod for clean, machine-readable data)",
    "Advanced Retrieval Techniques (Multi-Query Generation & Vector Search principle)",
    "Human-in-the-Loop Design (Enables analyst judgment over conflicting evidence)"
  ],
  "tech": [
    "Next.js",
    "TypeScript",
    "LangChain (Concepts)",
    "Gemini API",
    "Groq (Llama 3)",
    "Zod"
  ],
  "images": ["/project/audi.png"],
  "video": "/project/audi.mp4",
  "sourceCodeLink": "https://github.com/vikasgautam2003/Contradiction-Audito",
  "liveDemoLink": null
},
{
  
    id: 3,
    category: "LLM",
    title: "Ollama PDF Q&A",
    description: "An AI app for asking questions directly from PDF documents.",
    longDescriptions: [
      "This project leverages the power of local Large Language Models through Ollama to create an interactive and private Q&A system for your documents.",
      "Users can upload a PDF, which is then processed and chunked. When a question is asked, the system performs a similarity search to find the most relevant context and feeds it to the LLM to generate a precise answer. The entire process runs locally, ensuring data privacy."
    ],
    keyFeatures: [
      "Local LLM Inference with Ollama",
      "Interactive Q&A Interface via Streamlit",
      "Uses Tinyllama llm for efficient performance",
      "Containerized with Docker for easy setup"
    ],
    tech: ["LangChain", "Python", "Streamlit", "Ollama", "Docker"],
    images: ["/project/ollama.png"],
    video: "/project/ollama.mp4",
    sourceCodeLink: "https://huggingface.co/spaces/vikasgautam2003/ollama_streamlit_pdf_q_and_answer_",
    liveDemoLink: null,
  },
  
  {
    id: 5,
    category: "LLM",
    title: "Xplain – Your Topic Explainer",
    description: "An AI app that explains topics in a clear and structured manner.",
    longDescriptions: [
      "Xplain helps users understand complex topics quickly by generating concise explanations using LLMs.",
      "Users can input any topic, and the system will produce a structured summary, often with examples or additional context.",
      "This ensures faster learning and comprehension for students, professionals, or curious minds."
    ],
    keyFeatures: [
      "Topic Summarization and Explanation",
      "Interactive and easy-to-use interface",
      "Built on top of modern LLMs",
      "Dockerized for smooth deployment"
    ],
    tech: ["LangChain","Gemini LLM", "Docker",  "Node.js", "Express", ],
    images: ["/project/X.png"],
    video: "/project/X.mp4",
    sourceCodeLink: "https://huggingface.co/spaces/vikasgautam2003/Xplain__Your_topic_Explainer",
    liveDemoLink: "https://xplain-your-topic-explainer.onrender.com",
  }, 

  



];


const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" /></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.648c1.295.742 1.295 2.545 0 3.286L8.029 20.99c-1.25.722-2.779-.217-2.779-1.643V5.653Z" /></svg>;


const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };


export default function AiProjects() {
  const [selectedProject, setSelectedProject] = useState<AiProject | null>(null);


  useEffect(() => {
    const navbar = document.querySelector('.sticky-navbar');
    if (selectedProject) {
        document.body.style.overflow = 'hidden';
        navbar?.classList.add('navbar-hidden');
    } else {
        document.body.style.overflow = 'unset';
        navbar?.classList.remove('navbar-hidden');
    }
    return () => {
        document.body.style.overflow = 'unset';
        navbar?.classList.remove('navbar-hidden');
    };
  }, [selectedProject]);

  return (
    <section className="py-28 text-white relative z-10 bg-transparent">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(#8542f8_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-5xl md:text-7xl font-bold text-center mb-20 tracking-tighter">
          Mini AI Creations
          
        </motion.h2>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className="relative p-6 bg-slate-900/50 border border-purple-500/30 rounded-2xl cursor-pointer group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative z-10"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <span className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map(t => <span key={t} className="bg-slate-700 text-xs px-2 py-1 rounded-md text-slate-300">{t}</span>)}
                  {project.tech.length > 4 && <span className="text-xs text-slate-400">+{project.tech.length - 4} more</span>}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    <div className="mt-20 text-center">
      <button   onClick={() => { window.location.href = '/ai-projects'; }} className=" cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300">
        More AI projects
      </button>
    </div>


      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl h-[90vh] bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 p-6 flex justify-between items-center border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)} className="p-2 rounded-full hover:bg-white/10 transition-colors"><CloseIcon /></button>
              </div>
              
              <div className="flex-grow overflow-y-auto">
                <div className="p-8">

                    <div className="max-w-3xl mx-auto">
                
                        <div className="space-y-6 mb-8">
                                                    <div className="aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg">
                            <video src={selectedProject.video} className="w-full h-full object-cover" autoPlay loop muted poster={selectedProject.images[0]} />
                        </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-2">Description</h3>
                                {selectedProject.longDescriptions.map((desc, i) => <p key={i} className="text-gray-300 leading-relaxed mb-4">{desc}</p>)}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                {selectedProject.keyFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start">
                                    <span className="text-purple-400 mr-3 mt-1">&#8226;</span>
                                    <span className="text-gray-300">{feat}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <a href={selectedProject.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="relative group flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300 border-2 border-purple-500/30 hover:bg-purple-500/10">
                                    <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
                                    <span className="relative flex items-center gap-2"><CodeIcon /> Hugging Face</span>
                                </a>
                                {selectedProject.liveDemoLink ? (
                                <a href={selectedProject.liveDemoLink} target="_blank" rel="noopener noreferrer" className="relative group flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300 border-2 border-purple-500/30 hover:bg-purple-500/10">
                                    <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
                                    <span className="relative flex items-center gap-2"><PlayIcon /> Live Demo</span>
                                </a>
                                ) : (
                                <div className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg text-gray-400 text-sm bg-slate-800/50 border border-dashed border-gray-600 text-center">
                                    Not Hosted yet
                                </div>
                                )}
                            </div>
                        </div>

                        {/* Video Section */}

                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}