"use client";

import Link from "next/link";
import { CaseStudy } from "@/lib/caseStudiesData";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export const CaseStudyDetail = ({ caseStudy }: CaseStudyDetailProps) => {
  const overviewParagraphs = caseStudy.overview.split("\n\n");
  const features = getFeaturesByIndustry(caseStudy.industry);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className={`relative overflow-hidden py-24 md:py-28 bg-gradient-to-br ${caseStudy.color || "from-slate-950 to-slate-700"}`}>
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%)] pointer-events-none" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 top-32 h-56 w-56 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="mb-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-white/90 hover:text-white transition"
            >
              <span className="mr-2 text-xl">←</span>
              Back to Case Studies
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                {caseStudy.industry}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {caseStudy.title}
              </h1>
              <p className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
                {caseStudy.subtitle}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">Scope</p>
                  <p className="mt-3 text-lg font-semibold text-white">Full product design system</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">Outcome</p>
                  <p className="mt-3 text-lg font-semibold text-white">Modern, scalable operations UI</p>
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur-xl">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Project snapshot</p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">Why this case study matters</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  A modern experience built for strong operational visibility, faster decisions, and better team coordination.
                </p>
                <p>
                  Each solution combines intelligent workflow design with polished visual structure to support complex business processes.
                </p>
              </div>
              <div className="mt-8 grid gap-3">
                <div className="rounded-3xl bg-background/80 px-4 py-3 border border-border">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Industry</p>
                  <p className="mt-2 font-semibold text-foreground">{caseStudy.industry}</p>
                </div>
                <div className="rounded-3xl bg-background/80 px-4 py-3 border border-border">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Case study</p>
                  <p className="mt-2 font-semibold text-foreground">{caseStudy.title}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-brand-blue">Overview</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">What we built</h2>
                  </div>
                </div>
                <div className="space-y-5 text-base leading-8 text-muted-foreground">
                  {overviewParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[1.75rem] border border-border bg-white/95 p-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Challenge</p>
                  <p className="mt-3 text-base text-foreground leading-relaxed">
                    Create a sophisticated experience that feels effortless for challenging operational tasks.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-border bg-brand-blue/5 p-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-blue">Solution</p>
                  <p className="mt-3 text-base text-foreground leading-relaxed">
                    Introduced clean layers, clear hierarchy, and data-forward cards for fast decision-making.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-border bg-white/95 p-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Outcome</p>
                  <p className="mt-3 text-base text-foreground leading-relaxed">
                    A polished product experience with modern visuals and practical operations workflows.
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-blue">Capabilities</p>
                <div className="mt-6 grid gap-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="rounded-3xl bg-background/80 p-4 border border-border">
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground">Next step</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  If you'd like a similarly modern operations experience, we can design a tailored system for your team.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:bg-blue-700"
                >
                  Book a consult
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-soft">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">More case studies</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground">Explore other work</h2>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/5"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function getFeaturesByIndustry(industry: string) {
  const featureMap: Record<string, Array<{ title: string; description: string }>> = {
    "Supply Chain": [
      {
        title: "Real-time Inventory Tracking",
        description: "Monitor stock levels across all locations in real-time.",
      },
      {
        title: "Multi-channel Integration",
        description: "Seamlessly sync with eCommerce, POS, and logistics systems.",
      },
      {
        title: "Advanced Analytics",
        description: "Data-driven insights to optimize operations and reduce costs.",
      },
      {
        title: "Automated Workflows",
        description: "Streamline fulfillment and reduce manual errors.",
      },
    ],
    "Oil & Gas": [
      {
        title: "Data Centralization",
        description: "Aggregate data from multiple sources into a single platform.",
      },
      {
        title: "Advanced Reporting",
        description: "Create comprehensive reports for strategic decision-making.",
      },
      {
        title: "Real-time Updates",
        description: "Stay informed with instant data synchronization.",
      },
      {
        title: "Secure Data Storage",
        description: "Enterprise-grade security for sensitive operational data.",
      },
    ],
    Insurance: [
      {
        title: "Automated Claims Processing",
        description: "Reduce manual work and processing time significantly.",
      },
      {
        title: "Compliance Monitoring",
        description: "Ensure adherence to regulatory requirements automatically.",
      },
      {
        title: "Real-time Tracking",
        description: "Monitor claims status throughout the lifecycle.",
      },
      {
        title: "Advanced Analytics",
        description: "Gain insights to improve operations and reduce fraud.",
      },
    ],
    "Clinical Trials": [
      {
        title: "Sample Management",
        description: "Track samples from collection to analysis with full traceability.",
      },
      {
        title: "Workflow Automation",
        description: "Automate routine tasks and reduce manual errors.",
      },
      {
        title: "Compliance Tracking",
        description: "Meet regulatory requirements with built-in compliance tools.",
      },
      {
        title: "Real-time Analytics",
        description: "Monitor progress and quality metrics in real-time.",
      },
    ],
    "Internal tools / ops": [
      {
        title: "Customizable Learning Paths",
        description: "Tailor training programs to employee needs and skill levels.",
      },
      {
        title: "Progress Tracking",
        description: "Monitor learning outcomes and skill development.",
      },
      {
        title: "HR Integration",
        description: "Seamlessly connect with existing HR systems.",
      },
      {
        title: "Comprehensive Analytics",
        description: "Measure training effectiveness with detailed reporting.",
      },
    ],
  };

  return featureMap[industry] || [];
}
