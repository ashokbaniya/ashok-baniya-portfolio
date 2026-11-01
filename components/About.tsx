"use client";

import { motion } from "framer-motion";
import { Code2, Compass, Layers, Smartphone, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutHighlights, personalInfo } from "@/data/portfolio";

const icons = { code: Code2, layers: Layers, smartphone: Smartphone, compass: Compass };

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto container-px grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading
            label="About Me"
            title={
              <>
                Building digital solutions that{" "}
                <span className="text-primary">make an impact.</span>
              </>
            }
          />
          <p className="text-muted leading-relaxed max-w-lg">{personalInfo.aboutParagraph}</p>
          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            More About Me
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutHighlights.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p className="font-display text-base font-medium text-foreground">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
