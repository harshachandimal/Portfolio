import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "codemind",
    name: "CodeMind",
    tagline: "AI-powered code intelligence platform",
    description:
      "An intelligent code analysis platform that explains time complexity, space complexity, detected patterns, and runtime trace behavior. Built to help students understand code execution visually.",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL", "Node.js", "TypeScript", "AST Parsing"],
    visual: "codemind",
    highlights: [
      "Static AST-based complexity detection",
      "Visual runtime trace playback",
      "Pattern recognition for common algorithms",
    ],
    links: { github: "https://github.com/harshachandimal/codemind" },
    featured: true,
  },
  {
    slug: "demandflow-ai",
    name: "DemandFlow AI",
    tagline: "Neural demand forecasting for businesses",
    description:
      "A business demand forecasting and inventory prediction system using neural networks such as LSTM/GRU to help businesses understand future sales demand.",
    tech: ["React", "Laravel", "MySQL", "FastAPI", "Python", "PyTorch", "LSTM", "GRU"],
    visual: "demandflow",
    highlights: [
      "LSTM/GRU sequence models for sales forecasting",
      "Inventory risk & reorder point predictions",
      "FastAPI inference service behind a Laravel dashboard",
    ],
    links: { github: "https://github.com/harshachandimal/demandflow-ai" },
    featured: true,
  },
  {
    slug: "fifa-match-predictor",
    name: "FIFA Match Predictor",
    tagline: "Ensemble ML for match outcome prediction",
    description:
      "A machine learning project that predicts FIFA match outcomes using a hybrid ensemble model. The best model blends Random Forest and Logistic Regression probabilities for stronger overall prediction performance and draw detection.",
    tech: ["Python", "Scikit-learn", "FastAPI", "React", "Machine Learning", "Ensemble Models"],
    visual: "fifa",
    highlights: [
      "Hybrid Random Forest + Logistic Regression ensemble",
      "Improved draw-outcome detection",
      "FastAPI prediction endpoint with confidence scores",
    ],
    links: { github: "https://github.com/harshachandimal/-FIFA-Match-Predictor" },
    featured: true,
  },
  {
    slug: "autofix",
    name: "AutoFix",
    tagline: "Full-stack vehicle service ecosystem",
    description:
      "A full-stack vehicle service platform connecting vehicle owners with garages, mechanics, detailers, and carriers. Includes authentication, provider search, booking flow, service status tracking, and invoices.",
    tech: ["React", "Tailwind CSS", "Laravel/Node.js", "MySQL/PostgreSQL", "JWT", "Railway"],
    visual: "autofix",
    highlights: [
      "Multi-role auth for owners, garages & carriers",
      "Real-time booking & service status tracking",
      "Automated invoicing workflow",
    ],
    links: { github: "https://github.com/harshachandimal/vehicle-service-ecosystem" },
    featured: true,
  },
];