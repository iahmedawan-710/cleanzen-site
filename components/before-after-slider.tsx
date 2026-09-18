"use client";

import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  before: string;
  after: string;
  label: string;
};

export function BeforeAfterSlider({ before, after, label }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = () => {
    dragging.current = true;
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (dragging.current) updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const stopDrag = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl bg-slate-100"
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={handleTouchMove}
      onTouchEnd={stopDrag}
    >
      <img
        src={after}
        alt={`${label} - after`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          alt={`${label} - before`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${containerRef.current?.clientWidth ?? 100}%` }}
          draggable={false}
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-sky-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        After
      </span>

      <div
        className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-sky-500"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <MoveHorizontal className="h-5 w-5 text-sky-600" />
        </div>
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-700 backdrop-blur-sm">
        {label}
      </p>
    </div>
  );
}
