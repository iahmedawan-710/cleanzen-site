import Link from "next/link";
import {
  Sparkles,
  Shield,
  Users,
  Heart,
  Award,
  Target,
  Eye,
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";
import { COMPANY, NEIGHBORHOODS, TRUST_BADGES } from "@/lib/constants";

export default function AboutPage() {
  const stats = [
    { value: "417+", label: "Verified Google Reviews" },
    { value: "150+", label: "Vetted Boston Cleaners" },
    { value: TRUST_BADGES.rating, label: "Average Rating" },
    { value: "8+", label: "Boston Neighborhoods" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      desc: "Every cleaner is background-checked, insured, and bonded. Your Boston home is in safe hands.",
    },
    {
      icon: Heart,
      title: "Customer First",
      desc: "We re-clean for free if you're not 100% satisfied. Your happiness is our guarantee.",
    },
    {
      icon: Award,
      title: "Quality Always",
      desc: "We hold our team to the highest cleaning standards with a 50-point checklist.",
    },
    {
      icon: Users,
      title: "Inclusive & Welcoming",
      desc: "Proudly LGBTQ+ friendly. We serve every Bostonian with respect and care.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
                <Sparkles className="h-4 w-4" />
                About Cleanzen Boston
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Boston&rsquo;s Most Trusted Cleaning Service
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Founded in the heart of Boston, Cleanzen started with a simple
                idea: booking a professional home cleaning should be as easy as
                ordering a coffee. Today, we serve hundreds of homes across
                Boston&rsquo;s neighborhoods with a team of vetted,
                background-checked professionals who take pride in their work.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 rounded-full bg-pink-50 px-4 py-1.5 text-sm font-medium text-pink-600">
                  <Heart className="h-4 w-4" />
                  LGBTQ+ Friendly &amp; Fully Insured
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
                  <Shield className="h-4 w-4" />
                  Background-Checked Pros
                </div>
              </div>
              <Link
                href="/book-now"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 active:scale-95"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6223044/pexels-photo-6223044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Cleanzen Boston cleaner at work"
                className="rounded-2xl shadow-xl ring-1 ring-slate-200/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 p-6 text-center ring-1 ring-sky-100"
              >
                <p className="text-3xl font-extrabold text-sky-600 sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                <Target className="h-6 w-6 text-sky-600" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                To give Bostonians their time back by delivering consistently
                exceptional cleaning services with zero hassle. We believe
                everyone deserves to come home to a spotless space without
                spending their precious free time scrubbing floors.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                <Eye className="h-6 w-6 text-sky-600" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                To be the most trusted home cleaning service in Boston by
                combining technology with human care. We&rsquo;re building a
                future where booking a clean is effortless, cleaners are treated
                with respect, and every Boston home sparkles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              The values that guide every clean we do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/60 transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 shadow-lg shadow-sky-500/20">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Neighborhoods */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Visit Our Boston Office
              </h2>
              <p className="mt-3 text-slate-300">
                We&rsquo;re located right in the heart of Back Bay. Stop by or
                give us a call — we&rsquo;d love to chat about your cleaning needs.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                  <a
                    href={COMPANY.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition hover:text-sky-400"
                  >
                    {COMPANY.address}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sky-400" />
                  <a href={COMPANY.phoneHref} className="text-slate-300 transition hover:text-sky-400">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-600 active:scale-95"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Boston Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {NEIGHBORHOODS.map((area) => (
                  <span
                    key={area}
                    className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
                  >
                    <Check className="h-4 w-4 text-sky-400" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
