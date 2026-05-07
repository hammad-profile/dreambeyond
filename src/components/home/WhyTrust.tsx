"use client";

import { motion } from "framer-motion";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const reasons = [
  ["25+ years", "of engineering experience across complex systems."],
  ["Business + code", "leadership that understands both languages fluently."],
  ["Practical AI", "thinking. Not hype. Not cargo-culted patterns."],
  ["Industries", "Logistics, Oil & Gas, healthcare, insurance, hospitality."],
  ["Real products", "real delivery, real operational systems in production."],
];

export const WhyTrust = () => (
  <section className="why-trust">
    <div className="container why-trust__container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="why-trust__header"
      >
        <div className="why-trust__eyebrow">
          <span />
          04 · Why trust Dream Beyond
        </div>

        <h2 className="why-trust__title">
          <span>Built on judgment.</span>
          <span>Earned over decades.</span>
        </h2>

        <p className="why-trust__intro">
          The track record matters. So does the discipline behind it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        className="why-trust__panel"
      >
        <div className="why-trust__rows">
          {reasons.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: easeOut,
              }}
              className="why-trust__row"
            >
              <div className="why-trust__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3>{title}</h3>

              <p>{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="why-trust__footer">
          Real delivery. Real systems. Real operational value.
        </div>
      </motion.div>
    </div>
  </section>
);