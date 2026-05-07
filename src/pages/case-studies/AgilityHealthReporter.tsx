"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const AgilityHealthReporter = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "agility-health-reporter")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default AgilityHealthReporter;
