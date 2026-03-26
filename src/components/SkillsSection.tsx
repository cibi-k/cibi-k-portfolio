import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Code2, Brain, Globe, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Web",
    icon: Globe,
    skills: ["React.js", "HTML & CSS", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Jupyter", "VS Code", "Docker"],
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
          className="group bg-card/60 backdrop-blur-xl rounded-xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
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
