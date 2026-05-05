"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PrimaryCTA, GhostCTA } from "@/components/site/Primitives";

export type PageBlock =
  | { kind: "list"; title: string; items: string[] }
  | { kind: "grid"; title: string; items: { k: string; v: string }[] }
  | { kind: "prose"; title: string; body: string };

interface StubPageProps {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  blocks?: PageBlock[];
  ctaLabel?: string;
  ctaTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export const StubPage = ({
  eyebrow,
  title,
  intro,
  blocks = [],
  ctaLabel = "Book a strategy call",
  ctaTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: StubPageProps) => (
  <SiteLayout>
    {/* Hero */}
    <section className="relative bg-background pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden noise">
      <div className="absolute -top-20 right-0 w-[40rem] h-[40rem] blob-blue opacity-50 animate-float-slow" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 blob-blue-deep opacity-50 animate-float" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="container relative">
        <Link href="/" className="inline-flex items-center gap-2 label-eyebrow text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-3.5" /> Back to Dream Beyond
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 inline-flex items-center gap-3 label-eyebrow text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display mt-6 text-foreground text-6xl md:text-8xl leading-[0.98] tracking-tight text-balance max-w-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
        >
          {intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <PrimaryCTA href={ctaTo}>{ctaLabel}</PrimaryCTA>
          {secondaryLabel && secondaryTo && (
            <GhostCTA href={secondaryTo}>{secondaryLabel}</GhostCTA>
          )}
        </motion.div>
      </div>
    </section>

    {/* Blocks */}
    {blocks.length > 0 && (
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container space-y-24">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-12 gap-10"
            >
              <div className="lg:col-span-4">
                <div className="label-eyebrow text-muted-foreground">/ {String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mt-4 text-balance">
                  {b.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                {b.kind === "list" && (
                  <div className="space-y-3">
                    {b.items.map((it, j) => (
                      <div key={j} className="group p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all hover:shadow-soft flex items-start gap-5">
                        <span className="font-mono-cue text-xs text-muted-foreground pt-1.5 w-8">
                          0{j + 1}
                        </span>
                        <span className="font-display text-xl md:text-2xl leading-snug flex-1">
                          {it}
                        </span>
                        <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                )}
                {b.kind === "grid" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {b.items.map((it, j) => (
                      <div key={j} className="bg-background p-6 rounded-2xl border border-border hover:border-foreground/20 transition-all hover:shadow-soft">
                        <div className="label-eyebrow text-brand-blue">{it.k}</div>
                        <div className="mt-3 text-lg leading-snug">{it.v}</div>
                      </div>
                    ))}
                  </div>
                )}
                {b.kind === "prose" && (
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                    {b.body}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )}

    {/* Bottom CTA */}
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container relative flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h3 className="font-display text-4xl md:text-6xl text-foreground max-w-2xl text-balance">
          Ready to talk about what should <span className="text-gradient-brand">happen next</span>?
        </h3>
        <PrimaryCTA href="/contact">Book a strategy call</PrimaryCTA>
      </div>
    </section>
  </SiteLayout>
);
