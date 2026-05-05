"use client";

import { CaseStudiesCard } from "@/components/CaseStudiesCard";
import { caseStudies } from "@/lib/caseStudiesData";
import Link from "next/link";

const CaseStudies = () => {
  const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%)] pointer-events-none" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 top-44 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-end">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-blue font-semibold">
                Proof — case studies
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Work delivered across <span className="text-brand-blue">demanding</span> industries.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Real projects, real operational systems, real outcomes — grouped by domain. Explore modern operational design with clarity and confidence.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-card/95 p-8 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-4">
                Featured focus
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-5">
                Modern execution for complex operations.
              </h2>
              <div className="space-y-4">
                <div className="rounded-3xl bg-background/80 p-4 border border-border">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Approach</p>
                  <p className="mt-2 text-sm text-foreground">Design systems that make high-volume business processes faster and easier to manage.</p>
                </div>
                <div className="rounded-3xl bg-background/80 p-4 border border-border">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Value</p>
                  <p className="mt-2 text-sm text-foreground">Clear, modern tools for operations, analytics, and cross-functional collaboration.</p>
                </div>
                <div className="rounded-3xl bg-background/80 p-4 border border-border">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Impact</p>
                  <p className="mt-2 text-sm text-foreground">Better performance, fewer manual handoffs, and measurable process improvements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-brand-blue mb-3">
                Featured case studies
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Modern stories of enterprise transformation.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              Browse the case studies that show how we turn complex requirements into beautiful, usable systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudiesCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Browse by industry
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Find the right case study by domain and view the stories that match your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const studiesInIndustry = caseStudies.filter(
                (cs) => cs.industry === industry
              );
              return (
                <div
                  key={industry}
                  className="rounded-[1.75rem] border border-border bg-card/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-foreground">{industry}</h3>
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                      {studiesInIndustry.length} stories
                    </span>
                  </div>
                  <div className="grid gap-4">
                    {studiesInIndustry.map((study) => (
                      <Link
                        key={study.id}
                        href={`/case-studies/${study.slug}`}
                        className="block rounded-3xl border border-border bg-background/80 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-brand-blue/5"
                      >
                        {study.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card/90 p-10 shadow-soft backdrop-blur-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to start your project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how we can deliver custom solutions tailored to your unique needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-blue-700"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
