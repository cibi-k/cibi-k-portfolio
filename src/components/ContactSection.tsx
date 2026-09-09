import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Mail, label: "Email", value: "kcibiofficial@gmail.com", href: "mailto:kcibiofficial@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/cibi-k/", href: "https://www.linkedin.com/in/cibi-k/" },
  { icon: Github, label: "GitHub", value: "https://github.com/cibi-k", href: "https://github.com/cibi-k" },
];

const ContactSection = () => {
 const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl liquid-glass text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
      focused === field ? "ring-2 ring-primary/30" : ""
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
                className="flex items-center gap-4 p-4 liquid-glass group"
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
  action="https://formspree.io/f/mlgodwob"
  method="POST"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className={inputClass("name")}
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className={inputClass("email")}
  />

  <textarea
    name="message"
    placeholder="Your Message"
    required
    rows={5}
    className={`${inputClass("message")} resize-none`}
  />

  <input
    type="hidden"
    name="_next"
    value="https://cibi-k.vercel.app"
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
