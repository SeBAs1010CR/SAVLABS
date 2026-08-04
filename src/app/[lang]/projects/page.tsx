import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import GamingSection from "@/components/sections/gaming/GamingSection";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";

export default async function ProjectsPage({
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
      <ProjectsSection lang={locale} dict={dict} />
      <GamingSection dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
