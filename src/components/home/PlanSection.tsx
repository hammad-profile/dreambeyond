"use client";

import { motion } from "framer-motion";
import { Search, Hammer, GraduationCap } from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const phases = [
  {
    number: "01",
    label: "Advisory",
    title: "Strategic Audit",
    text: "We diagnose what's working, what's not, and what's about to break. Architecture reviews, AI readiness assessments, and honest technology strategy — before a single line of code is written.",
    icon: Search,
  },
  {
    number: "02",
    label: "Execution",
    title: "Hardened Execution",
    text: "We build custom platforms, AI systems, and integrations that are production-grade from day one. No prototypes masquerading as products. No shortcuts that cost you later.",
    icon: Hammer,
  },
  {
    number: "03",
    label: "Education",
    title: "Operational Mastery",
    text: "We teach your team how to maintain, evolve, and extend what we've built — and how to use AI as a tool, not a crutch. Your independence is our success metric.",
    icon: GraduationCap,
  },
];

export const PlanSection = () => {
  return (
    <section className="plan-premium">
      <div className="container plan-premium__container">
        <div className="plan-premium__layout">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="plan-premium__main-card"
          >
            <div className="plan-premium__eyebrow">
              <span />
              _THE_PLAN
            </div>

            <h2 className="plan-premium__title">
              <span>We bring judgment</span>
              <span>to modern software.</span>
            </h2>

            <p className="plan-premium__text">
              Every engagement follows a proven path from diagnosis to delivery
              to independence.
            </p>

            <a href="/advisory" className="plan-premium__cta">
              See our Services
              <span>→</span>
            </a>
          </motion.div>

          <div className="plan-premium__cards">
            {phases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <motion.article
                  key={phase.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: easeOut,
                  }}
                  className="plan-premium-card"
                >
                  <div className="plan-premium-card__icon">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <div className="plan-premium-card__content">
                    <div className="plan-premium-card__meta">
                      <span>{phase.number}</span>
                      <span>{phase.label}</span>
                    </div>

                    <h3>{phase.title}</h3>
                    <p>{phase.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};