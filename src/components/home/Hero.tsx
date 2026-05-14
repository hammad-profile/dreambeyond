"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const heroStats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 25,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 5,
    suffix: "+",
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

const firstHeadingLine = "From scattered tools to";
const secondHeadingStart = "scalable systems";
const secondHeadingMiddle = " guided by clear ";
const secondHeadingEnd = "technology strategy.";

const fullHeading =
  firstHeadingLine +
  "\n" +
  secondHeadingStart +
  secondHeadingMiddle +
  secondHeadingEnd;

const TypedHeroHeading = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    setVisibleLetters(0);

    const timer = window.setInterval(() => {
      setVisibleLetters((current) => {
        if (current >= fullHeading.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 38);

    return () => window.clearInterval(timer);
  }, []);

  const typedText = fullHeading.slice(0, visibleLetters);

  const lineBreakIndex = firstHeadingLine.length;
  const firstLineText = typedText.slice(0, lineBreakIndex);

  const secondLineTypedText = typedText
    .slice(lineBreakIndex)
    .replace("\n", "");

  const startText = secondLineTypedText.slice(0, secondHeadingStart.length);

  const middleText = secondLineTypedText.slice(
    secondHeadingStart.length,
    secondHeadingStart.length + secondHeadingMiddle.length
  );

  const endText = secondLineTypedText.slice(
    secondHeadingStart.length + secondHeadingMiddle.length
  );

  const isFinished = visibleLetters >= fullHeading.length;

  return (
    <h1 className="dream-hero__title dream-hero__title--typing">
      <span className="dream-hero__title-line">{firstLineText}</span>

      <span className="dream-hero__title-line">
        <span className="dream-hero__title-highlight">{startText}</span>
        {middleText}
        <span className="dream-hero__title-highlight">{endText}</span>
        {!isFinished && (
          <span className="dream-hero__typing-cursor" aria-hidden="true" />
        )}
      </span>
    </h1>
  );
};

type CountUpNumberProps = {
  value: number;
  suffix?: string;
  delay?: number;
};

const CountUpNumber = ({ value, suffix = "", delay = 0 }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const timer = window.setTimeout(() => {
      animationFrame = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

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
              <motion.div
                className="dream-hero__capability"
                key={item.label}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div {...fadeUp(0.16)}>
          <TypedHeroHeading />
        </motion.div>

        <motion.p {...fadeUp(0.28)} className="dream-hero__subtitle">
          We help growing businesses move beyond spreadsheets, SaaS workarounds,
          fragile AI prototypes, and legacy software by building secure, practical AI
          systems and providing the technology guidance needed to support real
          operations and future growth.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="dream-hero__actions">
          <motion.div
            className="dream-hero__button-wrap"
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.52, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="dream-hero__button dream-hero__button--primary"
            >
              Book a Strategy Call
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            className="dream-hero__button-wrap"
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/case-studies"
              className="dream-hero__button dream-hero__button--secondary"
            >
              View Our Work
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div {...fadeUp(0.52)} className="dream-hero__stats">
          {heroStats.map((stat, index) => (
            <motion.div
              className="dream-hero__stat"
              key={stat.label}
              initial={{ opacity: 0, y: 22, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: 0.65 + index * 0.12,
                ease: "easeOut",
              }}
            >
              <strong>
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={750 + index * 180}
                />
              </strong>

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1 + index * 0.12 }}
              >
                {stat.label}
              </motion.span>
            </motion.div>
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