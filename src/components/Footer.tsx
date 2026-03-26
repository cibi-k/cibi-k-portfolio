import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="font-display font-bold gradient-text text-lg">Cibi K</span>
        <p className="text-sm text-muted-foreground mt-1">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
      <div className="flex gap-3">
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Mail, href: "mailto:cibi@example.com" },
        ].map((s, i) => (
          <a key={i} href={s.href}
            className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all glow-card">
            <s.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
