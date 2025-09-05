

"use client";

import React, { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Skill {
  name: string;
  image: string;
  category: "Frontend" | "Backend" | "DevOps" | "Languages" | "AI";
  description: string;
}

export const skills: Skill[] = [
  { name: "JavaScript", image: "/logos/js.svg", category: "Frontend", description: "The dynamic language of the web." },
  { name: "TypeScript", image: "/logos/ts.svg", category: "Frontend", description: "JavaScript with robust static typing." },
  { name: "React", image: "/logos/react.svg", category: "Frontend", description: "A powerful library for building UIs." },
  { name: "Next.js", image: "/logos/next.svg", category: "Frontend", description: "The leading React framework for production." },
  { name: "Node.js", image: "/logos/nodejs.svg", category: "Backend", description: "JavaScript runtime for building servers." },
  { name: "Prisma", image: "/logos/prisma.svg", category: "Backend", description: "Next-gen ORM for Node.js & TypeScript." },
  { name: "PostgreSQL", image: "/logos/postgresql.svg", category: "Backend", description: "A powerful, open-source relational database." },
  { name: "MongoDB", image: "/logos/mongo.svg", category: "Backend", description: "Popular NoSQL document database." },
  { name: "Golang", image: "/logos/golang.svg", category: "Languages", description: "A language known for simplicity and speed." },
  { name: "Python", image: "/logos/python.svg", category: "Languages", description: "Versatile language for web, data & AI." },
  { name: "C++", image: "/logos/c.svg", category: "Languages", description: "High-performance systems language." },
  { name: "Java", image: "/logos/java.svg", category: "Languages", description: "Class-based, object-oriented language." },
  { name: "Docker", image: "/logos/docker.svg", category: "DevOps", description: "Platform for containerizing applications." },
  { name: "Vercel", image: "/logos/vercel.svg", category: "DevOps", description: "Cloud platform optimized for the frontend." },
  { name: "Render", image: "/logos/render.svg", category: "DevOps", description: "Unified cloud for apps and web services." },
  { name: "Railway", image: "/logos/railway.svg", category: "DevOps", description: "Infrastructure platform for developers." },
  { name: "Gemini API", image: "/logos/gemini.svg", category: "AI", description: "Access Google's powerful generative models." },
  { name: "LangChain", image: "/logos/langchain.svg", category: "AI", description: "Framework for developing LLM applications." },
  { name: "Streamlit", image: "/logos/Streamlit.svg", category: "AI", description: "Build and share data apps, fast." },
  { name: "Prompt Engineering", image: "/logos/prompt.svg", category: "AI", description: "Crafting effective inputs for AI models." },
  { name: "spaCy", image: "/logos/Spacy.svg", category: "AI", description: "Industrial-strength Natural Language Processing." },
  { name: "Pandas", image: "/logos/Pandas.svg", category: "AI", description: "Powerful data analysis and manipulation library." },
  { name: "Dialogflow", image: "/logos/dialogflow.svg", category: "AI", description: "Build conversational AI experiences." },
  { name: "Ollama", image: "/logos/ollama.svg", category: "AI", description: "Run and manage local LLMs easily." },
  { name: "MySQL", image: "/logos/mysql.svg", category: "Backend", description: "The world's most popular open-source database." }
];

const categories = ["Frontend", "Backend", "Languages", "DevOps", "AI"];

const categoryThemes = {
  Frontend: { gradient: "from-cyan-400 to-blue-500", shadow: "shadow-blue-500/50" },
  Backend: { gradient: "from-emerald-400 to-green-500", shadow: "shadow-green-500/50" },
  Languages: { gradient: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/50" },
  DevOps: { gradient: "from-purple-400 to-indigo-500", shadow: "shadow-indigo-500/50" },
  AI: { gradient: "from-pink-400 to-red-500", shadow: "shadow-red-500/50" },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const cardVariants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } };

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="bg-transparent text-white font-sans w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-center">
          My Technical Skills
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-gray-400 mb-8 md:mb-12 text-center max-w-2xl">
          A curated collection of my technical abilities. Interact with the grid to explore my expertise.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 p-1 bg-black/20 rounded-full backdrop-blur-sm">
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`relative px-3 py-1.5 md:px-5 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-colors ${selectedCategory === category ? "text-white" : "text-gray-300 hover:bg-white/10"}`}>
              {selectedCategory === category && (
                <motion.div layoutId="active-pill" className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryThemes[category as keyof typeof categoryThemes].gradient}`} transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory} variants={gridVariants} initial="hidden" animate="visible" exit="exit" onMouseMove={handleMouseMove} className="group relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 w-full" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` } as React.CSSProperties}>
            
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.1), transparent 40%)` }} />

            {filteredSkills.map(skill => (
              <motion.div key={skill.name} variants={cardVariants} transition={{ type: 'spring', stiffness: 400, damping: 15 }} className="group/item relative p-4 md:p-6 rounded-2xl bg-gray-900/60 border border-white/10 overflow-hidden cursor-pointer backdrop-blur-sm">
                
                {/* Whiteish overlay on hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover/item:opacity-50 rounded-2xl pointer-events-none" />

                <motion.div whileHover={{ scale: 1.1, rotateZ: '3deg' }} className="flex items-center gap-3 sm:gap-4 relative z-10">
                  <img src={skill.image || `https://placehold.co/80x80/1a1a1a/FFFFFF?text=${skill.name[0]}`} alt={`${skill.name} logo`} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"/>
                  <h3 className="font-bold text-base sm:text-lg text-white">{skill.name}</h3>
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className={`absolute -bottom-1/2 -right-1/2 w-48 h-48 rounded-full bg-gradient-to-r ${categoryThemes[skill.category as keyof typeof categoryThemes].gradient} opacity-0 transition-all duration-500 group-hover/item:opacity-30 group-hover/item:scale-150 blur-3xl`} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}