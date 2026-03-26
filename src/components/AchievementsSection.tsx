import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Award, BookOpen, Trophy } from "lucide-react";

const achievements = [
  { title: "Google AI Essentials", org: "Google / Coursera", icon: Award, description: "Completed comprehensive AI fundamentals course covering machine learning, neural networks, and practical applications." },
  { title: "Deep Learning Specialization", org: "Coursera", icon: BookOpen, description: "Five-course specialization covering CNNs, RNNs, sequence models, and structuring ML projects." },
  { title: "Python for Data Science", org: "IBM / Coursera", icon: Trophy, description: "Professional certificate in Python programming, data analysis, and visualization." },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" className="bg-secondary/20">
    <SectionTitle title="Achievements & Certifications" subtitle="Milestones in my learning journey" />
    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-card rounded-xl neon-border p-6 glow-card text-center"
        >
          <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 neon-glow">
            <a.icon size={22} className="text-primary-foreground" />
          </div>
          <h3 className="font-display font-semibold mb-1">{a.title}</h3>
          <p className="text-primary text-sm font-medium mb-3">{a.org}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
