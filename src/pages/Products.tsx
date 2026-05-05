"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";

const products = [
  { name: "Stacket", to: "/products/stacket", tag: "Operations · Inventory", desc: "Warehouse and inventory software for 3PL and retail operations." },
  { name: "Restro", to: "/products/restro", tag: "Hospitality · Catering", desc: "Catering and restaurant operations technology for smoother ordering, invoicing, and fulfillment." },
  { name: "Beyond AI Solutions", to: "/products/beyond-ai", tag: "AI · Workflow", desc: "Specialized AI systems built around real workflows and business bottlenecks." },
];

const Products = () => (
  <SiteLayout>
    <section className="surface-ink pt-36 md:pt-48 pb-24 grain relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/15 blur-3xl rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="container relative">
        <Link href="/" className="label-eyebrow text-ivory-dim hover:text-accent">← Dream Beyond</Link>
        <div className="mt-8 inline-flex items-center gap-3 label-eyebrow text-ivory-dim">
          <span className="w-6 h-px bg-accent" />
          Products
        </div>
        <h1 className="font-display mt-6 text-ivory text-5xl md:text-7xl leading-[1] tracking-tight max-w-4xl text-balance">
          Software we built. Operating in <em className="text-brand-blue">production</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ivory-dim leading-relaxed">
          Each product stands on its own. Each is rooted in real operational problems we lived through.
        </p>
      </div>
    </section>

    <section className="surface-ink pb-32">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
          {products.map((p) => (
            <Link key={p.name} href={p.to} className="group bg-ink p-8 md:p-10 hover:bg-ink-elev transition-colors">
              <span className="label-eyebrow text-accent">{p.tag}</span>
              <h2 className="font-display text-4xl text-ivory mt-6 leading-tight">{p.name}</h2>
              <p className="mt-4 text-ivory-dim leading-relaxed min-h-[5rem]">{p.desc}</p>
              <div className="mt-10 inline-flex items-center gap-2 text-sm text-ivory">
                Explore <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);
export default Products;
