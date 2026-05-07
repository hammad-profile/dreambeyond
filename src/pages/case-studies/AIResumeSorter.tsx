"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const AIResumeSorter = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "ai-resume-sorter")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default AIResumeSorter;
