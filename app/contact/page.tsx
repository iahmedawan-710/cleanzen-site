"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Navigation,
  Heart,
  Shield,
} from "lucide-react";
import { COMPANY, NEIGHBORHOODS } from "@/lib/constants";

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: COMPANY.hours,
    href: null,
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            We&rsquo;re Here to Help Boston
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Questions about your booking, a special request, or just want to say
            hi? We&rsquo;d love to hear from you.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full bg-pink-50 px-4 py-1.5 text-sm font-medium text-pink-600">
              <Heart className="h-4 w-4" />
              LGBTQ+ Friendly
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
              <Shield className="h-4 w-4" />
              Fully Insured &amp; Bonded
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-5">
              {CONTACT_METHODS.map((method) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/60 transition hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                      <method.icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{method.label}</p>
                      <p className="font-semibold text-slate-900">{method.value}</p>
                    </div>
                  </div>
                );
                return method.href ? (
                  <a key={method.label} href={method.href}>
                    {content}
                  </a>
                ) : (
                  <div key={method.label}>{content}</div>
                );
              })}

              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-sky-400" />
                  <h3 className="font-bold">Our Boston Office</h3>
                </div>
                <p className="text-sm text-slate-300">{COMPANY.address}</p>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-sky-400"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Get Directions
                </a>
              </div>

              <div className="rounded-2xl bg-sky-50 p-6 ring-1 ring-sky-100">
                <h3 className="mb-3 text-sm font-bold text-slate-900">Boston Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {NEIGHBORHOODS.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg bg-white px-3 py-1.5 text-sm text-slate-600 ring-1 ring-slate-200/60"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-green-50 p-12 text-center ring-1 ring-green-100">
                  <div className="flex h-16 w-16 animate-scale-in items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">Message Sent!</h2>
                  <p className="mt-2 text-slate-600">
                    Thanks for reaching out, {name || "friend"}. We&rsquo;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8"
                >
                  <h2 className="mb-6 text-xl font-bold text-slate-900">Send Us a Message</h2>
                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Your Name"
                        value={name}
                        onChange={setName}
                        placeholder="John Smith"
                        required
                      />
                      <Field
                        label="Email Address"
                        value={email}
                        onChange={setEmail}
                        placeholder="john@example.com"
                        type="email"
                        required
                      />
                    </div>
                    <Field
                      label="Subject"
                      value={subject}
                      onChange={setSubject}
                      placeholder="How can we help?"
                      required
                    />
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what you need..."
                        required
                        rows={5}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 active:scale-95 sm:w-auto"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
      />
    </div>
  );
}
