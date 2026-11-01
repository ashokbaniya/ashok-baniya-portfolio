"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socials = [
  { href: personalInfo.github, label: "GitHub", icon: Github },
  { href: personalInfo.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${personalInfo.email}`, label: "Email", icon: Mail },
  { href: `https://wa.me/${personalInfo.whatsapp}`, label: "WhatsApp", icon: MessageCircle },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-36"
    >
      {/* ambient background: faint grid + glow, kept subtle per design direction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container mx-auto container-px relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-7 order-2 lg:order-1"
        >
          <span className="section-label">
            <span aria-hidden="true">{"//"}</span> Hello, I&apos;m
          </span>

          <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
            {personalInfo.firstName}
            <br />
            <span className="text-primary">{personalInfo.lastName}</span>
            <span className="inline-block w-[0.5ch] text-primary animate-blink" aria-hidden="true">
              _
            </span>
          </h1>

          <p className="font-mono text-lg sm:text-xl text-foreground/90">{personalInfo.role}</p>

          <p className="max-w-md border-l-2 border-primary/40 pl-4 text-muted leading-relaxed">
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <a
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:shadow-glow-sm"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View My Work
            </a>
          </div>

          <ul className="flex items-center gap-3 pt-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={18} strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[0.86]">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[36px]"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                boxShadow: "0 0 60px -8px rgba(57, 255, 136, 0.35)",
                border: "2px solid var(--primary)",
              }}
            />
            <div
              className="absolute inset-[10px] overflow-hidden bg-surface"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {/* Swap this placeholder for a real photo at /public/profile.jpg */}
              <Image
                src="/profile.png"
                alt={`Portrait of ${personalInfo.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition-colors"
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
