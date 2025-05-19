// Modified Home page with animation context
'use client';

import { motion } from 'framer-motion';
import Hero from "./components/Hero";
import SlideGallery from "./components/SlideGallery";
import Contact from "./components/Contact";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.section>
      
      {/* SlideGallery Component has its own animations */}
      <section id="gallery" className="mt-16">
        <SlideGallery />
      </section>
      
      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
      
      {/* Footer Section */}
      <motion.footer 
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; 2025 Designed & Built by Ranehobasi
        </p>
      </motion.footer>
    </div>
  );
}