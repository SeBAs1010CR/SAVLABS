import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/home/HomeHero";
import Marquee from "@/components/sections/home/Marquee";
import About from "@/components/sections/home/About";
import Showcase from "@/components/sections/home/Showcase";
import CTA from "@/components/sections/home/CTA";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({
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
      <HomeHero dict={dict} lang={locale} />
      <Marquee dict={dict} />
      <About dict={dict} />
      <Showcase lang={locale} dict={dict} />
      <CTA dict={dict} lang={locale} />
      <Footer dict={dict} />
    </main>
  );
}
