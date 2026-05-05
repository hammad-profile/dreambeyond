"use client";

import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies } from "@/lib/caseStudiesData";

const Peacock = () => {
  const caseStudy = caseStudies.find((cs) => cs.id === "peacock")!;
  return <CaseStudyDetail caseStudy={caseStudy} />;
};

export default Peacock;
