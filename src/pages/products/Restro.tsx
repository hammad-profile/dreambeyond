"use client";

import '../../styles/product-detail.css';
import { StubPage } from "@/components/site/StubPage";

const Restro = () => (
  <StubPage
    eyebrow="Product — Restro"
    title={<><em className="text-brand-blue">Restro.</em> Catering & restaurant operations technology.</>}
    intro="Smoother ordering, faster invoicing, cleaner fulfillment — built around how catering teams actually work."
    ctaLabel="Request a Restro demo"
    secondaryLabel="Back to products"
    secondaryTo="/products"
    blocks={[
      {
        kind: "grid",
        title: "Where Restro fits",
        items: [
          { k: "Ordering", v: "Streamlined intake across channels." },
          { k: "Invoicing", v: "Quote → invoice → paid, without friction." },
          { k: "Fulfillment", v: "Kitchen prep, dispatch, and delivery coordinated." },
          { k: "Menu & pricing", v: "Versioned, role-controlled, audit-friendly." },
          { k: "Customer ops", v: "Repeat orders, accounts, contracts." },
          { k: "Reporting", v: "Margin, waste, and performance — clearly." },
        ],
      },
    ]}
  />
);
export default Restro;
