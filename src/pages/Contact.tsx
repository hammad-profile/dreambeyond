"use client";

import { SiteLayout } from "@/components/site/SiteLayout";
import Link from "next/link";
import { PrimaryCTA } from "@/components/site/Primitives";

const Contact = () => (
  <SiteLayout>
    <section className="surface-ink pt-36 md:pt-48 pb-32 min-h-[80vh] grain relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ink" />
      <div className="container relative">
        <Link href="/" className="label-eyebrow text-ivory-dim hover:text-accent">← Dream Beyond</Link>
        <div className="mt-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 label-eyebrow text-ivory-dim">
              <span className="w-6 h-px bg-accent" />
              Book a strategy call
            </div>
            <h1 className="font-display mt-6 text-ivory text-5xl md:text-7xl leading-[1] tracking-tight text-balance">
              Let's talk about where you are, what is breaking, and what should <em className="text-brand-blue">happen next</em>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ivory-dim leading-relaxed">
              30 minutes. No slides. We'll discuss your situation honestly and tell you whether Dream Beyond is the right fit.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ink-soft border border-rule p-8 md:p-10">
              <div className="label-eyebrow text-accent">Direct</div>
              <a href="mailto:hello@dreambeyond.io" className="block font-display text-3xl text-ivory mt-3 link-underline">
                hello@dreambeyond.io
              </a>

              <div className="mt-10 label-eyebrow text-accent">Or</div>
              <div className="mt-4">
                <PrimaryCTA href="/start">Use the route picker</PrimaryCTA>
              </div>

              <div className="mt-10 pt-8 border-t border-rule">
                <div className="label-eyebrow text-ivory-dim">Response time</div>
                <div className="text-ivory mt-2">Within 1 business day, from Ali directly.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);
export default Contact;
