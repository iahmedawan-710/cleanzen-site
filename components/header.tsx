"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
          <span className="hidden md:inline">
            Boston&rsquo;s Top-Rated Cleaners | Get 15% OFF First Recurring Clean: Code{" "}
            <span className="font-bold text-sky-300">CLEAN15</span>
          </span>
          <span className="hidden sm:inline md:hidden">
            15% OFF First Recurring Clean:{" "}
            <span className="font-bold text-sky-300">CLEAN15</span>
          </span>
          <span className="sm:hidden">
            15% OFF:{" "}
            <span className="font-bold text-sky-300">CLEAN15</span>
          </span>
          <span className="mx-2 hidden h-3 w-px bg-white/20 sm:inline-block" />
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-1.5 transition hover:text-sky-300"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Call Us:</span> {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-md"
            : "bg-white"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 shadow-lg shadow-sky-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Clean<span className="text-sky-500">zen</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Boston
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-sky-50 text-sky-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/book-now"
              className="group hidden items-center gap-1.5 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30 active:scale-95 sm:inline-flex"
            >
              Book in 60 Secs
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="animate-fade-in border-t border-slate-100 bg-white lg:hidden">
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-now"
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-sky-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-600 active:scale-95"
              >
                Book in 60 Secs
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
