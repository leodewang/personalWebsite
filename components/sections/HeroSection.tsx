"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { ConfettiButton } from "../ConfettiButton";
import { ThemeToggle } from "../ThemeToggle";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center animated-gradient-bg">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Leonard Wang
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Product Manager • Cloud‑Native Security Enthusiast • Builder of Delightful Dev Experiences
        </motion.h2>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <ConfettiButton href="mailto:hello@leonardwang.com" className="flex items-center gap-2 justify-center">
            Let&apos;s Connect <ArrowRight size={16} />
          </ConfettiButton>
          
          <ConfettiButton 
            href="/resume.pdf" 
            variant="secondary"
            className="flex items-center gap-2 justify-center bg-white/90 dark:bg-rich-black/90"
          >
            Download Résumé <Download size={16} />
          </ConfettiButton>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowRight size={24} className="text-white transform rotate-90" />
      </motion.div>
    </section>
  );
}; 