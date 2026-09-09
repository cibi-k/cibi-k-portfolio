import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles, Code2 } from "lucide-react";

const infoCards = [
  { icon: Sparkles, title: "AI & Tech Enthusiast", detail: "Second-Year Undergraduate" },
  { icon: Code2, title: "Competitive Programming", detail: "Data Structures & Algorithms" },
  { icon: GraduationCap, title: "Karpagam College of Engineering", detail: "Information Technology Undergraduate" },
  { icon: MapPin, title: "Coimbatore, India", detail: "" },
];

const stats = [
  { label: "Tech Stacks", value: "7+" },
  { label: "Focus", value: "DSA & AI" },
  { label: "Certifications", value: "5+" },
  { label: "Projects", value: "2+" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" subtitle="Get to know me better" />
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* LEFT — profile identity, presented as a bento of glass cards */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-4"
      >
        {infoCards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className={`liquid-glass p-5 flex flex-col justify-between gap-4 ${
              i === 0 ? "col-span-2" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
              <c.icon size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-semibold text-sm leading-snug">{c.title}</p>
              {c.detail && <p className="text-muted-foreground text-xs mt-1">{c.detail}</p>}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT — narrative + quick stats */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-2xl font-bold mb-4">Professional Overview</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I am an Information Technology student with a strong interest in problem solving and
          software development. Currently, I am focusing on learning Data Structures and
          Algorithms to improve my logical thinking and coding skills.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Along with DSA, I am exploring Artificial Intelligence concepts and modern web
          development. I enjoy building projects and continuously improving my technical skills
          to prepare for future software engineering roles. Beyond that, I actively explore
          emerging technologies and scalable architectures.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="liquid-glass p-4 text-center"
            >
              <div className="font-display font-bold text-lg gradient-text">{stat.value}</div>
              <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
