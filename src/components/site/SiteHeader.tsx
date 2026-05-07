"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { to: "/advisory", label: "Advisory" },
  { to: "/execution", label: "Execution" },
  { to: "/products", label: "Products" },
  { to: "/education", label: "Education" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
];

type SiteHeaderProps = {
  sticky?: boolean;
};

export const SiteHeader = ({ sticky = true }: SiteHeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";

  const isHome = pathname === "/";

  const transparentOnHero = sticky && isHome && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const headerPositionClass = sticky
    ? "fixed top-0 inset-x-0"
    : "relative";

  const headerStyleClass = transparentOnHero
    ? "bg-transparent text-white"
    : "bg-background/95 text-foreground border-b border-border shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl";

  const navShellClass = transparentOnHero
    ? "bg-white/10 border-white/15"
    : "bg-secondary/80 border-border";

  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    if (transparentOnHero) {
      return isActive
        ? "bg-white text-foreground shadow-soft"
        : "text-white/75 hover:text-white hover:bg-white/10";
    }

    return isActive
      ? "bg-background text-foreground shadow-soft"
      : "text-muted-foreground hover:text-foreground hover:bg-background/70";
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className={`${headerPositionClass} z-50 transition-all duration-300 ${headerStyleClass}`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className={`font-display text-2xl tracking-tight md:text-3xl ${
              transparentOnHero ? "text-white" : "text-foreground"
            }`}
          >
            Dream Beyond
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-1 rounded-full border p-1 backdrop-blur-md lg:flex ${navShellClass}`}
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${getNavLinkClass(
                item.to
              )}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/start"
            className={`text-sm transition-colors ${
              transparentOnHero
                ? "text-white/75 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Start here
          </Link>

          <Link
            href="/contact"
            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:shadow-glow ${
              transparentOnHero
                ? "bg-white text-foreground"
                : "bg-foreground text-background"
            }`}
          >
            <span className="relative z-10">Book a call</span>
            <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>

        <button
          className={`rounded-full p-2 transition-colors lg:hidden ${
            transparentOnHero
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-secondary"
          }`}
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle menu"
          aria-expanded={open}
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
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container flex flex-col gap-4 py-6">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`font-display text-2xl transition-colors ${
                    pathname === item.to || pathname.startsWith(`${item.to}/`)
                      ? "text-brand-blue"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/start" className="text-muted-foreground">
                Start here
              </Link>

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
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
