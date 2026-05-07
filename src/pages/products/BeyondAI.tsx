"use client";

import '../../styles/product-detail.css';
import { StubPage } from "@/components/site/StubPage";

const BeyondAI = () => (
  <StubPage
    eyebrow="Product — Beyond AI"
    title={<><em className="text-brand-blue">Beyond AI.</em> Specialized AI systems for real workflows.</>}
    intro="AI agents and assistants built around concrete business bottlenecks — with the guardrails, observability, and judgment most rollouts skip."
    ctaLabel="Discuss an AI build"
    secondaryLabel="Back to products"
    secondaryTo="/products"
    blocks={[
      {
        kind: "list",
        title: "What we deliver",
        items: [
          "Workflow-aware AI agents that act on real data",
          "RAG systems with traceable, auditable outputs",
          "Internal copilots for ops, sales, and support",
          "AI-assisted document and form processing",
          "Voice interfaces for field and clinical use",
          "Production guardrails: evals, logging, fallback policy",
        ],
      },
    ]}
  />
);
export default BeyondAI;
