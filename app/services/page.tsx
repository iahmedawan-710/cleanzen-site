import Link from "next/link";
import { Check, ArrowRight, Sparkles, Shield, Clock, Heart } from "lucide-react";
import { SERVICE_CHECKLISTS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
            <Sparkles className="h-4 w-4" />
            Our Services
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Cleaning Services Built for Boston
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            From Beacon Hill apartments to Brookline family homes, every package
            is performed by vetted Boston professionals with a satisfaction
            guarantee.
          </p>
        </div>
      </section>

      {/* Service Breakdowns */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6">
          {SERVICE_CHECKLISTS.map((service, idx) => (
            <div
              key={service.type}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/60">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 shadow-lg backdrop-blur-sm">
                    <service.icon className="h-6 w-6 text-sky-600" />
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-3 text-lg text-slate-600">{service.description}</p>

                <div className="mt-6 space-y-5">
                  {service.checklist.map((section) => (
                    <div key={section.category}>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-sky-600">
                        {section.category}
                      </h3>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                              <Check className="h-3.5 w-3.5 text-green-600" />
                            </span>
                            <span className="text-sm text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book-now"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 active:scale-95"
                >
                  Book This Service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Fully Insured & Bonded", desc: "Every cleaner is background-checked and fully insured for your peace of mind." },
              { icon: Heart, title: "LGBTQ+ Friendly", desc: "We're proud to be an inclusive, welcoming business for all Boston residents." },
              { icon: Clock, title: "On-Time Guarantee", desc: "We respect your schedule. If we're late, you get $25 off your next clean." },
              { icon: Sparkles, title: "100% Satisfaction", desc: "Not happy? We'll come back and re-clean for free. That's our promise." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200/60"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50">
                  <item.icon className="h-7 w-7 text-sky-600" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
