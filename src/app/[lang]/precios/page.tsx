import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/sections/pricing/PricingSection";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";

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
