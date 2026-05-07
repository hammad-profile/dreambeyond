"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const StacketIMS = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "stacket-ims")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default StacketIMS;
