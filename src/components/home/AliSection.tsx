"use client";

import portrait from "@/assets/ali-portrait.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AliSection = () => (
  <section className="relative py-28 md:py-40 bg-background overflow-hidden">
    <div className="absolute top-1/4 right-0 w-[36rem] h-[36rem] blob-blue opacity-40 animate-float-slow" />
    <div className="absolute bottom-0 left-0 w-96 h-96 blob-blue-deep opacity-50 animate-float" />

    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-3 bg-gradient-brand rounded-3xl opacity-20 blur-xl animate-gradient" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              {/* <img
                src={portrait}
                alt="Ali Kitabi, founder of Dream Beyond"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              /> */}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 -right-5 bg-foreground text-background px-5 py-3 font-mono-cue text-xs uppercase tracking-[0.18em] rounded-2xl shadow-glow"
            >
              25+ yrs · founder
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-3 label-eyebrow text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-gradient-brand" />
            06 · Meet the founder
          </div>
          <h2 className="font-display mt-6 text-foreground text-6xl md:text-7xl leading-[1] tracking-tight text-balance">
            Meet <span className="text-gradient-brand">Ali Kitabi</span>.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I have spent more than 25 years building software, solving operational
              problems, and guiding technology decisions across industries.
            </p>
            <p>
              Today, I help businesses avoid expensive technical mistakes, use AI
              responsibly, and build systems that support real growth.
            </p>
            <p className="text-foreground text-xl font-display">
              I also teach the next generation of builders how to think
              <span className="text-gradient-brand"> beyond code</span>.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium border border-foreground/15 text-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
            >
              Learn with Ali
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 text-sm font-medium rounded-full overflow-hidden hover:shadow-glow transition-all"
            >
              <span className="relative z-10">Work with Ali</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 animate-gradient transition-opacity" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
