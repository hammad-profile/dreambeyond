"use client";

import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/assets/whitelogo.png";

export const SiteFooter = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] blob-blue opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] blob-blue-deep opacity-20" />

      <div className="container relative py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center mb-8">
              <Image
                src={whiteLogo}
                alt="Dream Beyond"
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-background/70 max-w-md text-pretty leading-relaxed text-lg">
              Technology built with judgment. AI used with discipline.
              Systems designed for real business.
            </p>
          
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
