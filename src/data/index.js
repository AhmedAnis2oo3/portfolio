// ─────────────────────────────────────────────────────────────────────────────
// SITE DATA
// Edit everything here — no need to touch individual components.
// ─────────────────────────────────────────────────────────────────────────────

// ── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Contact"];

// ── RESUME / CV ──────────────────────────────────────────────────────────────
// Place your CV PDF in /public/cv.pdf and set the path below.
export const RESUME_URL = "/cv.pdf";

// ── EMAILJS CONFIG ────────────────────────────────────────────────────────────
// Sign up free at https://www.emailjs.com
// 1. Create a service (Gmail → ahmed007bakhai@gmail.com)
// 2. Create an email template — map: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 3. Paste your IDs below
export const EMAILJS_CONFIG = {
  SERVICE_ID:  "YOUR_SERVICE_ID",   // e.g. "service_abc123"
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",  // e.g. "template_xyz789"
  PUBLIC_KEY:  "YOUR_PUBLIC_KEY",   // e.g. "abcDEFghiJKL"
};

// ── PROFILE ───────────────────────────────────────────────────────────────────
export const PROFILE = {
  name:       "Ahmed Anis",
  role:       "Software Engineer",
  university: "SZABIST University, Karachi",
  bio:        "Software Engineering student with hands-on internship experience at Indolj. Specialising in ASP.NET Core backend architecture and MERN Stack applications. Driven by clean code, scalable systems, and continuous learning.",
  email:      "Ahmed007bakhai@gmail.com",
  phone:      "+92 331 9761470",
  linkedin:   "https://linkedin.com/in/ahmedanis2003",
  github:     "https://github.com/ahmedanis2003",
  location:   "Karachi, Pakistan",
};

// ── HERO STATS ────────────────────────────────────────────────────────────────
export const STATS = [
  { val: "3+",   label: "Projects"      },
  { val: "10+",  label: "Technologies"  },
  { val: "4",    label: "Certifications"},
  { val: "2023", label: "SZABIST"       },
];

// ── TYPEWRITER TITLES ─────────────────────────────────────────────────────────
export const TITLES = [
  "ASP.NET Core Developer",
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "Software Engineer",
];

// ── SKILLS ────────────────────────────────────────────────────────────────────
export const SKILLS_DATA = [
  {
    cat: "Languages", icon: "⟨/⟩",
    skills: [
      { n: "JavaScript", p: 80 },
      { n: "C#",         p: 76 },
      { n: "PHP",        p: 64 },
      { n: "C",          p: 70 },
      { n: "HTML / CSS", p: 86 },
    ],
  },
  {
    cat: "Frameworks", icon: "◈",
    skills: [
      { n: "ASP.NET Core", p: 78 },
      { n: "React.js",     p: 72 },
      { n: "Node.js",      p: 70 },
      { n: "Express.js",   p: 68 },
    ],
  },
  {
    cat: "Databases", icon: "⬡",
    skills: [
      { n: "SQL Server", p: 80 },
      { n: "MySQL",      p: 74 },
      { n: "MongoDB",    p: 66 },
    ],
  },
  {
    cat: "Tools", icon: "⚙",
    skills: [
      { n: "Git",           p: 78 },
      { n: "Visual Studio", p: 84 },
    ],
  },
];

export const COURSEWORK = [
  "ASP.NET Core Development",
  "Database Management (SQL / NoSQL)",
  "Software Engineering",
  "Object-Oriented Programming",
  "Web Development",
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export const EXPERIENCE_DATA = [
  {
    company:  "Indolj",
    role:     "Software Development Intern",
    period:   "Jul 2025 – Sep 2025",
    location: "Karachi",
    current:  true,
    bullets: [
      "Supported backend integration and web module testing",
      "Assisted with REST API design and issue resolution",
      "Collaborated with senior developers on functionality and performance",
    ],
  },
];

// ── EDUCATION ────────────────────────────────────────────────────────────────
export const EDUCATION_DATA = [
  { inst: "SZABIST University", degree: "BS Software Engineering", period: "2023 – Present", note: "In Progress" },
  { inst: "Eden College Clifton", degree: "A Levels",              period: "2022",            note: "" },
  { inst: "Bahria College",       degree: "O Levels",              period: "2020",            note: "" },
];

// ── CERTIFICATIONS ────────────────────────────────────────────────────────────
export const CERTS_DATA = [
  { name: "CPISM",   org: "Aptech Computer Education", year: "2022" },
  { name: "DISM",    org: "Aptech Computer Education", year: "2022" },
  { name: "HDSE I",  org: "Aptech Computer Education", year: "2023" },
  { name: "HDSE II", org: "Aptech Computer Education", year: "2023" },
];

// ── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS_DATA = [
  {
    title:    "E-commerce Admin Panel & REST APIs",
    subtitle: "Full-stack administration system with secure API layer",
    desc:     "A production-ready admin dashboard backed by a robust REST API. Designed for managing products, orders, users, and analytics with clean MVC architecture and enterprise-grade authentication.",
    tech:     ["ASP.NET Core", "C#", "SQL Server", "JWT Auth", "MVC", "CRUD APIs"],
    bullets: [
      "JWT-authenticated REST APIs with role-based access control",
      "MVC architecture with normalized SQL Server data layer",
      "Full CRUD for products, orders, users, and reporting",
    ],
    github: "https://github.com/ahmedanis2003",
    live:   "#",
  },
  {
    title:    "MERN Stack Task Management App",
    subtitle: "Real-time collaborative task tracker with React frontend",
    desc:     "A full-featured task management application built on the MERN stack. Features user authentication and a responsive React interface backed by a Node.js/Express REST API with MongoDB persistence.",
    tech:     ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST API"],
    bullets: [
      "JWT-based user authentication and session management",
      "RESTful API with Express.js and MongoDB via Mongoose",
      "Responsive React UI with live task status updates",
    ],
    github: "https://github.com/ahmedanis2003",
    live:   "#",
  },
];
