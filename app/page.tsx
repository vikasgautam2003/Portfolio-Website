



"use client";

import React, { useState, useEffect } from "react";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import HeroContent from "@/components/sub/HeroContent";
import Project from "@/components/main/Project";
import Footer from "@/components/main/Footer";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import PreLoader from "@/components/main/PreLoader";
import { AnimatePresence } from "framer-motion";
import Platforms from "@/components/main/Platform";
import AiProjects from "@/components/main/AiProjects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <AnimatePresence>
        {loading && <PreLoader />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="absolute inset-0 z-0">
            <Hero />
          </div>

          <div className="relative z-10">
            <section className="flex flex-col items-center justify-center min-h-screen">
              <HeroContent />
            </section>

            <section className="w-full py-16" id="about-me">
              <About />
            </section>

            <section className="w-full py-16" id="skills">
              <Skills />
            </section>

            <section className="w-full py-16" id="projects">
              <Project />
            </section>

            <section className="w-full py-16">
              <AiProjects />
            </section>

            <section className="w-full pt-16">
              <Platforms />
            </section>

            <section className="w-full pt-100" id="contact">
              <Contact />
            </section>

            <section className="w-full pt-16">
              <Footer />
            </section>
          </div>
        </>
      )}
    </main>
  );
}
