"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const ATOM = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "atom")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default ATOM;
