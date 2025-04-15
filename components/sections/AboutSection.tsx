"use client";

import { Section, SectionTitle, SectionContent } from "../ui/Section";

export const AboutSection = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionContent className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="mb-4">
          A UCLA Computer Science and Linguistics graduate with a passion for cloud security and product strategy. 
          Currently working at Microsoft Azure Container Registry (ACR), where I focus on building secure, 
          developer-friendly container solutions that scale.
        </p>
        <p>
          I believe in creating products that not only solve complex technical challenges but also 
          provide delightful user experiences. My approach combines technical expertise with 
          a strong understanding of user needs and business objectives.
        </p>
      </SectionContent>
    </Section>
  );
}; 