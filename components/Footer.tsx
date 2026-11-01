"use client";

import Link from "next/link";
import { CodeXml, Github, Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: "WhatsApp", href: `https://wa.me/${personalInfo.whatsapp}`, icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto container-px py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="#home"
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <CodeXml size={15} strokeWidth={2.25} />
          </span>
          ASHOK<span className="text-primary">.DEV</span>
        </Link>

        <p className="order-3 sm:order-2 text-sm text-muted text-center">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>

        <div className="order-2 sm:order-3 flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon size={16} strokeWidth={2} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ArrowUp size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
