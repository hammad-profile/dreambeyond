"use client";

import { motion } from "framer-motion";
import { Layers3, LockKeyhole, Gauge, Eye } from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const beliefs = [
  {
    step: "01",
    icon: Layers3,
    title: "Architecture-First",
    text: "Every system we build starts with the structure, not the features. Because a beautiful house on a cracked foundation is still a liability.",
  },
  {
    step: "02",
    icon: LockKeyhole,
    title: "Security by Default",
    text: "We don't bolt security on at the end. It's embedded in every decision, every layer, from day one.",
  },
  {
    step: "03",
    icon: Gauge,
    title: "Scale Without Surprises",
    text: "Systems that work for 10 users and 10,000 users. We stress-test before reality does.",
  },
  {
    step: "04",
    icon: Eye,
    title: "Radical Transparency",
    text: "No black boxes. We show you how everything works, why it was built that way, and how to change it.",
  },
];

export const BeliefSection = () => {
  return (
    <section className="belief-section">
      <div className="container belief-section__container">
        <div className="belief-section__layout">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="belief-section__intro-card"
          >
            <div className="belief-section__eyebrow">
              <span />
              _WHY_TRUST_US
            </div>

            <h2 className="belief-section__title">
              <span>What we believe in.</span>
              <span>Built into every step.</span>
            </h2>

            <p className="belief-section__text">
              Our convictions aren't marketing. They're engineering principles
              that govern every decision we make.
            </p>
          </motion.div>

          <div className="belief-section__cards">
            {beliefs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: easeOut,
                  }}
                  className="belief-card"
                >
                  <div className="belief-card__grid" aria-hidden="true" />

                  <div className="belief-card__top">
                    <div className="belief-card__icon">
                      <Icon size={21} strokeWidth={2.1} />
                    </div>

                    <span>{item.step}</span>
                  </div>

                  <div className="belief-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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