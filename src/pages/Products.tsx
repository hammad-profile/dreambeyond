"use client";

import "../styles/products.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  Sparkles,
  UtensilsCrossed,
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
    points: [
      "Real-time inventory visibility",
      "Order and warehouse operations",
      "Analytics for logistics teams",
    ],
  },
  {
    name: "Restro",
    label: "Restaurant Operations, Unified",
    description:
      "End-to-end platform for restaurants and food catering companies. From kitchen management to customer engagement to financial reporting.",
    href: "/products/restro",
    icon: UtensilsCrossed,
    points: [
      "Kitchen and restaurant workflows",
      "Customer engagement tools",
      "Financial and operational reporting",
    ],
  },
  {
    name: "Seranova.ai",
    label: "AI-Powered Reputation Intelligence",
    description:
      "Collects reviews, detects negative sentiment before it goes public, and helps hospitality, healthcare, and tech service companies protect their reputation.",
    href: "/products/beyond-ai",
    icon: BrainCircuit,
    points: [
      "Review collection",
      "Negative sentiment detection",
      "Reputation protection workflows",
    ],
  },
];

const ProductPage = () => {
  return (
    <SiteLayout>
      <main className="products-page">
        <section className="products-hero">
          <div className="container products-hero__container">
            <div className="products-hero__layout">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="products-hero__main"
              >
                <div className="products-hero__grid" aria-hidden="true" />

                <div className="products-hero__eyebrow">
                  <span />
                  _OUR_PRODUCTS
                </div>

                <h1 className="products-hero__title">
                  <span>Products built from</span>
                  <span>real business problems.</span>
                </h1>

                <p className="products-hero__intro">
                  Dream Beyond products are designed around operational pain —
                  not trend chasing. Each platform solves a real workflow,
                  connects fragmented teams, and helps businesses move with
                  more control.
                </p>

                <Link href="/contact" className="products-hero__button">
                  Talk about products
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
                className="products-hero__side"
              >
                <div className="products-hero__grid" aria-hidden="true" />

                <div className="products-hero__side-top">
                  <div className="products-hero__side-icon">
                    <Layers3 size={22} />
                  </div>

                  <span>Production-grade</span>
                </div>

                <h2>Built for companies that need software to actually work.</h2>

                <div className="products-hero__stats">
                  <div>
                    <strong>03</strong>
                    <span>Core products</span>
                  </div>

                  <div>
                    <strong>AI</strong>
                    <span>Used where useful</span>
                  </div>

                  <div>
                    <strong>Ops</strong>
                    <span>Designed for real teams</span>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="products-list-section">
          <div className="container products-list-section__container">
            <div className="products-section-header">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: easeOut }}
              >
                <div className="products-section-header__eyebrow">
                  <span />
                  PRODUCT SUITE
                </div>

                <h2>
                  <span>Focused platforms for</span>
                  <span>real operations.</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
              >
                Each product is built with the same principles: clear workflows,
                reliable systems, useful automation, and clean operational
                visibility.
              </motion.p>
            </div>

            <div className="products-grid">
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
                    className="product-card"
                  >
                    <Link href={product.href} className="product-card__link">
                      <div className="product-card__grid" aria-hidden="true" />

                      <div className="product-card__top">
                        <div className="product-card__icon">
                          <Icon size={22} />
                        </div>

                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>

                      <div className="product-card__body">
                        <p className="product-card__label">{product.label}</p>

                        <h3>{product.name}</h3>

                        <p className="product-card__description">
                          {product.description}
                        </p>

                        <div className="product-card__points">
                          {product.points.map((point) => (
                            <div key={point} className="product-card__point">
                              <CheckCircle2 size={17} />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="product-card__footer">
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

        <section className="products-method-section">
          <div className="container products-method-section__container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="products-method"
            >
              <div className="products-method__grid" aria-hidden="true" />

              <div className="products-method__eyebrow">
                <span />
                HOW WE BUILD
              </div>

              <h2>
                <span>Not templates.</span>
                <span>Operational systems.</span>
              </h2>

              <div className="products-method__cards">
                <div className="products-method__card">
                  <div className="products-method__icon">
                    <Sparkles size={20} />
                  </div>

                  <h3>Designed around work</h3>

                  <p>
                    We begin with the real process, the real users, and the
                    actual decisions the software needs to support.
                  </p>
                </div>

                <div className="products-method__card">
                  <div className="products-method__icon">
                    <Layers3 size={20} />
                  </div>

                  <h3>Built to connect</h3>

                  <p>
                    Products are designed to reduce scattered tools, duplicate
                    data, and manual handoffs across teams.
                  </p>
                </div>

                <div className="products-method__card">
                  <div className="products-method__icon">
                    <BrainCircuit size={20} />
                  </div>

                  <h3>AI where it matters</h3>

                  <p>
                    AI is used to improve workflows and decisions — not to make
                    the product feel artificially complicated.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="products-cta-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="products-cta"
            >
              <div className="products-cta__grid" aria-hidden="true" />

              <div className="products-cta__eyebrow">
                <span />
                READY_TO_EXPLORE
              </div>

              <h2>Need a product that fits your operation?</h2>

              <p>
                Let’s talk about whether one of our products fits your workflow,
                or whether your business needs something custom.
              </p>

              <Link href="/contact" className="products-cta__button">
                Start the conversation
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default ProductPage;