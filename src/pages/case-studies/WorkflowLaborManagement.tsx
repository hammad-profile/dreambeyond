"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const WorkflowLaborManagement = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "workflow-labor-management")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default WorkflowLaborManagement;
