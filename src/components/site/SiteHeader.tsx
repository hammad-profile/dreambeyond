"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/fractional-cto", label: "Fractional CTO" },
  { to: "/custom-software", label: "Custom Software" },
  { to: "/products", label: "Products" },
  { to: "/insights", label: "Insights" },
  { to: "/case-studies", label: "Case Studies" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          {/* <span className="relative inline-block w-8 h-8 rounded-full bg-gradient-brand animate-gradient" /> */}
          <span className="font-display text-2xl md:text-3xl text-foreground tracking-tight">
            Dream Beyond
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-secondary/60 backdrop-blur-md rounded-full p-1 border border-border">
          {nav.map((n) => {
            const isActive = pathname === n.to;
            return (
              <Link
                key={n.to}
                href={n.to}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${isActive ? "bg-background text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/start" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Start here
          </Link>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-medium rounded-full overflow-hidden transition-all hover:shadow-glow"
          >
            <span className="relative z-10">Book a call</span>
            <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity animate-gradient" />
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground p-2 rounded-full hover:bg-secondary"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <Link key={n.to} href={n.to} className="text-foreground text-2xl font-display">
                  {n.label}
                </Link>
              ))}
              <Link href="/start" className="text-muted-foreground">Start here</Link>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 text-sm font-medium rounded-full"
              >
                Book a strategy call <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
