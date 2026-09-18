"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "hero" | "card";
  onEstimate?: (price: number, beds: number, baths: number) => void;
};

export function QuickEstimator({ variant = "hero", onEstimate }: Props) {
  const [zip, setZip] = useState("");
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [showPrice, setShowPrice] = useState(false);

  const price = useMemo(() => {
    const base = 89;
    const bedCost = beds * 25;
    const bathCost = baths * 20;
    return base + bedCost + bathCost;
  }, [beds, baths]);

  const handleEstimate = () => {
    setShowPrice(true);
    onEstimate?.(price, beds, baths);
  };

  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "rounded-2xl bg-white/90 shadow-xl ring-1 ring-slate-200/60 backdrop-blur-sm",
        isHero ? "p-6 sm:p-7" : "p-5"
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100">
          <Sparkles className="h-5 w-5 text-sky-600" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Instant Price Estimate</h3>
          <p className="text-xs text-slate-500">No signup required</p>
        </div>
      </div>

      <div className={cn("grid gap-4", isHero ? "sm:grid-cols-2" : "grid-cols-1")}>
        <div className={isHero ? "sm:col-span-2" : ""}>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Zip Code
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              placeholder="02116"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
            />
          </div>
        </div>

        <Counter label="Bedrooms" value={beds} onChange={setBeds} min={0} max={10} />
        <Counter label="Bathrooms" value={baths} onChange={setBaths} min={1} max={8} />
      </div>

      <button
        onClick={handleEstimate}
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.98]"
      >
        See Instant Price
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {showPrice && (
        <div className="mt-4 animate-fade-up rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 p-4 text-center ring-1 ring-sky-100">
          <p className="text-sm font-medium text-slate-600">Your estimated price</p>
          <p className="mt-1 text-3xl font-extrabold text-slate-900">
            ${price}
            <span className="text-base font-medium text-slate-500"> /clean</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {beds} bed · {baths} bath · Final price confirmed at booking
          </p>
        </div>
      )}
    </div>
  );
}

function Counter({
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
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-1">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 active:scale-90"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="font-bold text-slate-900">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-slate-100 active:scale-90"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
