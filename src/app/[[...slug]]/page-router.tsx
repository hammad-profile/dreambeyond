"use client";

import { usePathname } from "next/navigation";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import FractionalCTO from "@/pages/FractionalCTO";
import CustomSoftware from "@/pages/CustomSoftware";
import Insights from "@/pages/Insights";
import CaseStudies from "@/pages/CaseStudies";
import StartHere from "@/pages/StartHere";
import Contact from "@/pages/Contact";
import Products from "@/pages/Products";
import Stacket from "@/pages/products/Stacket";
import Restro from "@/pages/products/Restro";
import BeyondAI from "@/pages/products/BeyondAI";
import StacketLens from "@/pages/case-studies/StacketLens";
import StacketLensMobile from "@/pages/case-studies/StacketLensMobile";
import StacketIMS from "@/pages/case-studies/StacketIMS";
import Peacock from "@/pages/case-studies/Peacock";
import GCCClaims from "@/pages/case-studies/GCCClaims";
import OOSA from "@/pages/case-studies/OOSA";
import MLS from "@/pages/case-studies/MLS";
import LIMS from "@/pages/case-studies/LIMS";
import ClinicalTrialManagement from "@/pages/case-studies/ClinicalTrialManagement";
import TicketManagement from "@/pages/case-studies/TicketManagement";
import WorkflowLaborManagement from "@/pages/case-studies/WorkflowLaborManagement";
import AITutor from "@/pages/case-studies/AITutor";
import AIResumeSorter from "@/pages/case-studies/AIResumeSorter";
import AIBusinessAnalyst from "@/pages/case-studies/AIBusinessAnalyst";
import ATOM from "@/pages/case-studies/ATOM";
import AgilityHealthReporter from "@/pages/case-studies/AgilityHealthReporter";

const routes: Record<string, React.ComponentType> = {
  "/": Index,
  "/fractional-cto": FractionalCTO,
  "/custom-software": CustomSoftware,
  "/products": Products,
  "/products/stacket": Stacket,
  "/products/restro": Restro,
  "/products/beyond-ai": BeyondAI,
  "/insights": Insights,
  "/case-studies": CaseStudies,
  "/case-studies/stacket-lens-3pl-wms": StacketLens,
  "/case-studies/stacket-lens-mobile-app": StacketLensMobile,
  "/case-studies/stacket-ims-omni-channel-inventory-management-system": StacketIMS,
  "/case-studies/peacock": Peacock,
  "/case-studies/claims-management-how-dream-beyond-transformed-the-gulf-coast-claims-gcc": GCCClaims,
  "/case-studies/oosa": OOSA,
  "/case-studies/mls": MLS,
  "/case-studies/lims-laboratory-management-system": LIMS,
  "/case-studies/clinical-trial-management": ClinicalTrialManagement,
  "/case-studies/ticket-management-for-computer-system-monitoring": TicketManagement,
  "/case-studies/workflow-and-labor-management-system": WorkflowLaborManagement,
  "/case-studies/ai-tutor": AITutor,
  "/case-studies/ai-resume-sorter": AIResumeSorter,
  "/case-studies/ai-business-analyst": AIBusinessAnalyst,
  "/case-studies/atom-2": ATOM,
  "/case-studies/agility-health-reporter": AgilityHealthReporter,
  "/start": StartHere,
  "/contact": Contact,
};

export function PageRouter() {
  const pathname = usePathname();
  const Component = pathname ? routes[pathname] ?? NotFound : NotFound;
  return <Component />;
}
