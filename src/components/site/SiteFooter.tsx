"use client";

import Link from "next/link";

export const SiteFooter = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] blob-blue opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] blob-blue-deep opacity-20" />

      <div className="container relative py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            {/* <Link href="/" className="flex items-center gap-2">
              <span className="inline-block w-10 h-10 rounded-full bg-gradient-brand animate-gradient" />
              <span className="font-display text-4xl tracking-tight">
                Dream<span className="text-gradient-brand">Beyond</span>
              </span>
            </Link> */}
            <p className="mt-8 text-background/70 max-w-md text-pretty leading-relaxed text-lg">
              Technology built with judgment. AI used with discipline.
              Systems designed for real business.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 label-eyebrow text-background/50">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Est. systems thinking since 1999
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterCol title="Advisory" links={[
              ["Advisory", "/advisory"],
              ["Execution", "/execution"],
              ["Start here", "/start"],
            ]} />
            <FooterCol title="Products" links={[
              ["Stacket", "/products/stacket"],
              ["Restro", "/products/restro"],
              ["Beyond AI", "/products/beyond-ai"],
            ]} />
            <FooterCol title="Education" links={[
              ["Education", "/education"],
              ["Case Studies", "/case-studies"],
              ["Contact", "/contact"],
            ]} />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 label-eyebrow text-background/50">
          <span>© {new Date().getFullYear()} Dream Beyond. All rights reserved.</span>
          <span>Led by Ali Kitabi · 25+ yrs of engineering judgment</span>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }: { title: string; links: [string, string][] }) => (
  <div>
    <h4 className="label-eyebrow text-brand-blue mb-5">{title}</h4>
    <ul className="space-y-3">
      {links.map(([label, to]) => (
        <li key={to}>
          <Link href={to} className="text-background hover:text-brand-blue transition-colors text-[15px]">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
