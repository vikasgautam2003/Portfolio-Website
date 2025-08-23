export const Frontend_skill = [
  {
    skill_name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    Image: "/next.png",
    width: 80,
    height: 80,
  }
];

export const Backend_skill = [
  {
    skill_name: "Node.js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQLite",
    Image: "/sqlite-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    Image: "/prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Socket.IO",
    Image: "/socketio.svg",
    width: 70,
    height: 70,
  }
];

export const Full_stack = [
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vercel",
    Image: "/vercel.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Render",
    Image: "/render.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    Image: "/github.svg",
    width: 70,
    height: 70,
  }
];

export const Other_skill = [
  {
    skill_name: "Go",
    Image: "/go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "C++",
    Image: "/c.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Python",
    Image: "/python.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Java",
    Image: "/java-icon.svg",
    width: 60,
    height: 60,
  }
];

export const Skill_data = [
  // Core Web
  {
    skill_name: "HTML5",
    Image: "/html.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "CSS3",
    Image: "/css.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    Image: "/ts.png",
    width: 70,
    height: 70,
  },

  // UI/Styling
  {
    skill_name: "Tailwind CSS",
    Image: "/tailwind.png",
    width: 75,
    height: 75,
  },
  {
    // skill_name: "Framer Motion",
    // Image: "/framer.png",
    // width: 75,
    // height: 75,
  },

  // Frameworks
  {
    skill_name: "React",
    Image: "/react.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next.js",
    Image: "/next.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React Query",
    Image: "/reactquery.png",
    width: 75,
    height: 75,
  },

  // Backend
  {
    skill_name: "Node.js",
    Image: "/node-js.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "MongoDB",
    Image: "/mongodb.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Docker",
    Image: "/docker.png",
    width: 75,
    height: 75,
  },

  
];

export const Socials = [
  
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
  },
  {
    name: "GitHub",
    src: "/github.svg",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",

  },
];





export interface Skill {
  name: string;
  image: string;
  category: "Frontend" | "Backend" | "DevOps" | "Languages";
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", image: "/js.png", category: "Frontend", description: "The language of the web, enabling interactive and dynamic content." },
  { name: "TypeScript", image: "/ts.png", category: "Frontend", description: "Superset of JavaScript that adds static typing for robust applications." },
  { name: "React", image: "/react.png", category: "Frontend", description: "A powerful library for building user interfaces with a component-based architecture." },
  { name: "Next.js", image: "/next.png", category: "Frontend", description: "The leading React framework for production-grade, full-stack applications." },

  // Backend
  { name: "Node.js", image: "/node-js.png", category: "Backend", description: "A JavaScript runtime for building fast and scalable server-side applications." },
  { name: "Socket.IO", image: "/socketio.svg", category: "Backend", description: "Enables real-time, bidirectional communication between web clients and servers." },
  { name: "MySQL", image: "/mysql.png", category: "Backend", description: "A widely-used open-source relational database management system." },
  { name: "PostgreSQL", image: "/postger.png", category: "Backend", description: "A powerful, open-source object-relational database system." },
  { name: "Prisma", image: "/prisma.webp", category: "Backend", description: "A next-generation ORM that makes database access easy and type-safe." },

  // Languages
  { name: "Golang", image: "/go.png", category: "Languages", description: "A statically typed, compiled language known for its simplicity and performance." },
  { name: "C++", image: "/c.svg", category: "Languages", description: "A high-performance language used in systems programming and game development." },
  { name: "Python", image: "/python.svg", category: "Languages", description: "A versatile language popular for web development, data science, and AI." },
  { name: "Java", image: "/java-icon.svg", category: "Languages", description: "A class-based, object-oriented language for large-scale enterprise applications." },

  // DevOps
  { name: "Docker", image: "/docker.webp", category: "DevOps", description: "A platform for developing, shipping, and running applications in containers." },
  { name: "Vercel", image: "/vercel.png", category: "DevOps", description: "A cloud platform for static sites and Serverless Functions that fits perfectly with Next.js." },
  { name: "Render", image: "/render.png", category: "DevOps", description: "A platform for deploying and hosting web applications, with zero configuration." }
];

// Extract categories from the skills list
export const categories = [...new Set(skills.map((skill) => skill.category))];