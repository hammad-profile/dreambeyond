"use client";

import portrait from "@/assets/ali-portrait.jpg";
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
            {/* Founder photo space */}
            {/* Uncomment this image when you want to show the founder photo */}

            {/* <img
              src={portrait.src}
              alt="Ali Kitabi, founder of Dream Beyond"
              loading="lazy"
              width={1024}
              height={1024}
              className="ali-section__photo"
            /> */}

            <div className="ali-section__photo-placeholder">
              Founder photo
            </div>
          </div>

          <div className="ali-section__badge">
            25+ yrs · founder
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="ali-section__content-card"
        >
          <div className="ali-section__eyebrow">
            <span />
            06 · Meet the founder
          </div>

          <h2 className="ali-section__title">
            <span>Meet</span>
            <span>Ali Kitabi.</span>
          </h2>

          <div className="ali-section__text">
            <p>
              I have spent more than 25 years building software, solving operational
              problems, and guiding technology decisions across industries.
            </p>

            <p>
              Today, I help businesses avoid expensive technical mistakes, use AI
              responsibly, and build systems that support real growth.
            </p>

            <p className="ali-section__highlight">
              I also teach the next generation of builders how to think
              <span> beyond code</span>.
            </p>
          </div>

          <div className="ali-section__actions">
            <Link href="/education" className="ali-section__button ali-section__button--light">
              Learn with Ali
              <ArrowRight size={17} />
            </Link>

            <Link href="/contact" className="ali-section__button ali-section__button--dark">
              Work with Ali
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);