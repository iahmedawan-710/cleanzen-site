import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  Navigation,
} from "lucide-react";
import { COMPANY, NEIGHBORHOODS } from "@/lib/constants";

const FOOTER_LINKS = [
  {
    title: "Services",
    links: [
      { label: "Standard Home Cleaning", href: "/services" },
      { label: "Deep Cleaning & Sanitization", href: "/services" },
      { label: "Move-In / Move-Out", href: "/services" },
      { label: "Apartment & Condo Cleaning", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Book Now", href: "/book-now" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold text-white">
                  Clean<span className="text-sky-400">zen</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Boston
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Boston&rsquo;s top-rated, background-checked cleaners. Book your
              home cleaning in 60 seconds with a 100% satisfaction guarantee.
              LGBTQ+ friendly &amp; fully insured.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition hover:bg-sky-500 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-sky-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition hover:text-sky-400"
                >
                  {COMPANY.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <a href={COMPANY.phoneHref} className="text-slate-400 transition hover:text-sky-400">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href={`mailto:${COMPANY.email}`} className="text-slate-400 transition hover:text-sky-400">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-sky-400" />
                <span className="text-slate-400">{COMPANY.hours}</span>
              </li>
              <li>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-sky-400"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Neighborhoods */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <h4 className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin className="h-4 w-4 text-sky-400" />
              Boston Areas We Serve:
            </h4>
            <div className="flex flex-wrap gap-2">
              {NEIGHBORHOODS.map((area) => (
                <span
                  key={area}
                  className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-sky-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-sky-400">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-sky-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
