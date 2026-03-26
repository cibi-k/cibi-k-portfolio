import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, BookOpen, Cpu } from "lucide-react";

const profiles = [
  { name: "LeetCode", url: "#", icon: Code, gradient: "from-[hsl(35,85%,55%)] to-[hsl(25,90%,50%)]", description: "Solving DSA problems", stats: "100+ solved" },
  { name: "CodeChef", url: "#", icon: Trophy, gradient: "from-[hsl(10,70%,50%)] to-[hsl(30,80%,55%)]", description: "Competitive programming", stats: "3★ rated" },
  { name: "GeeksforGeeks", url: "#", icon: BookOpen, gradient: "from-[hsl(140,60%,40%)] to-[hsl(160,50%,45%)]", description: "Practice & learning", stats: "200+ articles" },
  { name: "HackerRank", url: "#", icon: Cpu, gradient: "from-[hsl(150,70%,38%)] to-[hsl(170,60%,42%)]", description: "Skills & certifications", stats: "5★ Python" },
];

const CodingProfilesSection = () => (
  <SectionWrapper id="coding-profiles">
    <SectionTitle title="Coding Profiles" subtitle="Where I practice and compete" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {profiles.map((p, i) => (
        <motion.a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -10, scale: 1.03 }}
          className="group bg-card rounded-xl neon-border p-6 text-center glow-card block relative overflow-hidden"
        >
          {/* Background gradient glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

          <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <p.icon size={24} className="text-white" />
          </div>
          <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors relative">{p.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 relative">{p.description}</p>
          <span className="inline-block text-xs font-medium gradient-text mb-3 relative">{p.stats}</span>
          <span className="flex items-center justify-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity relative">
            Visit <ExternalLink size={11} />
          </span>
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export default CodingProfilesSection;
