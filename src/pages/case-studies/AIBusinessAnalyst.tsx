"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const AIBusinessAnalyst = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "ai-business-analyst")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default AIBusinessAnalyst;
