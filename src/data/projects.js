// Real project data pulled from github.com/ginakena
export const projects = [
  {
    id: "a3f9c1",
    status: "shipped",
    name: "Kenya Mobile Money BI",
    blurb:
      "A business-intelligence dashboard analyzing mobile money adoption trends across Kenya — cleaned raw transaction data, built visualizations, and surfaced adoption patterns for decision-making.",
    stack: ["Python", "Pandas", "BI Tools", "Data Viz"],
    repo: "https://github.com/ginakena/kenya-mobile-money-bi",
    demo: null,
    year: "2026",
  },
  {
    id: "e17b02",
    status: "shipped",
    name: "Micro-lending Platform",
    blurb:
      "A blockchain-powered student micro-lending platform. Solidity smart contracts enforce transparent peer-to-peer loans with defined repayment schedules and grace periods.",
    stack: ["Solidity", "Hardhat", "React", "TypeScript", "ethers.js"],
    repo: "https://github.com/ginakena/microlending-platform",
    demo: null,
    year: "2026",
  },
  {
    id: "9c04df",
    status: "shipped",
    name: "Supply Chain Tracker",
    blurb:
      "An on-chain supply chain tracker built with Solidity and Foundry. Debugged Anvil state-persistence issues and a manual eth_call ABI-encoding bug while wiring it up locally.",
    stack: ["Solidity", "Foundry", "Anvil"],
    repo: "https://github.com/ginakena/Supply-chain-tracker",
    demo: null,
    year: "2026",
  },
  {
    id: "b56a1e",
    status: "case study",
    name: "Windows Boot Recovery — Case Study",
    blurb:
      "A diagnostic deep-dive into a real Windows boot failure: disk checks, CBS store corruption, and the path to a clean reinstall, documented as a three-part write-up.",
    stack: ["Windows Internals", "PowerShell", "Diagnostics"],
    repo: "https://github.com/ginakena/windows-boot-recovery-case-study",
    demo: null,
    year: "2026",
  },
  {
    id: "f2081a",
    status: "deployed",
    name: "STANS",
    blurb:
      "Deployed an intelligent navigation system that computes optimal routes using graph algorithms, factoring in real-time traffic conditions, blockades, and distance metrics.",
    stack: ["TypeScript", "React", "DevOps", "Graph Algorithms"],
    repo: "https://github.com/ginakena/STANS",
    demo: null,
    year: "2026",
  },
  {
    id: "77dc3b",
    status: "shipped",
    name: "Planora",
    blurb:
      "A Kanban-style task board with real-time updates via Socket.io and Cloudinary image uploads — built during a full-stack internship sprint.",
    stack: ["React", "Socket.io", "Node.js", "Cloudinary"],
    repo: "https://github.com/ginakena/planora",
    demo: null,
    year: "2026",
  },
];

export const stack = {
  "Languages & Core": ["JavaScript", "TypeScript", "Python", "Solidity"],
  "Frontend": ["React", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  "Blockchain": ["Solidity", "Hardhat", "Foundry", "ethers.js"],
  "Other": ["WebRTC", "Git", "Data Analysis", "Machine Learning basics"],
};

export const experience = [
  {
    role: "AI Hackathon Team Leader",
    org: "Murang'a University of Technology",
    period: "Oct 2024 – Dec 2024",
    detail:
      "Led a cross-functional team building an AI-powered solution under a tight deadline — coordinating task delegation and delivery.",
  },
  {
    role: "Organizing Secretary",
    org: "Project Management Club, MUT",
    period: "Oct 2024 – Mar 2026",
    detail:
      "Planned and ran club events — tech talks, game nights, business exposés — and helped grow member engagement.",
  },
  {
    role: "Software Development Certification",
    org: "TEACH2GIVE",
    period: "May 2025 – Jul 2025",
    detail:
      "Completed an intensive programme covering modern engineering practices and real-world application development.",
  },
  {
    role: "Full-Stack Development Internship",
    org: "CodeAlpha",
    period: "2026",
    detail:
      "Built and shipped two production-style apps: a social app (Express/MongoDB/JWT + React/Vite/MUI) and a Kanban board with real-time collaboration.",
  },
];
