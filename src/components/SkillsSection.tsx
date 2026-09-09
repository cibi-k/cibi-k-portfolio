import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Code2, Brain, Globe, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C","C++","Python",],
  },
  {
    title: "Core",
    icon: Brain,
    skills: ["Data Structures & Algorithms "],
  },
  {
    title: "Web",
    icon: Globe,
    skills: [ "HTML", "CSS","JavaScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git","GitHub", "VS Code"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" className="bg-secondary/20">
    <SectionTitle title="Skills" subtitle="Technologies I work with" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: ci * 0.1 }}
          whileHover={{ y: -6 }}
          onMouseMove={(e) => {
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
            el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
          }}
          className="group liquid-glass spotlight p-6 hover:shadow-xl transition-all duration-500"
        >
          <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-5">
            <cat.icon size={20} className="text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold mb-4 text-foreground">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-muted-foreground font-medium border border-border/50 hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
