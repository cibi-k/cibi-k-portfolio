import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "theme-purple", "theme-glass");
    if (dark) root.classList.add("dark");
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="relative w-14 h-8 rounded-full bg-secondary/60 border border-border/50 flex items-center px-1 transition-colors duration-500 hover:border-primary/30"
      aria-label="Toggle theme"
    >
      {/* Sliding knob */}
      <motion.div
        className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shadow-lg"
        animate={{ x: dark ? 0 : 22 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {dark ? (
          <Moon size={12} className="text-primary-foreground" />
        ) : (
          <Sun size={12} className="text-primary-foreground" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
