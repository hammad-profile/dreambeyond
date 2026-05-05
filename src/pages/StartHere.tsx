"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";

const routes = [
  { label: "I need a fractional CTO", to: "/fractional-cto", tag: "Consult" },
  { label: "I need software built", to: "/custom-software", tag: "Build" },
  { label: "I want to improve my team's use of AI", to: "/insights", tag: "Educate" },
  { label: "I want to explore Stacket", to: "/products/stacket", tag: "Product" },
  { label: "I want to explore Restro", to: "/products/restro", tag: "Product" },
  { label: "I want to learn from Ali", to: "/insights", tag: "Educate" },
];

const StartHere = () => (
  <SiteLayout>
    <section className="surface-ink pt-36 md:pt-48 pb-16 grain relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[35rem] h-[35rem] bg-accent/15 blur-3xl rounded-full translate-x-1/3" />
      <div className="container relative">
        <Link href="/" className="label-eyebrow text-ivory-dim hover:text-accent">← Dream Beyond</Link>
        <div className="mt-8 inline-flex items-center gap-3 label-eyebrow text-ivory-dim">
          <span className="w-6 h-px bg-accent" />
          Start here
        </div>
        <h1 className="font-display mt-6 text-ivory text-5xl md:text-7xl leading-[1] tracking-tight max-w-4xl text-balance">
          Tell us what you're <em className="text-brand-blue">trying to do</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ivory-dim leading-relaxed">
          Pick the path that fits. We'll route you to the right page — no forms, no friction.
        </p>
      </div>
    </section>

    <section className="surface-ink pb-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
          {routes.map((r, i) => (
            <Link
              key={i}
              href={r.to}
              className="group bg-ink p-8 md:p-10 hover:bg-ink-elev transition-colors flex items-start justify-between gap-6"
            >
              <div>
                <div className="label-eyebrow text-accent">{r.tag}</div>
                <div className="font-display text-2xl md:text-3xl text-ivory mt-4 leading-snug max-w-md">
                  {r.label}
                </div>
              </div>
              <span className="text-ivory-dim text-3xl group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);
export default StartHere;
