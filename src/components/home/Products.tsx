"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import restroImage from "@/assets/home/products/restro.png";
import seranovaImage from "@/assets/home/products/seranova.png";
import stacketImage from "@/assets/home/products/stacket.jpg";

const easeOut = [0.2, 0.8, 0.2, 1] as const;

const products = [
  {
    name: "Stacket",
    label: "Warehouse & 3PL Intelligence",
    description:
      "Unified operations platform for warehousing and third-party logistics companies. Real-time inventory, order management, and analytics in one system.",
    href: "/products/stacket",
    image: stacketImage,
    imageAlt: "Stacket warehouse operations dashboard",
  },
  {
    name: "Restro",
    label: "Restaurant Operations, Unified",
    description:
      "End-to-end platform for restaurants and food catering companies. From kitchen management to customer engagement to financial reporting.",
    href: "/products/restro",
    image: restroImage,
    imageAlt: "Restro restaurant operations dashboard",
  },
  {
    name: "Seranova.ai",
    label: "AI-Powered Reputation Intelligence",
    description:
      "Collects reviews, detects negative sentiment before it goes public, and helps hospitality, healthcare, and tech service companies protect their reputation.",
    href: "/products/beyond-ai",
    image: seranovaImage,
    imageAlt: "Seranova AI reputation intelligence interface",
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
            className="db-products__header-content"
          >
            <div className="db-products__eyebrow">
              <span className="db-products__eyebrow-dot" />
              <span className="db-products__eyebrow-text">OUR PRODUCTS</span>
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
          </motion.div>
        </div>

        <div className="db-products__cards">
          {products.map((product, index) => {
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
                  <div className="db-product-card__image">
                    <img
                      src={product.image.src}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="db-product-card__image-media"
                    />
                  </div>

                  <div className="db-product-card__body">
                    <p className="db-product-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </p>

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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
          className="db-products__bottom-cta"
        >
          <Link href="/products" className="db-products__view-link">
            View all products
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
