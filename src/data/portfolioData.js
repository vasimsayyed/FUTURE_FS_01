import aiBanner from '../assets/ai-banner.jpg';
import insuranceBanner from '../assets/insurance-banner.jpg';
import profileImg from '../assets/profile.jpg';

export const personalInfo = {
  name: "Vasim Sayyed",
  avatar: profileImg,
  roleTagline: "Software Engineer & Full Stack Developer",
  typingRoles: [
    "Software Engineer @ VyomX Tech Solutions",
    "Full Stack Web & Mobile Developer",
    "React.js & React Native Specialist",
    "Node.js, Express & MongoDB Architect",
    "AI & Cloud Systems Integrator"
  ],
  bio: "Technically skilled Software Engineer with hands-on production experience in frontend and backend application development. Specializing in high-performance web applications using React.js and mobile applications using React Native, backed by scalable Node.js, Express.js, and MongoDB systems.",
  email: "sayyadvasim394@gmail.com",
  phone: "+91 7249884045",
  location: "Ahmednagar, Maharashtra, India",
  status: "Available for Software Engineering Roles & Collaboration",
  education: {
    degree: "B-TECH in Computer Science and Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University",
    period: "2022 – 2026",
    grade: "Aggregate CGPA: 8.30"
  },
  socialLinks: {
    github: "https://github.com/vasimsayyed",
    linkedin: "https://www.linkedin.com/in/vasim-sayyad-48b370260/",
    portfolioLive: "http://vasimsayyed.github.io/FUTURE_FS_01/"
  }
};

export const statsData = [
  { label: "B-Tech CGPA", value: "8.30", suffix: "CGPA" },
  { label: "Production Projects", value: "10+", suffix: "" },
  { label: "Core Technologies", value: "12+", suffix: "" },
  { label: "Code Dedication", value: "100%", suffix: "" }
];

export const experienceData = [
  {
    id: "exp-vyomx",
    role: "Software Engineer / Junior Software Developer",
    company: "VyomX Tech Solutions",
    period: "Production Experience (Ongoing)",
    type: "Industry Experience",
    badge: "Current Role",
    color: "from-cyan-500 to-blue-600",
    description: "Contribute to the end-to-end development of scalable web and mobile applications across frontend and backend technologies, with a primary focus on React.js, React Native, Node.js, Express.js, and MongoDB. Transitioned from Intern to Software Engineer and Junior Software Developer.",
    points: [
      "Project Leadership & Development: Lead complex software projects from requirement analysis to maintenance, ensuring seamless delivery and client satisfaction.",
      "Strategic Planning & Execution: Strategically plan and schedule projects for timely delivery, adhering to quality standards and project objectives.",
      "Full Stack Development & Maintenance: Maintain and improve full stack applications, ensuring responsiveness and usability through rigorous development and bug resolution.",
      "Engineered cross-platform data flows and state management using Redux Toolkit, RTK Query, and robust REST APIs."
    ],
    techStack: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "RTK Query", "NativeWind", "Git"]
  },
  {
    id: "exp-future-interns",
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    period: "Aug 2025 – Sept 2025",
    type: "Internship",
    badge: "Completed",
    color: "from-blue-500 to-indigo-600",
    description: "Completed a structured, rigorous full-stack development internship focusing on the complete web engineering lifecycle.",
    points: [
      "Architected end-to-end full-stack web modules with responsive frontend UI and robust backend API integration.",
      "Gained hands-on expertise with asynchronous API communication, state management, and modern component design.",
      "Collaborated on code reviews, agile sprints, version control workflows in Git, and continuous deployment."
    ],
    techStack: ["React.js", "JavaScript", "Node.js", "REST APIs", "Tailwind CSS", "Git", "GitHub"]
  }
];

export const projectsData = [
  {
    id: "mykids-learning",
    number: "01",
    title: "MyKidsLearning Platform",
    subtitle: "Interactive Gamified Educational Web & Mobile Ecosystem",
    category: "Full Stack & Mobile App",
    image: aiBanner,
    featured: true,
    github: "https://github.com/vasimsayyed",
    liveDemo: "https://github.com/vasimsayyed",
    overview: "An interactive educational platform designed to make learning more engaging through digital and gamified experiences, featuring Flashcards, Video Hub, Quiz Castle, and Vocabulary modules.",
    problemSolved: "Transforms traditional rote learning into an engaging, gamified experience while seamlessly synchronizing learner data and progress across web and mobile applications.",
    keyFeatures: [
      "Contributed to both the React.js web application and React Native Android application with reusable UI components",
      "Developed comprehensive gamification features for Quiz Castle including dynamic scoring, rewards, badges, and progressive levels",
      "Engineered robust RESTful backend APIs in Node.js/Express.js with MongoDB for cross-platform progress synchronization",
      "Implemented secure user authentication, role-based access, and student learning analytics"
    ],
    tags: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "NativeWind", "Git"],
    accentColor: "cyan"
  },
  {
    id: "dating-app",
    number: "02",
    title: "Real-Time Dating & Matchmaking Application",
    subtitle: "React Native Mobile App with Real-Time Chat & State Sync",
    category: "Mobile Application",
    image: insuranceBanner,
    featured: true,
    github: "https://github.com/vasimsayyed",
    liveDemo: "https://github.com/vasimsayyed",
    overview: "A modern React Native mobile application that empowers users to create profiles, discover and match with other users, and communicate through low-latency real-time chat.",
    problemSolved: "Provides a responsive, fluid mobile interface for user discovery, profile customization, matchmaking algorithms, and direct real-time messaging.",
    keyFeatures: [
      "Designed and developed the complete mobile UI with fluid gesture animations and responsive layouts",
      "Built and maintained the profile setup and multi-step profile management flow",
      "Implemented the core user matchmaking algorithms and interactive discovery feed",
      "Integrated real-time chat interface with Redux Toolkit for state management and RTK Query for API integration"
    ],
    tags: ["React Native", "NativeWind", "JavaScript", "Redux Toolkit", "RTK Query", "REST APIs", "Node.js", "Git"],
    accentColor: "indigo"
  },
  {
    id: "ai-interview",
    number: "03",
    title: "AI Mock Interview Web Application",
    subtitle: "Automated Question Generation & Real-Time Interview Evaluation",
    category: "Full Stack AI Platform",
    image: aiBanner,
    featured: true,
    github: "https://github.com/vasimsayyed/AI-mock-interview-web-application",
    liveDemo: "https://github.com/vasimsayyed/AI-mock-interview-web-application",
    overview: "An interactive web platform designed to help candidates practice job interviews and enhance their interview skills through AI-generated questions and automated feedback.",
    problemSolved: "Eliminates interview anxiety and provides quantitative, actionable feedback on technical knowledge, clarity, and readiness.",
    keyFeatures: [
      "Responsible for end-to-end development: UI design, frontend build, interview flow, and AI integration",
      "Dynamic AI-generated domain questions customized to specific engineering roles and seniority levels",
      "Automated evaluation engine providing instant feedback, scoring, and improvement roadmaps",
      "Seamless interview simulation flow allowing users to practice, review responses, and track progress"
    ],
    tags: ["React.js", "JavaScript", "AI Integration/API", "Node.js", "HTML5", "CSS3", "Git", "GitHub"],
    accentColor: "sky"
  },
  {
    id: "insurance-predictor",
    number: "04",
    title: "Medical Insurance Premium Predictor",
    subtitle: "Machine Learning Regression & Analytics Dashboard",
    category: "AI / Data Science",
    image: insuranceBanner,
    featured: false,
    github: "https://github.com/vasimsayyed/Medical-health-insurance-prediction-using-ML",
    liveDemo: "https://github.com/vasimsayyed/Medical-health-insurance-prediction-using-ML",
    overview: "An intelligent healthcare predictive analytics tool applying machine learning algorithms to forecast personalized medical insurance costs based on demographic and lifestyle indicators.",
    problemSolved: "Replaces opaque actuarial pricing tables with transparent, instant predictive simulations for policyholders and analysts.",
    keyFeatures: [
      "High-accuracy ML regression model trained on comprehensive demographic health data",
      "Interactive Streamlit application featuring live parameter tuning and real-time computation",
      "Visual exploratory data analysis illustrating the correlation of risk factors with premium tiers",
      "Lightweight, easily deployable micro-service architecture"
    ],
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn", "Data Science", "Pandas"],
    accentColor: "blue"
  }
];

export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend & Database" },
  { id: "state-tools", label: "State & Architecture" },
  { id: "core", label: "Languages & Core CS" }
];

export const skillsData = [
  { name: "React.js", percentage: 92, category: "frontend", icon: "Code2", color: "#06b6d4", desc: "Component architecture, hooks, virtual DOM, responsive UI" },
  { name: "React Native", percentage: 88, category: "frontend", icon: "Layers", color: "#38bdf8", desc: "Cross-platform mobile apps (Android/iOS), NativeWind, gesture UI" },
  { name: "Node.js & Express.js", percentage: 88, category: "backend", icon: "Server", color: "#22c55e", desc: "REST APIs, asynchronous runtime, middleware, server architecture" },
  { name: "MongoDB", percentage: 85, category: "backend", icon: "Database", color: "#10b981", desc: "NoSQL schema design, aggregation pipelines, database integration" },
  { name: "Redux Toolkit & RTK Query", percentage: 86, category: "state-tools", icon: "Flame", color: "#a855f7", desc: "Global state management, caching, optimistic updates, API slicing" },
  { name: "JavaScript (ES6+)", percentage: 92, category: "core", icon: "FileCode", color: "#eab308", desc: "Async/await, closures, prototypes, event loops, DOM engine" },
  { name: "Python", percentage: 80, category: "core", icon: "Terminal", color: "#3b82f6", desc: "Scripting, machine learning libraries, backend integration" },
  { name: "SQL & Firebase", percentage: 82, category: "backend", icon: "Database", color: "#f97316", desc: "Relational queries, Firestore real-time DB, cloud authentication" },
  { name: "Tailwind CSS & NativeWind", percentage: 94, category: "frontend", icon: "Palette", color: "#0ea5e9", desc: "Utility-first modern styling, responsive systems, mobile design" },
  { name: "REST APIs & Integration", percentage: 90, category: "state-tools", icon: "Cpu", color: "#6366f1", desc: "Endpoint design, token auth, error handling, microservices" },
  { name: "Git & GitHub", percentage: 90, category: "state-tools", icon: "GitBranch", color: "#f43f5e", desc: "Version control, branching strategies, collaborative PR workflows" },
  { name: "Data Structures & SDLC", percentage: 85, category: "core", icon: "Binary", color: "#8b5cf6", desc: "Algorithms, complexity analysis, debugging, testing & maintenance" }
];

export const qualificationsData = {
  degree: "B-TECH (Computer Science and Engineering)",
  institution: "Dr. Babasaheb Ambedkar Technological University",
  period: "2022 – 2026",
  cgpa: "8.30 Aggregate CGPA",
  status: "In Progress (Final Year)",
  highlights: [
    "Solid grounding in Computer Science fundamentals, Object-Oriented Design, and Software Engineering",
    "Strong proficiency in Data Structures, Algorithms, and Software Development Life Cycle (SDLC)",
    "Practical execution of production-grade Web and Mobile engineering projects"
  ]
};

export const areasOfExpertise = [
  { title: "React.js Development", desc: "Building scalable, reusable, and pixel-perfect web interfaces with modern hooks and state patterns." },
  { title: "Backend & REST API Development", desc: "Designing robust server-side APIs in Node.js and Express.js with secure authentication." },
  { title: "Mobile Application Development", desc: "Developing cross-platform mobile apps in React Native and NativeWind with real-time features." },
  { title: "Database Integration & Management", desc: "Designing schemas and managing data flow across MongoDB, Firebase, and SQL databases." },
  { title: "Responsive UI & State Architecture", desc: "Crafting fluid, high-velocity responsive UIs powered by Redux Toolkit and RTK Query." },
  { title: "Strong Interpersonal & SDLC Skills", desc: "Proven track record in project leadership, strategic planning, debugging, and team collaboration." }
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Master in Data Structure and Algorithm",
    issuer: "Abdul Bari (Deep DSA Mastery)",
    topic: "C and C++ Advanced DSA",
    badge: "Mastery",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    description: "Completed an intensive, in-depth curriculum covering recursive algorithms, linked lists, binary search trees, AVL trees, graphs, sorting algorithms, and dynamic programming.",
    highlights: ["C / C++ Pointer Architecture", "Algorithm Time & Space Complexity", "Graph Traversal & Dynamic Programming"]
  },
  {
    id: "cert-2",
    title: "Java Full Stack Development",
    issuer: "TalentNext / Wipro Certified Program",
    topic: "Full Stack Java Ecosystem",
    badge: "Enterprise",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderGlow: "group-hover:border-violet-500/50",
    description: "Comprehensive corporate training program covering Core Java, Enterprise SpringBoot microservices, SQL database connectivity, and modern frontend integration.",
    highlights: ["SpringBoot REST Services", "Hibernate & JPA Database Layers", "Modern Enterprise Design Patterns"]
  }
];
