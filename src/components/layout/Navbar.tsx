"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";

export default function Navbar({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const params = useParams<{ lang?: string }>();
  const lang =
    params?.lang && isLocale(params.lang) ? params.lang : defaultLocale;

  const links = [
    { label: dict.nav.home, href: `/${lang}/home` },
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.projects, href: `/${lang}/projects` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  const rest = pathname.replace(/^\/(en|es)/, "");
  const enHref = `/en${rest}`;
  const esHref = `/es${rest}`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-5">
        <Link href={`/${lang}`}>
          <Image
            src="/images/branding/logoheader.png"
            alt="SAVLABS"
            width={180}
            height={60}
            className="w-[120px] md:w-[180px] opacity-90 transition hover:opacity-100"
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.25em] text-zinc-400">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition hover:text-white ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center rounded-full border border-white/10 p-1 text-[10px] tracking-[0.2em]">
            <Link
              href={enHref}
              className={`rounded-full px-3 py-1 transition ${
                lang === "en"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </Link>
            <Link
              href={esHref}
              className={`rounded-full px-3 py-1 transition ${
                lang === "es"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              ES
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
