"use client";

import "../styles/execution.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  GitBranch,
  Layers3,
  RefreshCcw,
  Sparkles,
  Wrench,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const capabilities = [
  {
    icon: Code2,
    title: "Custom Platforms",
    text: "Bespoke software built from the ground up. Not templates — systems designed around your exact workflows and data needs.",
  },
  {
    icon: Bot,
    title: "AI Agents & Systems",
    text: "Intelligent automation that does real work. From document processing to decision support — AI that earns its place in your stack.",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    text: "Stop forcing your team into off-the-shelf software. We build the tools they actually need, the way they actually work.",
  },
  {
    icon: GitBranch,
    title: "Integrations",
    text: "Connect your systems into one coherent platform. APIs, data pipelines, and sync layers that eliminate manual work.",
  },
  {
    icon: RefreshCcw,
    title: "Workflow Automation",
    text: "Automate the repetitive processes draining your team's time. From approvals to data entry to reporting — systematized.",
  },
  {
    icon: Layers3,
    title: "Legacy Modernization",
    text: "Upgrade aging systems without losing your data or disrupting operations. Careful migration, not reckless replacement.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your business, your users, and your constraints before we touch code.",
  },
  {
    number: "02",
    title: "Architecture",
    text: "We design the system's skeleton. Data models, security layers, scalability plan — all documented.",
  },
  {
    number: "03",
    title: "Build",
    text: "Iterative development with regular demos. You see progress every week, not just at the end.",
  },
  {
    number: "04",
    title: "Harden",
    text: "Security audits, stress tests, edge case coverage. We break it before your users do.",
  },
  {
    number: "05",
    title: "Deploy & Support",
    text: "Launch with confidence. We don't disappear after delivery — we ensure operational stability.",
  },
];

const Execution = () => {
  return (
    <SiteLayout>
      <main className="execution-page">
        <section className="execution-hero">
          <div className="container execution-hero__container">
            <div className="execution-hero__layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="execution-hero__main"
              >
                <div className="execution-hero__grid" aria-hidden="true" />

                <div className="execution-hero__eyebrow">
                  <span />
                  EXECUTION_ARM
                </div>

                <h1 className="execution-hero__title">
                  <span>Custom software</span>
                  <span>& AI systems.</span>
                </h1>

                <p className="execution-hero__intro">
                  We don't build MVPs that need rebuilding. We build
                  production-grade systems that your business can grow on.
                </p>

                <Link href="/contact" className="execution-hero__button">
                  Start a conversation
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="execution-hero__side"
              >
                <div className="execution-hero__grid" aria-hidden="true" />

                <div className="execution-hero__side-top">
                  <div className="execution-hero__side-icon">
                    <Sparkles size={22} />
                  </div>

                  <span>Production-grade</span>
                </div>

                <h2>Software built for real operations, not demo screens.</h2>

                <p>
                  We design, build, harden, deploy, and support systems that
                  solve real business problems and survive real usage.
                </p>

                <div className="execution-hero__stats">
                  <div>
                    <strong>AI</strong>
                    <span>Useful automation</span>
                  </div>

                  <div>
                    <strong>Ops</strong>
                    <span>Workflow-first systems</span>
                  </div>

                  <div>
                    <strong>Scale</strong>
                    <span>Ready for growth</span>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="execution-capabilities">
          <div className="container execution-capabilities__container">
            <div className="execution-section-header">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <div className="execution-section-header__eyebrow">
                  <span />
                  CAPABILITIES
                </div>

                <h2>
                  <span>What we</span>
                  <span>build.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                From custom platforms to AI systems, we build tools around real
                business workflows, data, security, and long-term stability.
              </motion.p>
            </div>

            <div className="execution-capability-grid">
              {capabilities.map((item, index) => {
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
                    className="execution-capability-card"
                  >
                    <div
                      className="execution-capability-card__grid"
                      aria-hidden="true"
                    />

                    <div className="execution-capability-card__top">
                      <div className="execution-capability-card__icon">
                        <Icon size={21} />
                      </div>

                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="execution-capability-card__content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="execution-process">
          <div className="container execution-process__container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="execution-process__panel"
            >
              <div className="execution-process__grid" aria-hidden="true" />

              <div className="execution-process__header">
                <div className="execution-process__eyebrow">
                  <span />
                  HOW_WE_WORK
                </div>

                <h2>
                  <span>How we take you from</span>
                  <span>idea to stable system.</span>
                </h2>
              </div>

              <div className="execution-process__steps">
                {process.map((step) => (
                  <article className="execution-process-step" key={step.title}>
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="execution-cta-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="execution-cta"
            >
              <div className="execution-cta__grid" aria-hidden="true" />

              <div className="execution-cta__eyebrow">
                <span />
                BUILD_WITH_US
              </div>

              <h2>Ready to build something production-grade?</h2>

              <p>
                Tell us what you're trying to build. We'll tell you honestly how
                we'd approach it.
              </p>

              <Link href="/contact" className="execution-cta__button">
                Start a Conversation
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Execution;