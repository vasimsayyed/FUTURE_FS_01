import aiBanner from '../assets/ai-banner.jpg';
import insuranceBanner from '../assets/insurance-banner.jpg';
import profileImg from '../assets/profile.jpg';

export const personalInfo = {
  name: "Vasim Sayyed",
  avatar: profileImg,
  roleTagline: "Software Engineer & Full Stack Developer",
  typingRoles: [
    "Full Stack Software Engineer",
    "React & SpringBoot Specialist",
    "AI & ML Web Application Builder",
    "Interactive WebGL Creator"
  ],
  bio: "Engineering high-performance web applications and intelligent AI-driven systems. Passionate about scalable architecture, modern frontend interactions, and clean backend APIs.",
  email: "Sayyadvasim394@gmail.com",
  phone: "+91 7249884045",
  location: "India",
  status: "Available for Full-time Roles & Internships",
  socialLinks: {
    github: "https://github.com/vasimsayyed",
    linkedin: "https://www.linkedin.com/in/vasim-sayyad-48b370260/",
    portfolioLive: "http://vasimsayyed.github.io/FUTURE_FS_01/"
  }
};

export const statsData = [
  { label: "Projects Completed", value: "10+", suffix: "" },
  { label: "Core Technologies", value: "12+", suffix: "" },
  { label: "DSA & Problem Solving", value: "173+", suffix: "Problems" },
  { label: "Code Dedication", value: "100%", suffix: "" }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    period: "Aug 2025 – Sept 2025",
    type: "Internship",
    badge: "Completed",
    color: "from-cyan-500 to-blue-600",
    description: "Completed a structured, rigorous full-stack internship focusing on full lifecycle web engineering.",
    points: [
      "Architected end-to-end full-stack web modules with responsive frontend UI and robust backend integration.",
      "Gained hands-on expertise with asynchronous API communication, state management, and modern component design.",
      "Collaborated on code reviews, version control workflows in Git, and deployment practices."
    ],
    techStack: ["React.js", "JavaScript", "Node.js", "REST APIs", "Git", "CSS3"]
  },
  {
    id: "exp-2",
    role: "AI Mock Interview Platform Lead",
    company: "Autonomous Engineering",
    period: "Jan 2025 - Present",
    type: "Production Project",
    badge: "Active",
    color: "from-blue-500 to-indigo-600",
    description: "Architected and delivered an interactive real-time AI-powered technical interview simulator.",
    points: [
      "Designed and developed a responsive web-based AI Mock Interview platform using React.js and modern state patterns.",
      "Integrated automated question generation algorithms and speech/response evaluation models.",
      "Engineered a dynamic real-time feedback dashboard providing candidates with instant metrics on accuracy, tone, and readiness."
    ],
    techStack: ["React.js", "AI/ML Integration", "Tailwind CSS", "Web Audio API", "Node.js"]
  },
  {
    id: "exp-3",
    role: "Medical Insurance ML Engineer & App Builder",
    company: "Predictive Analytics",
    period: "Feb 2025 - Present",
    type: "ML Engineering",
    badge: "Active",
    color: "from-violet-500 to-purple-600",
    description: "Trained predictive regression models on healthcare datasets and deployed a real-time web application.",
    points: [
      "Trained and tuned machine learning regression models to forecast healthcare insurance premium pricing with high precision.",
      "Engineered an intuitive interactive Streamlit web dashboard for instant multi-variable cost simulations.",
      "Implemented comprehensive feature engineering, data imputation, and visual correlation charts for user transparency."
    ],
    techStack: ["Python", "Machine Learning", "Streamlit", "Pandas", "Scikit-Learn", "Data Analytics"]
  }
];

export const projectsData = [
  {
    id: "ai-interview",
    number: "01",
    title: "AI Mock Interview Web Application",
    subtitle: "Real-Time AI-Driven Candidate Assessment System",
    category: "Full Stack AI Platform",
    image: aiBanner,
    featured: true,
    github: "https://github.com/vasimsayyed/AI-mock-interview-web-application",
    liveDemo: "https://github.com/vasimsayyed/AI-mock-interview-web-application",
    overview: "A state-of-the-art interactive web platform that simulates technical job interviews using automated AI evaluation and dynamic question generation.",
    problemSolved: "Helps software engineering candidates overcome interview anxiety and pinpoint technical knowledge gaps with real-time feedback.",
    keyFeatures: [
      "Dynamic AI-generated domain questions based on selected role and experience level",
      "Real-time voice & text response analysis with intelligent feedback scoring",
      "Performance summary dashboard highlighting strengths, weaknesses, and improvement roadmaps",
      "Clean, modern responsive UI built with high-velocity React components"
    ],
    tags: ["React.js", "AI/ML", "Node.js", "Tailwind CSS", "Speech API", "REST APIs"],
    accentColor: "cyan"
  },
  {
    id: "insurance-predictor",
    number: "02",
    title: "Medical Insurance Premium Predictor",
    subtitle: "Machine Learning Regression & Analytics Web App",
    category: "AI / Data Science",
    image: insuranceBanner,
    featured: true,
    github: "https://github.com/vasimsayyed/Medical-health-insurance-prediction-using-ML",
    liveDemo: "https://github.com/vasimsayyed/Medical-health-insurance-prediction-using-ML",
    overview: "An intelligent healthcare analytics tool applying machine learning algorithms to forecast personalized medical insurance costs based on demographic and lifestyle indicators.",
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
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & Systems" },
  { id: "ai-tools", label: "AI, ML & Tools" },
  { id: "core", label: "Core CS & Languages" }
];

export const skillsData = [
  { name: "React.js", percentage: 85, category: "frontend", icon: "Code2", color: "#06b6d4", desc: "Component architecture, hooks, state & virtual DOM" },
  { name: "JavaScript (ES6+)", percentage: 90, category: "frontend", icon: "FileCode", color: "#eab308", desc: "Async/await, closures, prototypes, DOM engine" },
  { name: "HTML5 & CSS3", percentage: 95, category: "frontend", icon: "Layout", color: "#f97316", desc: "Semantic markup, modern flexbox/grid, responsive systems" },
  { name: "Tailwind CSS", percentage: 92, category: "frontend", icon: "Palette", color: "#38bdf8", desc: "Design tokens, utility-first UI, micro-animations" },
  { name: "Java", percentage: 80, category: "backend", icon: "Cpu", color: "#ef4444", desc: "OOP principles, multithreading, collections framework" },
  { name: "SpringBoot", percentage: 75, category: "backend", icon: "Server", color: "#22c55e", desc: "REST APIs, dependency injection, JPA/Hibernate" },
  { name: "Firebase", percentage: 80, category: "backend", icon: "Flame", color: "#f59e0b", desc: "Firestore, authentication, real-time database" },
  { name: "Python", percentage: 82, category: "ai-tools", icon: "Terminal", color: "#3b82f6", desc: "Scripting, data manipulation, automation" },
  { name: "Machine Learning", percentage: 78, category: "ai-tools", icon: "Brain", color: "#a855f7", desc: "Regression, classification, model evaluation" },
  { name: "Streamlit", percentage: 85, category: "ai-tools", icon: "Layers", color: "#ec4899", desc: "Interactive data visualization apps & ML dashboards" },
  { name: "Git & GitHub", percentage: 88, category: "ai-tools", icon: "GitBranch", color: "#f43f5e", desc: "Version control, branching, pull requests, CI/CD" },
  { name: "Data Structures & Algo", percentage: 85, category: "core", icon: "Binary", color: "#6366f1", desc: "Trees, graphs, dynamic programming, complexity analysis" }
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Master in Data Structure and Algorithm",
    issuer: "Abdul Bari (Udemy / Deep Exploration)",
    topic: "C and C++ Advanced DSA",
    badge: "Mastery",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    description: "Completed an intensive, in-depth curriculum covering recursive algorithms, linked lists, binary search trees, AVL trees, graphs, sorting algorithms, and dynamic programming.",
    highlights: ["C / C++ Pointer Architecture", "Algorithm Time & Space Complexity", "Graph Traversal & Greedy Algorithms"]
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
