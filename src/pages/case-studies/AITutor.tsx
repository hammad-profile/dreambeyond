"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const AITutor = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "ai-tutor")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default AITutor;
