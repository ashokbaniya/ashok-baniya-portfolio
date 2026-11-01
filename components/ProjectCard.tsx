"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, description, image, technologies, githubUrl, liveUrl, playStoreUrl, type } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/40"
    >
      <div
        className={`relative overflow-hidden border-b border-border ${
          type === "android" ? "aspect-[4/3]" : "aspect-video"
        }`}
      >
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{description}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wide text-primary/90"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-4 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} source code on GitHub`}
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
            >
              <Github size={16} /> Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {playStoreUrl && (
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} on Google Play`}
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
            >
              <PlayCircle size={16} /> Play Store
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
