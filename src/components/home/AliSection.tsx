"use client";

import portrait from "@/assets/home/ali/ali-kitabi.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

export const AliSection = () => (
  <section className="ali-section">
    <div className="container ali-section__container">
      <div className="ali-section__layout">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="ali-section__photo-card"
        >
          <div className="ali-section__photo-wrap">
            <img
              src={portrait.src}
              alt="Ali Kitabi, founder of Dream Beyond"
              loading="lazy"
              width={1024}
              height={1024}
              className="ali-section__photo"
            />
          </div>

          <div className="ali-section__badge">25+ yrs · founder</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="ali-section__content-card"
        >
          <div>
            <div className="ali-section__eyebrow">
              <span className="ali-section__eyebrow-dot" />
              <span className="ali-section__eyebrow-text">
                MEET THE FOUNDER
              </span>
            </div>

            <h2 className="ali-section__title">
              Meet <span>Ali Kitabi.</span>
            </h2>

            <div className="ali-section__text">
              <p>
                For more than 25 years, I have built software for businesses
                where mistakes are expensive and systems must hold up.
              </p>

              <p>
                I have worked with operations-heavy companies across supply
                chain, oil and gas, healthcare, clinical trials, and insurance,
                where technology has to support real people, real workflows, and
                real growth.
              </p>
<blockquote className="ali-section__highlight ali-section__quote">
  <span className="ali-section__quote-mark" aria-hidden="true">
    ””
  </span>
  Today, I help growing businesses use AI, automation, and custom software with
  the right architecture, security, scalability, and technology guidance behind
  every decision, so they can move beyond manual work, scattered tools, fragile
  prototypes, and outdated systems.
</blockquote>
            </div>
          </div>

          <div className="ali-section__actions">
            <Link
              href="/education"
              className="ali-section__button ali-section__button--light"
            >
              Learn with Ali
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="ali-section__button ali-section__button--dark"
            >
              Work with Ali
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);