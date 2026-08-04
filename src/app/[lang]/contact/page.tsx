import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/contact/ContactSection";
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
    title: locale === "es" ? "SAVLABS | Contacto" : "SAVLABS | Contact",
    description:
      locale === "es"
        ? "Contactá a SAVLABS para desarrollar tu software a la medida, plataforma web o sistema IoT."
        : "Get in touch with SAVLABS to build your custom software, web platform or IoT system.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
