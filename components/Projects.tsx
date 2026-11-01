"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Calculate the maximum start index so we don't slide past available projects
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section id="projects" className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container mx-auto container-px flex flex-col gap-14">
        
        {/* Header and Navigation Arrows Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            label="Projects"
            title={
              <>
                Things I&apos;ve <span style={{ color: "var(--primary)" }}>Built</span>
              </>
            }
          />

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border transition-all duration-200 ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:opacity-100"
              }`}
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--foreground)",
              }}
              aria-label="Previous Projects"
            >
              {/* Left Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`p-3 rounded-full border transition-all duration-200 ${
                currentIndex >= maxIndex
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:opacity-100"
              }`}
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--foreground)",
              }}
              aria-label="Next Projects"
            >
              {/* Right Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Projects Viewport Grid (3 items at a time) */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
            {projects
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={currentIndex + index}
                />
              ))}
          </div>
        </div>

        {/* Page Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: currentIndex === idx ? "2rem" : "0.625rem",
                backgroundColor: currentIndex === idx ? "var(--primary)" : "var(--muted)",
                opacity: currentIndex === idx ? 1 : 0.4,
              }}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}