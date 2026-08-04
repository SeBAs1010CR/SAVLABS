import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/services/ServicesSection";
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
    title: locale === "es" ? "SAVLABS | Servicios" : "SAVLABS | Services",
    description:
      locale === "es"
        ? "Software a la medida, plataformas web, automatización, IoT y electrónica — sistemas reales construidos con una base práctica."
        : "Custom software, web platforms, automation, IoT and electronics — real systems built with a practical foundation.",
  };
}

export default async function ServicesPage({
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
      <ServicesSection dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
