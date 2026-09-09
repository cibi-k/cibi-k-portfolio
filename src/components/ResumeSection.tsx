import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto md:mx-0 mb-6 neon-glow">
          <FileText size={28} className="text-primary-foreground" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Resume</h2>
        <p className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
          Download my resume to learn more about my experience, education, and skills.
        </p>
        <motion.a
          href="resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg neon-glow"
        >
          <Download size={18} /> Download Resume (PDF)
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="liquid-glass p-2 md:p-3"
      >
        <div className="rounded-xl overflow-hidden aspect-[3/4] bg-secondary/30">
          <object data="resume.pdf" type="application/pdf" className="w-full h-full">
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
              <FileText size={32} className="text-muted-foreground" />
              <p className="text-muted-foreground text-sm">
                Preview isn't available on this device. Use the download button to view the PDF.
              </p>
            </div>
          </object>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
