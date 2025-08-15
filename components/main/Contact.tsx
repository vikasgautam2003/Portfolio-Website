

"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .sendForm(serviceId, templateId, form.current!, publicKey)
      .then(
        () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 md:px-10 text-white relative z-10 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
        >
          Get In
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Touch
          </span>
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="hidden md:flex flex-col items-center justify-center"
          >
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-2xl opacity-50"></div>
              <PaperAirplaneIcon className="relative w-full h-full text-white/80" />
            </motion.div>
            <p className="text-lg text-gray-300 mt-6 text-center">
              Have a project in mind? Let&apos;s talk!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="text-center text-green-400 mt-4">Message Sent! Thank you.</p>
              )}
              {status === "error" && (
                <p className="text-center text-red-400 mt-4">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
