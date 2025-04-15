"use client";

import { Section, SectionTitle, SectionContent } from "../ui/Section";
import { Card } from "../ui/Card";
import { Trophy } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <SectionContent className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber text-black px-3 py-1 rounded-full text-sm font-medium">
            <Trophy size={14} />
            <span>1st Place BruinLabs</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-indigo">DisCourses</h3>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="mb-4">
              Developed an innovative application that automatically creates group chats for all UCLA courses, 
              enhancing student collaboration and communication.
            </p>
            <p>
              This project won 1st Place at the BruinLabs Startup Pitch competition, recognizing its potential 
              to significantly improve the student experience at UCLA.
            </p>
          </div>
        </Card>
      </SectionContent>
    </Section>
  );
}; 