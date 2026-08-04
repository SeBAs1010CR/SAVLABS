"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Grid from "@/components/ui/Grid";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import {
  PRICING_CATEGORIES,
  getServiceByCode,
  type PricingService,
} from "@/lib/pricing";
import type { Dictionary } from "@/lib/i18n";

const crc = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
  maximumFractionDigits: 0,
});

export default function PricingSection({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: string;
}) {
  const p = dict.pricing;
  const [quote, setQuote] = useState<Record<string, number>>({});

  const add = (code: string) => {
    const service = getServiceByCode(code);
    if (!service || service.price === null) return;
    setQuote((prev) => ({
      ...prev,
      [code]: service.quantifiable ? (prev[code] ?? 0) + 1 : 1,
    }));
  };

  const setQty = (code: string, qty: number) => {
    if (qty <= 0) {
      setQuote((prev) => {
        const next = { ...prev };
        delete next[code];
        return next;
      });
    } else {
      setQuote((prev) => ({ ...prev, [code]: qty }));
    }
  };

  const remove = (code: string) => {
    setQuote((prev) => {
      const next = { ...prev };
      delete next[code];
      return next;
    });
  };

  const total = useMemo(
    () =>
      Object.entries(quote).reduce((sum, [code, qty]) => {
        const service = getServiceByCode(code);
        if (!service || service.price === null) return sum;
        return sum + service.price * qty;
      }, 0),
    [quote]
  );

  const quoteLink = useMemo(() => {
    const lines = Object.entries(quote).map(([code, qty]) => {
      const s = getServiceByCode(code);
      if (!s || s.price === null) return null;
      const name = lang === "es" ? s.name : s.nameEn;
      const unit = lang === "es" ? s.unit : s.unitEn;
      return `• ${qty} × ${name} (${unit}) — ${crc.format(s.price * qty)}`;
    });
    const intro =
      lang === "es"
        ? "Hola, quiero una cotización:"
        : "Hi, I'd like a quote for:";
    const totalLabel =
      lang === "es" ? "Total estimado" : "Estimated total";
    const body = [...lines, "", `${totalLabel}: ${crc.format(total)}`]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `${intro}\n\n${body}`
    )}`;
  }, [quote, total, lang]);

  const count = Object.keys(quote).length;
  const isEs = lang === "es";

  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-32 md:px-8 md:pt-40">
      <Grid />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-14 max-w-3xl">
          <p className="mb-6 text-xs tracking-[0.45em] text-zinc-500">
            {p.eyebrow}
          </p>
          <h1 className="text-4xl font-light leading-tight tracking-[0.12em] text-white md:text-6xl">
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed tracking-wider text-zinc-400">
            {p.subtitle}
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="flex flex-col gap-12">
            {PRICING_CATEGORIES.map((category) => (
              <div key={category.id}>
                <h2 className="mb-5 border-b border-white/10 pb-3 text-xs font-medium tracking-[0.4em] text-white/80">
                  {isEs ? category.label : category.labelEn}
                </h2>
                <div className="flex flex-col">
                  {category.services.map((service) => (
                    <ServiceRow
                      key={service.code}
                      service={service}
                      qty={quote[service.code]}
                      isEs={isEs}
                      onAdd={() => add(service.code)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xs font-medium tracking-[0.4em] text-white/80">
                  {p.yourQuote}
                </h2>
                {count > 0 && (
                  <button
                    onClick={() => setQuote({})}
                    className="text-[10px] tracking-[0.25em] text-zinc-500 transition hover:text-white"
                  >
                    {p.clear}
                  </button>
                )}
              </div>

              {count === 0 ? (
                <p className="py-8 text-center text-xs tracking-wider text-zinc-500">
                  {p.empty}
                </p>
              ) : (
                <ul className="mb-6 flex flex-col gap-4">
                  <AnimatePresence initial={false}>
                    {Object.entries(quote).map(([code, qty]) => {
                      const service = getServiceByCode(code);
                      if (!service) return null;
                      return (
                        <motion.li
                          key={code}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex items-start justify-between gap-3"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-xs tracking-wider text-white">
                              {isEs ? service.name : service.nameEn}
                            </p>
                            <p className="mt-1 text-[10px] tracking-wider text-zinc-500">
                              {isEs ? service.unit : service.unitEn}
                              {" · "}
                              {service.price !== null
                                ? crc.format(service.price)
                                : p.scope}
                            </p>
                          </div>

                          <div className="flex shrink-0 items-center gap-3">
                            {service.quantifiable ? (
                              <div className="flex items-center rounded-full border border-white/10">
                                <button
                                  onClick={() => setQty(code, qty - 1)}
                                  className="px-2.5 py-1 text-sm text-zinc-400 transition hover:text-white"
                                  aria-label="-"
                                >
                                  −
                                </button>
                                <span className="w-6 text-center text-xs text-white">
                                  {qty}
                                </span>
                                <button
                                  onClick={() => setQty(code, qty + 1)}
                                  className="px-2.5 py-1 text-sm text-zinc-400 transition hover:text-white"
                                  aria-label="+"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <span className="text-xs text-white">1</span>
                            )}
                            <button
                              onClick={() => remove(code)}
                              className="text-xs text-zinc-600 transition hover:text-red-400"
                              aria-label={p.remove}
                            >
                              ×
                            </button>
                          </div>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              )}

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] tracking-[0.3em] text-zinc-500">
                  {p.total}
                </span>
                <span className="text-xl font-light tracking-wider text-white">
                  {crc.format(total)}
                </span>
              </div>

              <a
                href={quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-[11px] font-medium tracking-[0.25em] text-black transition hover:shadow-[0_0_50px_rgba(255,255,255,0.35)] ${
                  count === 0 ? "pointer-events-none opacity-30" : ""
                }`}
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {p.send}
              </a>

              <p className="mt-4 text-center text-[10px] tracking-wider text-zinc-600">
                {p.note}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  qty,
  isEs,
  onAdd,
}: {
  service: PricingService;
  qty: number | undefined;
  isEs: boolean;
  onAdd: () => void;
}) {
  const disabled = service.price === null;
  return (
    <div
      className={`group flex items-center justify-between gap-4 border-b border-white/5 py-4 transition hover:bg-white/[0.02] ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div className="min-w-0">
        <p className="text-sm tracking-wider text-white">
          {isEs ? service.name : service.nameEn}
        </p>
        <p className="mt-1 text-[10px] tracking-wider text-zinc-500">
          {isEs ? service.unit : service.unitEn}
          {service.note &&
            ` · ${isEs ? service.note : service.noteEn}`}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        {disabled ? (
          <span className="text-[10px] tracking-[0.25em] text-zinc-500">
            {isEs ? "SEGÚN ALCANCE" : "BY SCOPE"}
          </span>
        ) : (
          <>
            <span className="text-xs tracking-wider text-zinc-300">
              {crc.format(service.price!)}
            </span>
            <button
              onClick={onAdd}
              aria-label={`${isEs ? "Agregar" : "Add"} ${
                isEs ? service.name : service.nameEn
              }`}
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition ${
                qty
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-white group-hover:border-white"
              }`}
            >
              {qty ? "✓" : "+"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
