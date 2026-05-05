"use client";

import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const StacketLens = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "stacket-lens")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default StacketLens;
