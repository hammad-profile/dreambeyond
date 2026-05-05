"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Hammer, Package, GraduationCap, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/site/Primitives";

const paths = [
  {
    n: "01",
    icon: Compass,
    title: "Fractional CTO",
    desc: "Technology strategy, architecture oversight, AI roadmap, team guidance.",
    to: "/fractional-cto",
    accent: "blue" as const,
  },
  {
    n: "02",
    icon: Hammer,
    title: "Custom Software & AI Systems",
    desc: "Platforms, line-of-business apps, integrations, automation, AI agents.",
    to: "/custom-software",
    accent: "yellow" as const,
  },
  {
    n: "03",
    icon: Package,
    title: "Products",
    desc: "Purpose-built software from Dream Beyond — including Stacket and Restro.",
    to: "/products",
    accent: "yellow" as const,
  },
  {
    n: "04",
    icon: GraduationCap,
    title: "Learn with Ali Kitabi",
    desc: "Insights on AI, software architecture, product thinking, and tech leadership.",
    to: "/insights",
    accent: "blue" as const,
  },
];

export const ChoosePath = () => (
  <section className="relative py-28 md:py-40 bg-background overflow-hidden">
    <div className="container relative">
      <SectionHeader
        eyebrow="03 · Choose your path"
        title={<>Four ways to work with <span className="text-gradient-brand">Dream Beyond</span>.</>}
      />

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {paths.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Link
              href={p.to}
              className="group relative block p-8 md:p-10 rounded-3xl border border-border bg-card hover:border-foreground/20 hover-lift hover:shadow-soft overflow-hidden h-full"
            >
              {/* Hover gradient blob */}
              <div className={`absolute -top-32 -right-32 w-72 h-72 rounded-full ${p.accent === "blue" ? "blob-blue" : "blob-blue-deep"} opacity-0 group-hover:opacity-80 transition-opacity duration-700`} />

              <div className="relative flex items-start justify-between">
                <div className={`size-14 rounded-2xl flex items-center justify-center ${p.accent === "blue" ? "bg-brand-blue-soft text-brand-blue" : "bg-brand-blue-soft text-foreground"}`}>
                  <p.icon className="size-6" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono-cue text-xs text-muted-foreground">{p.n}</span>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-500" />
                </div>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mt-8 leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-md">
                {p.desc}
              </p>
              <div className="mt-8 h-px w-12 bg-gradient-brand group-hover:w-full transition-all duration-700" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
