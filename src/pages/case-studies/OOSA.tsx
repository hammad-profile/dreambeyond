"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const OOSA = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "oosa")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default OOSA;
