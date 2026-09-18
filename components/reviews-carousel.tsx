"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {REVIEWS.map((review, i) => (
            <div key={i} className="min-w-full px-1">
              <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200/60 sm:p-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-sky-100" />
                </div>
                <p className="text-lg leading-relaxed text-slate-700">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-sky-100"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-slate-900">{review.name}</p>
                      {review.verified && (
                        <BadgeCheck className="h-4 w-4 text-sky-500" />
                      )}
                    </div>
                    <p className="text-sm text-slate-500">
                      {review.location} · Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-600 active:scale-90"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === active
                  ? "w-8 bg-sky-500"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-sky-300 hover:text-sky-600 active:scale-90"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
