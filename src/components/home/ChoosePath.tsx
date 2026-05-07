"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Compass, Layers3 } from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const paths = [
  {
    number: "01",
    title: "Advisory",
    text: "Get senior technology guidance before expensive mistakes slow you down.",
    href: "/advisory",
    icon: Compass,
    label: "Advisory",
  },
  {
    number: "02",
    title: "Execution",
    text: "We design and build software, AI tools, and integrations around real business problems.",
    href: "/execution",
    icon: Code2,
    label: "Execution",
  },
  {
    number: "03",
    title: "Products",
    text: "Explore focused software products built by Dream Beyond for real operational needs.",
    href: "/products",
    icon: Layers3,
    label: "Products",
  },
  {
    number: "04",
    title: "Education",
    text: "Practical lessons on AI, software architecture, and building technology the right way.",
    href: "/education",
    icon: BookOpen,
    label: "Education",
  },
];

export const ChoosePath = () => {
  return (
    <section className="choose-path-section">
      <div className="container choose-path-section__container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="choose-path-section__header"
        >
          <div className="choose-path-section__eyebrow">
            <span />
            _CHOOSE_YOUR_PATH
          </div>

          <h2 className="choose-path-section__title">
            <span>Ways to work with</span>
            <span>Dream Beyond.</span>
          </h2>

          <p className="choose-path-section__intro">
            Choose the level of help you need — from strategic guidance to full
            software execution, products, and practical learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
          className="choose-path-panel"
        >
          <div className="choose-path-panel__rows">
            {paths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: easeOut,
                  }}
                  className="choose-path-row"
                >
                  <Link href={item.href} className="choose-path-row__link">
                    <div className="choose-path-row__meta">
                      <span>{item.number}</span>
                      <span>{item.label}</span>
                    </div>

                    <div className="choose-path-row__icon">
                      <Icon size={21} strokeWidth={2.1} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <div className="choose-path-row__arrow">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <Link href="/start" className="choose-path-panel__footer">
            Find the right path
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}; 