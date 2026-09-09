import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, BookOpen, Cpu, Swords, Zap, GitBranch, Users } from "lucide-react";
import { useGitHubStats } from "@/hooks/useGitHubStats";

const profiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/CibiK319/", icon: Code, gradient: "from-[hsl(35,85%,55%)] to-[hsl(25,90%,50%)]", description: "Solving DSA problems", stats: "200+ solved", rating: "1539" },
  { name: "Codeforces", url: "https://codeforces.com/profile/Cibi-k-112", icon: Swords, gradient: "from-[hsl(210,80%,50%)] to-[hsl(230,70%,55%)]", description: "Competitive programmer", stats: "100+ solved", rating: "Newbie" },
  { name: "CodeChef", url: "https://www.codechef.com/users/cibi_k", icon: Trophy, gradient: "from-[hsl(10,70%,50%)] to-[hsl(30,80%,55%)]", description: "Competitive Coder", stats: "2★ rated", rating: "1530" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/cibik", icon: BookOpen, gradient: "from-[hsl(140,60%,40%)] to-[hsl(160,50%,45%)]", description: "Practice & learning", stats: " 100+" },
   { name: "Coding Ninjas ", url: "https://www.naukri.com/code360/profile/cibik", icon: Swords, gradient: "from-[hsl(210,80%,50%)] to-[hsl(230,70%,55%)]", description: "Competitive programmer", stats: "50+ solved", rating: "1472" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/cibik", icon: Cpu, gradient: "from-[hsl(150,70%,38%)] to-[hsl(170,60%,42%)]", description: "Fundamentals", stats: "Worked on 150+" },
  { name: "HackerEarth", url: "https://www.hackerearth.com/@cibi-k/", icon: Zap, gradient: "from-[hsl(260,70%,55%)] to-[hsl(280,65%,50%)]", description: "Problem Solver", stats: "Active Participant" },
];

const GITHUB_USERNAME = "cibi-k";

const CodingProfilesSection = () => {
  const { stats, status } = useGitHubStats(GITHUB_USERNAME);

  return (
    <SectionWrapper id="coding-profiles">
      <SectionTitle title="Coding Profiles" subtitle="Where I practice and compete" />

      {status === "success" && stats && (
        <motion.a
          href={stats.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass max-w-md mx-auto mb-10 flex items-center gap-4 p-4"
        >
          <img src={stats.avatar_url} alt="GitHub avatar" className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <p className="font-display font-semibold text-sm">Live from GitHub</p>
            <p className="text-muted-foreground text-xs">@{GITHUB_USERNAME}</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <GitBranch size={14} className="text-primary" /> {stats.public_repos}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users size={14} className="text-primary" /> {stats.followers}
            </span>
          </div>
        </motion.a>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
          className="group liquid-glass p-6 text-center block relative overflow-hidden"
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
};

export default CodingProfilesSection;
