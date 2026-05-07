"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const MLS = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "mls")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default MLS;
