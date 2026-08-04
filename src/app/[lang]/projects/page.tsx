import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import GamingSection from "@/components/sections/gaming/GamingSection";
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
    title: locale === "es" ? "SAVLABS | Proyectos" : "SAVLABS | Projects",
    description:
      locale === "es"
        ? "Proyectos reales de software a la medida, plataformas web, automatización, IoT y electrónica."
        : "Real projects of custom software, web platforms, automation, IoT and electronics.",
  };
}

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
