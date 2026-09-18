"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CreditCard,
  MapPin,
  Sparkles,
  Clock,
  CheckCircle2,
  Lock,
  User,
  Mail,
  Phone,
} from "lucide-react";
import {
  FREQUENCIES,
  ADD_ONS,
  SERVICE_TYPES,
  type Frequency,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const STEPS = ["Service & Size", "Date & Time", "Address & Contact"];

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
];

export default function BookNowPage() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("standard");
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [addOns, setAddOns] = useState<Record<string, boolean>>({});
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Boston");
  const [state, setState] = useState("MA");
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedService = SERVICE_TYPES.find((s) => s.id === service)!;
  const freqData = FREQUENCIES.find((f) => f.id === frequency)!;

  const basePrice = 89 + beds * 25 + baths * 20;
  const addOnTotal = ADD_ONS.reduce((sum, a) => (addOns[a.id] ? sum + a.price : sum), 0);
  const subtotal = basePrice + addOnTotal;
  const discount = subtotal * freqData.discount;
  const total = subtotal - discount;

  const toggleAddOn = (id: string) =>
    setAddOns((prev) => ({ ...prev, [id]: !prev[id] }));

  // Calendar generation
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const monthName = today.toLocaleString("default", { month: "long" });

  const canProceed = () => {
    if (step === 0) return service && beds >= 0 && baths >= 1;
    if (step === 1) return selectedDate !== null && selectedTime !== null;
    if (step === 2) return address && city && zip && name && email && phone;
    return false;
  };

  if (submitted) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-sky-50 to-white py-20">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="mx-auto flex h-20 w-20 animate-scale-in items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
            Booking Confirmed!
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Your <span className="font-semibold text-sky-600">{selectedService.name}</span> is
            scheduled for <span className="font-semibold text-slate-900">{monthName} {selectedDate}</span> at{" "}
            <span className="font-semibold text-slate-900">{selectedTime}</span>.
          </p>
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/60">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Estimated Total</span>
              <span className="text-2xl font-extrabold text-slate-900">${total.toFixed(0)}</span>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-sky-50 px-4 py-3 text-sm text-sky-700">
              <Check className="h-4 w-4" />
              A confirmation has been sent to {email}. We&rsquo;ll call {phone} to finalize payment.
            </div>
          </div>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-600 active:scale-95"
          >
            Back to Home
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Book Your Boston Cleaning
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Three quick steps and you&rsquo;re done. It really takes 60 seconds.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {STEPS.map((label, i) => (
                <div key={i} className="flex flex-1 items-center last:flex-none">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold transition-all",
                        i < step && "border-sky-500 bg-sky-500 text-white",
                        i === step && "border-sky-500 bg-sky-50 text-sky-600 ring-4 ring-sky-100",
                        i > step && "border-slate-200 bg-white text-slate-400"
                      )}
                    >
                      {i < step ? <Check className="h-5 w-5" /> : i + 1}
                    </div>
                    <span
                      className={cn(
                        "mt-2 hidden text-xs font-medium sm:block",
                        i <= step ? "text-slate-900" : "text-slate-400"
                      )}
                    >
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={cn(
                        "mx-2 h-0.5 flex-1 rounded-full transition-all sm:mx-4",
                        i < step ? "bg-sky-500" : "bg-slate-200"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/60 sm:p-8">
            {/* Step 0: Service Details */}
            {step === 0 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h2 className="mb-4 text-lg font-bold text-slate-900">Choose Your Service</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {SERVICE_TYPES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setService(s.id)}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all",
                          service === s.id
                            ? "border-sky-500 bg-sky-50 shadow-md"
                            : "border-slate-200 hover:border-sky-300"
                        )}
                      >
                        <s.icon className="mt-0.5 h-6 w-6 shrink-0 text-sky-600" />
                        <div>
                          <p className="font-semibold text-slate-900">{s.name}</p>
                          <p className="text-sm text-slate-500">From ${s.basePrice}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-bold text-slate-900">Frequency</h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {FREQUENCIES.map((freq) => (
                      <button
                        key={freq.id}
                        onClick={() => setFrequency(freq.id)}
                        className={cn(
                          "relative rounded-xl border-2 p-3 text-center transition-all",
                          frequency === freq.id
                            ? "border-sky-500 bg-sky-50"
                            : "border-slate-200 hover:border-sky-300"
                        )}
                      >
                        {freq.discount > 0 && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white">
                            {freq.discount * 100}% off
                          </span>
                        )}
                        <p className="text-sm font-semibold text-slate-900">{freq.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-bold text-slate-900">Home Size</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <CounterCard label="Bedrooms" value={beds} onChange={setBeds} min={0} max={10} />
                    <CounterCard label="Bathrooms" value={baths} onChange={setBaths} min={1} max={8} />
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-bold text-slate-900">Add-Ons (Optional)</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ADD_ONS.map((addon) => {
                      const active = !!addOns[addon.id];
                      return (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          className={cn(
                            "flex items-center justify-between rounded-xl border-2 p-3 transition-all",
                            active ? "border-sky-500 bg-sky-50" : "border-slate-200 hover:border-sky-300"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <addon.icon className="h-5 w-5 text-sky-600" />
                            <span className="text-sm font-medium text-slate-900">{addon.label}</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-600">+${addon.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-sky-600" />
                    <h2 className="text-lg font-bold text-slate-900">Pick a Date</h2>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="mb-4 text-center font-semibold text-slate-900">
                      {monthName} {currentYear}
                    </p>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <div key={i} className="pb-2 text-xs font-medium text-slate-400">
                          {d}
                        </div>
                      ))}
                      {Array.from({ length: firstDay }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const isPast = day < today.getDate();
                        return (
                          <button
                            key={day}
                            disabled={isPast}
                            onClick={() => setSelectedDate(day)}
                            className={cn(
                              "aspect-square rounded-lg text-sm font-medium transition-all",
                              isPast && "cursor-not-allowed text-slate-300",
                              !isPast && selectedDate === day && "bg-sky-500 text-white shadow-md",
                              !isPast && selectedDate !== day && "text-slate-700 hover:bg-sky-50"
                            )}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-sky-600" />
                    <h2 className="text-lg font-bold text-slate-900">Choose a Time</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={cn(
                          "rounded-xl border-2 py-2.5 text-sm font-medium transition-all",
                          selectedTime === slot
                            ? "border-sky-500 bg-sky-50 text-sky-600"
                            : "border-slate-200 text-slate-700 hover:border-sky-300"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address & Contact */}
            {step === 2 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-sky-600" />
                    <h2 className="text-lg font-bold text-slate-900">Service Address</h2>
                  </div>
                  <div className="space-y-4">
                    <Input
                      label="Street Address"
                      value={address}
                      onChange={setAddress}
                      placeholder="30 Newbury St, Apt 4B"
                    />
                    <div className="grid gap-4 sm:grid-cols-3">
                      <Input label="City" value={city} onChange={setCity} placeholder="Boston" />
                      <Input label="State" value={state} onChange={setState} placeholder="MA" maxLength={2} />
                      <Input
                        label="Zip Code"
                        value={zip}
                        onChange={(v) => setZip(v.replace(/\D/g, ""))}
                        placeholder="02116"
                        maxLength={5}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-sky-600" />
                    <h2 className="text-lg font-bold text-slate-900">Contact Information</h2>
                  </div>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      value={name}
                      onChange={setName}
                      placeholder="John Smith"
                      icon={User}
                    />
                    <Input
                      label="Email Address"
                      value={email}
                      onChange={setEmail}
                      placeholder="john@example.com"
                      type="email"
                      icon={Mail}
                    />
                    <Input
                      label="Phone Number"
                      value={phone}
                      onChange={(v) => setPhone(v.replace(/[^\d+\-\s()]/g, ""))}
                      placeholder="(617) 555-0123"
                      icon={Phone}
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sky-600" />
                    <span className="font-semibold text-slate-900">Booking Summary</span>
                  </div>
                  <div className="space-y-1.5 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Service</span>
                      <span className="font-medium text-slate-900">{selectedService.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frequency</span>
                      <span className="font-medium text-slate-900">{freqData.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Home Size</span>
                      <span className="font-medium text-slate-900">{beds}bd / {baths}ba</span>
                    </div>
                    {selectedDate && selectedTime && (
                      <div className="flex justify-between">
                        <span>Date & Time</span>
                        <span className="font-medium text-slate-900">
                          {monthName} {selectedDate} · {selectedTime}
                        </span>
                      </div>
                    )}
                    <div className="mt-2 flex justify-between border-t border-slate-200 pt-2">
                      <span className="font-semibold text-slate-900">Estimated Total</span>
                      <span className="text-xl font-extrabold text-sky-600">${total.toFixed(0)}</span>
                    </div>
                    <p className="pt-1 text-xs text-slate-400">
                      Payment collected after service completion. No card required now.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-5 py-2.5 font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-5 py-2.5 font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Home
                </Link>
              )}

              {step < STEPS.length - 1 ? (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className="group inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                >
                  Continue
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              ) : (
                <button
                  onClick={() => canProceed() && setSubmitted(true)}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-green-500 px-6 py-2.5 font-bold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  maxLength,
  type = "text",
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  icon?: typeof User;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className={cn(
            "w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100",
            Icon ? "pl-10 pr-4" : "px-4"
          )}
        />
      </div>
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
