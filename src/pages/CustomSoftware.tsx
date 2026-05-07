"use client";

import '../styles/custom-software.css';
import { StubPage } from "@/components/site/StubPage";

const CustomSoftware = () => (
  <StubPage
    eyebrow="Execution"
    title={<>Custom software and AI systems, built with <em className="text-brand-blue">judgment</em>.</>}
    intro="Platforms, line-of-business applications, integrations, and AI agents — designed for real operations, not demo loops."
    secondaryLabel="See products we built"
    secondaryTo="/products"
    blocks={[
      {
        kind: "grid",
        title: "What we build",
        items: [
          { k: "Custom platforms", v: "Multi-tenant, role-based, built to scale." },
          { k: "AI agents", v: "Workflow-aware, with guardrails and observability." },
          { k: "Internal tools", v: "Operations dashboards, ops apps, admin systems." },
          { k: "Integrations", v: "ERP, CRM, accounting, telephony, and bespoke APIs." },
          { k: "Workflow automation", v: "Replace spreadsheets, email chains, manual handoffs." },
          { k: "Legacy modernization", v: "Carefully extract, replace, and re-architect." },
        ],
      },
    ]}
  />
);
export default CustomSoftware;
