"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "../ui/Section";
import { Linkedin, Github, Mail } from "lucide-react";
import { ConfettiButton } from "../ConfettiButton";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full",
        "bg-white dark:bg-rich-black/60 shadow-md",
        "text-indigo hover:text-emerald transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      tabIndex={0}
    >
      {icon}
    </motion.a>
  );
};

export const ContactSection = () => {
  return (
    <Section id="contact" className="text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-8 wiggle gradient-text inline-block"
        whileHover={{ scale: 1.05 }}
      >
        Let&apos;s Build Something!
      </motion.h2>
      
      <SectionContent className="max-w-xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Have a project in mind or want to collaborate? I&apos;m always open to new opportunities 
          and interesting challenges.
        </p>
        
        <div className="flex justify-center items-center gap-6 mb-8">
          <SocialLink 
            href="mailto:hello@leonardwang.com" 
            icon={<Mail size={24} />}
            label="Email Leonard Wang"
          />
          <SocialLink 
            href="https://linkedin.com/in/leonardwang" 
            icon={<Linkedin size={24} />}
            label="LinkedIn Profile"
          />
          <SocialLink 
            href="https://github.com/leonard-wang" 
            icon={<Github size={24} />}
            label="GitHub Profile"
          />
        </div>
        
        <ConfettiButton 
          href="mailto:hello@leonardwang.com"
          className="mx-auto"
        >
          Get in Touch
        </ConfettiButton>
      </SectionContent>
    </Section>
  );
}; 