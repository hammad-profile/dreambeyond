"use client";

import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const TicketManagement = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "ticket-management")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default TicketManagement;
