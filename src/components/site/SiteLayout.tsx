"use client";

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type SiteLayoutProps = {
  children: React.ReactNode;
  stickyHeader?: boolean;
};

export const SiteLayout = ({
  children,
  stickyHeader = true,
}: SiteLayoutProps) => (
  <div className="min-h-screen flex flex-col bg-background">
    <SiteHeader sticky={stickyHeader} />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </div>
);