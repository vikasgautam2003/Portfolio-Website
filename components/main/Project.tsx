



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Bonzo Games",
    description: "A happy place where you can play classic games for some fun.",
    image: "/bonzo.png",
    link: "https://bonzo-gaming-website.onrender.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    image: "/port.jpg",
    link: "https://portfolio-website-git-main-vikas-gautams-projects-44fbb49c.vercel.app/",
  },
  {
    id: 3,
    title: "Shiksha Kendra",
    description:
      "A place where students or even professional can learn from courses.",
    image: "/development.jpg",
    link: "#", // No link for development project
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Project: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 md:px-10 text-white relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>

                {project.title === "Shiksha Kendra" ? (
                  <div className="mt-4 text-center bg-gray-700 px-4 py-2 rounded-lg text-white text-sm font-medium cursor-not-allowed">
                    In Development
                  </div>
                ) : (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-block text-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-300"
                  >
                    View Project
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Project;

