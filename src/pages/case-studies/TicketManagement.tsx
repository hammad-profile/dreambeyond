"use client";

import '../../styles/case-study-detail.css';
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const TicketManagement = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "ticket-management")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default TicketManagement;
