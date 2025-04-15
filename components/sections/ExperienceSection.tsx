"use client";

import { Section, SectionTitle, SectionContent } from "../ui/Section";
import { TimelineItem } from "../ui/TimelineItem";

export const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-gray-50 dark:bg-rich-black/30">
      <SectionTitle>Experience</SectionTitle>
      <SectionContent className="max-w-4xl mx-auto">
        <div className="relative">
          <TimelineItem
            title="Microsoft"
            date="Aug 2022 – Present"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li></li>
              <li>Unified container supply‑chain framework</li>
              <li></li>
              <li></li>
            </ul>
          </TimelineItem>
          
          <TimelineItem
            title="Microsoft PM Intern"
            date="May 2021 – Aug 2021"
          >
            <p>
              ARM template for automated LAMP stack with Azure Monitoring
            </p>
          </TimelineItem>
          
          <TimelineItem
            title="RingCentral PM Intern"
            date="Jun 2020 – Sep 2020"
            isLast
          >
            <p>
              Developer outreach → +9% open, +4% CTR, +7% new ISV partners
            </p>
          </TimelineItem>
        </div>
      </SectionContent>
    </Section>
  );
}; 