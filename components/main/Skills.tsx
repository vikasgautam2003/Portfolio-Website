





// import React, { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";

// // --- DATA, TYPES, AND THEMES (from constants/index.ts) ---
// export interface Skill {
//   name: string;
//   image: string;
//   category: "Frontend" | "Backend" | "DevOps" | "Languages";
//   description: string;
// }

// export const skills: Skill[] = [
//   { name: "JavaScript", image: "https://placehold.co/80x80/F7DF1E/000000?text=JS", category: "Frontend", description: "The language of the web, enabling interactive and dynamic content." },
//   { name: "TypeScript", image: "https://placehold.co/80x80/3178C6/FFFFFF?text=TS", category: "Frontend", description: "Superset of JavaScript that adds static typing for robust applications." },
//   { name: "React", image: "https://placehold.co/80x80/61DAFB/000000?text=React", category: "Frontend", description: "A powerful library for building user interfaces with a component-based architecture." },
//   { name: "Next.js", image: "https://placehold.co/80x80/000000/FFFFFF?text=Next", category: "Frontend", description: "The leading React framework for production-grade, full-stack applications." },
//   { name: "Node.js", image: "https://placehold.co/80x80/339933/FFFFFF?text=Node", category: "Backend", description: "A JavaScript runtime for building fast and scalable server-side applications." },
//   { name: "Socket.IO", image: "https://placehold.co/80x80/010101/FFFFFF?text=Socket", category: "Backend", description: "Enables real-time, bidirectional communication between web clients and servers." },
//   { name: "MySQL", image: "https://placehold.co/80x80/4479A1/FFFFFF?text=MySQL", category: "Backend", description: "A widely-used open-source relational database management system." },
//   { name: "PostgreSQL", image: "https://placehold.co/80x80/4169E1/FFFFFF?text=PSQL", category: "Backend", description: "A powerful, open-source object-relational database system." },
//   { name: "Prisma", image: "https://placehold.co/80x80/2D3748/FFFFFF?text=Prisma", category: "Backend", description: "A next-generation ORM that makes database access easy and type-safe." },
//   { name: "Golang", image: "https://placehold.co/80x80/00ADD8/FFFFFF?text=Go", category: "Languages", description: "A statically typed, compiled language known for its simplicity and performance." },
//   { name: "C++", image: "https://placehold.co/80x80/00599C/FFFFFF?text=C%2B%2B", category: "Languages", description: "A high-performance language used in systems programming and game development." },
//   { name: "Python", image: "https://placehold.co/80x80/3776AB/FFFFFF?text=Py", category: "Languages", description: "A versatile language popular for web development, data science, and AI." },
//   { name: "Java", image: "https://placehold.co/80x80/f89820/FFFFFF?text=Java", category: "Languages", description: "A class-based, object-oriented language for large-scale enterprise applications." },
//   { name: "Docker", image: "https://placehold.co/80x80/249ED8/FFFFFF?text=Docker", category: "DevOps", description: "A platform for developing, shipping, and running applications in containers." },
//   { name: "Vercel", image: "https://placehold.co/80x80/000000/FFFFFF?text=Vercel", category: "DevOps", description: "A cloud platform for static sites and Serverless Functions that fits perfectly with Next.js." },
// ];

// export const categories = ["Frontend", "Backend", "Languages", "DevOps"];

// const categoryThemes = {
//   Frontend: { color: "#61DAFB", gradient: "from-blue-500 to-cyan-400" },
//   Backend: { color: "#339933", gradient: "from-emerald-500 to-green-400" },
//   Languages: { color: "#f89820", gradient: "from-amber-500 to-orange-400" },
//   DevOps: { color: "#8A2BE2", gradient: "from-indigo-500 to-purple-400" },
// };

// // --- SUB-COMPONENTS ---

// const AnimatedTitle = ({ text }: { text: string }) => (
//     <span className="inline-block">
//         {text.split(" ").map((word, wordIndex) => (
//             <span key={wordIndex} className="inline-block mr-4">
//                 {word.split("").map((char, charIndex) => (
//                     <motion.span
//                         key={charIndex}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{
//                             delay: (wordIndex * 0.2) + (charIndex * 0.05),
//                             duration: 0.5,
//                             ease: "easeOut",
//                         }}
//                         className="inline-block"
//                     >
//                         {char}
//                     </motion.span>
//                 ))}
//             </span>
//         ))}
//     </span>
// );

// const CategorySection = ({ category }: { category: string }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });
//   const theme = categoryThemes[category as keyof typeof categoryThemes];
//   const categorySkills = skills.filter(skill => skill.category === category);

//   const listVariants = {
//     visible: { transition: { staggerChildren: 0.1 } },
//     hidden: {},
//   };

//   const itemVariants = {
//     visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
//     hidden: { opacity: 0, x: 100 },
//   };

//   return (
//     <section ref={ref} className="w-full flex justify-center py-24 px-4 sm:px-8" style={{ perspective: "1000px" }}>
//       <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="lg:col-span-4 lg:sticky top-24 text-center lg:text-left"
//         >
//           <h2 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>
//             {category}
//           </h2>
//           <div className="mt-4 h-1.5 w-24 rounded-full mx-auto lg:mx-0" style={{ background: theme.color }} />
//         </motion.div>

//         <motion.div
//           variants={listVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="lg:col-span-8 space-y-8"
//         >
//           {categorySkills.map((skill) => (
//             <motion.div
//               key={skill.name}
//               variants={itemVariants}
//               className="group relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-black/50"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <div className="flex items-center gap-6">
//                 <motion.img 
//                   src={skill.image} 
//                   alt={skill.name} 
//                   className="w-16 h-16 object-contain flex-shrink-0 transition-transform duration-300" 
//                   whileHover={{ scale: 1.2, rotateZ: 10 }}
//                   style={{ transform: "translateZ(20px)" }}
//                 />
//                 <div style={{ transform: "translateZ(10px)" }}>
//                   <h3 className="text-xl font-bold text-white">{skill.name}</h3>
//                   <p className="text-gray-300 mt-1">{skill.description}</p>
//                 </div>
//               </div>
//               <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 50% 50%, ${theme.color}, transparent 70%)` }} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // --- MAIN COMPONENT ---
// export default function App() {
//   const mainRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: mainRef });

//   const trailY = useTransform(scrollYProgress, [0, 1], ["-10%", "100%"]);
//   const trailColor = useTransform(
//     scrollYProgress,
//     [0, 0.25, 0.5, 0.75, 1],
//     ["#61DAFB", "#339933", "#f89820", "#8A2BE2", "#8A2BE2"]
//   );

//   return (
//     <div className="bg-transparent text-white font-sans w-full">
//       <div className="h-screen flex flex-col items-center justify-center text-center p-4 relative">
//         <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <AnimatedTitle text="My Technical Skills" />
//         </h1>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1.5 }}
//           className="text-lg md:text-xl text-gray-300 max-w-2xl"
//         >
//           A curated list of the technologies and languages I specialize in,
//           brought to life with a simple, elegant reveal.
//         </motion.p>
//       </div>
      
//       <div ref={mainRef} className="relative">
//         {/* Luminous Trail - Hidden on mobile, visible on large screens */}
//         <motion.div 
//             className="absolute hidden lg:block left-8 top-0 w-1 h-full bg-white/5 rounded-full"
//         >
//             <motion.div 
//                 className="w-full h-24 rounded-full"
//                 style={{ 
//                     y: trailY,
//                     background: useTransform(trailColor, (c) => `radial-gradient(circle, ${c} 30%, transparent 100%)`),
//                     boxShadow: useTransform(trailColor, (c) => `0 0 20px ${c}`),
//                 }}
//             />
//         </motion.div>
//         {/* Add padding on large screens to avoid content overlapping with the trail */}
//         <main className="lg:pl-24">
//           {categories.map((category) => (
//             <CategorySection key={category} category={category} />
//           ))}
//         </main>
//       </div>

//       <div className="h-96 flex items-center justify-center text-center px-4">
//         <p className="text-xl sm:text-2xl text-gray-500">Let's build something great together.</p>
//       </div>
//     </div>
//   );
// }




import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// --- DATA, TYPES, AND THEMES (from constants/index.ts) ---
export interface Skill {
  name: string;
  image: string;
  category: "Frontend" | "Backend" | "DevOps" | "Languages";
  description: string;
}

export const skills: Skill[] = [
  { name: "JavaScript", image: "https://placehold.co/80x80/F7DF1E/000000?text=JS", category: "Frontend", description: "The language of the web, enabling interactive and dynamic content." },
  { name: "TypeScript", image: "https://placehold.co/80x80/3178C6/FFFFFF?text=TS", category: "Frontend", description: "Superset of JavaScript that adds static typing for robust applications." },
  { name: "React", image: "https://placehold.co/80x80/61DAFB/000000?text=React", category: "Frontend", description: "A powerful library for building user interfaces with a component-based architecture." },
  { name: "Next.js", image: "https://placehold.co/80x80/000000/FFFFFF?text=Next", category: "Frontend", description: "The leading React framework for production-grade, full-stack applications." },
  { name: "Node.js", image: "https://placehold.co/80x80/339933/FFFFFF?text=Node", category: "Backend", description: "A JavaScript runtime for building fast and scalable server-side applications." },
  { name: "Socket.IO", image: "https://placehold.co/80x80/010101/FFFFFF?text=Socket", category: "Backend", description: "Enables real-time, bidirectional communication between web clients and servers." },
  { name: "MySQL", image: "https://placehold.co/80x80/4479A1/FFFFFF?text=MySQL", category: "Backend", description: "A widely-used open-source relational database management system." },
  { name: "PostgreSQL", image: "https://placehold.co/80x80/4169E1/FFFFFF?text=PSQL", category: "Backend", description: "A powerful, open-source object-relational database system." },
  { name: "Prisma", image: "https://placehold.co/80x80/2D3748/FFFFFF?text=Prisma", category: "Backend", description: "A next-generation ORM that makes database access easy and type-safe." },
  { name: "Golang", image: "https://placehold.co/80x80/00ADD8/FFFFFF?text=Go", category: "Languages", description: "A statically typed, compiled language known for its simplicity and performance." },
  { name: "C++", image: "https://placehold.co/80x80/00599C/FFFFFF?text=C%2B%2B", category: "Languages", description: "A high-performance language used in systems programming and game development." },
  { name: "Python", image: "https://placehold.co/80x80/3776AB/FFFFFF?text=Py", category: "Languages", description: "A versatile language popular for web development, data science, and AI." },
  { name: "Java", image: "https://placehold.co/80x80/f89820/FFFFFF?text=Java", category: "Languages", description: "A class-based, object-oriented language for large-scale enterprise applications." },
  { name: "Vercel", image: "https://placehold.co/80x80/000000/FFFFFF?text=Vercel", category: "DevOps", description: "A cloud platform for static sites and Serverless Functions that fits perfectly with Next.js." },
  { name: "Render", image: "https://placehold.co/80x80/000000/FFFFFF?text=Render", category: "DevOps", description: "A platform for building and deploying Next.js applications with ease." }, 
  { name: "Docker", image: "https://placehold.co/80x80/249ED8/FFFFFF?text=Docker", category: "DevOps", description: "A platform for developing, shipping, and running applications in containers." },
  { name: "MongoDB", image: "https://placehold.co/80x80/47A248/FFFFFF?text=Mongo", category: "Backend", description: "A popular NoSQL database for storing and retrieving data." }
];

export const categories = ["Frontend", "Backend", "Languages", "DevOps"];

const categoryThemes = {
  Frontend: { color: "#61DAFB", gradient: "from-blue-500 to-cyan-400" },
  Backend: { color: "#339933", gradient: "from-emerald-500 to-green-400" },
  Languages: { color: "#f89820", gradient: "from-amber-500 to-orange-400" },
  DevOps: { color: "#8A2BE2", gradient: "from-indigo-500 to-purple-400" },
};

// --- SUB-COMPONENTS ---

const AnimatedTitle = ({ text }: { text: string }) => (
    <span className="inline-block">
        {text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4">
                {word.split("").map((char, charIndex) => (
                    <motion.span
                        key={charIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: (wordIndex * 0.2) + (charIndex * 0.05),
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="inline-block"
                    >
                        {char}
                    </motion.span>
                ))}
            </span>
        ))}
    </span>
);

const CategorySection = ({ category }: { category: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const theme = categoryThemes[category as keyof typeof categoryThemes];
  const categorySkills = skills.filter(skill => skill.category === category);

  const listVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
    hidden: {},
  };

  // Fixed TypeScript error by asserting "spring" as const
  const itemVariants = {
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <section ref={ref} className="w-full flex justify-center py-24 px-4 sm:px-8" style={{ perspective: "1000px" }}>
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 lg:sticky top-24 text-center lg:text-left"
        >
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>
            {category}
          </h2>
          <div className="mt-4 h-1.5 w-24 rounded-full mx-auto lg:mx-0" style={{ background: theme.color }} />
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:col-span-8 space-y-8"
        >
          {categorySkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-black/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex items-center gap-6">
                <motion.img 
                  src={skill.image} 
                  alt={skill.name} 
                  className="w-16 h-16 object-contain flex-shrink-0 transition-transform duration-300" 
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  style={{ transform: "translateZ(20px)" }}
                />
                <div style={{ transform: "translateZ(10px)" }}>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  <p className="text-gray-300 mt-1">{skill.description}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 50% 50%, ${theme.color}, transparent 70%)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- MAIN COMPONENT ---
export default function App() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: mainRef });

  const trailY = useTransform(scrollYProgress, [0, 1], ["-10%", "100%"]);
  const trailColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#61DAFB", "#339933", "#f89820", "#8A2BE2", "#8A2BE2"]
  );

  return (
    <div className="bg-transparent text-white font-sans w-full">
      <div className="h-screen flex flex-col items-center justify-center text-center p-4 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <AnimatedTitle text="My Technical Skills" />
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          A curated list of the technologies and languages I specialize in,
          brought to life with a simple, elegant reveal.
        </motion.p>
      </div>
      
      <div ref={mainRef} className="relative">
        {/* Luminous Trail - Hidden on mobile, visible on large screens */}
        <motion.div 
            className="absolute hidden lg:block left-8 top-0 w-1 h-full bg-white/5 rounded-full"
        >
            <motion.div 
                className="w-full h-24 rounded-full"
                style={{ 
                    y: trailY,
                    background: useTransform(trailColor, (c) => `radial-gradient(circle, ${c} 30%, transparent 100%)`),
                    boxShadow: useTransform(trailColor, (c) => `0 0 20px ${c}`),
                }}
            />
        </motion.div>
        {/* Add padding on large screens to avoid content overlapping with the trail */}
        <main className="lg:pl-24">
          {categories.map((category) => (
            <CategorySection key={category} category={category} />
          ))}
        </main>
      </div>

      <div className="h-96 flex items-center justify-center text-center px-4">
        <p className="text-xl sm:text-2xl text-gray-500">Let&apos;s build something great together.</p>
      </div>
    </div>
  );
}

