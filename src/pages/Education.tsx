"use client";

import "../styles/education.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const topics = [
  {
    icon: BrainCircuit,
    title: "AI in Software Engineering",
    description:
      "How to leverage AI for development without sacrificing code quality, security, or maintainability. Real patterns, not hype.",
    articles: [
      "When AI-Generated Code Becomes Technical Debt",
      "The 12-Point Production Readiness Checklist",
      "AI Pair Programming: What to Trust and What to Verify",
    ],
  },
  {
    icon: Layers3,
    title: "Architecture Mistakes",
    description:
      "The structural errors that kill companies slowly. Learn to spot them before they cost you six-figure rewrites.",
    articles: [
      "The Monolith vs. Microservices Decision Nobody Gets Right",
      "Why Your Database Schema Is Your Most Important Decision",
      "Architecture Anti-Patterns in AI-First Development",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Scaling",
    description:
      "The things that break when your app goes from 100 to 100,000 users — and how to prevent them.",
    articles: [
      "Security Holes AI Assistants Will Never Tell You About",
      "Scaling Lessons From Real Production Incidents",
      "The True Cost of Skipping Security Reviews",
    ],
  },
  {
    icon: Search,
    title: "How to Evaluate Developers",
    description:
      "For founders who need to hire, manage, or evaluate technical talent without a technical background.",
    articles: [
      "Red Flags In Developer Portfolios",
      "Questions to Ask Before Hiring a Dev Shop",
      "How to Read a Technical Proposal Without Being Technical",
    ],
  },
  {
    icon: Users,
    title: "How Juniors Should Use AI",
    description:
      "For early-career developers learning to build with AI tools responsibly — without destroying their fundamentals.",
    articles: [
      "AI Won't Teach You to Think Like an Engineer",
      "The Junior Developer's Guide to Production-Grade Code",
      "Building Your Technical Foundation in the AI Era",
    ],
  },
  {
    icon: Code2,
    title: "The Software Teardown",
    description:
      "Our signature series. We take real anonymized systems, show what's broken, and rebuild them properly — live.",
    articles: [
      "Teardown #1: The E-Commerce Platform That Couldn't Scale",
      "Teardown #2: When 'AI-Powered' Means 'Held Together by Prompts'",
      "Teardown #3: The Internal Tool That Became a Security Nightmare",
    ],
  },
];

const workshops = [
  {
    title: "AI for Development Teams",
    text: "How to use AI tools without creating technical debt",
  },
  {
    title: "Architecture Foundations",
    text: "Building systems that scale and survive",
  },
  {
    title: "Production Readiness",
    text: "From code to deployment without disasters",
  },
];

const Education = () => {
  return (
    <SiteLayout>
      <main className="education-page">
        <section className="education-hero">
          <div className="container education-hero__container">
            <div className="education-hero__layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="education-hero__card"
              >
                <div className="education-hero__grid" aria-hidden="true" />

                <div className="education-hero__eyebrow">
                  <span />
                  EDUCATION_ARM
                </div>

                <h1 className="education-hero__title">
                  <span>The knowledge</span>
                  <span>factory.</span>
                </h1>

                <p className="education-hero__intro">
                  We teach the world how to use AI in software development
                  without sacrificing architecture, security, or trust.
                </p>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="education-hero__side"
              >
                <div className="education-hero__grid" aria-hidden="true" />

                <div className="education-hero__side-top">
                  <div className="education-hero__side-icon">
                    <BookOpen size={22} />
                  </div>

                  <span>Real systems. Real lessons.</span>
                </div>

                <h2>Practical knowledge for builders, founders, and teams.</h2>

                <p>
                  Deep, practical knowledge for founders, operators, and
                  developers who want to build better.
                </p>

                <Link href="#topics" className="education-hero__button">
                  Explore topics
                  <ArrowRight size={17} />
                </Link>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="education-topics" id="topics">
          <div className="container education-topics__container">
            <div className="education-section-header">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <div className="education-section-header__eyebrow">
                  <span />
                  TOPICS
                </div>

                <h2>
                  <span>What we</span>
                  <span>teach.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Deep, practical knowledge for founders, operators, and
                developers who want to build better.
              </motion.p>
            </div>

            <div className="education-topic-list">
              {topics.map((topic, index) => {
                const Icon = topic.icon;

                return (
                  <motion.article
                    key={topic.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                      ease: easeOut,
                    }}
                    className="education-topic-card"
                  >
                    <div
                      className="education-topic-card__grid"
                      aria-hidden="true"
                    />

                    <div className="education-topic-card__left">
                      <div className="education-topic-card__icon">
                        <Icon size={21} />
                      </div>

                      <span>{String(index + 1).padStart(2, "0")}</span>

                      <h3>{topic.title}</h3>

                      <p>{topic.description}</p>
                    </div>

                    <div className="education-topic-card__right">
                      <div className="education-topic-card__label">
                        Featured articles
                      </div>

                      <div className="education-article-list">
                        {topic.articles.map((article, articleIndex) => (
                          <div className="education-article" key={article}>
                            <span>
                              {String(articleIndex + 1).padStart(2, "0")}
                            </span>

                            <p>{article}</p>

                            <ArrowRight size={15} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="education-workshops">
          <div className="container education-workshops__container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="education-workshops__header"
            >
              <div className="education-section-header__eyebrow">
                <span />
                WORKSHOPS
              </div>

              <h2>Team Workshops</h2>

              <p>
                Private workshops for teams who want to level up their AI and
                software engineering practices. Led by Ali Kitabi, covering
                real-world architecture, security, and production-grade
                development.
              </p>
            </motion.div>

            <div className="education-workshop-grid">
              {workshops.map((workshop, index) => (
                <motion.article
                  key={workshop.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: easeOut,
                  }}
                  className="education-workshop-card"
                >
                  <div
                    className="education-workshop-card__grid"
                    aria-hidden="true"
                  />

                  <div className="education-workshop-card__icon">
                    <Sparkles size={21} />
                  </div>

                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <h3>{workshop.title}</h3>

                  <p>{workshop.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-cta-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="education-cta"
            >
              <div className="education-cta__grid" aria-hidden="true" />

              <div className="education-cta__eyebrow">
                <span />
                LEARN_WITH_US
              </div>

              <h2>Want to learn from practitioners, not theorists?</h2>

              <p>
                Our education is built on real systems, real failures, and real
                solutions — not blog posts rewritten by AI.
              </p>

              <Link href="/contact" className="education-cta__button">
                Explore Options
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Education;