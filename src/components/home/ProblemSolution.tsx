"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/Primitives";
import { AlertTriangle, ShieldCheck, Code2, Gauge } from "lucide-react";

const cardIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const },
};

export const Problem = () => (
  <section className="relative py-28 md:py-40 bg-background overflow-hidden">
    <div className="absolute top-1/2 left-0 w-96 h-96 blob-blue-deep opacity-40 -translate-y-1/2" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-12">
        <motion.div {...cardIn} className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-3 label-eyebrow text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              01 · The Problem
            </div>
            <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[1] tracking-tight text-balance">
              AI made code <span className="text-gradient-brand">faster</span>. <br />
              It did not make software <span className="relative inline-block">safer
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-brand-blue rounded-full" /></span>.
            </h2>
          </div>
        </motion.div>

        <div className="lg:col-span-7 space-y-6">
          <motion.p {...cardIn} className="text-xl text-muted-foreground leading-relaxed">
            Today, features can be generated in hours. But weak architecture,
            poor security, broken backend logic, and rushed decisions still
            create expensive problems.
          </motion.p>
          <motion.p {...cardIn} transition={{ ...cardIn.transition, delay: 0.1 }} className="text-xl text-foreground leading-relaxed border-l-4 border-brand-blue pl-6">
            That is where most teams struggle. Speed without judgment compounds
            debt — until it cracks under real customers, real load, real audits.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 pt-8">
            {[
              { icon: AlertTriangle, k: "Architecture", v: "Fragile foundations", color: "text-brand-blue" },
              { icon: ShieldCheck, k: "Security", v: "Shipped untested", color: "text-brand-blue" },
              { icon: Code2, k: "Backend", v: "Logic gaps", color: "text-brand-blue" },
              { icon: Gauge, k: "Decisions", v: "Made too fast", color: "text-brand-blue" },
            ].map(({ icon: Icon, k, v, color }, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-foreground/30 hover-lift hover:shadow-soft"
              >
                <Icon className={`size-6 ${color}`} />
                <div className="label-eyebrow text-muted-foreground mt-4">{k}</div>
                <div className="mt-1 text-foreground font-medium">{v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Solution = () => {
  const items = [
    "Define the right system before building.",
    "Use AI without compromising security or maintainability.",
    "Modernize software that no longer fits the business.",
    "Build custom platforms for real operational needs.",
    "Get senior technical leadership without hiring a full-time CTO.",
  ];
  return (
    <section className="relative py-28 md:py-40 bg-secondary/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] blob-blue opacity-50" />
      <div className="container relative">
        <SectionHeader
          eyebrow="02 · The Solution"
          title={<>We bring <span className="text-gradient-brand">judgment</span> to modern software.</>}
          intro="Dream Beyond helps companies make the calls that matter — before they cost six figures to undo."
        />

        <div className="mt-16 max-w-4xl space-y-3">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-background rounded-2xl border border-border hover:border-transparent hover:shadow-soft transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-brand-soft opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-6 md:gap-10 py-7 md:py-8 px-6 md:px-8">
                <span className="font-mono-cue text-xs font-medium text-muted-foreground w-10 shrink-0 group-hover:text-brand-blue transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl md:text-3xl text-foreground leading-snug text-balance flex-1">
                  {t}
                </span>
                <span className="size-10 rounded-full bg-secondary group-hover:bg-foreground group-hover:text-background flex items-center justify-center transition-all group-hover:rotate-[-45deg]">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
