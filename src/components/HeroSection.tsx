import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import profileImg from "@/assets/profile.png";

const ParticleField = lazy(() => import("./ParticleField"));

const roles = [
  "AI & Machine Learning Developer",
  "Deep Learning Enthusiast",
  "Python Developer",
  "Full Stack Builder",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Particles */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-[1]" />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] z-[1] transition-transform duration-[1500ms]"
        style={{ left: "10%", top: "20%", transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] z-[1] transition-transform duration-[1500ms]"
        style={{ right: "10%", bottom: "20%", transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
      />

      {/* Split-screen content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* LEFT — Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs px-4 py-2 rounded-full border border-primary/20 bg-primary/5 neon-glow">
                AI & ML Portfolio
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]">
              Hi, I'm{" "}
              <span className="gradient-text">Cibi K</span>
            </h1>

            <div className="h-8 md:h-10 mb-6">
              <span className="font-display text-lg md:text-xl lg:text-2xl text-muted-foreground">
                {text}
                <span className="inline-block w-0.5 h-5 md:h-6 bg-primary ml-1 animate-pulse-glow" />
              </span>
            </div>

            <p className="text-muted-foreground max-w-lg mb-10 text-sm md:text-base leading-relaxed">
              Building intelligent systems using Python, Deep Learning, and modern web technologies. Passionate about creating AI solutions that make a real impact.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-7 py-3 rounded-xl font-medium hover:opacity-90 transition-all neon-glow hover:scale-105 duration-300 text-sm"
              >
                View Projects <ArrowDown size={15} />
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 bg-card/50 text-foreground px-7 py-3 rounded-xl font-medium border border-border/50 hover:border-primary/40 transition-all backdrop-blur-sm hover:scale-105 duration-300 text-sm"
              >
                Download Resume <Download size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-card/50 text-foreground px-7 py-3 rounded-xl font-medium border border-border/50 hover:border-accent/40 transition-all backdrop-blur-sm hover:scale-105 duration-300 text-sm"
              >
                Contact Me <Mail size={15} />
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border/30">
              {[
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Certifications" },
                { value: "3+", label: "Languages" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow rays behind image */}
              <div className="absolute inset-0 scale-150">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px]" />
                <div
                  className="absolute inset-0 rounded-full bg-accent/8 blur-[60px] animate-spin-slow"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                />
              </div>

              {/* Rotating gradient ring */}
              <div className="absolute -inset-3 rounded-full animate-spin-slow opacity-60">
                <div className="w-full h-full rounded-full gradient-bg p-[2px]">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
              </div>

              {/* Profile image with tilt */}
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden neon-border floating"
                style={{
                  transform: `perspective(800px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden p-[3px] gradient-bg">
                  <img
                    src={profileImg}
                    alt="Cibi K"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg glass text-xs font-medium neon-border"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🧠 AI/ML
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-lg glass text-xs font-medium neon-border"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                🐍 Python
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg glass text-xs font-medium neon-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                ⚛️ React
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
