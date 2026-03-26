import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AI Chatbot",
    description: "An NLP-powered chatbot that understands user intent and generates context-aware responses using transformer-based models.",
    tech: ["Python", "TensorFlow", "NLP", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "Face Detection System",
    description: "Real-time face detection and recognition system built using OpenCV and deep learning, capable of identifying multiple faces.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    github: "#",
    demo: null,
  },
  {
    title: "Image Classifier",
    description: "A convolutional neural network that classifies images across 10 categories with 94% accuracy, deployed as a web app.",
    tech: ["Python", "TensorFlow", "React", "CNN"],
    github: "#",
    demo: "#",
  },
];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [style, setStyle] = useState({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)" });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)` });
  };

  const handleLeave = () => setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)" });

  return (
    <div onMouseMove={handleMove} onMouseLeave={handleLeave} className={className} style={{ ...style, transition: "transform 0.2s ease-out" }}>
      {children}
    </div>
  );
};

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="Projects" subtitle="Things I've built" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <TiltCard className="group bg-card rounded-xl overflow-hidden neon-border glow-card h-full">
            {/* Top gradient bar */}
            <div className="h-1 gradient-bg" />
            {/* Hover glow overlay */}
            <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-500 pointer-events-none" />
            <div className="p-6 relative">
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-medium border border-border/50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={p.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={15} /> Code
                </a>
                {p.demo && (
                  <a href={p.demo} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
