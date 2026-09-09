import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Lightbulb, Puzzle, Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  architecture: string;
  features: string[];
  challenges: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "KCE Smart Bus Management System",
    tagline: "Smart Campus Transportation — Karpagam College of Engineering",
    overview:
      "A smart campus bus management platform designed for Karpagam College of Engineering to simplify and digitize student transportation. The system provides separate dashboards and role-based access for students, drivers, and administrators, enabling real-time bus management, route monitoring, student transportation tracking, and centralized administration.",
    problem:
      "Campus transportation involving students, drivers, and hostellers was coordinated without a centralized digital system, making it harder to manage routes, track buses, and keep everyone informed from a single source of truth.",
    solution:
      "Built a role-based platform with dedicated dashboards for students, drivers, and admins, backed by a secure authentication and database layer so each role sees exactly the transportation information relevant to them.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Authentication", "PostgreSQL", "Responsive UI"],
    architecture:
      "A React + TypeScript frontend styled with Tailwind CSS talks to Supabase for authentication and a PostgreSQL database, which stores bus, route, and role information behind secure, role-based access rules.",
    features: [
      "Student login and personalized dashboard",
      "Driver login and driver dashboard",
      "Admin dashboard with complete system control",
      "Role-based authentication",
      "Student bus/route information",
      "Driver and bus management",
      "Bus route management",
      "Transportation status and updates",
      "Hosteller student support",
      "Centralized campus transportation management",
      "Responsive modern UI/UX",
      "Secure database-backed architecture",
    ],
    challenges:
      "Designing a single secure authentication and database layer that cleanly supports three distinct roles — student, driver, and admin — each with different permissions and views into the same transportation data.",
    demo: "https://kcebus.vercel.app/",
  },
  {
    title: "AI Mentor",
    tagline: "AI for All — One-Day Ideathon, NIT-T",
    overview:
      "Developed during the AI for All one-day ideathon conducted by NIT Trichy, focusing on applying AI concepts to propose a working solution within a limited time.",
    problem:
      "Students often lack an always-available mentor to answer subject and career doubts in real time during their learning journey.",
    solution:
      "Designed a conversational AI mentor that retrieves relevant context from a vector store and responds with grounded, NLP-driven guidance rather than generic answers.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Vector DB", "NLP Fundamentals"],
    architecture:
      "A lightweight frontend (HTML/CSS/JS) communicates with a Python backend that embeds user queries, retrieves the closest matches from a vector database, and composes a response using NLP fundamentals.",
    features: [
      "Conversational Q&A interface",
      "Context retrieval via vector similarity search",
      "Rapid-prototype built end-to-end within the ideathon timeframe",
    ],
    challenges:
      "Building and integrating a retrieval pipeline under strict hackathon time pressure while keeping the demo stable for judging.",
    github: "#",
    demo: "https://docs.google.com/presentation/d/1kWOl0nqPUAzvyFTJewb7fkXfbMeOjspjDJrLZ3-heYg/edit?usp=sharing",
  },
  {
    title: "AI Powered Growth Platform",
    tagline: "Hackathon 3.0, KPRIET",
    overview:
      "Built as part of Hackathon 3.0 at KPRIET, focusing on delivering a functional solution under time constraints while enhancing problem-solving and teamwork skills.",
    problem:
      "Individuals and small teams often lack a simple AI-assisted platform to guide their growth and decision-making with relevant, retrievable knowledge.",
    solution:
      "Built a platform that combines NLP fundamentals with a ChromaDB-backed retrieval layer, so responses stay grounded in a curated knowledge base instead of hallucinating.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "ChromaDB", "NLP Fundamentals"],
    architecture:
      "Frontend built with HTML/CSS/JS talks to a Python service that indexes source documents into ChromaDB and performs similarity search before generating a response.",
    features: [
      "Retrieval-augmented responses via ChromaDB",
      "Team-built under real hackathon constraints",
      "Focus on functional reliability over feature bloat",
    ],
    challenges:
      "Coordinating a working retrieval pipeline as a team within the hackathon's fixed time budget, while keeping scope realistic.",
    github: "#",
    demo: "https://docs.google.com/presentation/d/13UqKjk06MVqDCD-hE9Nz3499Zo9xLAUcuctj5IF143c/edit?usp=sharing",
  },
];

const TiltCard = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const [style, setStyle] = useState({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.015)`,
    });
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const handleLeave = () =>
    setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)" });

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`spotlight ${className}`}
      style={{ ...style, transition: "transform 0.2s ease-out" }}
    >
      {children}
    </div>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Projects" subtitle="Premium case studies of things I've built" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <TiltCard
              onClick={() => setActive(p)}
              className="group liquid-glass overflow-hidden h-full cursor-pointer"
            >
              <div className="h-1 gradient-bg" />
              <div className="p-6 relative">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${p.title} live site`}
                    title="Open live site"
                    className="absolute top-4 right-4 w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all z-10"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
                <span className="text-xs uppercase tracking-wider text-primary font-medium pr-8 block">
                  {p.tagline}
                </span>
                <h3 className="font-display text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {p.overview}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-medium border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-secondary/40 text-muted-foreground font-medium">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  View Details <ArrowUpRight size={14} />
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl liquid-glass border-none p-0 overflow-hidden max-h-[85vh] overflow-y-auto glass-scrollbar">
          {active && (
            <div className="p-6 md:p-8">
              <div className="h-1.5 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 gradient-bg" />
              <DialogHeader className="text-left space-y-1">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  {active.tagline}
                </span>
                <DialogTitle className="font-display text-2xl font-bold">
                  {active.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <section>
                  <h4 className="flex items-center gap-2 font-display font-semibold text-sm mb-2">
                    <Sparkles size={15} className="text-primary" /> Overview
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{active.overview}</p>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 font-display font-semibold text-sm mb-2">
                    <Puzzle size={15} className="text-primary" /> Problem
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{active.problem}</p>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 font-display font-semibold text-sm mb-2">
                    <Lightbulb size={15} className="text-primary" /> Solution
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{active.solution}</p>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 font-display font-semibold text-sm mb-2">
                    <Layers size={15} className="text-primary" /> Architecture
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{active.architecture}</p>
                </section>

                <section>
                  <h4 className="font-display font-semibold text-sm mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-medium border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="font-display font-semibold text-sm mb-2">Key Features</h4>
                  <ul className="space-y-1.5">
                    {active.features.map((f) => (
                      <li key={f} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1">•</span> {f}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="font-display font-semibold text-sm mb-2">Challenges</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{active.challenges}</p>
                </section>

                <div className="flex gap-3 pt-2">
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium liquid-glass px-4 py-2 rounded-xl hover:scale-[1.03] transition-transform"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium gradient-bg text-primary-foreground px-4 py-2 rounded-xl hover:scale-[1.03] transition-transform neon-glow"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default ProjectsSection;
