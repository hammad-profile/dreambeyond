"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const GCCClaims = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "gcc-claims")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default GCCClaims;
