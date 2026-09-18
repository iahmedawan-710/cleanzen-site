import { TRUST_BADGES } from "@/lib/constants";

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {TRUST_BADGES.items.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50">
            <badge.icon className="h-6 w-6 text-sky-600" />
          </div>
          <div>
            <p className="font-semibold text-slate-900">{badge.label}</p>
            <p className="text-sm text-slate-500">{badge.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
