"use client";

import GeometricPulse from "@/components/ui/GeometricPulse";
import type { Dictionary } from "@/lib/i18n";

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const contact = dict.contact;

  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div className="flex items-center justify-center h-[500px]">
          <GeometricPulse />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          <h1 className="mb-4 text-5xl tracking-[0.2em]">
            {contact.title}
          </h1>

          <p className="mb-12 text-zinc-500 tracking-[0.15em]">
            {contact.subtitle}
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder={contact.name}
              className="w-full border border-white/20 bg-transparent px-5 py-4 outline-none transition focus:border-white"
            />

            <input
              type="email"
              placeholder={contact.email}
              className="w-full border border-white/20 bg-transparent px-5 py-4 outline-none transition focus:border-white"
            />

            <textarea
              placeholder={contact.message}
              rows={6}
              className="w-full border border-white/20 bg-transparent px-5 py-4 outline-none transition focus:border-white resize-none"
            />

            <button
              type="submit"
              className="w-full border border-white/20 py-4 tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              {contact.send}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
