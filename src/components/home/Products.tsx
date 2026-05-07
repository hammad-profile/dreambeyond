"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  UtensilsCrossed,
  BrainCircuit,
} from "lucide-react";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const products = [
  {
    name: "Stacket",
    label: "Warehouse & 3PL Intelligence",
    description:
      "Unified operations platform for warehousing and third-party logistics companies. Real-time inventory, order management, and analytics in one system.",
    href: "/products/stacket",
    icon: Boxes,
  },
  {
    name: "Restro",
    label: "Restaurant Operations, Unified",
    description:
      "End-to-end platform for restaurants and food catering companies. From kitchen management to customer engagement to financial reporting.",
    href: "/products/restro",
    icon: UtensilsCrossed,
  },
  {
    name: "Seranova.ai",
    label: "AI-Powered Reputation Intelligence",
    description:
      "Collects reviews, detects negative sentiment before it goes public, and helps hospitality, healthcare, and tech service companies protect their reputation.",
    href: "/products/beyond-ai",
    icon: BrainCircuit,
  },
];

export const Products = () => {
  return (
    <section className="db-products">
      <div className="container db-products__container">
        <div className="db-products__header">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="db-products__eyebrow">
              <span />
              _OUR_PRODUCTS
            </div>

            <h2 className="db-products__title">
              <span>Products built from</span>
              <span>real business problems.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="db-products__side"
          >
            <p className="db-products__intro">
              Production-grade products built by Dream Beyond, serving real
              businesses at scale.
            </p>

            <Link href="/products" className="db-products__view-link">
              View all products
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>

        <div className="db-products__cards">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: easeOut,
                }}
                className="db-product-card"
              >
                <Link href={product.href} className="db-product-card__link">
                  <div className="db-product-card__grid" aria-hidden="true" />

                  <div className="db-product-card__top">
                    <div className="db-product-card__icon">
                      <Icon size={22} strokeWidth={2.1} />
                    </div>

                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="db-product-card__body">
                    <p className="db-product-card__label">{product.label}</p>

                    <h3>{product.name}</h3>

                    <p className="db-product-card__description">
                      {product.description}
                    </p>
                  </div>

                  <div className="db-product-card__footer">
                    <span>Explore product</span>
                    <ArrowRight size={17} />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};