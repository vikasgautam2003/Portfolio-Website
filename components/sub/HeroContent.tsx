





"use client";

import React from "react";
import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const HeroContent: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex flex-col gap-6 items-center justify-center min-h-screen w-full px-4 z-[20]"
    >
      <div className="absolute inset-0 w-full h-full hidden md:block z-[-1] opacity-30">
        {/* Left Side Icons */}
        <motion.img
          src="/react.png"
          alt="React Icon"
          width={64}
          height={64}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.1 }}
          className="absolute top-[15%] left-[10%]"
        />
        <motion.img
          src="/ts.png"
          alt="TypeScript Icon"
          width={56}
          height={56}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.3 }}
          className="absolute top-[40%] left-[20%]"
        />
        <motion.img
          src="/tailwind.png"
          alt="Tailwind CSS Icon"
          width={64}
          height={64}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
          className="absolute top-[65%] left-[5%]"
        />
        <motion.img
          src="/mongodb.png"
          alt="MongoDB Icon"
          width={55}
          height={55}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.7 }}
          className="absolute bottom-[25%] left-[25%]"
        />
        <motion.img
          src="/python.svg"
          alt="Python Icon"
          width={58}
          height={58}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.9 }}
          className="absolute top-[36%] left-[2%]"
        />
        <motion.img
          src="/github.svg"
          alt="Git Icon"
          width={58}
          height={58}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1.1 }}
          className="absolute bottom-[10%] left-[15%]"
        />

        {/* Right Side Icons */}
        <motion.img
          src="/next.svg"
          alt="Next.js Icon"
          width={60}
          height={60}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
          className="absolute top-[18%] right-[5%]"
        />
        <motion.img
          src="/node-js.png"
          alt="Node.js Icon"
          width={60}
          height={60}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
          className="absolute top-[25%] right-[20%]"
        />
        <motion.img
          src="/postger.png"
          alt="Framer Motion Icon"
          width={56}
          height={56}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
          className="absolute top-[70%] right-[5%]"
        />
        <motion.img
          src="/render.png"
          alt="Render Icon"
          width={60}
          height={60}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
          className="absolute bottom-[40%] right-[25%]"
        />
        <motion.img
          src="/docker.webp"
          alt="Docker Icon"
          width={62}
          height={62}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1.0 }}
          className="absolute top-[5%] right-[2%]"
        />
        <motion.img
          src="/java21.svg"
          alt="Java 21 Icon"
          width={52}
          height={52}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-[10%] right-[15%]"
        />
        <motion.img
          src="/express.png"
          alt="Express Icon"
          width={56}
          height={56}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1.3 }}
          className="absolute bottom-[50%] right-[12%]"
        />
        <motion.img
          src="/sqlite-icon.svg"
          alt="SQLite Icon"
          width={56}
          height={56}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
          className="absolute top-[80%] right-[28%]"
        />
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 1000 }}
        variants={fadeInVariants}
        className="flex justify-center items-center"
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-2xl opacity-60"></div>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            src="/DSC_5412.JPG"
            alt="Profile Photo"
            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800"
          />
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white">
          <div className="overflow-hidden">
            <motion.div variants={textRevealVariants}>Hi, I&apos;m</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={textRevealVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Vikas Gautam
            </motion.div>
          </div>
        </h1>

        <motion.p
          variants={fadeInVariants}
          className="text-lg sm:text-xl text-gray-300 max-w-lg mt-2"
        >
          A creative software developer passionate about building beautiful and
          functional digital experiences that leave a lasting impression.
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          className="mt-6 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="py-3 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Get In Touch
          </a>
          <a
            href="/project/resume1.pdf"
            download
            className="py-3 px-8 border-2 border-white/50 text-white font-semibold rounded-lg shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
