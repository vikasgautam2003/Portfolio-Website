

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { skills, categories, Skill } from "@/constants";
// import Image from "next/image";

// // Define the type for category
// type Category = "Frontend" | "Backend" | "DevOps" | "Languages";

// const Skills: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0] as Category);

//   const filteredSkills = skills.filter(
//     (skill) => skill.category === selectedCategory
//   );

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeInOut" as const },
//     },
//   };

//   const skillItemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <motion.section
//       id="skills"
//       className="flex flex-col items-center justify-center min-h-screen w-full py-20 px-4 sm:px-10 lg:px-20 z-[20]"
//       initial="hidden"
//       whileInView="visible"
//       variants={containerVariants}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       {/* Title */}
//       <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 text-center">
//         Technologies & Skills
//       </h1>
//       <p className="text-gray-300 text-lg sm:text-xl text-center max-w-3xl mb-12">
//         A look at the modern technologies I work with to build efficient, scalable, and beautiful web applications.
//       </p>

//       {/* Main Content Card */}
//       <div className="w-full max-w-5xl bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
//         {/* Category Tabs */}
//         <div className="flex justify-center border-b border-white/10 p-2 bg-black/20">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category as Category)}
//               className={`relative px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-300 ease-in-out
//                 ${
//                   selectedCategory === category
//                     ? "text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               {selectedCategory === category && (
//                 <motion.div
//                   className="absolute inset-0 bg-purple-600/40 rounded-lg z-0"
//                   layoutId="active-category-indicator"
//                   transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                 />
//               )}
//               <span className="relative z-10">{category}</span>
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="p-6 sm:p-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//             >
//               {filteredSkills.map((skill, index) => (
//                 <motion.div
//                   key={skill.name}
//                   variants={skillItemVariants}
//                   initial="hidden"
//                   animate="visible"
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                   className="group flex flex-col items-center justify-center gap-3 text-center"
//                 >
//                   <div className="w-20 h-20 sm:w-24 sm:h-24 p-4 bg-gray-900/50 rounded-full border-2 border-white/10 group-hover:border-purple-500 transition-all duration-300 flex items-center justify-center">
//                     <Image
//                       src={skill.image}
//                       alt={skill.name}
//                       width={80}
//                       height={80}
//                       className="object-contain w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>
//                   <p className="text-sm sm:text-base font-medium text-gray-200">{skill.name}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;










// import React, { useState, useEffect, useRef, Suspense } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Float, Sparkles } from "@react-three/drei";
// import * as THREE from "three";

// // --- DATA AND TYPES (Integrated from constants/index.ts) ---
// export interface Skill {
//   name: string;
//   image: string;
//   category: "Frontend" | "Backend" | "DevOps" | "Languages";
//   description: string;
// }

// export const skills: Skill[] = [
//   // Frontend
//   { name: "JavaScript", image: "https://placehold.co/80x80/F7DF1E/000000?text=JS", category: "Frontend", description: "The language of the web, enabling interactive content." },
//   { name: "TypeScript", image: "https://placehold.co/80x80/3178C6/FFFFFF?text=TS", category: "Frontend", description: "Superset of JavaScript that adds static typing." },
//   { name: "React", image: "https://placehold.co/80x80/61DAFB/000000?text=React", category: "Frontend", description: "A powerful library for building user interfaces." },
//   { name: "Next.js", image: "https://placehold.co/80x80/000000/FFFFFF?text=Next", category: "Frontend", description: "The leading React framework for production." },
//   // Backend
//   { name: "Node.js", image: "https://placehold.co/80x80/339933/FFFFFF?text=Node", category: "Backend", description: "JavaScript runtime for scalable server-side apps." },
//   { name: "Socket.IO", image: "https://placehold.co/80x80/010101/FFFFFF?text=Socket", category: "Backend", description: "Enables real-time, bidirectional communication." },
//   { name: "MySQL", image: "https://placehold.co/80x80/4479A1/FFFFFF?text=MySQL", category: "Backend", description: "A widely-used open-source relational database." },
//   { name: "PostgreSQL", image: "https://placehold.co/80x80/4169E1/FFFFFF?text=PSQL", category: "Backend", description: "A powerful, open-source object-relational database." },
//   { name: "Prisma", image: "https://placehold.co/80x80/2D3748/FFFFFF?text=Prisma", category: "Backend", description: "A next-generation ORM for type-safe database access." },
//   // Languages
//   { name: "Golang", image: "https://placehold.co/80x80/00ADD8/FFFFFF?text=Go", category: "Languages", description: "A statically typed language known for performance." },
//   { name: "C++", image: "https://placehold.co/80x80/00599C/FFFFFF?text=C%2B%2B", category: "Languages", description: "High-performance language for systems programming." },
//   { name: "Python", image: "https://placehold.co/80x80/3776AB/FFFFFF?text=Py", category: "Languages", description: "Versatile language for web, data science, and AI." },
//   { name: "Java", image: "https://placehold.co/80x80/f89820/FFFFFF?text=Java", category: "Languages", description: "Class-based, object-oriented enterprise language." },
//   // DevOps
//   { name: "Docker", image: "https://placehold.co/80x80/2496ED/FFFFFF?text=Docker", category: "DevOps", description: "A platform for developing and running applications in containers." },
//   { name: "Vercel", image: "https://placehold.co/80x80/000000/FFFFFF?text=Vercel", category: "DevOps", description: "Cloud platform for static sites and Serverless Functions." },
// ];

// export const categories = [...new Set(skills.map((skill) => skill.category))];

// // --- 3D SCENE COMPONENTS ---

// const SceneFrontend = () => (
//   <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
//     <mesh>
//       <boxGeometry args={[2.5, 2.5, 2.5]} />
//       <meshStandardMaterial wireframe color="#61DAFB" emissive="#61DAFB" emissiveIntensity={1} />
//     </mesh>
//   </Float>
// );

// const SceneBackend = () => {
//   const groupRef = useRef<THREE.Group>(null);
//   useFrame((_, delta) => {
//     if (groupRef.current) groupRef.current.rotation.y += delta * 0.3;
//   });
//   return (
//     <group ref={groupRef}>
//       <mesh>
//         <sphereGeometry args={[1.5, 32, 32]} />
//         <meshStandardMaterial color="#339933" emissive="#339933" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
//       </mesh>
//       {[...Array(4)].map((_, i) => (
//         <mesh key={i} position={[Math.sin(i * Math.PI / 2) * 2.5, 0, Math.cos(i * Math.PI / 2) * 2.5]}>
//           <sphereGeometry args={[0.3, 16, 16]} />
//           <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// const SceneLanguages = () => (
//   <group>
//     {[...Array(4)].map((_, i) => ( // Adjusted to 4 to match new data
//       <Float key={i} speed={3} rotationIntensity={2} floatIntensity={2}>
//         <mesh position={[(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6]}>
//           <icosahedronGeometry args={[0.8, 0]} />
//           <meshStandardMaterial color={['#00ADD8', '#3776AB', '#00599C', '#f89820'][i]} emissive={['#00ADD8', '#3776AB', '#00599C', '#f89820'][i]} emissiveIntensity={0.3} />
//         </mesh>
//       </Float>
//     ))}
//   </group>
// );

// const SceneDevOps = () => {
//   const ref = useRef<THREE.Mesh>(null);
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.x += 0.005;
//       ref.current.rotation.y += 0.005;
//     }
//   });
//   return (
//     <mesh ref={ref}>
//       <torusKnotGeometry args={[1.5, 0.4, 128, 16]} />
//       <meshStandardMaterial color="#2496ED" wireframe />
//     </mesh>
//   );
// };

// const sceneComponents: Record<string, React.FC> = {
//   Frontend: SceneFrontend,
//   Backend: SceneBackend,
//   Languages: SceneLanguages,
//   DevOps: SceneDevOps,
// };

// // --- MAIN COMPONENT ---
// export default function App() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const isScrolling = useRef(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleWheel = (e: WheelEvent) => {
//       if (isScrolling.current) return;
//       isScrolling.current = true;
//       if (e.deltaY > 0) setActiveIndex((prev) => Math.min(prev + 1, categories.length - 1));
//       else setActiveIndex((prev) => Math.max(prev - 1, 0));
//       setTimeout(() => { isScrolling.current = false; }, 1000);
//     };
//     const currentRef = containerRef.current;
//     currentRef?.addEventListener("wheel", handleWheel);
//     return () => currentRef?.removeEventListener("wheel", handleWheel);
//   }, []);

//   const currentCategory = categories[activeIndex];
//   const CurrentScene = sceneComponents[currentCategory];
//   const currentSkills = skills.filter(skill => skill.category === currentCategory);

//   return (
//     <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black font-sans">
//       <AnimatePresence>
//         <motion.div key={activeIndex} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0, transition: { duration: 1 } }}>
//           <Suspense fallback={null}>
//             <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
//               <ambientLight intensity={0.2} />
//               <pointLight position={[10, 10, 10]} intensity={1} />
//               <Sparkles count={100} scale={8} size={1} speed={0.4} color="#8A2BE2" />
//               <CurrentScene />
//               <OrbitControls enableZoom={false} enablePan={false} />
//             </Canvas>
//           </Suspense>
//         </motion.div>
//       </AnimatePresence>

//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
//         <AnimatePresence mode="wait">
//           <motion.div key={activeIndex} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] } }} exit={{ y: -50, opacity: 0, transition: { duration: 0.5 } }} className="text-center">
//             <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">{currentCategory}</h1>
//             <motion.div className="flex justify-center gap-4 md:gap-8 flex-wrap px-4" variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } } }} initial="hidden" animate="visible">
//               {currentSkills.map((skill) => (
//                 <motion.div key={skill.name} variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="relative group bg-black/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 pointer-events-auto">
//                   <img src={skill.image} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full" />
//                   <p className="text-white mt-2 text-sm md:text-base">{skill.name}</p>
//                   {/* Tooltip */}
//                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     {skill.description}
//                     <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900" />
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
//         <span className="text-white/50 text-sm">SCROLL</span>
//         <div className="w-px h-10 bg-white/20 relative">
//           <motion.div className="w-full h-2 bg-white absolute top-0" animate={{ y: [0, 32, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
//         </div>
//       </div>
//     </div>
//   );
// }


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
//   { name: "Docker", image: "https://placehold.co/80x80/2496ED/FFFFFF?text=Docker", category: "DevOps", description: "A platform for developing, shipping, and running applications in containers." },
//   { name: "Vercel", image: "https://placehold.co/80x80/000000/FFFFFF?text=Vercel", category: "DevOps", description: "A cloud platform for static sites and Serverless Functions that fits perfectly with Next.js." },
//   { name: "Render", image: "https://placehold.co/80x80/000000/FFFFFF?text=Render", category: "DevOps", description: "A cloud platform for static sites and Serverless Functions that fits perfectly with Next.js." },
//   { name: "GitHub", image: "https://placehold.co/80x80/181717/FFFFFF?text=GitHub", category: "DevOps", description: "A code hosting platform for version control and collaboration." },
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
//       <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={isInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="lg:col-span-4 lg:sticky top-24 text-center lg:text-left"
//         >
//           <h2 className={`text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>
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
//         <motion.div 
//             className="absolute left-4 top-0 w-1 h-full bg-white/5 rounded-full"
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
//         <main>
//           {categories.map((category) => (
//             <CategorySection key={category} category={category} />
//           ))}
//         </main>
//       </div>

//       <div className="h-96 flex items-center justify-center text-center">
//         <p className="text-2xl text-gray-500">Let's build something great together.</p>
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
  { name: "Docker", image: "https://placehold.co/80x80/249ED8/FFFFFF?text=Docker", category: "DevOps", description: "A platform for developing, shipping, and running applications in containers." },
  { name: "Vercel", image: "https://placehold.co/80x80/000000/FFFFFF?text=Vercel", category: "DevOps", description: "A cloud platform for static sites and Serverless Functions that fits perfectly with Next.js." },
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

  const itemVariants = {
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
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
        <p className="text-xl sm:text-2xl text-gray-500">Let's build something great together.</p>
      </div>
    </div>
  );
}




