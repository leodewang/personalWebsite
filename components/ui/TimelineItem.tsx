"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  title: string;
  date: string;
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
};

export const TimelineItem = ({
  title,
  date,
  children,
  className,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4 }}
      className={cn("relative pl-8 pb-8", !isLast && "border-l-2 border-indigo/30", className)}
    >
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-indigo"></div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-indigo">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        {children}
      </div>
    </motion.div>
  );
}; 