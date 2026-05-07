"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const StacketLensMobile = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "stacket-lens-mobile")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default StacketLensMobile;
