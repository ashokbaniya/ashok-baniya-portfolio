"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CodeXml, Download, Menu, X } from "lucide-react";
import { NAV_LINKS, cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container mx-auto container-px flex h-20 items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <CodeXml size={18} strokeWidth={2.25} />
          </span>
          ASHOK<span className="text-primary">.DEV</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-mono text-[0.78rem] uppercase tracking-widest">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative pb-1 transition-colors",
                    isActive ? "text-primary" : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:shadow-glow-sm"
          >
            <Download size={16} strokeWidth={2.25} />
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-md"
          >
            <ul className="container mx-auto container-px flex flex-col gap-1 py-4 font-mono text-sm uppercase tracking-widest">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-3 transition-colors",
                      activeSection === link.href.slice(1)
                        ? "text-primary bg-primary/5"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-background"
                >
                  <Download size={16} strokeWidth={2.25} />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
