import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Mail, label: "Email", value: "cibi@example.com", href: "mailto:cibi@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/cibik", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/cibik", href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! (Contact form is UI-only for now)");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
      focused === field ? "border-primary/50 ring-2 ring-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.1)]" : "border-border"
    }`;

  return (
    <SectionWrapper id="contact" className="bg-secondary/20">
      <SectionTitle title="Get In Touch" subtitle="Let's connect and build something great" />
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-xl font-bold mb-4">Let's Talk</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new projects, internship opportunities, or collaborations in AI and web development.
          </p>
          <div className="space-y-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 bg-card rounded-xl neon-border glow-card group"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center neon-glow">
                  <s.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">{s.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <input
            type="text" placeholder="Your Name" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
            className={inputClass("name")}
          />
          <input
            type="email" placeholder="Your Email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
            className={inputClass("email")}
          />
          <textarea
            placeholder="Your Message" required rows={5} value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
            className={`${inputClass("message")} resize-none`}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all w-full justify-center neon-glow"
          >
            Send Message <Send size={16} />
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
