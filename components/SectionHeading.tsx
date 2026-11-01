"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="section-label">
        <span aria-hidden="true">{"//"}</span> {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
    </motion.div>
  );
}
