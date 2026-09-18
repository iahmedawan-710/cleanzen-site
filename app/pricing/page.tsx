"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Minus,
  Plus,
  Check,
  ArrowRight,
  Sparkles,
  Calendar,
  Tag,
  Receipt,
} from "lucide-react";
import {
  FREQUENCIES,
  ADD_ONS,
  type Frequency,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [addOns, setAddOns] = useState<Record<string, boolean>>({});

  const basePrice = useMemo(() => {
    return 89 + beds * 25 + baths * 20;
  }, [beds, baths]);

  const addOnTotal = useMemo(() => {
    return ADD_ONS.reduce((sum, addon) => {
      if (addOns[addon.id]) return sum + addon.price;
      return sum;
    }, 0);
  }, [addOns]);

  const freqData = FREQUENCIES.find((f) => f.id === frequency)!;
  const subtotal = basePrice + addOnTotal;
  const discount = subtotal * freqData.discount;
  const total = subtotal - discount;

  const toggleAddOn = (id: string) => {
    setAddOns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
            <Tag className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Build Your Boston Cleaning Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            No hidden fees. No surprises. Pick your frequency, choose add-ons,
            and see your exact Boston cleaning price in real time.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: Controls */}
            <div className="space-y-6 lg:col-span-2">
              {/* Frequency */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-sky-600" />
                  <h2 className="text-lg font-bold text-slate-900">How Often?</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {FREQUENCIES.map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => setFrequency(freq.id)}
                      className={cn(
                        "relative rounded-xl border-2 p-4 text-center transition-all",
                        frequency === freq.id
                          ? "border-sky-500 bg-sky-50 shadow-md shadow-sky-100"
                          : "border-slate-200 hover:border-sky-300 hover:bg-slate-50"
                      )}
                    >
                      {freq.discount > 0 && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-2.5 py-0.5 text-xs font-bold text-white">
                          Save {freq.discount * 100}%
                        </span>
                      )}
                      <p className="font-semibold text-slate-900">{freq.label}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {freq.id === "one-time" ? "One visit" : "Recurring"}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedroom/Bathroom */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <h2 className="mb-4 text-lg font-bold text-slate-900">Home Size</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <CounterCard label="Bedrooms" value={beds} onChange={setBeds} min={0} max={10} />
                  <CounterCard label="Bathrooms" value={baths} onChange={setBaths} min={1} max={8} />
                </div>
              </div>

              {/* Add-ons */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-sky-600" />
                  <h2 className="text-lg font-bold text-slate-900">Add-Ons</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ADD_ONS.map((addon) => {
                    const active = !!addOns[addon.id];
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={cn(
                          "flex items-center justify-between rounded-xl border-2 p-4 transition-all",
                          active
                            ? "border-sky-500 bg-sky-50"
                            : "border-slate-200 hover:border-sky-300"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <addon.icon className="h-6 w-6 text-sky-600" />
                          <div className="text-left">
                            <p className="font-semibold text-slate-900">{addon.label}</p>
                            <p className="text-sm text-slate-500">+${addon.price}</p>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-lg border-2 transition",
                            active
                              ? "border-sky-500 bg-sky-500 text-white"
                              : "border-slate-300"
                          )}
                        >
                          {active && <Check className="h-4 w-4" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-sky-400" />
                  <h2 className="text-lg font-bold">Price Summary</h2>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <Row label={`Base clean (${beds}bd / ${baths}ba)`} value={`$${basePrice}`} />
                  {ADD_ONS.filter((a) => addOns[a.id]).map((a) => (
                    <Row key={a.id} label={a.label} value={`+$${a.price}`} />
                  ))}
                  {freqData.discount > 0 && (
                    <Row
                      label={`${freqData.label} discount (${freqData.discount * 100}%)`}
                      value={`-$${discount.toFixed(0)}`}
                      green
                    />
                  )}
                </div>

                <div className="my-5 h-px bg-white/15" />

                <div className="flex items-end justify-between">
                  <span className="text-sm text-slate-300">
                    {freqData.id === "one-time" ? "Total" : "Per clean"}
                  </span>
                  <div>
                    <span className="text-3xl font-extrabold">
                      ${total.toFixed(0)}
                    </span>
                  </div>
                </div>

                {freqData.discount > 0 && (
                  <p className="mt-2 rounded-lg bg-green-500/15 px-3 py-2 text-sm font-medium text-green-300">
                    You save ${discount.toFixed(0)} with {freqData.label.toLowerCase()} cleaning!
                  </p>
                )}

                <Link
                  href="/book-now"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 active:scale-95"
                >
                  Book This Clean
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <p className="mt-3 text-center text-xs text-slate-400">
                  Free cancellation up to 24 hours before your appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value, green }: { label: string; value: string; green?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-300">{label}</span>
      <span className={cn("font-semibold", green ? "text-green-300" : "text-white")}>
        {value}
      </span>
    </div>
  );
}

function CounterCard({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="rounded-xl border-2 border-slate-200 p-4">
      <p className="mb-3 text-sm font-medium text-slate-700">{label}</p>
      <div className="flex items-center justify-between">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-90"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-90"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
