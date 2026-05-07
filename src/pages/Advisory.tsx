"use client";

import "../styles/advisory.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Compass,
  Layers3,
  Map,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const offers = [
  {
    icon: Compass,
    title: "Technology Strategy",
    text: "Align your technology roadmap with business objectives. We cut through vendor noise and give you a clear path forward.",
  },
  {
    icon: Layers3,
    title: "Architecture Reviews",
    text: "Is your system built to last? We examine your stack, identify structural weaknesses, and provide a hardening plan.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor Rescue",
    text: "Stuck with a broken build from another team? We assess the damage, stabilize what's salvageable, and rebuild what's not.",
  },
  {
    icon: BrainCircuit,
    title: "AI Roadmap",
    text: "Not every problem needs AI. We help you identify where AI creates real value — and where it creates risk.",
  },
  {
    icon: SearchCheck,
    title: "Technical Due Diligence",
    text: "Investing in or acquiring a tech company? We'll tell you what the code actually looks like under the hood.",
  },
  {
    icon: Users,
    title: "Team & Process Guidance",
    text: "Build better engineering habits. From code reviews to CI/CD to how your team uses AI tools responsibly.",
  },
];

const advisoryChecks = [
  "You're a founder making technology decisions without a technical co-founder",
  "You've been burned by a dev shop and need to understand what went wrong",
  "You're exploring AI but don't know where to start or what to trust",
  "You're growing fast and your current systems are cracking under pressure",
  "You're evaluating a tech acquisition and need honest due diligence",
  "Your team uses AI tools but nobody's reviewed the output for production safety",
];

const Advisory = () => {
  return (
    <SiteLayout>
      <main className="advisory-page">
        <section className="advisory-hero">
          <div className="container advisory-hero__container">
            <div className="advisory-hero__layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="advisory-hero__main"
              >
                <div className="advisory-hero__grid" aria-hidden="true" />

                <div className="advisory-hero__eyebrow">
                  <span />
                  ADVISORY_ARM
                </div>

                <h1 className="advisory-hero__title">
                  <span>Strategic technology</span>
                  <span>consulting.</span>
                </h1>

                <p className="advisory-hero__intro">
                  For founders, SMBs, and growing companies who need a trusted
                  technology partner — not another vendor.
                </p>

                <Link href="/contact" className="advisory-hero__button">
                  Book a consultation
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="advisory-hero__side"
              >
                <div className="advisory-hero__grid" aria-hidden="true" />

                <div className="advisory-hero__side-top">
                  <div className="advisory-hero__side-icon">
                    <Map size={22} />
                  </div>

                  <span>Clear judgment</span>
                </div>

                <h2>Better decisions before expensive mistakes happen.</h2>

                <p>
                  We help you understand what to build, what to avoid, who to
                  trust, and where technology should support the business.
                </p>

                <div className="advisory-hero__stats">
                  <div>
                    <strong>AI</strong>
                    <span>Roadmap clarity</span>
                  </div>

                  <div>
                    <strong>Tech</strong>
                    <span>Architecture guidance</span>
                  </div>

                  <div>
                    <strong>Ops</strong>
                    <span>Process improvement</span>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="advisory-offer">
          <div className="container advisory-offer__container">
            <div className="advisory-section-header">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <div className="advisory-section-header__eyebrow">
                  <span />
                  WHAT_WE_OFFER
                </div>

                <h2>
                  <span>Better technology</span>
                  <span>judgment starts here.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Practical advisory for companies that need clear technical
                direction, honest assessment, and decisions that support real
                business outcomes.
              </motion.p>
            </div>

            <div className="advisory-offer-grid">
              {offers.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: easeOut,
                    }}
                    className="advisory-offer-card"
                  >
                    <div
                      className="advisory-offer-card__grid"
                      aria-hidden="true"
                    />

                    <div className="advisory-offer-card__top">
                      <div className="advisory-offer-card__icon">
                        <Icon size={21} />
                      </div>

                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="advisory-offer-card__content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="advisory-fit">
          <div className="container advisory-fit__container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="advisory-fit__panel"
            >
              <div className="advisory-fit__grid-bg" aria-hidden="true" />

              <div className="advisory-fit__header">
                <div className="advisory-fit__eyebrow">
                  <span />
                  WHO_THIS_IS_FOR
                </div>

                <h2>
                  <span>You need</span>
                  <span>advisory if...</span>
                </h2>
              </div>

              <div className="advisory-fit__grid">
                {advisoryChecks.map((item, index) => (
                  <article className="advisory-fit-card" key={item}>
                    <CheckCircle2 size={18} />
                    <p>{item}</p>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="advisory-cta-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="advisory-cta"
            >
              <div className="advisory-cta__grid" aria-hidden="true" />

              <div className="advisory-cta__eyebrow">
                <span />
                LETS_TALK
              </div>

              <h2>Need a technology partner, not a vendor?</h2>

              <p>
                Book a strategic consultation. No pitch decks — just honest
                technology guidance.
              </p>

              <Link href="/contact" className="advisory-cta__button">
                Get Started
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Advisory;