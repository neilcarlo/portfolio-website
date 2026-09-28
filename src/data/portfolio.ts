export type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: "Web" | "Desktop" ;
  image: string;
  github: string;
  demo: string;
};

export type SkillGroup = { title: string; items: string[]; icon: string };
export type Experience = {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
  technologies: string[];
};

export const socialLinks = {
  github: "https://github.com/neilcarlo",
  linkedin: "www.linkedin.com/in/neil-techgaming-82a182363",
  email: "mailto:loypackz@gmail.com"
};

export const email = "loypackz@gmail.com";

export const projects: Project[] = [
  {
    name: "Philippine Grocery POS",
    description: "A modern point-of-sale system designed for grocery stores, including product management, inventory, sales transactions, receipts, and reporting.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    image: "c:\Users\JUSWA PC\OneDrive\Pictures\pos.PNG",
    github: "https://github.com/neilcarlo",
    demo: "https://grocery-pos-system-p-ifsn.bolt.host/"
  },
  {
    name: "Egg Farm Tracker",
    description: "Track daily egg production, sales, expenses, and profit for small egg farm in Philippines.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    image: "c:\Users\JUSWA PC\OneDrive\Pictures\egg.PNG",
    github: "https://github.com/neilcarlo",
    demo: "https://egg-production-and-s-vu5b.bolt.host"
  },
  {
    name: "VA Client Tracker",
    description: "Build a VA client tracker for freelancers that tracks tasks, hours, and invoices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    image: "c:\Users\JUSWA PC\OneDrive\Pictures\client.PNG",
    github: "https://github.com/neilcarlo",
    demo: "https://freelance-va-client-dq8h.bolt.host"
  },

];

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", icon: "⌘", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { title: "Backend", icon: "⌁", items: ["C#", ".NET", "Node.js", "REST APIs"] },
  { title: "Databases", icon: "◈", items: ["SQLite", "SQL Server", "MySQL"] },
  { title: "Tools", icon: "✦", items: ["Git", "GitHub", "Visual Studio", "VS Code"] }
];

export const experience: Experience[] = [
  {
    title: "Web Developer/IT Support/Cashier — WordPress/Vibe Code/Cash Handling",
    company: "Sildimco — Cashier",
    dates: "June 2023 — October 2026",
    responsibilities: [
      "Cash Handling and Web Development.",
      "sildimco.finance.blog",
      "Wordpress and Jetpack."
    ],
    technologies: ["Wordpress", "Vide Code"]
  }
];
