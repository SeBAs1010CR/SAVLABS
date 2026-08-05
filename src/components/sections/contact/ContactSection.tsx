"use client";

import { useState } from "react";
import GeometricPulse from "@/components/ui/GeometricPulse";
import type { Dictionary } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const contact = dict.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", type: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const set =
    (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));

  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div className="flex items-center justify-center h-[500px]">
          <GeometricPulse />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          <h1 className="mb-4 font-light text-3xl tracking-[0.14em] sm:text-4xl md:text-5xl md:tracking-[0.2em]">
            {contact.title}
          </h1>

          <p className="mb-12 text-zinc-500 tracking-[0.15em]">
            {contact.subtitle}
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder={contact.name}
              value={form.name}
              onChange={set("name")}
              className="w-full border border-white/20 bg-transparent px-5 py-4 outline-none transition focus:border-white"
            />

            <input
              type="email"
              required
              placeholder={contact.email}
              value={form.email}
              onChange={set("email")}
              className="w-full border border-white/20 bg-transparent px-5 py-4 outline-none transition focus:border-white"
            />

            <select
              required
              value={form.type}
              onChange={set("type")}
              className="w-full border border-white/20 bg-black px-5 py-4 text-white outline-none transition focus:border-white [&>option]:bg-black [&>option]:text-white"
            >
              <option value="" disabled>
                {contact.typePlaceholder}
              </option>
              {contact.typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <textarea
              required
              placeholder={contact.message}
              rows={6}
              value={form.message}
              onChange={set("message")}
              className="w-full border border-white/20 bg-transparent px-5 py-4 outline-none transition focus:border-white resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full border border-white/20 py-4 tracking-[0.2em] transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? contact.sending : contact.send}
            </button>

            {status === "sent" && (
              <p className="text-center text-xs tracking-[0.2em] text-emerald-400">
                {contact.sent}
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-xs tracking-[0.2em] text-red-400">
                {contact.error}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
