import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/contact/ContactSection";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";

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
