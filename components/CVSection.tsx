"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function CVSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 rounded-2xl border border-primary/25 bg-surface px-8 py-10 sm:px-12"
        >
          <div className="flex items-start gap-5">
            <span className="hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText size={22} strokeWidth={2} />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-balance">
                Interested in working together?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                View or download my CV to learn more about my experience and background.
              </p>
            </div>
          </div>

          <div className="flex flex-shrink-0 flex-wrap gap-4">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Eye size={16} />
              View CV
            </a>
            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:shadow-glow-sm"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
