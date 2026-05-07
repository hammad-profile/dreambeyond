"use client";

import "../styles/case-studies.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import { caseStudies } from "@/lib/caseStudiesData";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Layers3,
  Network,
  Search,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const focusItems = [
  {
    icon: Search,
    label: "Approach",
    text: "Design systems that make high-volume business processes faster and easier to manage.",
  },
  {
    icon: Network,
    label: "Value",
    text: "Clear, modern tools for operations, analytics, and cross-functional collaboration.",
  },
  {
    icon: BarChart3,
    label: "Impact",
    text: "Better performance, fewer manual handoffs, and measurable process improvements.",
  },
];

const CaseStudies = () => {
  const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));
  const featuredStudies = caseStudies.slice(0, 6);

  return (
    <SiteLayout>
      <main className="case-studies-page">
        <section className="case-studies-hero">
          <div className="container case-studies-hero__container">
            <div className="case-studies-hero__layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="case-studies-hero__copy"
              >
                <div className="case-studies-hero__eyebrow">
                  <span />
                  Proof — case studies
                </div>

                <h1 className="case-studies-hero__title">
                  <span>Work delivered across</span>
                  <span>demanding industries.</span>
                </h1>

                <p className="case-studies-hero__intro">
                  Real projects, real operational systems, real outcomes —
                  grouped by domain. Explore modern operational design with
                  clarity and confidence.
                </p>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="case-studies-hero__panel"
              >
                <div
                  className="case-studies-hero__panel-grid"
                  aria-hidden="true"
                />

                <div className="case-studies-hero__panel-top">
                  <div className="case-studies-hero__panel-icon">
                    <Layers3 size={22} />
                  </div>

                  <span>{caseStudies.length} stories</span>
                </div>

                <h2>Modern execution for complex operations.</h2>

                <div className="case-studies-focus">
                  {focusItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="case-studies-focus__item"
                        key={item.label}
                      >
                        <div className="case-studies-focus__icon">
                          <Icon size={18} />
                        </div>

                        <div>
                          <span>{item.label}</span>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="case-studies-featured">
          <div className="container case-studies-featured__container">
            <div className="case-studies-section-header">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <div className="case-studies-section-header__eyebrow">
                  <span />
                  Featured case studies
                </div>

                <h2>
                  <span>Modern stories of</span>
                  <span>enterprise transformation.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Browse the case studies that show how we turn complex
                requirements into beautiful, usable systems.
              </motion.p>
            </div>

            <div className="case-study-grid">
              {featuredStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                    ease: easeOut,
                  }}
                  className="case-study-card"
                >
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="case-study-card__link"
                  >
                    <div className="case-study-card__grid" aria-hidden="true" />

                    <div className="case-study-card__top">
                      <div className="case-study-card__icon">
                        <Layers3 size={21} />
                      </div>

                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="case-study-card__body">
                      <p className="case-study-card__industry">
                        {caseStudy.industry}
                      </p>

                      <h3>{caseStudy.title}</h3>

                      <p className="case-study-card__subtitle">
                        {caseStudy.subtitle}
                      </p>

                      <p className="case-study-card__description">
                        {caseStudy.description}
                      </p>
                    </div>

                    <div className="case-study-card__footer">
                      <span>Open case study</span>
                      <ArrowRight size={17} />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-studies-industries">
          <div className="container case-studies-industries__container">
            <div className="case-studies-section-header case-studies-section-header--center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <div className="case-studies-section-header__eyebrow">
                  <span />
                  Browse by industry
                </div>

                <h2>
                  <span>Find the stories that</span>
                  <span>match your domain.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Find the right case study by domain and view the stories that
                match your business needs.
              </motion.p>
            </div>

            <div className="industry-grid">
              {industries.map((industry, index) => {
                const studiesInIndustry = caseStudies.filter(
                  (cs) => cs.industry === industry
                );

                return (
                  <motion.article
                    key={industry}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.04,
                      ease: easeOut,
                    }}
                    className="industry-card"
                  >
                    <div className="industry-card__grid" aria-hidden="true" />

                    <div className="industry-card__top">
                      <h3>{industry}</h3>

                      <span>
                        {studiesInIndustry.length}{" "}
                        {studiesInIndustry.length === 1 ? "story" : "stories"}
                      </span>
                    </div>

                    <div className="industry-card__links">
                      {studiesInIndustry.map((study) => (
                        <Link
                          key={study.id}
                          href={`/case-studies/${study.slug}`}
                          className="industry-card__link"
                        >
                          {study.title}
                          <ArrowRight size={15} />
                        </Link>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="case-studies-cta-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="case-studies-cta"
            >
              <div className="case-studies-cta__grid" aria-hidden="true" />

              <div className="case-studies-cta__eyebrow">
                <span />
                Ready to start?
              </div>

              <h2>Ready to start your project?</h2>

              <p>
                Let&apos;s discuss how we can deliver custom solutions tailored
                to your unique needs.
              </p>

              <Link href="/contact" className="case-studies-cta__button">
                Discuss Your Project
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default CaseStudies;