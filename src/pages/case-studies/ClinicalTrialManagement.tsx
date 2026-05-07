"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const ClinicalTrialManagement = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "clinical-trial-management")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default ClinicalTrialManagement;
