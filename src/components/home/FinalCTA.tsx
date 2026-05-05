"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => (
  <section className="relative py-28 md:py-40 bg-secondary/40 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial opacity-80" />
    <div className="container relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 label-eyebrow text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
          07 · Where to next
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display mt-6 text-5xl md:text-7xl lg:text-[6rem] leading-[1] tracking-tight text-balance"
        >
          Need software leadership, execution, or a clearer technology
          <span className="text-gradient-brand"> path</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Let's talk about where you are, what is breaking, and what should
          happen next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4 items-center justify-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm font-medium rounded-full overflow-hidden hover:shadow-glow transition-all"
          >
            <span className="relative z-10">Book a strategy call</span>
            <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 animate-gradient transition-opacity" />
          </Link>
          <Link href="/start" className="link-underline text-sm font-medium pb-1">
            Or start with the route picker →
          </Link>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-border grid md:grid-cols-3 gap-10 text-left">
          {[
            ["Educate", "Courses, content, community", "yellow"],
            ["Consult", "Fractional CTO, implementation", "blue"],
            ["Build", "Stacket, Restro, Beyond AI", "yellow"],
          ].map(([k, v, c], i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`label-eyebrow ${c === "blue" ? "text-brand-blue" : "text-foreground"}`}>{k}</div>
              <div className="mt-3 font-display text-3xl">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
