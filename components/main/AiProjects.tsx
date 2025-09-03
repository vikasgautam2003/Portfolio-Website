// "use client";

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';

// // --- TYPE DEFINITIONS ---
// interface AiProject {
//   id: number;
//   category: "LLM" | "Computer Vision" | "NLP"; // Example categories
//   title: string;
//   description: string;
//   longDescriptions: string[];
//   keyFeatures: string[];
//   tech: string[];
//   images: string[]; // Expects 3 images: [main_card_image, modal_image_1, modal_image_2]
//   video: string;
//   sourceCodeLink: string; // Link to Hugging Face
//   liveDemoLink: string | null; // Null for non-deployed LLM projects
// }

// // --- AI PROJECTS DATA (REPLACE WITH YOUR INFO) ---
// const aiProjects: AiProject[] = [
//   {
//     id: 1,
//     category: "LLM",
//     title: "Ollama PDF Q&A",
//     description: "An AI app for asking questions directly from PDF documents.",
//     longDescriptions: [
//       "This project leverages the power of local Large Language Models through Ollama to create an interactive and private Q&A system for your documents.",
//       "Users can upload a PDF, which is then processed and chunked. When a question is asked, the system performs a similarity search to find the most relevant context and feeds it to the LLM to generate a precise answer. The entire process runs locally, ensuring data privacy."
//     ],
//     keyFeatures: [
//       "Local LLM Inference with Ollama",
//       "Interactive Q&A Interface via Streamlit",
//       "Vector-based Similarity Search",
//       "Containerized with Docker for easy setup"
//     ],
//     tech: ["Python", "Streamlit", "Ollama", "Docker", "LangChain"],
//     images: ["/project/ollama.png", ],
//     video: "/project/ollama.mp4",
//     sourceCodeLink: "https://huggingface.co/spaces/vikasgautam2003/ollama_streamlit_pdf_q_and_answer_",
//     liveDemoLink: null, // This is an LLM project, so no live demo link
//   },
 
//   // Add more AI projects here...
// ];

// // --- SVG ICONS ---
// const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
// const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" /></svg>;
// const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.648c1.295.742 1.295 2.545 0 3.286L8.029 20.99c-1.25.722-2.779-.217-2.779-1.643V5.653Z" /></svg>;

// // --- ANIMATION VARIANTS ---
// const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
// const itemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

// // --- MAIN AI PROJECTS COMPONENT ---
// export default function AiProjects() {
//   const [selectedProject, setSelectedProject] = useState<AiProject | null>(null);

//   useEffect(() => {
//     document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, [selectedProject]);

//   return (
//     <section className="py-28 text-white relative z-10 bg-transparent">
//       <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(#8542f8_1px,transparent_1px)] [background-size:16px_16px]"></div>

//       <div className="max-w-7xl mx-auto px-4">
//         <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-5xl md:text-7xl font-bold text-center mb-20 tracking-tighter">
//           AI Creations
//         </motion.h2>

//         <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {aiProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               onClick={() => setSelectedProject(project)}
//               className="relative p-6 bg-slate-900/50 border border-purple-500/30 rounded-2xl cursor-pointer group overflow-hidden"
//             >
//               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//                 className="relative z-10"
//               >
//                 <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
//                   <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
//                   <div className="absolute inset-0 bg-black/40"></div>
//                   <span className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">{project.category}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.slice(0, 4).map(t => <span key={t} className="bg-slate-700 text-xs px-2 py-1 rounded-md text-slate-300">{t}</span>)}
//                   {project.tech.length > 4 && <span className="text-xs text-slate-400">+{project.tech.length - 4} more</span>}
//                 </div>
//               </motion.div>
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
//             className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedProject(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//               className="w-full max-w-5xl h-[90vh] bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex-shrink-0 p-6 flex justify-between items-center border-b border-white/10">
//                 <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
//                 <button onClick={() => setSelectedProject(null)} className="p-2 rounded-full hover:bg-white/10 transition-colors"><CloseIcon /></button>
//               </div>
              
//               <div className="flex-grow overflow-y-auto">
//                 <div className="p-8">
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Left Column: Details */}
//                     <div className="space-y-6">
//                       <div>
//                         <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-2">Description</h3>
//                         {selectedProject.longDescriptions.map((desc, i) => <p key={i} className="text-gray-300 leading-relaxed mb-4">{desc}</p>)}
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">Key Features</h3>
//                         <ul className="space-y-2">
//                           {selectedProject.keyFeatures.map((feat, i) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-purple-400 mr-3 mt-1">&#8226;</span>
//                               <span className="text-gray-300">{feat}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div className="flex gap-4 pt-4">
//                         <a href={selectedProject.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300 transform hover:scale-105 shadow-lg">
//                            <CodeIcon /> Hugging Face
//                         </a>
//                         {selectedProject.liveDemoLink ? (
//                           <a href={selectedProject.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
//                             <PlayIcon /> Live Demo
//                           </a>
//                         ) : (
//                           <div className="flex items-center justify-center px-6 py-3 rounded-lg text-gray-400 text-sm bg-slate-800/50 border border-dashed border-gray-600 text-center">
//                             LLM projects require significant resources (RAM/CPU) and are not suitable for live hosting.
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Right Column: Media */}
//                     <div className="space-y-6">
//                       <div className="aspect-video rounded-lg overflow-hidden border border-white/10 shadow-lg">
//                         <video src={selectedProject.video} className="w-full h-full object-cover" autoPlay loop muted poster={selectedProject.images[0]} />
//                       </div>
                    
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }











"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- TYPE DEFINITIONS ---
interface AiProject {
  id: number;
  category: "LLM" | "Computer Vision" | "NLP";
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

// --- AI PROJECTS DATA ---
const aiProjects: AiProject[] = [
  {
    id: 1,
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
      "Vector-based Similarity Search",
      "Containerized with Docker for easy setup"
    ],
    tech: ["Python", "Streamlit", "Ollama", "Docker", "LangChain"],
    images: ["/project/ollama.png"],
    video: "/project/ollama.mp4",
    sourceCodeLink: "https://huggingface.co/spaces/vikasgautam2003/ollama_streamlit_pdf_q_and_answer_",
    liveDemoLink: null,
  },
  // Add your other AI projects here
];

// --- SVG ICONS ---
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 15" /></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.648c1.295.742 1.295 2.545 0 3.286L8.029 20.99c-1.25.722-2.779-.217-2.779-1.643V5.653Z" /></svg>;

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

// --- MAIN AI PROJECTS COMPONENT ---
export default function AiProjects() {
  const [selectedProject, setSelectedProject] = useState<AiProject | null>(null);

  // ## FIX: This useEffect now HIDES the navbar when the modal is open.
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
          AI Creations
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
                    {/* ## FIX: Content is now in a single, centered column. */}
                    <div className="max-w-3xl mx-auto">
                        {/* Details Section */}
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
                                    LLM projects require significant resources (RAM/CPU) and are not suitable for live hosting.
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