"use client";

import Link from "next/link";
import {
  Star,
  Sparkles,
  ArrowRight,
  Check,
  Clock,
  Users,
  Heart,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";
import { QuickEstimator } from "@/components/quick-estimator";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { TrustBadges } from "@/components/trust-badges";
import { SERVICE_TYPES, BEFORE_AFTER_IMAGES, TRUST_BADGES, COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl" />
          <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
              <Sparkles className="h-4 w-4" />
              Boston&rsquo;s #1 Rated Cleaning Service
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Book Your Boston Home Cleaning in{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                60 Seconds
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
              Trusted, background-checked cleaners in Boston, MA. 100%
              Satisfaction Guaranteed.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {TRUST_BADGES.rating} · {TRUST_BADGES.reviewCount}+ Google reviews
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-600">
                <Heart className="h-4 w-4" />
                LGBTQ+ Friendly &amp; Fully Insured
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-now"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-xl active:scale-95"
              >
                Book in 60 Secs
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 active:scale-95"
              >
                See Pricing
              </Link>
            </div>
          </div>

          <div className="animate-fade-up lg:pl-8" style={{ animationDelay: "0.15s" }}>
            <QuickEstimator variant="hero" />

            <div className="mt-5 flex items-center justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green-500" /> No signup
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green-500" /> Instant price
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green-500" /> Free cancel
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <TrustBadges />
        </div>
      </section>

      {/* Germ-Free Promo Card */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-8 shadow-xl sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <FlaskConical className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Germ-Free Deep Cleaning
                </h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-sky-50 sm:text-lg">
                  Did you know germs can live on kitchen counters for up to 4
                  hours? Our deep cleaning protocol eradicates{" "}
                  <span className="font-bold text-white">99.9% of bacteria</span>,
                  keeping your Boston home safe and spotless.
                </p>
              </div>
              <Link
                href="/book-now"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-sky-600 shadow-lg transition-all hover:bg-slate-50 active:scale-95"
              >
                Book Deep Clean
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Cleaning Services
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Tailored for Boston homes, from Back Bay brownstones to Seaport condos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_TYPES.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  {service.popular && (
                    <span className="absolute right-3 top-3 rounded-full bg-sky-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      Most Popular
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow-lg backdrop-blur-sm">
                    <service.icon className="h-5 w-5 text-sky-600" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">
                      ${service.basePrice}
                      <span className="text-sm font-medium text-slate-500">+</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-sky-600 transition group-hover:gap-2">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              See the Transformation
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Drag the slider to see the difference our Boston cleaners make.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {BEFORE_AFTER_IMAGES.map((img, i) => (
              <BeforeAfterSlider
                key={i}
                before={img.before}
                after={img.after}
                label={img.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Three simple steps to a spotless Boston home.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Clock,
                step: "01",
                title: "Book in 60 Seconds",
                desc: "Pick your service, enter your details, and choose a time. It's that fast.",
              },
              {
                icon: Users,
                step: "02",
                title: "We Match You",
                desc: "We pair you with a vetted, background-checked cleaner in your Boston neighborhood.",
              },
              {
                icon: Heart,
                step: "03",
                title: "Relax & Enjoy",
                desc: "Come home to a spotless space. 100% satisfaction guaranteed, every time.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-md"
              >
                <span className="absolute right-6 top-4 text-5xl font-extrabold text-sky-50">
                  {item.step}
                </span>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 shadow-lg shadow-sky-500/20">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {TRUST_BADGES.rating} Stars from {TRUST_BADGES.reviewCount}+ verified Google reviews
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What Boston Says About Us
            </h2>
          </div>

          <ReviewsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready for a Spotless Boston Home?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Join hundreds of happy Boston customers who trust Cleanzen with their
            homes. Book in 60 seconds and get 15% off your first recurring clean.
          </p>
          <Link
            href="/book-now"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-2xl active:scale-95"
          >
            Book in 60 Secs
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            {COMPANY.address} · {COMPANY.phone}
          </p>
        </div>
      </section>
    </>
  );
}
