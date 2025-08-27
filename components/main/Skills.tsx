








import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA, TYPES, AND THEMES (Unchanged) ---
export interface Skill {
  name: string;
  image: string;
  category: "Frontend" | "Backend" | "DevOps" | "Languages";
  description: string;
}

export const skills: Skill[] = [
    { name: "JavaScript", image: "https://placehold.co/80x80/F7DF1E/000000?text=JS", category: "Frontend", description: "The dynamic language of the web." },
    { name: "TypeScript", image: "https://placehold.co/80x80/3178C6/FFFFFF?text=TS", category: "Frontend", description: "JavaScript with robust static typing." },
    { name: "React", image: "https://placehold.co/80x80/61DAFB/000000?text=React", category: "Frontend", description: "A powerful library for building UIs." },
    { name: "Next.js", image: "https://placehold.co/80x80/000000/FFFFFF?text=Next", category: "Frontend", description: "The leading React framework for production." },
    { name: "Node.js", image: "https://placehold.co/80x80/339933/FFFFFF?text=Node", category: "Backend", description: "JavaScript runtime for building servers." },
    { name: "Prisma", image: "https://placehold.co/80x80/2D3748/FFFFFF?text=Prisma", category: "Backend", description: "Next-gen ORM for Node.js & TypeScript." },
    { name: "PostgreSQL", image: "https://placehold.co/80x80/4169E1/FFFFFF?text=PSQL", category: "Backend", description: "A powerful, open-source relational database." },
    { name: "MongoDB", image: "https://placehold.co/80x80/47A248/FFFFFF?text=Mongo", category: "Backend", description: "Popular NoSQL document database." },
    { name: "Golang", image: "https://placehold.co/80x80/00ADD8/FFFFFF?text=Go", category: "Languages", description: "A language known for simplicity and speed." },
    { name: "Python", image: "https://placehold.co/80x80/3776AB/FFFFFF?text=Py", category: "Languages", description: "Versatile language for web, data & AI." },
    { name: "C++", image: "https://placehold.co/80x80/00599C/FFFFFF?text=C%2B%2B", category: "Languages", description: "High-performance systems language." },
    { name: "Java", image: "https://placehold.co/80x80/f89820/FFFFFF?text=Java", category: "Languages", description: "Class-based, object-oriented language." },
    { name: "Docker", image: "https://placehold.co/80x80/249ED8/FFFFFF?text=Docker", category: "DevOps", description: "Platform for containerizing applications." },
    { name: "Vercel", image: "https://placehold.co/80x80/000000/FFFFFF?text=Vercel", category: "DevOps", description: "Cloud platform optimized for the frontend." },
    { name: "Render", image: "https://placehold.co/80x80/000000/FFFFFF?text=Render", category: "DevOps", description: "Unified cloud for apps and web services." },
];

const categories = ["Frontend", "Backend", "Languages", "DevOps"];

const categoryThemes = {
  Frontend: "from-cyan-400 to-blue-500",
  Backend: "from-emerald-400 to-green-500",
  Languages: "from-amber-400 to-orange-500",
  DevOps: "from-purple-400 to-indigo-500",
};

// --- NEW, SIMPLIFIED ANIMATION VARIANTS ---
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05, // Subtle stagger for items fading in
    },
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3,
    }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- MAIN PAGE COMPONENT WITH SIMPLIFIED LOGIC ---
export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="bg-transparent text-white font-sans w-full min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
        >
          My Technical Skills
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 mb-12 text-center max-w-2xl"
        >
          Click a category to see the skills cross-fade.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 p-1 bg-black/20 rounded-full backdrop-blur-sm">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`relative px-3 py-1.5 md:px-5 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-colors ${selectedCategory === category ? "text-white" : "text-gray-300 hover:bg-white/10"}`}>
              {selectedCategory === category && (
                <motion.div 
                  layoutId="active-pill" 
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryThemes[category as keyof typeof categoryThemes]}`} 
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* This AnimatePresence now wraps the entire grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            // The key is crucial. It tells React to treat grids of different categories as separate components.
            key={selectedCategory} 
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="relative flex flex-col justify-between p-6 rounded-lg bg-gray-900/60 
                           border border-white/10 h-60 overflow-hidden cursor-pointer
                           transition-transform duration-300 hover:scale-105" // Simple hover effect
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${categoryThemes[skill.category as keyof typeof categoryThemes]}`} />
                
                <div className="flex-shrink-0">
                  <img 
                    src={skill.image} 
                    alt={`${skill.name} logo`}
                    className="w-12 h-12"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}