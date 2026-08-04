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
  const description =
    locale === "es"
      ? "Software a medida, plataformas web, automatización, IoT y electrónica — sistemas reales que mueven tu operación."
      : "Custom software, web platforms, automation, IoT and electronics — real systems built to power your operation.";
  const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  return {
    title: "SAVLABS",
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: "SAVLABS",
      description,
      url: siteUrl,
      siteName: "SAVLABS",
      locale: locale === "es" ? "es_CR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "SAVLABS",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SAVLABS",
      description,
      images: ["/og.png"],
    },
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
