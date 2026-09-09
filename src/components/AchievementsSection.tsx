import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Trophy, Search, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * Certificate data — add future certificates here as plain objects.
 * `category` powers the filter chips; `description` and `icon` render
 * on the card and inside the preview modal.
 */
interface Certificate {
  title: string;
  org: string;
  category: "AI" | "Programming" | "Hackathon";
  icon: typeof Award;
  description: React.ReactNode;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: "Agentic AI",
    org: "IBM",
    category: "AI",
    icon: BookOpen,
    description: "Fundamentals of Agentic AI, Generative AI & LLMs.",
  },
  {
    title: "Python",
    org: "GUVI | IIT-M",
    category: "Programming",
    icon: Award,
    description: "Professional certificate in Python programming.",
  },
  {
    title: "AI FOR ALL – One Day Ideathon",
    org: "NIT-T",
    category: "Hackathon",
    icon: Trophy,
    description: (
      <>
        Qualified for Finals among 650+ teams. <br /> Top 5 in the Education domain.
      </>
    ),
  },
];

const categories = ["All", "AI", "Programming", "Hackathon"] as const;

const AchievementsSection = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<Certificate | null>(null);

  const filtered = useMemo(() => {
    return certificates.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.org.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <SectionWrapper id="achievements" className="bg-secondary/20">
      <SectionTitle title="Achievements & Certifications" subtitle="Milestones in my learning journey" />

      {/* Search + category filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search certificates..."
            aria-label="Search certificates"
            className="w-full liquid-glass pl-11 pr-4 py-2.5 rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto sm:overflow-visible">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                category === c
                  ? "gradient-bg text-primary-foreground"
                  : "liquid-glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((a, i) => (
            <motion.button
              key={a.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setActive(a)}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
                el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
              }}
              className="liquid-glass spotlight p-6 text-center text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 neon-glow">
                <a.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-1 text-center">{a.title}</h3>
              <p className="text-primary text-sm font-medium mb-3 text-center">{a.org}</p>
              <span className="block text-center text-xs uppercase tracking-wider text-muted-foreground">
                {a.category}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground text-sm py-10">
            No certificates match your search.
          </p>
        )}
      </motion.div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-md liquid-glass border-none">
          {active && (
            <>
              <DialogHeader className="text-center items-center">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-3 neon-glow">
                  <active.icon size={26} className="text-primary-foreground" />
                </div>
                <DialogTitle className="font-display text-xl">{active.title}</DialogTitle>
                <p className="text-primary text-sm font-medium">{active.org}</p>
              </DialogHeader>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {active.description}
              </p>
              {active.credentialUrl && (
                <a
                  href={active.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View credential <ExternalLink size={13} />
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default AchievementsSection;
