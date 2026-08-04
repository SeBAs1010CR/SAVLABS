import Grid from "@/components/ui/Grid";
import Glow from "@/components/ui/Glow";
import AmbientLines from "@/components/ui/AmbientLines";
import Hero from "@/components/sections/openpage/Hero";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";

export default async function OpenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <main className="relative isolate h-screen overflow-hidden bg-black text-white">
      <Grid />
      <Glow />
      <AmbientLines />
      <Hero dict={dict} />
    </main>
  );
}
