"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Eyebrow = ({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "ink" }) => (
  <div className={`inline-flex items-center gap-3 label-eyebrow ${tone === "ink" ? "text-ivory-dim" : "text-muted-foreground"}`}>
    <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
    {children}
  </div>
);

export const SectionHeader = ({
  eyebrow,
  title,
  intro,
  tone = "default",
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "default" | "ink";
  align?: "left" | "center";
}) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <h2
      className={`font-display mt-6 text-balance text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight ${
        tone === "ink" ? "text-ivory" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    {intro && (
      <p className={`mt-6 text-lg text-pretty leading-relaxed ${tone === "ink" ? "text-ivory-dim" : "text-muted-foreground"}`}>
        {intro}
      </p>
    )}
  </div>
);

export const PrimaryCTA = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group relative inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-sm font-medium tracking-tight rounded-full overflow-hidden transition-all hover:shadow-glow"
  >
    <span className="relative z-10">{children}</span>
    <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
    <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
  </Link>
);

export const GhostCTA = ({ href, children, tone = "default" }: { href: string; children: React.ReactNode; tone?: "default" | "ink" }) => (
  <Link
    href={href}
    className={`group inline-flex items-center gap-3 px-7 py-4 text-sm font-medium tracking-tight border rounded-full transition-all ${
      tone === "ink"
        ? "border-rule text-ivory hover:bg-ivory hover:text-foreground"
        : "border-foreground/15 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
    }`}
  >
    {children}
    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
  </Link>
);
