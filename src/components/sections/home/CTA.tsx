import Link from "next/link";
import Grid from "@/components/ui/Grid";
import AmbientLines from "@/components/ui/AmbientLines";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

export default function CTA({ dict, lang }: { dict: Dictionary; lang: string }) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28 md:py-40">
      <Grid />
      <AmbientLines />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-6 text-xs tracking-[0.45em] text-zinc-500">
          {dict.home.ctaEyebrow}
        </p>

        <h2 className="text-4xl font-light leading-tight tracking-[0.12em] text-white md:text-6xl">
          {dict.home.ctaTitle}
        </h2>

        <Link
          href={`/${lang}/contact`}
          className="group relative mt-12 overflow-hidden rounded-xl bg-white px-10 py-4 text-xs font-medium tracking-[0.25em] text-black transition hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]"
        >
          <span className="relative z-10">{dict.home.ctaAction}</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Link>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-3 text-xs tracking-[0.25em] text-zinc-400 transition hover:text-[#25D366]"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          {dict.home.ctaWhatsapp}
        </a>
      </div>
    </section>
  );
}
