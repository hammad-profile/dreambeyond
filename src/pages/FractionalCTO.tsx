"use client";

import '../styles/fractional-cto.css';
import { StubPage } from "@/components/site/StubPage";

const FractionalCTO = () => (
  <StubPage
    eyebrow="Advisory"
    title={<>Leadership for businesses that need <em className="text-brand-blue">clarity</em> before they need more code.</>}
    intro="Get senior technology leadership without the cost and delay of a full-time CTO. Strategy, oversight, and judgment — applied where it matters."
    ctaLabel="Book a CTO strategy session"
    secondaryLabel="See execution"
    secondaryTo="/execution"
    blocks={[
      {
        kind: "list",
        title: "What I help with",
        items: [
          "Product and platform strategy",
          "Architecture and system design",
          "AI implementation planning",
          "Vendor evaluation",
          "Team process improvement",
          "Codebase and roadmap review",
          "Rescue of weak or stalled projects",
        ],
      },
      {
        kind: "grid",
        title: "Who this is for",
        items: [
          { k: "Founder-led", v: "Companies needing a senior technical partner." },
          { k: "SMBs", v: "Growing software needs without a full-time CTO." },
          { k: "Agency users", v: "Firms lacking technical oversight on vendors." },
          { k: "AI-fast teams", v: "Moving too fast with AI-generated code." },
          { k: "Pre-scale", v: "Preparing for compliance, scale, modernization." },
          { k: "Rescue mode", v: "Stalled projects, lost confidence, unclear next steps." },
        ],
      },
    ]}
  />
);
export default FractionalCTO;
