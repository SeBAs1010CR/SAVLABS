import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/sections/pricing/PricingSection";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: locale === "es" ? "SAVLABS | Precios" : "SAVLABS | Pricing",
    description:
      locale === "es"
        ? "Tarifario y estimador de servicios de SAVLABS: calculá tu proyecto y envíalo por WhatsApp."
        : "SAVLABS service pricing and estimator: build your quote and send it via WhatsApp.",
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar dict={dict} />
      <PricingSection dict={dict} lang={locale} />
      <Footer dict={dict} />
    </main>
  );
}
