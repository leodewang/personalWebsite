"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle, SectionContent } from "../ui/Section";
import { Database, GitBranch, Award, LineChart, Shield, Figma, Server, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

type SkillProps = {
  icon: React.ReactNode;
  label: string;
};

const Skill = ({ icon, label }: SkillProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-rich-black/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
    >
      <div className="text-indigo mb-2">{icon}</div>
      <span className="text-sm font-medium text-center">{label}</span>
    </motion.div>
  );
};

const skills = [
  { icon: <Server size={24} />, label: "Docker & Kubernetes" },
  { icon: <Shield size={24} />, label: "Cloud Container Security" },
  { icon: <Database size={24} />, label: "SQL/KQL" },
  { icon: <GitBranch size={24} />, label: "Git" },
  { icon: <FileCode size={24} />, label: "Linux" },
  { icon: <Figma size={24} />, label: "Figma & UX Design" },
  { icon: <LineChart size={24} />, label: "A/B Testing" },
  { icon: <Award size={24} />, label: "Executive Storytelling" },
];

const awards = [
  "Dean's Honor List",
  "ACT 99th Percentile",
  "1st Place Gunn-hacks",
  "1st Place BruinLabs",
];

export const SkillsSection = () => {
  return (
    <Section id="skills" className="bg-gray-50 dark:bg-rich-black/30">
      <SectionTitle>Skills & Awards</SectionTitle>
      <SectionContent>
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center text-indigo">Technical & Professional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <Skill key={i} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-center text-indigo">Awards & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  "bg-amber text-black"
                )}
              >
                {award}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}; 