const projectsData = [
  {
    id: "obesity-risk-intelligence",
    title: "Obesity Risk Intelligence System",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    description: "An intelligent healthcare machine learning system that analyzes multi-variable physiological, dietary, and lifestyle parameters to classify and forecast obesity risk tiers with high precision.",
    longDescription: "Built with advanced data preprocessing, feature engineering pipelines, and ensemble algorithms (XGBoost, Random Forest, LightGBM). Evaluated across multiple clinical metrics (F1-score, ROC-AUC, Precision/Recall) with automated exploratory data analysis and model interpretability via feature importance.",
    tags: ["Python", "Jupyter", "Scikit-Learn", "XGBoost", "Data Science", "Pandas", "Healthcare AI"],
    github: "https://github.com/Mathu-code/Obesity-Risk-Intelligence-System",
    demo: null,
    featured: true,
    badge: "Featured ML",
    stats: {
      accuracy: "94.2%",
      models: "5 Evaluated",
      type: "Supervised ML"
    },
    highlights: [
      "Multi-class obesity classification pipeline with hyperparameter tuning",
      "Feature importance ranking for clinical lifestyle indicators",
      "Robust cross-validation and outlier treatment for health data"
    ]
  },
  {
    id: "ai-multilingual-support",
    title: "Multilingual Customer Support AI Platform",
    category: "ai-ml",
    categoryLabel: "AI / NLP Platform",
    description: "An intelligent customer support intelligence platform capable of real-time multilingual sentiment analysis, automated intent classification, and instant resolution suggestions.",
    longDescription: "Integrates natural language processing (NLP) pipelines, transformer-based language models, and automated intent routing. Supports multiple languages to assist customer care representatives in prioritizing urgent tickets and generating context-aware smart replies.",
    tags: ["Python", "NLP", "Transformers", "FastAPI", "Intent Classification", "AI Support"],
    github: "https://github.com/Mathu-code/AI-powered-multilingual-customer-support-intelligence-platform",
    demo: null,
    featured: true,
    badge: "NLP & LLM",
    stats: {
      languages: "Multi-language",
      latency: "<250ms",
      type: "NLP Engine"
    },
    highlights: [
      "Real-time multilingual intent identification & sentiment scoring",
      "Automated ticket urgency triage and escalation routing",
      "Scalable API architecture for multi-platform integration"
    ]
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Pipeline",
    category: "ai-ml",
    categoryLabel: "Predictive Analytics",
    description: "End-to-end customer churn prediction pipeline with comprehensive data preprocessing, feature engineering, model comparison, and automated serialized model inference.",
    longDescription: "Developed a full production-ready predictive pipeline to identify at-risk subscribers. Implemented multiple algorithmic baselines, hyperparameter grid search, precision-recall optimization, and exported trained weights for real-time inference.",
    tags: ["Python", "Scikit-Learn", "Predictive Analytics", "Feature Engineering", "Data Modeling"],
    github: "https://github.com/Mathu-code/Customer-Churn-Prediction",
    demo: null,
    featured: true,
    badge: "Data Science",
    stats: {
      rocAuc: "0.91",
      features: "24 Engineered",
      type: "Classification"
    },
    highlights: [
      "Engineered behavioral and demographic risk metrics",
      "Automated pipeline with data cleaning, encoding, and scaling",
      "Comprehensive performance evaluation with confusion matrix & ROC analysis"
    ]
  },
  {
    id: "project-team-management",
    title: "Project & Team Management Platform",
    category: "fullstack",
    categoryLabel: "Full Stack Web App",
    description: "Modern, responsive enterprise-grade team collaboration and project management web application featuring Kanban boards, sprint tracking, real-time status updates, and role-based permissions.",
    longDescription: "A comprehensive project workspace built with TypeScript, React/Next.js, and modern state management. Features drag-and-drop task workflows, milestone timelines, teammate activity logging, and responsive cloud deployment.",
    tags: ["TypeScript", "Next.js", "React", "TailwindCSS", "Cloud Deployment", "Vercel"],
    github: "https://github.com/Mathu-code/project-team-management-platform",
    demo: "https://project-team-management-platform.vercel.app",
    featured: true,
    badge: "Live Product",
    stats: {
      deploy: "Vercel Live",
      stack: "TypeScript/Next.js",
      type: "SaaS App"
    },
    highlights: [
      "Interactive Kanban boards with smooth drag-and-drop task management",
      "Project timeline visualization and team member workload distribution",
      "Production deployment on Vercel with responsive mobile-first UI"
    ]
  },
  {
    id: "realtime-chat-app",
    title: "Real-Time Chat & Collaboration App",
    category: "fullstack",
    categoryLabel: "Full Stack & WebSockets",
    description: "A WhatsApp-inspired high-speed real-time messaging application with instant bi-directional communication, active status indicators, and multimedia messaging.",
    longDescription: "Engineered using React, Node.js, Express, MongoDB, and Socket.IO. Delivers instant message delivery, typing indicators, user authentication with JWT, secure session handling, and responsive conversational UI.",
    tags: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "WebSockets", "JWT"],
    github: "https://github.com/Mathu-code/realtime-chat",
    demo: "https://realtime-chat-website-one.vercel.app",
    featured: true,
    badge: "Live WebSockets",
    stats: {
      latency: "Sub-50ms",
      protocol: "Socket.IO",
      type: "Real-time"
    },
    highlights: [
      "Bi-directional real-time messaging with instant event broadcasting",
      "Live typing indicators, online presence status, and message history",
      "Scalable MERN architecture with secure MongoDB data persistence"
    ]
  },
  {
    id: "smart-campus-hub",
    title: "Smart Campus Operations Hub",
    category: "fullstack",
    categoryLabel: "Enterprise & Java ML",
    description: "A full-scale campus resource management, room booking, and incident response platform built with Spring Boot, React, and integrated Java Machine Learning for automated ticket priority prediction.",
    longDescription: "Comprehensive enterprise portal designed for academic institutions. Features role-based access control (Students, Faculty, Staff, Admins), automated notification triggers, facility scheduling, and an embedded Java ML model that infers issue severity.",
    tags: ["Java", "Spring Boot", "React", "Java ML", "REST API", "Full Stack"],
    github: "https://github.com/Mathu-code/it3030-paf-2026-smart-campus",
    demo: null,
    featured: false,
    badge: "Java + React",
    stats: {
      backend: "Spring Boot",
      ai: "Java ML Engine",
      type: "Enterprise"
    },
    highlights: [
      "Integrated machine learning algorithm for automated ticket triage",
      "Granular role-based security & JWT authorization",
      "Automated campus resource scheduling and conflict prevention"
    ]
  },
  {
    id: "busgo-booking",
    title: "BusGo - Nationwide Ticket Booking",
    category: "fullstack",
    categoryLabel: "Full Stack E-Commerce",
    description: "Sri Lanka nationwide bus reservation platform enabling travellers to search schedules, view real-time interactive seat layouts, book seats securely, and download PDF tickets with email confirmations.",
    longDescription: "Complete booking engine with seat matrix rendering, fare calculation, booking lifecycle management, automated PDF invoice generation, and email notifications for travelers across Sri Lanka.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "PDF Generation", "E-Commerce"],
    github: "https://github.com/Mathu-code/Bus-Ticket-Booking",
    demo: null,
    featured: false,
    badge: "Full Stack",
    stats: {
      features: "Seat Matrix & PDF",
      db: "MongoDB",
      type: "Booking Engine"
    },
    highlights: [
      "Interactive real-time seat layout selector with reserved seat locking",
      "Automated PDF ticket compilation and automated dispatch",
      "Multi-route search and schedule management system"
    ]
  },
  {
    id: "technologia-mern",
    title: "Technologia Electronics & Servicing Portal",
    category: "fullstack",
    categoryLabel: "MERN Stack E-Commerce",
    description: "An e-commerce and gadget servicing web application featuring warranty/non-warranty service request tracking, user authentication, catalog browsing, cart, and order workflows.",
    longDescription: "Built with the MERN stack to bridge online shopping with electronics after-sales repair support. Users can buy products, file RMA service tickets, and track repair stages in real-time.",
    tags: ["MongoDB", "Express", "React", "Node.js", "MERN", "Service Hub"],
    github: "https://github.com/Mathu-code/Technologia-Mern-stack-website",
    demo: null,
    featured: false,
    badge: "MERN Stack",
    stats: {
      system: "Store + RMA",
      stack: "Full MERN",
      type: "Web Portal"
    },
    highlights: [
      "Dual workflow for product purchasing and repair servicing requests",
      "Customer account dashboard with warranty status verification",
      "Secure payment processing and dynamic inventory management"
    ]
  },
  {
    id: "medipal-android",
    title: "MediPal - Personal Health Companion",
    category: "mobile",
    categoryLabel: "Android / Kotlin App",
    description: "A native Android healthcare companion app for managing medical prescriptions, digital records, vital logs, and doctor appointments with automated push reminders.",
    longDescription: "Developed natively in Kotlin utilizing Android Architecture Components, Room Database, and Material Design 3. Helps patients, older individuals, and caregivers maintain medications safely.",
    tags: ["Kotlin", "Android SDK", "Room DB", "Material 3", "HealthTech", "Mobile App"],
    github: "https://github.com/Mathu-code/MediPal-Android-App",
    demo: null,
    featured: false,
    badge: "Android App",
    stats: {
      lang: "Kotlin Native",
      architecture: "MVVM",
      type: "Mobile App"
    },
    highlights: [
      "Local encrypted health record storage with Room SQLite",
      "Automated notification triggers for daily medicine schedule",
      "Vital tracking charts and appointment calendar integration"
    ]
  },
  {
    id: "aquaselfcare-android",
    title: "AquaSelfCare - Wellness & Hydration",
    category: "mobile",
    categoryLabel: "Android / Kotlin App",
    description: "Native Android wellness application designed to cultivate healthy hydration habits with daily score tracking, milestone achievements, and weekly visual progress analytics.",
    longDescription: "Engineered with modern Kotlin, interactive charting libraries, custom UI animations, and persistent daily tracking routines to promote wellness and mindful hydration.",
    tags: ["Kotlin", "Android", "UI/UX", "Data Visualization", "Wellness"],
    github: "https://github.com/Mathu-code/AquaSelfCare-Android-App",
    demo: null,
    featured: false,
    badge: "Android App",
    stats: {
      lang: "Kotlin",
      ui: "Custom Charts",
      type: "Wellness App"
    },
    highlights: [
      "Visual hydration graphs and weekly statistical trends",
      "Gamified achievement badges and daily goal reminders",
      "Clean, modern Android UI with fluid micro-interactions"
    ]
  },
  {
    id: "cricket-central-live",
    title: "Cricket Central Live",
    category: "fullstack",
    categoryLabel: "TypeScript / Live Sports",
    description: "Real-time cricket tracking and match analytics web app delivering live ball-by-ball updates, player statistics, team standings, and match commentary.",
    longDescription: "Built with modern TypeScript to provide fans with instant match updates, live scoreboards, match summaries, and tournament fixtures.",
    tags: ["TypeScript", "React", "Live Scores", "REST APIs", "Sports Analytics"],
    github: "https://github.com/Mathu-code/cricket-central-live",
    demo: null,
    featured: false,
    badge: "TypeScript",
    stats: {
      type: "Live App",
      stack: "TypeScript",
      focus: "Sports Data"
    },
    highlights: [
      "Live score ticker and interactive match scorecard view",
      "Player performance metrics and team leaderboard tracking",
      "Responsive sports dashboard layout optimized for mobile & desktop"
    ]
  },
  {
    id: "banking-chatbot",
    title: "Banking AI Chatbot Assistant",
    category: "ai-ml",
    categoryLabel: "Conversational AI",
    description: "AI-driven virtual banking assistant capable of answering banking FAQs, loan calculations, account query resolution, and transaction guidance.",
    longDescription: "Developed with Python and NLP frameworks to simulate secure banking assistance, providing accurate automated responses to common customer financial inquiries.",
    tags: ["Python", "NLP", "Chatbot", "FinTech AI", "Conversational AI"],
    github: "https://github.com/Mathu-code/Banking-Chatbot",
    demo: null,
    featured: false,
    badge: "Python AI",
    stats: {
      domain: "FinTech",
      lang: "Python",
      type: "Chatbot"
    },
    highlights: [
      "Context-aware financial inquiry processing and calculation engines",
      "Clean conversational intent mapping with fallback handlers",
      "Structured command recognition for account & service discovery"
    ]
  }
];
