import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "../globals.css";
import { defaultLocale, isLocale } from "@/lib/i18n";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: "SAVLABS",
    description:
      locale === "es" ? "Tecnología • Desarrollo • Gaming" : "Technology • Development • Gaming",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <html lang={locale}>
      <body className={orbitron.className}>
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
