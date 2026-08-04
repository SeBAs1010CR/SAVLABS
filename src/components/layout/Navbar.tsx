"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";

export default function Navbar({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const params = useParams<{ lang?: string }>();
  const lang =
    params?.lang && isLocale(params.lang) ? params.lang : defaultLocale;
  const [open, setOpen] = useState(false);

  const links = [
    { label: dict.nav.home, href: `/${lang}/home` },
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.projects, href: `/${lang}/projects` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  const rest = pathname.replace(/^\/(en|es)/, "");
  const enHref = `/en${rest}`;
  const esHref = `/es${rest}`;

  const isActive = (href: string) => pathname === href;

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
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition hover:text-white ${
                  isActive(link.href) ? "text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center rounded-full border border-white/10 p-1 text-[10px] tracking-[0.2em]">
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

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[73px] z-40 flex flex-col bg-black/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-6 pt-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-white/10 py-5 text-2xl tracking-[0.2em] transition ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex items-center justify-center pb-10">
              <div className="flex items-center rounded-full border border-white/10 p-1 text-[10px] tracking-[0.2em]">
                <Link
                  href={enHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-4 py-2 transition ${
                    lang === "en"
                      ? "bg-white text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  EN
                </Link>
                <Link
                  href={esHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-4 py-2 transition ${
                    lang === "es"
                      ? "bg-white text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ES
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
