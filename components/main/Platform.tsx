



// "use client";

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- TYPE DEFINITIONS ---
// interface ShowcaseItem {
//   name: string;
//   description: string;
//   longDescription: string;
//   link: string;
//   showcaseImage: string;
// }
// interface Repo extends ShowcaseItem {
//   tech: string[];
// }

// type HFItem = ShowcaseItem;
// type Container = ShowcaseItem;

// interface Platform {
//   id: number;
//   name: string;
//   logo: string;
//   tagline: string;
//   description: string;
//   backgroundImage: string;
//   panelImage: string;
//   link: string;
//   details: {
//     showcase: {
//       title: string;
//       image: string;
//     },
//     repos?: Repo[];
//     models?: HFItem[];
//     datasets?: HFItem[];
//     spaces?: HFItem[];
//     containers?: Container[];
//   };
// }

// // --- PLATFORM DATA ---
// const platforms: Platform[] = [
//     {
//     id: 1,
//     name: "GitHub",
//     logo: "/github.svg",
//     tagline: "Home to 50+ Projects",
//     description: "My GitHub profile is a testament to my passion for coding, featuring a diverse collection of over 50 projects, showcasing my journey and expertise in software development.",
//     backgroundImage: "/sites/git2.png",
//     panelImage: "/sites/git.png", 
//     link: "https://github.com/vikasgautam2003",
//     details: {
//       showcase: {
//         title: "Featured Repository Showcase",
//         image: "/sites/git1.png",
//       },
//       repos: [
//             { name: "Bonzo Games", description: "A happy place where you can play classic games for some fun.", longDescription: "Bonzo Games allows users to connect and play real-time multiplayer games with smooth animations and responsive design across devices. The platform is built with Node.js and Socket.IO, providing secure authentication, persistent storage, and an engaging user interface using Tailwind CSS.", tech: ["Socket.IO", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript", "EJS"], link: "https://bonzo-gaming-website.onrender.com", showcaseImage: "/project/bonzo.png" },
//             { name: "Hostel Committee Website", description: "A full-stack platform for managing hostel events, student participation, and discussions.", longDescription: "This website allows admins to create and manage hostel events, while students can register, participate, and engage in discussions. It features secure JWT authentication, media uploads via Cloudinary, responsive design, and a dynamic interface built with React for a smooth user experience.", tech: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary", "JWT"], link: "https://hostel-committee-full-stack-website-vsa3.onrender.com/", showcaseImage: "/project/hostel.png" },
//             { name: "CogniCare AI", description: "Your Personal Mental Therapist.", longDescription: "CogniCare AI offers personalized mental health support using advanced AI chat technology for interactive and empathetic guidance. The platform is built with Next.js, Gemini API, and TypeScript, providing secure sessions and a modern, responsive UI with Tailwind CSS.", tech: ["Next.js", "Gemini AI", "Tailwind CSS", "TypeScript"], link: "https://cogni-care-your-supportive-chatbot.vercel.app/", showcaseImage: "/project/cogni.png" },
//             { name: "Multithreaded Java Web Server", description: "A high-performance TCP server in Java supporting multiple concurrent clients using a thread pool.", longDescription: "This Java web server manages multiple clients simultaneously using a custom thread pool, ensuring high efficiency and scalability. It includes detailed logging, performance monitoring, and demonstrates advanced multithreading and networking concepts for robust server-side applications.", tech: ["Java", "Sockets"], link: "https://github.com/vikasgautam2003/Multithreaded-Web-server", showcaseImage: "/project/multi.png" },
//             { name: "Ollama PDF Q&A", description: "A containerized AI app for asking questions directly from PDF documents using Ollama models.", longDescription: "Ollama PDF Q&A is a Dockerized application that enables users to upload PDFs and interact with them through natural language queries. It integrates Streamlit for the interface, Ollama for local LLM inference, and provides fast, privacy-friendly document understanding.", tech: ["Python", "Streamlit", "Ollama", "Docker"], link: "https://github.com/vikasgautam2003/ollama-streamlit-pdf-q-and-answer-", showcaseImage: "/project/ollama.png" }

//       ],
//     },
//   },
//   {
//     id: 2,
//     name: "Hugging Face",
//     logo: "/sites/hf-logo.svg",
//     tagline: "AI Models, Datasets & Spaces",
//     description: "On Hugging Face, I explore the frontiers of AI. I host fine-tuned models, curate specialized datasets, and build interactive demos in Spaces, contributing to the open-source AI community.",
//     backgroundImage: "/sites/hf.png",
//     panelImage: "/sites/hug1.png",
//     link: "https://huggingface.co/vikasgautam2003",
//     details: {
//       showcase: {
//         title: "Featured Models & Datasets",
//         image: "/sites/hug.png",
//       },
//       models: [
//         { name: "Text Classification Using FastText", description: "A FastText-based model for text categorization.", longDescription: "This model uses Facebook's FastText library to classify text efficiently, offering lightweight and accurate predictions for tasks such as product categorization and document classification.", link: "https://huggingface.co/vikasgautam2003/Text_Classification_Using_FastText", showcaseImage: "/sites/model.png" },
//         { name: "Fake or Real News Classifier (Naive Bayes)", description: "A Naive Bayes model for detecting fake news.", longDescription: "This classifier distinguishes between real and fake news articles using a Naive Bayes approach. It is trained on a curated dataset of news sources and serves as a strong baseline for misinformation detection.", link: "https://huggingface.co/vikasgautam2003/Fake-or-Real-News-Classifier-Using-Naive-Bayes", showcaseImage: "/sites/model1.png" }
//     ],

//       datasets: [
//        { name: "Fake and Real News Dataset", description: "A dataset for fake news detection.", longDescription: "This dataset consists of labeled fake and real news articles, making it suitable for training and benchmarking models in the domain of misinformation detection.", link: "https://huggingface.co/datasets/vikasgautam2003/Fake_and_Real_news", showcaseImage: "/sites/data1.png" },
//         { name: "Ecommerce Dataset (Part 2)", description: "Product dataset for text classification tasks.", longDescription: "A large-scale dataset of e-commerce product titles and descriptions, designed for classification and recommendation tasks. It supports training models like FastText for product categorization.", link: "https://huggingface.co/datasets/vikasgautam2003/Ecommerce_DatasetPart2", showcaseImage: "/sites/data.png" }
//         ],
//       spaces: [
//         { name: "Restaurant and Food Menu Generator", description: "A Streamlit app for generating menus using LLMs.", longDescription: "This Hugging Face Space allows users to generate creative restaurant and food menus powered by LangChain and Streamlit, showcasing generative AI in the culinary domain.", link: "https://huggingface.co/spaces/vikasgautam2003/Restaurant-and-Food-Menu-Generator", showcaseImage: "/sites/space.png" },
//         { name: "Ollama PDF Q&A", description: "Ask questions from PDFs using Ollama models.", longDescription: "A Streamlit-based Hugging Face Space that integrates Ollama for local LLM inference, enabling users to upload PDFs and query them interactively with natural language.", link: "https://huggingface.co/spaces/vikasgautam2003/ollama_streamlit_pdf_q_and_answer_", showcaseImage: "/sites/ollama.png" }
//       ]
//     },
//   },
//   {
//     id: 3,
//     name: "Docker Hub",
//     logo: "/docker.webp",
//     tagline: "Containerized Applications",
//     description: "Docker Hub is where I publish production-ready container images. This ensures consistent, reproducible deployments across any environment, reflecting my expertise in DevOps practices.",
//     backgroundImage: "/sites/docker1.png",
//     panelImage: "/sites/dochub.png",
//     link: "https://hub.docker.com/u/vikasgautam2003",
//     details: {
//       showcase: {
//         title: "Featured Container Showcase",
//         image: "/sites/docker.png",
//       },
//       containers : [
//         { name: "java-multithreaded-server", description: "A high-performance Java TCP server container.", longDescription: "This container runs a multithreaded Java TCP server capable of handling thousands of concurrent client connections efficiently. It demonstrates advanced networking and concurrency concepts, packaged for easy deployment.", link: "https://hub.docker.com/r/vikasgautam2003/java-multithreaded-server", showcaseImage: "/sites/doc5.png" },
//         { name: "cognicare-ai", description: "Containerized AI-powered mental health chatbot.", longDescription: "This container packages CogniCare AI, an empathetic chatbot built with Next.js and Gemini AI. It ensures secure, scalable deployment for real-world mental health support applications.", link: "https://hub.docker.com/r/vikasgautam2003/cognicare-ai", showcaseImage: "/sites/doc4.png" },
//         { name: "ollama_pdf_app", description: "Dockerized PDF Q&A application using Ollama.", longDescription: "This container hosts the Ollama PDF Q&A application, allowing users to upload PDFs and query them interactively with natural language. It integrates Streamlit for the UI and Ollama for local LLM inference.", link: "https://hub.docker.com/r/vikasgautam2003/ollama_pdf_app", showcaseImage: "/sites/doc3.png" },
//         { name: "bonzo-games", description: "Real-time multiplayer gaming platform container.", longDescription: "A Dockerized version of Bonzo Games, enabling scalable real-time multiplayer gaming with Node.js, Socket.IO, and MongoDB integration. Optimized for deployment on cloud platforms.", link: "https://hub.docker.com/r/vikasgautam2003/bonzo-games", showcaseImage: "/sites/doc2.png" },
//         { name: "portfolio-app", description: "Personal portfolio application container.", longDescription: "This container runs a full-stack portfolio web application showcasing projects, skills, and experiences. Built with modern web technologies and optimized for fast, containerized deployment.", link: "https://hub.docker.com/r/vikasgautam2003/portfolio-app", showcaseImage: "/sites/doc1.png" }
//     ],
//     },
//   },
// ];

// // --- SVG Icons ---
// const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>;
// const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h7m0 0v7m0-7L10 20" /></svg>;
// const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

// // --- Accordion Sub-Component ---
// const AccordionItem = ({ item }: { item: Repo | HFItem | Container }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="border-b border-white/10 last:border-b-0">
//       <button 
//         onClick={() => setIsOpen(!isOpen)} 
//         className="w-full flex justify-between items-center py-5 text-left transition-colors duration-300 hover:bg-white/5 px-4 rounded-md"
//       >
//         <span className="font-semibold text-lg text-white">{item.name}</span>
//         <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gray-400">
//           <ChevronDown />
//         </motion.div>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.4, ease: "easeInOut" }, opacity: { duration: 0.25, delay: 0.15 } } }}
//             exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4, ease: "easeInOut" }, opacity: { duration: 0.25 } } }}
//             className="overflow-hidden"
//           >
//             <div className="pb-6 pt-2 px-4 text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
//               <div className="md:col-span-2 space-y-4">
//                 <p className="text-white/90 leading-relaxed">{item.longDescription}</p>
//                 {'tech' in item && (
//                   <div className="flex flex-wrap gap-2">
//                     <span className="font-semibold text-white">Tech Stack:</span>
//                     {item.tech.map(t => <span key={t} className="bg-slate-700 text-xs font-medium px-2 py-1 rounded-md text-slate-300">{t}</span>)}
//                   </div>
//                 )}
//                 <a href={item.link} target="_blank" rel="noopener noreferrer" 
//                    className="inline-block bg-purple-600/50 text-purple-300 hover:bg-purple-600/80 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg font-semibold text-sm">
//                   <div className="flex items-center gap-2">
//                     <span>View Link</span>
//                     <ExternalLinkIcon />
//                   </div>
//                 </a>
//               </div>
//               <div className="md:col-span-1">
//                 <img src={item.showcaseImage} alt={`Showcase for ${item.name}`} className="w-full h-auto object-cover rounded-lg border border-white/10 shadow-lg" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- Main Platforms Component ---
// export default function Platforms() {
//   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

//   useEffect(() => {
//     const navbar = document.querySelector('.sticky-navbar');
//     if (selectedPlatform) {
//       document.body.style.overflow = 'hidden';
//       navbar?.classList.add('navbar-unsticky');
//     } else {
//       document.body.style.overflow = 'unset';
//       navbar?.classList.remove('navbar-unsticky');
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//       navbar?.classList.remove('navbar-unsticky');
//     };
//   }, [selectedPlatform]);

//   return (
//     <section className="py-24 md:py-32 text-white relative z-10 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* ## RESPONSIVE: Adjusted heading size and margin for mobile */}
//         <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-tighter">
//           My Digital Footprint
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {platforms.map((platform) => (
//             <motion.div
//               key={platform.id}
//               onClick={() => setSelectedPlatform(platform)}
//               // ## RESPONSIVE: Cards are square on mobile, taller on larger screens
//               className="relative aspect-[1/1] sm:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
//               style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             >
//               <motion.div style={{ backgroundImage: `url(${platform.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
//               <motion.div whileHover={{ rotateX: 10, rotateY: -10 }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative z-10 w-full h-full flex flex-col justify-end p-6 sm:p-8 text-white">
//                 <img src={platform.logo} alt={`${platform.name} logo`} className="w-12 h-12 sm:w-16 sm:h-16 mb-4"/>
//                 {/* ## RESPONSIVE: Adjusted card heading size */}
//                 <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{platform.name}</h3>
//                 <p className="text-gray-300">{platform.tagline}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedPlatform && (
//           // ## RESPONSIVE: Modal stacks vertically on mobile (flex-col) and horizontally on desktop (md:flex-row)
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex flex-col md:flex-row">
//             {/* Left Panel */}
//             <motion.div 
//               initial={{ x: "-100%" }} animate={{ x: "0%" }} exit={{ x: "-100%" }}
//               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               // ## RESPONSIVE: Panel is a shorter header on mobile, and a full-height sidebar on desktop
//               className="w-full h-auto md:w-1/3 md:h-full border-b md:border-b-0 md:border-r border-white/10 p-6 sm:p-8 md:p-12 pt-20 md:pt-24 pb-8 md:pb-12 relative flex flex-col"
//             >
//               <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: `url(${selectedPlatform.panelImage})`}}></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900"></div>

//               <div className="relative z-10 flex flex-col h-full">
//                 <img src={selectedPlatform.logo} alt={`${selectedPlatform.name} logo`} className="w-20 h-20 sm:w-24 sm:h-24 mb-6"/>
//                 {/* ## RESPONSIVE: Adjusted modal heading size */}
//                 <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tighter">{selectedPlatform.name}</h2>
//                 <p className="text-gray-300 text-base sm:text-lg mb-8 md:mb-12 md:flex-grow">{selectedPlatform.description}</p>
//                 <a href={selectedPlatform.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 sm:py-4 rounded-full text-white text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Visit My Profile <ExternalLinkIcon />
//                 </a>
//               </div>
//             </motion.div>

//             {/* Right Panel */}
//             <motion.div
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               // ## RESPONSIVE: Takes up remaining height on mobile (flex-grow)
//               className="w-full flex-grow md:w-2/3 md:h-full overflow-y-auto relative"
//             >
//               <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/kamranahmedse/driver.js/master/docs/images/bg-pattern.svg')] opacity-10"></div>
              
//               <div className="relative p-6 sm:p-8 md:p-12 pb-12">
//                 {/* ## RESPONSIVE: Close button stays top-right on all screen sizes */}
//                 <button onClick={() => setSelectedPlatform(null)} className="absolute top-6 right-6 text-white z-50 p-2 rounded-full hover:bg-white/10 transition-colors">
//                   <CloseIcon />
//                 </button>
                
//                 <div className="space-y-12">
//                   <div className="space-y-6">
//                     {/* ## RESPONSIVE: Adjusted heading size */}
//                     <h3 className="text-3xl sm:text-4xl font-bold text-white border-b border-white/10 pb-4">{selectedPlatform.details.showcase.title}</h3>
//                     <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                       <img src={selectedPlatform.details.showcase.image} alt="Showcase" className="w-full h-auto object-cover" />
//                     </div>
//                   </div>

//                   {selectedPlatform.details.repos && (
//                     <div>
//                       <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Featured Repositories</h3>
//                       <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                         {selectedPlatform.details.repos.map(item => <AccordionItem key={item.name} item={item} />)}
//                       </div>
//                     </div>
//                   )}
//                   {selectedPlatform.details.models && (
//                     <div>
//                       <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Featured Models</h3>
//                       <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                         {selectedPlatform.details.models.map(item => <AccordionItem key={item.name} item={item} />)}
//                       </div>
//                     </div>
//                   )}
//                   {selectedPlatform.details.datasets && (
//                     <div>
//                       <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white">Featured Datasets</h3>
//                       <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                         {selectedPlatform.details.datasets.map(item => <AccordionItem key={item.name} item={item} />)}
//                       </div>
//                     </div>
//                   )}
//                   {selectedPlatform.details.spaces && (
//                     <div>
//                       <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white">Featured Spaces</h3>
//                       <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                         {selectedPlatform.details.spaces.map(item => <AccordionItem key={item.name} item={item} />)}
//                       </div>
//                     </div>
//                   )}
//                   {selectedPlatform.details.containers && (
//                     <div>
//                       <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Top Container Images</h3>
//                       <div className="bg-slate-800/50 rounded-lg border border-white/10">
//                         {selectedPlatform.details.containers.map(item => <AccordionItem key={item.name} item={item} />)}
//                       </div>
//                     </div>
//                   )}
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
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPE DEFINITIONS ---
interface ShowcaseItem {
  name: string;
  description: string;
  longDescription: string;
  link: string;
  showcaseImage: string;
}
interface Repo extends ShowcaseItem {
  tech: string[];
}
type HFItem = ShowcaseItem;
type Container = ShowcaseItem;

interface Platform {
  id: number;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  backgroundImage: string;
  panelImage: string;
  link: string;
  details: {
    showcase: {
      title: string;
      image: string;
    },
    repos?: Repo[];
    models?: HFItem[];
    datasets?: HFItem[];
    spaces?: HFItem[];
    containers?: Container[];
  };
}

// --- PLATFORM DATA ---
const platforms: Platform[] = [
    {
    id: 1,
    name: "GitHub",
    logo: "/github.svg",
    tagline: "Home to 40+ Projects",
    description: "My GitHub profile is a testament to my passion for coding, featuring a diverse collection of over 50 projects, showcasing my journey and expertise in software development.",
    backgroundImage: "/sites/git2.png",
    panelImage: "/sites/git.png", 
    link: "https://github.com/vikasgautam2003",
    details: {
      showcase: {
        title: "Explore 40+ Projects",
        image: "/sites/git1.png",
      },
      repos: [
            { name: "Bonzo Games", description: "A happy place where you can play classic games for some fun.", longDescription: "Bonzo Games allows users to connect and play real-time multiplayer games with smooth animations and responsive design across devices. The platform is built with Node.js and Socket.IO, providing secure authentication, persistent storage, and an engaging user interface using Tailwind CSS.", tech: ["Socket.IO", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript", "EJS"], link: "https://bonzo-gaming-website.onrender.com", showcaseImage: "/project/bonzo.png" },
            { name: "Hostel Committee Website", description: "A full-stack platform for managing hostel events, student participation, and discussions.", longDescription: "This website allows admins to create and manage hostel events, while students can register, participate, and engage in discussions. It features secure JWT authentication, media uploads via Cloudinary, responsive design, and a dynamic interface built with React for a smooth user experience.", tech: ["Node.js", "Express.js", "MongoDB", "React", "Cloudinary", "JWT"], link: "https://hostel-committee-full-stack-website-vsa3.onrender.com/", showcaseImage: "/project/hostel.png" },
            { name: "CogniCare AI", description: "Your Personal Mental Therapist.", longDescription: "CogniCare AI offers personalized mental health support using advanced AI chat technology for interactive and empathetic guidance. The platform is built with Next.js, Gemini API, and TypeScript, providing secure sessions and a modern, responsive UI with Tailwind CSS.", tech: ["Next.js", "Gemini AI", "Tailwind CSS", "TypeScript"], link: "https://cogni-care-your-supportive-chatbot.vercel.app/", showcaseImage: "/project/cogni.png" },
            { name: "Multithreaded Java Web Server", description: "A high-performance TCP server in Java supporting multiple concurrent clients using a thread pool.", longDescription: "This Java web server manages multiple clients simultaneously using a custom thread pool, ensuring high efficiency and scalability. It includes detailed logging, performance monitoring, and demonstrates advanced multithreading and networking concepts for robust server-side applications.", tech: ["Java", "Sockets"], link: "https://github.com/vikasgautam2003/Multithreaded-Web-server", showcaseImage: "/project/multi.png" },
            { name: "Ollama PDF Q&A", description: "A containerized AI app for asking questions directly from PDF documents using Ollama models.", longDescription: "Ollama PDF Q&A is a Dockerized application that enables users to upload PDFs and interact with them through natural language queries. It integrates Streamlit for the interface, Ollama for local LLM inference, and provides fast, privacy-friendly document understanding.", tech: ["Python", "Streamlit", "Ollama", "Docker"], link: "https://github.com/vikasgautam2003/ollama-streamlit-pdf-q-and-answer-", showcaseImage: "/project/ollama.png" }

      ],
    },
  },
  {
    id: 2,
    name: "Hugging Face",
    logo: "/sites/hf-logo.svg",
    tagline: "AI Models, Datasets & Spaces",
    description: "On Hugging Face, I explore the frontiers of AI. I host fine-tuned models, curate specialized datasets, and build interactive demos in Spaces, contributing to the open-source AI community.",
    backgroundImage: "/sites/hf.png",
    panelImage: "/sites/hug1.png",
    link: "https://huggingface.co/vikasgautam2003",
    details: {
      showcase: {
        title: "Featured Models & Datasets",
        image: "/sites/hug.png",
      },
      models: [
        { name: "Text Classification Using FastText", description: "A FastText-based model for text categorization.", longDescription: "This model uses Facebook's FastText library to classify text efficiently, offering lightweight and accurate predictions for tasks such as product categorization and document classification.", link: "https://huggingface.co/vikasgautam2003/Text_Classification_Using_FastText", showcaseImage: "/sites/model.png" },
        { name: "Fake or Real News Classifier (Naive Bayes)", description: "A Naive Bayes model for detecting fake news.", longDescription: "This classifier distinguishes between real and fake news articles using a Naive Bayes approach. It is trained on a curated dataset of news sources and serves as a strong baseline for misinformation detection.", link: "https://huggingface.co/vikasgautam2003/Fake-or-Real-News-Classifier-Using-Naive-Bayes", showcaseImage: "/sites/model1.png" }
    ],

      datasets: [
       { name: "Fake and Real News Dataset", description: "A dataset for fake news detection.", longDescription: "This dataset consists of labeled fake and real news articles, making it suitable for training and benchmarking models in the domain of misinformation detection.", link: "https://huggingface.co/datasets/vikasgautam2003/Fake_and_Real_news", showcaseImage: "/sites/data1.png" },
        { name: "Ecommerce Dataset (Part 2)", description: "Product dataset for text classification tasks.", longDescription: "A large-scale dataset of e-commerce product titles and descriptions, designed for classification and recommendation tasks. It supports training models like FastText for product categorization.", link: "https://huggingface.co/datasets/vikasgautam2003/Ecommerce_DatasetPart2", showcaseImage: "/sites/data.png" }
        ],
      spaces: [
        { name: "Restaurant and Food Menu Generator", description: "A Streamlit app for generating menus using LLMs.", longDescription: "This Hugging Face Space allows users to generate creative restaurant and food menus powered by LangChain and Streamlit, showcasing generative AI in the culinary domain.", link: "https://huggingface.co/spaces/vikasgautam2003/Restaurant-and-Food-Menu-Generator", showcaseImage: "/sites/space.png" },
        { name: "Ollama PDF Q&A", description: "Ask questions from PDFs using Ollama models.", longDescription: "A Streamlit-based Hugging Face Space that integrates Ollama for local LLM inference, enabling users to upload PDFs and query them interactively with natural language.", link: "https://huggingface.co/spaces/vikasgautam2003/ollama_streamlit_pdf_q_and_answer_", showcaseImage: "/sites/ollama.png" }
      ]
    },
  },
  {
    id: 3,
    name: "Docker Hub",
    logo: "/docker.webp",
    tagline: "Containerized Applications",
    description: "Docker Hub is where I publish production-ready container images. This ensures consistent, reproducible deployments across any environment, reflecting my expertise in DevOps practices.",
    backgroundImage: "/sites/docker1.png",
    panelImage: "/sites/dochub.png",
    link: "https://hub.docker.com/u/vikasgautam2003",
    details: {
      showcase: {
        title: "Featured Container Showcase",
        image: "/sites/docker.png",
      },
      containers : [
        { name: "java-multithreaded-server", description: "A high-performance Java TCP server container.", longDescription: "This container runs a multithreaded Java TCP server capable of handling thousands of concurrent client connections efficiently. It demonstrates advanced networking and concurrency concepts, packaged for easy deployment.", link: "https://hub.docker.com/r/vikasgautam2003/java-multithreaded-server", showcaseImage: "/sites/doc5.png" },
        { name: "cognicare-ai", description: "Containerized AI-powered mental health chatbot.", longDescription: "This container packages CogniCare AI, an empathetic chatbot built with Next.js and Gemini AI. It ensures secure, scalable deployment for real-world mental health support applications.", link: "https://hub.docker.com/r/vikasgautam2003/cognicare-ai", showcaseImage: "/sites/doc4.png" },
        { name: "ollama_pdf_app", description: "Dockerized PDF Q&A application using Ollama.", longDescription: "This container hosts the Ollama PDF Q&A application, allowing users to upload PDFs and query them interactively with natural language. It integrates Streamlit for the UI and Ollama for local LLM inference.", link: "https://hub.docker.com/r/vikasgautam2003/ollama_pdf_app", showcaseImage: "/sites/doc3.png" },
        { name: "bonzo-games", description: "Real-time multiplayer gaming platform container.", longDescription: "A Dockerized version of Bonzo Games, enabling scalable real-time multiplayer gaming with Node.js, Socket.IO, and MongoDB integration. Optimized for deployment on cloud platforms.", link: "https://hub.docker.com/r/vikasgautam2003/bonzo-games", showcaseImage: "/sites/doc2.png" },
        { name: "portfolio-app", description: "Personal portfolio application container.", longDescription: "This container runs a full-stack portfolio web application showcasing projects, skills, and experiences. Built with modern web technologies and optimized for fast, containerized deployment.", link: "https://hub.docker.com/r/vikasgautam2003/portfolio-app", showcaseImage: "/sites/doc1.png" }
    ],
    },
  },
];

// --- SVG Icons ---
const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>;
const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h7m0 0v7m0-7L10 20" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

// --- Accordion Sub-Component ---
const AccordionItem = ({ item }: { item: Repo | HFItem | Container }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-5 text-left transition-colors duration-300 hover:bg-white/5 px-4 rounded-md"
      >
        <span className="font-semibold text-lg text-white">{item.name}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gray-400">
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.4, ease: "easeInOut" }, opacity: { duration: 0.25, delay: 0.15 } } }}
            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.4, ease: "easeInOut" }, opacity: { duration: 0.25 } } }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 px-4 text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              <div className="md:col-span-2 space-y-4">
                <p className="text-white/90 leading-relaxed">{item.longDescription}</p>
                {'tech' in item && (
                  <div className="flex flex-wrap gap-2">
                    <span className="font-semibold text-white">Tech Stack:</span>
                    {item.tech.map(t => <span key={t} className="bg-slate-700 text-xs font-medium px-2 py-1 rounded-md text-slate-300">{t}</span>)}
                  </div>
                )}
                <a href={item.link} target="_blank" rel="noopener noreferrer" 
                   className="inline-block bg-purple-600/50 text-purple-300 hover:bg-purple-600/80 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg font-semibold text-sm">
                  <div className="flex items-center gap-2">
                    <span>View Link</span>
                    <ExternalLinkIcon />
                  </div>
                </a>
              </div>
              <div className="md:col-span-1">
                <img src={item.showcaseImage} alt={`Showcase for ${item.name}`} className="w-full h-auto object-cover rounded-lg border border-white/10 shadow-lg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Platforms Component ---
export default function Platforms() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  useEffect(() => {
    const navbar = document.querySelector('.sticky-navbar');
    if (selectedPlatform) {
      document.body.style.overflow = 'hidden';
      navbar?.classList.add('navbar-unsticky');
    } else {
      document.body.style.overflow = 'unset';
      navbar?.classList.remove('navbar-unsticky');
    }
    return () => {
      document.body.style.overflow = 'unset';
      navbar?.classList.remove('navbar-unsticky');
    };
  }, [selectedPlatform]);

  return (
    <section className="py-24 md:py-32 text-white relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24 tracking-tighter">
          My Digital Footprint
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              onClick={() => setSelectedPlatform(platform)}
              className="relative aspect-[1/1] sm:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div style={{ backgroundImage: `url(${platform.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <motion.div whileHover={{ rotateX: 10, rotateY: -10 }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative z-10 w-full h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                <img src={platform.logo} alt={`${platform.name} logo`} className="w-12 h-12 sm:w-16 sm:h-16 mb-4"/>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{platform.name}</h3>
                <p className="text-gray-300">{platform.tagline}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPlatform && (
          // ## FIX: The entire modal is now scrollable on all screen sizes.
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 overflow-y-auto"
          >
            {/* ## FIX: This wrapper allows the two-panel layout on desktop while being part of a single scroll on mobile. */}
            <div className="min-h-full md:flex">
                {/* Left Panel */}
                <motion.div 
                initial={{ x: "-100%" }} animate={{ x: "0%" }} exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-1/3 md:h-screen md:sticky top-0 border-b md:border-b-0 md:border-r border-white/10 p-6 sm:p-8 md:p-12 pt-20 md:pt-24 pb-8 md:pb-12 relative flex flex-col"
                >
                    <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{backgroundImage: `url(${selectedPlatform.panelImage})`}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <img src={selectedPlatform.logo} alt={`${selectedPlatform.name} logo`} className="w-20 h-20 sm:w-24 sm:h-24 mb-6"/>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tighter">{selectedPlatform.name}</h2>
                        <p className="text-gray-300 text-base sm:text-lg mb-8 md:mb-12 ">{selectedPlatform.description}</p>
                        <a href={selectedPlatform.link} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 sm:py-4 rounded-full text-white text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto">
                            Visit My Profile <ExternalLinkIcon />
                        </a>
                    </div>
                </motion.div>

                {/* Right Panel */}
                <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full md:w-2/3 relative"
                >
                    <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/kamranahmedse/driver.js/master/docs/images/bg-pattern.svg')] opacity-10"></div>
                    
                    <div className="relative p-6 sm:p-8 md:p-12 pb-12">
                        <button onClick={() => setSelectedPlatform(null)} className="fixed top-6 right-6 text-white z-[60] p-2 rounded-full hover:bg-white/10 transition-colors">
                            <CloseIcon />
                        </button>
                        
                        <div className="space-y-12 pt-12 md:pt-0">
                            <div className="space-y-6">
                                <h3 className="text-3xl sm:text-4xl font-bold text-white border-b border-white/10 pb-4">{selectedPlatform.details.showcase.title}</h3>
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={selectedPlatform.details.showcase.image} alt="Showcase" className="w-full h-auto object-cover" />
                                </div>
                            </div>

                            {selectedPlatform.details.repos && (
                                <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Featured Repositories</h3>
                                <div className="bg-slate-800/50 rounded-lg border border-white/10">
                                    {selectedPlatform.details.repos.map(item => <AccordionItem key={item.name} item={item} />)}
                                </div>
                                </div>
                            )}
                            {selectedPlatform.details.models && (
                                <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Featured Models</h3>
                                <div className="bg-slate-800/50 rounded-lg border border-white/10">
                                    {selectedPlatform.details.models.map(item => <AccordionItem key={item.name} item={item} />)}
                                </div>
                                </div>
                            )}
                            {selectedPlatform.details.datasets && (
                                <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white">Featured Datasets</h3>
                                <div className="bg-slate-800/50 rounded-lg border border-white/10">
                                    {selectedPlatform.details.datasets.map(item => <AccordionItem key={item.name} item={item} />)}
                                </div>
                                </div>
                            )}
                            {selectedPlatform.details.spaces && (
                                <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-white">Featured Spaces</h3>
                                <div className="bg-slate-800/50 rounded-lg border border-white/10">
                                    {selectedPlatform.details.spaces.map(item => <AccordionItem key={item.name} item={item} />)}
                                </div>
                                </div>
                            )}
                            {selectedPlatform.details.containers && (
                                <div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Top Container Images</h3>
                                <div className="bg-slate-800/50 rounded-lg border border-white/10">
                                    {selectedPlatform.details.containers.map(item => <AccordionItem key={item.name} item={item} />)}
                                </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}