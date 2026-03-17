// ============================================================
// PORTFOLIO DATA — Edit this file to update all content
// ============================================================

export const PROFILE = {
  name: "Sakshi",
  title: "Full Stack Developer",
  location: "Mumbai, India",
  tagline: "I code for fun — and I like cats.",
  bio: "Final-year B.Tech IT student at DJSCE with a deep interest in building AI-powered systems, scalable backends, and products that actually matter. Smart India Hackathon 2024 national winner. Top 2% in Amazon ML Challenge 2025. Currently building things that excite me.",
  email: "sakshigolatkar2486@gmal.com",
  github: "https://github.com/Kaonashi2486",
  linkedin: "https://www.linkedin.com/in/sakshi-golatkar-a1692214b/",
};

export const PROJECTS = [
  {
    id: "udaan",
    title: "UDAAN",
    subtitle: "AI-driven Student Dropout Prevention",
    tags: ["Python", "Flask", "Socket.io", "ML", "WebSockets"],
    accentColor: "#c084fc",
    thumbnail: null, // Add image path like "/thumbnails/udaan.png"
    shortDesc: "National-winning platform that identifies at-risk students using AI and triggers real-time intervention workflows.",
    fullDesc: `UDAAN is an AI-driven student dropout prevention platform built for Smart India Hackathon 2024, where it won at the national level.

The system uses machine learning models to analyze student behavioral, academic, and attendance data to flag at-risk students early. Real-time alerts are pushed via WebSockets to counselors and faculty, enabling timely intervention.

Built with Python/Flask backend, Socket.io for real-time communication, and a responsive dashboard for institutions.`,
    highlights: [
      "National Winner — Smart India Hackathon 2024",
      "Real-time alert system via Socket.io/WebSockets",
      "ML pipeline for dropout risk prediction",
      "Deployed on AWS EC2 with Docker",
    ],
    github: null,
    live: "https://youtu.be/YCBnM01alZk",
    post: null,
    demo: null,
    paper: null,
  },
  {
    id: "nutriscan",
    title: "NutriScan",
    subtitle: "AI-Powered Nutrition Analyzer",
    tags: ["React", "Node.js", "Python", "Computer Vision"],
    accentColor: "#22d3ee",
    thumbnail: null,
    shortDesc: "Scan any food item and get instant nutritional breakdown using computer vision and a curated food database.",
    fullDesc: `NutriScan lets users photograph food items and receive instant, accurate nutritional information powered by a custom-trained computer vision model.

The app features a clean React frontend, a Node.js/Express REST API, and a Python-based CV inference service. Results are displayed in an intuitive dashboard with macro breakdowns and health insights.`,
    highlights: [
      "Custom-trained food recognition model",
      "React frontend with beautiful data visualization",
      "RESTful API with Node.js/Express",
      "Real-time inference pipeline",
    ],
    github: "https://github.com/Kaonashi2486/NutriVision",
    live: null,
    post: "https://dev.to/kaonashi2486/transformation-starts-with-healthy-eating-nutrivision-built-with-github-copilot-2189",
    demo: null,
    paper: null,
  },
  {
    id: "gosafe",
    title: "GoSafe AI",
    subtitle: "Personal Safety & Emergency Response",
    tags: ["React Native", "Node.js", "Geolocation", "AI"],
    accentColor: "#fb923c",
    thumbnail: null,
    shortDesc: "Real-time personal safety app with AI threat detection, one-tap SOS, and location sharing for emergencies.",
    fullDesc: `GoSafe AI is a personal safety platform that uses AI to detect distress signals and automate emergency response workflows.

Features include real-time location sharing, one-tap SOS with automatic alert dispatch, AI-based threat detection from device sensors, and a guardian dashboard for trusted contacts.`,
    highlights: [
      "AI-powered distress detection",
      "Real-time location tracking and sharing",
      "Automated SOS dispatch system",
      "Guardian dashboard with live monitoring",
    ],
    github: "https://github.com/Kaonashi2486/GoSafe_AI",
    live: "https://www.youtube.com/shorts/kkSd2QtgcMg",
    post: null,
    demo: null,
    paper: null,
  },
  {
    id: "drowsiguard",
    title: "DrowsiGuard",
    subtitle: "Driver Drowsiness Detection System",
    tags: ["Python", "OpenCV", "Deep Learning", "IoT"],
    accentColor: "#c084fc",
    thumbnail: null,
    shortDesc: "Real-time driver monitoring system that detects drowsiness using facial landmark analysis and triggers alerts.",
    fullDesc: `DrowsiGuard is a real-time computer vision system that monitors driver alertness using facial landmark detection and blink analysis.

The system processes webcam/dashcam feed to detect eye closure patterns, microsleeps, and yawning. When drowsiness is detected, audio/visual alerts fire immediately. Built with Python, OpenCV, and a deep learning classifier.`,
    highlights: [
      "Real-time facial landmark tracking at 30fps",
      "PERCLOS metric-based drowsiness scoring",
      "Multi-modal alert system",
      "Explainable AI layer for detection reasoning",
    ],
    github: null,
    live: null,
    post: null,
    demo: null,
    paper: "kjb",
  },
  {
    id: "gujarati-nlp",
    title: "Gujarati Idiomatic Model",
    subtitle: "Low-Resource NLP for Gujarati Idioms",
    tags: ["Python", "NLP", "Transformers", "HuggingFace"],
    accentColor: "#22d3ee",
    thumbnail: null,
    shortDesc: "Fine-tuned language model that understands and translates Gujarati idiomatic expressions — a low-resource NLP challenge.",
    fullDesc: `Gujarati is a low-resource language with rich idiomatic expressions that standard translation models consistently fail on. This project tackles that gap with a fine-tuned transformer model trained to detect, interpret, and translate Gujarati idioms accurately.

The model was fine-tuned on a custom-curated dataset of Gujarati idiomatic phrases with annotated meanings and contextual translations. Handles figurative language that literal translation models cannot.`,
    highlights: [
      "Fine-tuned transformer on custom Gujarati idiom dataset",
      "Handles figurative/idiomatic language beyond literal translation",
      "Low-resource NLP — scarce training data challenge",
      "Built with HuggingFace Transformers pipeline",
    ],
    github: null,
    live: null,
    post: null,
    demo: null,
    paper: "kjkn",
  },
  {
    id: "email-scheduler",
    title: "MailQueue",
    subtitle: "Full-Stack Email Pre-Scheduling System",
    tags: ["React", "Node.js", "BullMQ", "Redis", "MongoDB"],
    accentColor: "#fb923c",
    thumbnail: null,
    shortDesc: "Schedule emails for future delivery with a queue-backed system — built with BullMQ, Redis, and Ethereal Email for reliable async dispatch.",
    fullDesc: `MailQueue is a production-grade email scheduling system built as a full-stack internship assignment. Users compose emails, pick a future delivery time, and the system handles reliable async dispatch even under load.

The backend uses BullMQ with Redis as the job queue, ensuring emails are never lost — even if the server restarts. MongoDB stores email records and delivery status. The React frontend provides a clean scheduling UI with delivery tracking.

Built with Ethereal Email for SMTP testing, making it fully demonstrable without a real mail server.`,
    highlights: [
      "BullMQ + Redis job queue for reliable async email delivery",
      "Survives server restarts — jobs persist in Redis",
      "Real-time delivery status tracking in React UI",
      "MongoDB for email records and scheduling history",
      "Ethereal Email SMTP integration for testing",
    ],
    github: "https://github.com/Kaonashi2486/Prescheduling_Email",
    live: null,
    demo: "https://outbox-assignment-six.vercel.app",
    post: null,
    paper: null,
  },
];

export const ACHIEVEMENTS = [
  {
    id: "sih2024",
    type: "trophy",
    title: "Smart India Hackathon 2024",
    subtitle: "National Winner 🏆",
    accentColor: "#fb923c",
    year: "2024",
    shortDesc: "Won at the national level among thousands of teams across India for UDAAN — AI-driven student dropout prevention.",
    fullDesc: `Smart India Hackathon is India's largest hackathon organized by the Government of India. Out of thousands of competing teams from colleges across the country, UDAAN was selected as the national winner.

The problem statement was provided by a government ministry, and solutions were evaluated on innovation, technical feasibility, scalability, and real-world impact.

UDAAN's approach of combining ML-based risk prediction with real-time intervention workflows was recognized as the most impactful solution.`,
    tags: ["National Level", "Govt. of India", "AI/ML", "EdTech"],
  },
  {
    id: "amazonml",
    type: "award",
    title: "Amazon ML Challenge 2025",
    subtitle: "Top 2% Nationally",
    accentColor: "#22d3ee",
    year: "2025",
    shortDesc: "Ranked in the top 2% among thousands of participants in Amazon's premier machine learning competition.",
    fullDesc: `The Amazon ML Challenge is one of India's most competitive machine learning competitions, attracting top students and professionals from across the country.

Achieved a top 2% ranking through strong performance in feature engineering, model selection, and optimization under competition constraints.`,
    tags: ["Machine Learning", "Amazon", "Top 2%", "Competition"],
  },
  {
    id: "cdac",
    type: "internship",
    title: "C-DAC Research Internship",
    subtitle: "Software Engineering Research",
    accentColor: "#c084fc",
    year: "2024",
    shortDesc: "Software Engineering research internship at Centre for Development of Advanced Computing — India's premier R&D organization.",
    fullDesc: `Completed a Software Engineering Research Internship at C-DAC (Centre for Development of Advanced Computing), India's premier R&D organization under the Ministry of Electronics and IT.

Worked on applied research projects involving backend systems and software engineering practices, gaining exposure to large-scale institutional software development.`,
    tags: ["Research", "C-DAC", "Govt. R&D", "Software Engineering"],
  },
  {
    id: "hackathons",
    type: "hack",
    title: "Hackathon Circuit",
    subtitle: "6 Competitions — Multiple Wins",
    accentColor: "#fb923c",
    year: "2023–2025",
    shortDesc: "Competed in 6 hackathons across national and state levels, consistently reaching finals and winning categories.",
    fullDesc: `Active competitor across India's hackathon circuit with participations including Smart India Hackathon (National Winner), multiple college-level and inter-college hackathons, and industry-sponsored challenges.

Each hackathon has been an opportunity to build real products under pressure, collaborate in fast-moving teams, and pitch to industry judges.`,
    tags: ["SIH", "Hackathons", "Multiple Events", "Team Lead"],
  },

];

// Spline scene URL — replace with your actual URL
// Format: https://prod.spline.design/XXXXXXXXX/scene.splinecode
export const SPLINE_URL = "https://prod.spline.design/bcc9e075-7b80-40cf-8dc9-9c5d521655a6/scene.splinecode";
// ^^^ UPDATE THIS with your actual exported scene URL from Spline
