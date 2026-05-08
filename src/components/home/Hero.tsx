"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const heroStats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "25+",
    label: "Years of Experience",
  },
  {
    number: "5+",
    label: "Industries",
  },
];

const capabilities = [
  {
    icon: Sparkles,
    label: "YOUR TECHNOLOGY PARTNER",
  },
];

const tickerItems = [
  "Advanced Tech Services",
  "AI Automation",
  "Web Development",
  "Mobile Development",
  "Custom Software",
  "Business Automation",
  "Secure Systems",
  "Scalable Platforms",
];

export const Hero = () => {
  return (
    <section className="dream-hero">
      <div className="dream-hero__background" aria-hidden="true">
        <div className="dream-hero__aurora" />
        <div className="dream-hero__soft-grid" />
        <div className="dream-hero__floor-grid" />
        <div className="dream-hero__beam dream-hero__beam--one" />
        <div className="dream-hero__beam dream-hero__beam--two" />
        <div className="dream-hero__orb dream-hero__orb--one" />
        <div className="dream-hero__orb dream-hero__orb--two" />
        <div className="dream-hero__noise" />
      </div>

      <div className="dream-hero__inner">
        <motion.div {...fadeUp(0.08)} className="dream-hero__capabilities">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div className="dream-hero__capability" key={item.label}>
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.h1 {...fadeUp(0.16)} className="dream-hero__title">
          <span className="dream-hero__title-line">
            Your Software{" "}
            <span className="dream-hero__title-highlight">Should Work</span>
          </span>
          <span className="dream-hero__title-line">
            as <span className="dream-hero__title-highlight">Hard</span> as You
            Do.
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.28)} className="dream-hero__subtitle">
  You&apos;ve got a business to run. We make sure your technology never holds
  you back. We help you build software and AI that stay stable, secure, and
  useful as your business gets bigger.
</motion.p>

        <motion.div {...fadeUp(0.4)} className="dream-hero__actions">
          <Link
            href="/contact"
            className="dream-hero__button dream-hero__button--primary"
          >
            Book a Strategy Call
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/case-studies"
            className="dream-hero__button dream-hero__button--secondary"
          >
            View Our Work
            <ArrowRight size={17} />
          </Link>
        </motion.div>

        <motion.div {...fadeUp(0.52)} className="dream-hero__stats">
          {heroStats.map((stat) => (
            <div className="dream-hero__stat" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="dream-hero__ticker">
        <div className="dream-hero__ticker-track">
          {[...Array(2)].map((_, groupIndex) => (
            <div className="dream-hero__ticker-group" key={groupIndex}>
              {tickerItems.map((item) => (
                <span key={item}>
                  {item}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};