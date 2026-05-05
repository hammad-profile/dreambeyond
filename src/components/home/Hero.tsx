"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

export const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden noise">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-[40rem] h-[40rem] blob-blue animate-float-slow" />
        <div className="absolute top-1/2 -right-40 w-[42rem] h-[42rem] blob-blue-deep animate-float" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 blob-blue opacity-60 animate-float-slow" style={{ animationDelay: "-8s" }} />
      </div>

      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container relative pt-36 md:pt-44 pb-24 md:pb-32">
        <motion.div {...fadeUp(0)} className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm shadow-soft">
            <Sparkles className="size-3.5 text-brand-blue" />
            <span className="text-xs font-medium text-foreground">Led by Ali Kitabi · 25+ years building software</span>
            <span className="w-1 h-1 rounded-full bg-brand-blue" />
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-center text-foreground text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.95] tracking-tight text-balance max-w-6xl mx-auto"
        >
          Technology leadership for the{" "}
          <span className="relative inline-block">
            <span className="text-gradient-brand animate-gradient">AI era</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
              <motion.path
                d="M5 8 Q 150 -2, 295 8"
                stroke="url(#heroGrad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="heroGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="hsl(var(--brand-blue-deep))" />
                  <stop offset="1" stopColor="hsl(var(--brand-blue))" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          .
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-10 max-w-2xl mx-auto text-center text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
        >
          We help businesses design, build, and scale software systems that are
          secure, practical, and built to last. Fractional CTO leadership,
          custom software execution, and real-world AI strategy — under one roof.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-sm font-medium rounded-full overflow-hidden transition-all hover:shadow-glow"
          >
            <span className="relative z-10">Book a strategy call</span>
            <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity animate-gradient" />
          </Link>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 px-7 py-4 text-sm font-medium border border-foreground/15 text-foreground rounded-full transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Explore our work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-24 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            ["25+", "years building production software"],
            ["5", "industries delivered across"],
            ["3", "pillars · educate, consult, build"],
          ].map(([k, v]) => (
            <div key={k} className="text-center group">
              <div className="font-display text-5xl md:text-6xl text-gradient-brand">{k}</div>
              <div className="text-muted-foreground text-xs md:text-sm mt-2 leading-snug">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-border py-5 overflow-hidden bg-secondary/40">
        <div className="flex gap-12 whitespace-nowrap animate-marquee text-muted-foreground font-mono-cue text-xs uppercase tracking-[0.2em]">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-12 shrink-0">
              {["Logistics", "Oil & Gas", "Healthcare", "Insurance", "Hospitality", "Clinical Trials", "Supply Chain", "Internal Ops"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
