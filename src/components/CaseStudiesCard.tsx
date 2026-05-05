"use client";

import Link from "next/link";
import { CaseStudy } from "@/lib/caseStudiesData";

interface CaseStudiesCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudiesCard = ({ caseStudy }: CaseStudiesCardProps) => {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card/90 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div
          className={`relative h-44 overflow-hidden bg-gradient-to-br ${caseStudy.color || "from-slate-700 to-slate-900"}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_35%)]" />
          <div className="absolute -right-10 top-4 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute left-5 bottom-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
            {caseStudy.industry}
          </div>
        </div>

        <div className="relative flex flex-1 flex-col gap-5 p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-background/95 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-brand-blue">
              {caseStudy.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{caseStudy.subtitle}</p>
          </div>

          <p className="text-sm leading-6 text-foreground line-clamp-4">
            {caseStudy.description}
          </p>

          <div className="mt-auto flex items-center gap-3 text-sm font-semibold text-brand-blue">
            <span>Open case study</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
