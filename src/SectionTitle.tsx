import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => (
  <div className="text-center mb-14">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-4xl font-bold mb-3"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full gradient-bg" />
  </div>
);

export default SectionTitle;
