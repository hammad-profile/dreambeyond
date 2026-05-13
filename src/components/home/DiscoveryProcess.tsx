"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Compass, Rocket } from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const processSteps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a simple discovery call",
    text: "We start with a focused conversation about your business, goals, team, timeline, budget, and the support you are looking for.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Choose the right direction",
    text: "Together, we turn your needs into a clear plan, define the best way to work, and decide what should happen first.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start building with momentum",
    text: "Once the plan is clear, we move into execution with regular updates, flexible decisions, and a practical path forward.",
  },
];

export const DiscoveryProcess = () => {
  return (
    <section className="discovery-process">
      <div className="container discovery-process__container">
        <div className="discovery-process__layout">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="discovery-process__content"
          >
            <div className="discovery-process__eyebrow">
              <span className="discovery-process__eyebrow-line" />
              <span>How we begin</span>
            </div>

            <h2 className="discovery-process__title">
              From first call to clear next steps.
            </h2>

            <p className="discovery-process__intro">
              We keep the starting process simple. First, we understand where
              you are, then we help shape the right solution before moving into
              focused execution.
            </p>

            <div className="discovery-process__actions">
              <Link href="/contact" className="discovery-process__cta">
                Book a Discovery Call
                <ArrowRight size={17} strokeWidth={2.3} />
              </Link>

              <p className="discovery-process__note">
                No pressure. Just a clear conversation.
              </p>
            </div>
          </motion.div>

          <div className="discovery-process__steps">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: easeOut,
                  }}
                  className="discovery-process-step"
                >
                  <div className="discovery-process-step__marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="discovery-process-step__card">
                    <div className="discovery-process-step__icon">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
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