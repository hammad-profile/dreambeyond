"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/Primitives";

const reasons = [
  ["25+ years", "of engineering experience across complex systems."],
  ["Business + code", "leadership that understands both languages fluently."],
  ["Practical AI", "thinking. Not hype. Not cargo-culted patterns."],
  ["Industries", "Logistics, Oil & Gas, healthcare, insurance, hospitality."],
  ["Real products", "real delivery, real operational systems in production."],
];

export const WhyTrust = () => (
  <section className="relative py-28 md:py-40 bg-secondary/40 overflow-hidden">
    <div className="absolute bottom-0 left-1/4 w-96 h-96 blob-blue-deep opacity-40" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <SectionHeader
              eyebrow="04 · Why trust Dream Beyond"
              title={<>Built on judgment. Earned over <span className="text-gradient-brand">decades</span>.</>}
              intro="The track record matters. So does the discipline behind it."
            />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {reasons.map(([k, v], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative p-6 md:p-7 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all hover:shadow-soft"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <span className="col-span-1 font-mono-cue text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="col-span-4 font-display text-2xl md:text-3xl text-foreground leading-tight">
                  {k}
                </span>
                <span className="col-span-7 text-muted-foreground leading-relaxed">
                  {v}
                </span>
              </div>
              <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
