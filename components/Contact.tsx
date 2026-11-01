"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";

const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: personalInfo.phoneDisplay,
    href: `https://wa.me/${personalInfo.whatsapp}`,
    icon: MessageCircle,
  },
  {
    label: "Phone",
    value: personalInfo.phoneDisplay,
    href: `tel:${personalInfo.phone}`,
    icon: Phone,
  },
];

const socials = [
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border bg-background-alt">
      <div className="container mx-auto container-px flex flex-col gap-14">
        <SectionHeading
          label="Contact"
          align="center"
          title={
            <>
              Let&apos;s <span className="text-primary">Connect</span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {contactMethods.map(({ label, value, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-surface px-6 py-8 text-center transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
                <p className="mt-1.5 text-sm font-medium text-foreground break-all">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Sparkles size={15} className="text-primary" />
            Available for work &mdash; let&apos;s build something great together.
          </div>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon size={18} strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
