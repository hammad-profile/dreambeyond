"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/site/Primitives";
import {
  AlertTriangle,
  ArrowRight,
  Code2,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: easeOut },
};

const problemCards = [
  {
    icon: AlertTriangle,
    title: "AI code that crumbles at scale",
    text: "Anyone can generate code now. But without proper architecture, it collapses the moment real users arrive.",
  },
  {
    icon: ShieldCheck,
    title: "Security as an afterthought",
    text: "AI does not think about attack vectors. Your customer data deserves better than a chatbot's best guess.",
  },
  {
    icon: Code2,
    title: "Disconnected tools bleeding money",
    text: "Five tools doing five things. None talking to each other. Your decisions are only as fast as your slowest spreadsheet.",
  },
  {
    icon: Gauge,
    title: "Technical debt compounding daily",
    text: "Quick fixes today become six-figure rewrites tomorrow. Every shortcut is a loan with brutal interest.",
  },
];

export const Problem = () => (
  <section className="problem-section">
    <div className="container problem-section__container">
      <div className="problem-section__header">
        <motion.div {...reveal} className="problem-section__header-content">
          <div className="problem-section__eyebrow">
            <span className="problem-section__eyebrow-dot" />
            <span className="problem-section__eyebrow-text">THE PROBLEM</span>
          </div>

          <h2 className="problem-section__title">
            <span>The world is building fast.</span>
            <span>It’s also building fragile.</span>
          </h2>
        </motion.div>

        <motion.p
          {...reveal}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="problem-section__intro"
        >
          AI is giving non-engineers the ability to write code. But nobody is
          teaching them what breaks when it hits production.
        </motion.p>
      </div>

      <div className="problem-section__cards">
        {problemCards.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: easeOut }}
            className="problem-card"
          >
            <div className="problem-card__grid" aria-hidden="true" />

            <div className="problem-card__icon">
              <Icon size={21} />
            </div>

            <div className="problem-card__content">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>

            <div className="problem-card__footer">
              <div className="problem-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <ArrowRight size={17} />
            </div>
          </motion.article>
        ))}
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
          title={
            <>
              We bring <span className="text-gradient-brand">judgment</span> to
              modern software.
            </>
          }
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

                <span className="size-10 rounded-full bg-secondary group-hover:bg-foreground group-hover:text-background flex items-center justify-center transition-all group-hover:rotate-[-45deg]">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};