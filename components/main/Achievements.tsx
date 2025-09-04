












// "use client";

// import React from 'react';
// import { motion, Variants } from 'framer-motion';

// // --- TYPE & DATA DEFINITIONS ---
// interface Certificate {
//   id: number;
//   title: string;
//   institution: string;
//   year: number;
//   link: string;
//   logo: React.ComponentType<{ className?: string }>;
// }

// // --- SVG ICONS / LOGOS ---
// const HarvardLogo = ({ className }: { className?: string }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
//     <path d="M50 0 L100 25 V75 L50 100 L0 75 V25 L50 0 Z M20 35 V65 L50 80 L80 65 V35 L50 20 L20 35 Z M40 45 H60 V55 H40 V45 Z M30 60 H70 V70 H30 V60 Z" />
//   </svg>
// );
// const StanfordLogo = ({ className }: { className?: string }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90" fill="currentColor">
//     <path d="M40 0 L60 10 L60 30 C60 50 50 60 40 60 C30 60 20 50 20 30 L20 10 L40 0 Z M40 15 L30 20 L30 30 C30 45 35 50 40 50 C45 50 50 45 50 30 L50 20 L40 15 Z M10 70 L70 70 L70 80 L10 80 Z M35 70 L45 70 L45 90 L35 90 Z" />
//   </svg>
// );
// const HelsinkiLogo = ({ className }: { className?: string }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
//     <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
//     <text x="50" y="60" fontSize="40" textAnchor="middle" fill="currentColor">H</text>
//   </svg>
// );
// const TcsLogo = ({ className }: { className?: string }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" fill="currentColor">
//     <path d="M20,50 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" />
//     <path d="M120,20 L180,20 L150,80 Z" />
//   </svg>
// );
// const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>;

// const certificates: Certificate[] = [
//   { id: 1, title: "CS50’s Intro to Computer Science", institution: "Harvard University", year: 2023, link: "https://cs50.harvard.edu/certificates/0c3eeb9a-1c3f-4c28-a382-ce49c45891f3", logo: HarvardLogo },
//   { id: 2, title: "Code in Place", institution: "Stanford University", year: 2024, link: "https://codeinplace.stanford.edu/cip4/certificate/98cpfo", logo: StanfordLogo },
//   { id: 3, title: "CS50’s Intro to Cybersecurity", institution: "Harvard University", year: 2024, link: "https://cs50.harvard.edu/certificates/fac3ae0e-0ebd-4ebd-b826-53dde1d7e10f", logo: HarvardLogo },
//   { id: 4, title: "Elements of AI", institution: "University of Helsinki", year: 2023, link: "https://certificates.mooc.fi/validate/n8iak6gen1", logo: HelsinkiLogo },
//   { id: 5, title: "IBM Watson", year: 2023, institution:"IBM", link: "https://courses.skillsbuild.skillsnetwork.site/certificates/f2a37ee980934e3e9477ff2682def45e"}
// ];

// // Reusable Marquee component
// const Marquee = ({ items, direction = 'left', prefix }: { items: Certificate[], direction?: 'left' | 'right', prefix: string }) => {
//   const marqueeVariants: Variants = {
//     animate: {
//       x: direction === 'left' ? [0, -2100] : [-2100, 0],
//       transition: {
//         x: {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 60,
//           ease: "linear",
//         },
//       },
//     },
//   };

//   return (
//     <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
//       <motion.ul
//         className="flex items-center justify-center md:justify-start [&_li]:mx-4"
//         variants={marqueeVariants}
//         animate="animate"
//       >
//         {items.map((cert, index) => (
//           <li key={`${prefix}-${cert.id}-${index}`}>
//             <CertificateCard certificate={cert} />
//           </li>
//         ))}
//       </motion.ul>
//     </div>
//   );
// };

// // The individual card for each certificate
// const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px -5px rgba(202, 138, 4, 0.2)" }}
//             transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//             // ## DESIGN CHANGE: Updated card styling for a more prestigious feel.
//             className="w-72 sm:w-80 h-36 sm:h-40 p-4 sm:p-5 bg-gray-900/60 border border-amber-500/20 rounded-2xl flex items-center gap-4 sm:gap-5 group relative shadow-lg"
//         >
//             <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-800/70 rounded-xl text-amber-400">
//                 <certificate.logo className="w-8 h-8 sm:w-10 sm:h-10" />
//             </div>
//             <div className="flex-grow">
//                 <p className="text-gray-400 text-xs sm:text-sm">{certificate.institution} · {certificate.year}</p>
//                 <h3 className="font-bold text-white text-sm sm:text-md leading-tight mt-1">{certificate.title}</h3>
//             </div>
            
//             {/* ## DESIGN CHANGE: Updated hover effect to use the new color scheme. */}
//             <a href={certificate.link} target="_blank" rel="noopener noreferrer" 
//                className="absolute inset-0 flex items-center justify-center bg-amber-600/80 backdrop-blur-sm text-white font-bold
//                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl gap-2">
//                 Verify Certificate <ExternalLinkIcon />
//             </a>
//         </motion.div>
//     );
// };

// // --- MAIN ACHIEVEMENTS COMPONENT ---
// export default function Achievements() {
//   const duplicatedCerts = [...certificates, ...certificates, ...certificates];

//   return (
//     <section className="py-24 sm:py-28 relative z-10 bg-transparent overflow-hidden">
//         {/* ## DESIGN CHANGE: New subtle background texture. */}
//         <div 
//             className="absolute inset-0 -z-10 h-full w-full" 
//             style={{
//                 backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
//             }}
//         ></div>

//         <div className="max-w-7xl mx-auto px-4">
//             <motion.h2 
//                 initial={{ opacity: 0, y: 20 }} 
//                 whileInView={{ opacity: 1, y: 0 }} 
//                 viewport={{ once: true }} 
//                 transition={{ duration: 0.5 }} 
//                 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 tracking-tight text-white"
//             >
//                 Achievements & Certificates
//             </motion.h2>
            
//             <motion.div 
//                 className="space-y-8"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//             >
//                 <Marquee items={duplicatedCerts} direction="left" prefix="marquee1" />
//                 <Marquee items={[...duplicatedCerts].reverse()} direction="right" prefix="marquee2" />
//             </motion.div>
//         </div>
//     </section>
//   );
// }











"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- TYPE & DATA DEFINITIONS ---
interface Certificate {
  id: number;
  title: string;
  institution: string;
  year: number;
  link: string;
  logo: React.ComponentType<{ className?: string }>;
}

// --- SVG ICONS / LOGOS (Placeholders / Replace as Needed) ---
const HarvardLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 0 L100 25 V75 L50 100 L0 75 V25 L50 0 Z M20 35 V65 L50 80 L80 65 V35 L50 20 L20 35 Z M40 45 H60 V55 H40 V45 Z M30 60 H70 V70 H30 V60 Z" />
  </svg>
);
const StanfordLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90" fill="currentColor">
    <path d="M40 0 L60 10 L60 30 C60 50 50 60 40 60 C30 60 20 50 20 30 L20 10 L40 0 Z M40 15 L30 20 L30 30 C30 45 35 50 40 50 C45 50 50 45 50 30 L50 20 L40 15 Z M10 70 L70 70 L70 80 L10 80 Z M35 70 L45 70 L45 90 L35 90 Z" />
  </svg>
);
const HelsinkiLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
    <text x="50" y="60" fontSize="40" textAnchor="middle" fill="currentColor">H</text>
  </svg>
);
const IBMLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" fill="currentColor">
    <rect x="0" y="10" width="120" height="5" /><rect x="0" y="20" width="120" height="5" />
  </svg>
);
const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="currentColor">
    <circle cx="17" cy="17" r="17" />
  </svg>
);
const LancasterLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
    <rect x="20" y="20" width="60" height="60" />
  </svg>
);
const AccentureLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" fill="currentColor">
    <polygon points="0,40 50,0 100,40" />
  </svg>
);
const MicrosoftLogo = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor">
    <rect x="0" y="0" width="18" height="18" /><rect x="22" y="0" width="18" height="18" />
    <rect x="0" y="22" width="18" height="18" /><rect x="22" y="22" width="18" height="18" />
  </svg>
);

const ExternalLinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>;

// --- CERTIFICATES ARRAY ---
const certificates: Certificate[] = [
  { id: 1, title: "CS50’s Intro to Computer Science", institution: "Harvard University", year: 2023, link: "https://cs50.harvard.edu/certificates/0c3eeb9a-1c3f-4c28-a382-ce49c45891f3", logo: HarvardLogo },
  { id: 2, title: "Code in Place", institution: "Stanford University", year: 2024, link: "https://codeinplace.stanford.edu/cip4/certificate/98cpfo", logo: StanfordLogo },
  { id: 3, title: "CS50’s Intro to Cybersecurity", institution: "Harvard University", year: 2024, link: "https://cs50.harvard.edu/certificates/fac3ae0e-0ebd-4ebd-b826-53dde1d7e10f", logo: HarvardLogo },
  { id: 4, title: "Elements of AI", institution: "University of Helsinki", year: 2023, link: "https://certificates.mooc.fi/validate/n8iak6gen1", logo: HelsinkiLogo },
  { id: 5, title: "IBM Watson", institution:"IBM", year: 2023, link: "https://courses.skillsbuild.skillsnetwork.site/certificates/f2a37ee980934e3e9477ff2682def45e", logo: IBMLogo },
  { id: 6, title: "Generative AI Course", institution: "LinkedIn Learning", year: 2024, link: "#", logo: LinkedInLogo },
  { id: 7, title: "AR & VR Course", institution: "Lancaster University", year: 2024, link: "https://www.futurelearn.com/certificates/a0wklqo", logo: LancasterLogo },
  { id: 8, title: "Introduction to AI", institution: "Accenture", year: 2024, link: "https://www.futurelearn.com/certificates/7f6f8f4e3b1a4e6f9d6f5c3a2b1e4d5c", logo: AccentureLogo },
  { id: 9, title: "Career Essentials: Generative AI", institution: "Microsoft", year: 2024, link: "#", logo: MicrosoftLogo },
];

// --- Marquee, CertificateCard, Achievements Component (UNCHANGED) ---
const Marquee = ({ items, direction = 'left', prefix }: { items: Certificate[], direction?: 'left' | 'right', prefix: string }) => {
  const marqueeVariants: Variants = {
    animate: {
      x: direction === 'left' ? [0, -2100] : [-2100, 0],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" },
      },
    },
  };

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
      <motion.ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {items.map((cert, index) => (
          <li key={`${prefix}-${cert.id}-${index}`}>
            <CertificateCard certificate={cert} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px -5px rgba(202, 138, 4, 0.2)" }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="w-72 sm:w-80 h-36 sm:h-40 p-4 sm:p-5 bg-gray-900/60 border border-amber-500/20 rounded-2xl flex items-center gap-4 sm:gap-5 group relative shadow-lg"
    >
      <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-800/70 rounded-xl text-amber-400">
        <certificate.logo className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
      <div className="flex-grow">
        <p className="text-gray-400 text-xs sm:text-sm">{certificate.institution} · {certificate.year}</p>
        <h3 className="font-bold text-white text-sm sm:text-md leading-tight mt-1">{certificate.title}</h3>
      </div>
      <a href={certificate.link} target="_blank" rel="noopener noreferrer" 
         className="absolute inset-0 flex items-center justify-center bg-amber-600/80 backdrop-blur-sm text-white font-bold
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl gap-2">
        Verify Certificate <ExternalLinkIcon />
      </a>
    </motion.div>
  );
};

export default function Achievements() {
  const duplicatedCerts = [...certificates, ...certificates, ...certificates];

  return (
    <section className="py-24 sm:py-28 relative z-10 bg-transparent overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 h-full w-full" 
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-16 tracking-tight text-white"
        >
          Achievements & Certificates
        </motion.h2>
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Marquee items={duplicatedCerts} direction="left" prefix="marquee1" />
          <Marquee items={[...duplicatedCerts].reverse()} direction="right" prefix="marquee2" />
        </motion.div>
      </div>
    </section>
  );
}
