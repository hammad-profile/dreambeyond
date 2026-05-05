"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/site/Primitives";

const products = [
  {
    name: "Stacket",
    tag: "Operations · Inventory",
    desc: "Warehouse and inventory software for 3PL and retail operations.",
    to: "/products/stacket",
    gradient: "from-brand-blue/30 via-brand-blue/10 to-transparent",
  },
  {
    name: "Restro",
    tag: "Hospitality · Catering",
    desc: "Catering and restaurant operations technology for smoother ordering, invoicing, and fulfillment.",
    to: "/products/restro",
    gradient: "from-brand-blue/40 via-brand-blue/15 to-transparent",
  },
  {
    name: "Beyond AI Solutions",
    tag: "AI · Workflow",
    desc: "Specialized AI systems built around real workflows and business bottlenecks.",
    to: "/products/beyond-ai",
    gradient: "from-brand-blue/30 via-brand-blue/20 to-transparent",
  },
];

export const Products = () => (
  <section className="py-28 md:py-40 bg-background">
    <div className="container">
      <div className="flex items-end justify-between flex-wrap gap-8">
        <SectionHeader
          eyebrow="05 · Products"
          title={<>Software we built. Operating in <span className="text-gradient-brand">production</span>.</>}
        />
        <Link href="/products" className="link-underline text-sm font-medium pb-1">
          View all products →
        </Link>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <Link
              href={p.to}
              className="group relative block bg-card border border-border rounded-3xl p-8 hover-lift hover:border-foreground/20 hover:shadow-soft transition-all overflow-hidden h-full"
            >
              <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="label-eyebrow text-muted-foreground">{p.tag}</span>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-500" />
                </div>
                <h3 className="font-display text-5xl text-foreground mt-8 leading-tight">
                  {p.name}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed min-h-[5rem]">
                  {p.desc}
                </p>
                <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors">
                  Explore product
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
