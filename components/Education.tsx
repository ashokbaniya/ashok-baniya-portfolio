"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 border-t border-border bg-background-alt">
      <div className="container mx-auto container-px flex flex-col gap-16">
        <SectionHeading
          label="Education"
          title={
            <>
              My Academic <span className="text-primary">Journey</span>
            </>
          }
        />

        {/* Mobile / tablet: vertical timeline */}
        <ol className="flex flex-col gap-10 lg:hidden">
          {education.map((entry, index) => (
            <motion.li
              key={entry.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex gap-5 pl-1"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary">
                  <GraduationCap size={18} />
                </span>
                {index !== education.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="font-display text-lg font-semibold">{entry.degree}</h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.institution}
                  {entry.location ? `, ${entry.location}` : ""}
                </p>
                <div className="mt-2 flex items-center gap-3 font-mono text-xs text-muted">
                  <span>{entry.period}</span>
                  {entry.note && (
                    <span className="rounded-full border border-primary/30 px-2 py-0.5 text-primary">
                      {entry.note}
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Desktop: horizontal timeline */}
        <ol className="hidden lg:grid lg:grid-cols-3 lg:gap-8 relative">
          <span
            aria-hidden="true"
            className="absolute top-[22px] left-[8.3%] right-[8.3%] h-px bg-border"
          />
          {education.map((entry, index) => (
            <motion.li
              key={entry.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex flex-col gap-4"
            >
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background-alt text-primary">
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-balance">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.institution}
                  {entry.location ? `, ${entry.location}` : ""}
                </p>
                <div className="mt-3 flex items-center gap-3 font-mono text-xs text-muted">
                  <span>{entry.period}</span>
                  {entry.note && (
                    <span className="rounded-full border border-primary/30 px-2 py-0.5 text-primary">
                      {entry.note}
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
