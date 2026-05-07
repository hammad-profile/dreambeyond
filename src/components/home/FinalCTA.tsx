"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

export const FinalCTA = () => (
  <section className="final-cta-section">
    <div className="container final-cta-section__container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="final-cta"
      >
        <div className="final-cta__eyebrow">
          <span />
          YOUR_MOVE
        </div>

        <h2 className="final-cta__title">
          Stop patching. Start building.
        </h2>

        <p className="final-cta__text">
          Whether you need a strategic partner, a team of builders, or a way to
          upskill your people — we're ready when you are.
        </p>

        <Link href="/start" className="final-cta__button">
          Start Here
          <ArrowRight size={17} />
        </Link>
      </motion.div>
    </div>
  </section>
);