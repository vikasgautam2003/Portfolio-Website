

// import Skills from "@/components/main/Skills";
// import Hero from "../components/main/Hero";
// import HeroContent from "../components/sub/HeroContent";
// import Project from "@/components/main/Project";

// export default function Home() {
//   return (
//     <main className="relative min-h-screen w-full overflow-hidden text-white">
//       {/* Video background */}
//       <Hero />

//       {/* Full screen Hero section */}
//       <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
//         <HeroContent />
//       </section>

//       {/* Skills section below Hero */}
//       <section className="relative z-10 w-full">
//         <Skills />
//       </section>

//       {/* Projects section */}
//       <section className="relative z-10 w-full">
//         <Project />
//       </section>
//     </main>
//   );
// }



import Skills from "@/components/main/Skills";
import Hero from "../components/main/Hero";
import HeroContent from "../components/sub/HeroContent";
import Project from "@/components/main/Project";
import Footer from "@/components/main/Footer";
import About from "@/components/main/About";





export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Video background fixed for full page */}
      <div className="absolute inset-0 z-0">
        <Hero />
      </div>

      {/* All content above the video */}
      <div className="relative z-10">
        {/* Full screen Hero section */}
        <section className="flex flex-col items-center justify-center min-h-screen">
          <HeroContent />
        </section>

        {/* Skills section below Hero */}
        <section className="w-full py-16">
          <About />
        </section>

        {/* Skills section */}
        <section className="w-full py-16">
          <Skills />
        </section>

        {/* Projects section */}
        <section className="w-full py-16">
          <Project />
        </section>

        {/* Footer section */}
        <section className="w-full pt-16">
          <Footer />
        </section>
      </div>
    </main>
  );
}
