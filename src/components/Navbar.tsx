import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#achievements" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      for (const l of [...links].reverse()) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(l.href);
          return;
        }
      }
      setActive("");
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-3 md:top-5 left-0 right-0 z-50 px-3 md:px-6"
    >
      <nav
        className={`mx-auto max-w-5xl rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-nav shadow-lg" : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/profile.jpg"
              alt="Cibi K"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/40"
            />
            <span className="font-display text-lg font-bold gradient-text tracking-tight">
              Cibi K
            </span>
          </a>

          {/* Desktop pill links */}
          <div className="hidden md:flex items-center gap-1 rounded-full liquid-glass px-1.5 py-1.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  active === l.href ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full gradient-bg -z-10"
                  />
                )}
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="w-9 h-9 flex items-center justify-center rounded-full text-foreground liquid-glass"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-border/30"
            >
              <div className="flex flex-col py-4 px-6 gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2.5 px-3 rounded-xl transition-colors ${
                      active === l.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
