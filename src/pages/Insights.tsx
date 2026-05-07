"use client";

import '../styles/insights.css';
import { StubPage } from "@/components/site/StubPage";

const Insights = () => (
  <StubPage
    eyebrow="Education"
    title={<>Learn software engineering in the AI era from someone who built through the <em className="text-brand-blue">hard parts</em>.</>}
    intro="Clear lessons on architecture, AI-assisted development, security, delivery, and technical leadership."
    ctaLabel="Get notified"
    blocks={[
      {
        kind: "list",
        title: "What you'll find",
        items: [
          "AI in software engineering — what works, what breaks",
          "Architecture mistakes — patterns that quietly destroy projects",
          "Security and scaling issues — what teams miss until it hurts",
          "How founders should evaluate developers",
          "How juniors should use AI properly",
          "Real software teardown content",
          "CTO lessons from the field",
        ],
      },
    ]}
  />
);
export default Insights;
