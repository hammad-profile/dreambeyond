"use client";

import { StubPage } from "@/components/site/StubPage";

const Stacket = () => (
  <StubPage
    eyebrow="Product — Stacket"
    title={<><em className="text-brand-blue">Stacket.</em> Inventory & warehouse software for 3PL and retail.</>}
    intro="Built for operators who need accuracy at speed — receiving, putaway, picking, packing, and billing in one system."
    ctaLabel="Request a Stacket demo"
    secondaryLabel="Back to products"
    secondaryTo="/products"
    blocks={[
      {
        kind: "grid",
        title: "Built for operators",
        items: [
          { k: "Receiving", v: "ASN, mobile scan, exceptions handling." },
          { k: "Putaway & picking", v: "Strategies for speed and accuracy." },
          { k: "3PL billing", v: "Storage, handling, special charges automated." },
          { k: "Multi-client", v: "Tenant isolation with shared infrastructure." },
          { k: "Integrations", v: "Carriers, ERPs, marketplaces, and bespoke APIs." },
          { k: "Operational reporting", v: "What's slow, what's missing, what's costing you." },
        ],
      },
    ]}
  />
);
export default Stacket;
