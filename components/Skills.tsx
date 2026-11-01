"use client";

import { motion } from "framer-motion";
import { Database, Monitor, Server, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

const icons = { monitor: Monitor, server: Server, smartphone: Smartphone, database: Database, wrench: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-border bg-background-alt">
      <div className="container mx-auto container-px flex flex-col gap-14">
        <SectionHeading
          label="My Skills"
          title={
            <>
              Technologies <span className="text-primary">I work with</span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-base font-semibold">{category.title}</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
