

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-5">

          <Image
            src="/images/logoheader.png"
            alt="SAVLABS"
            width={180}
            height={60}
            className="w-[120px] md:w-[180px] opacity-90"
          />

          <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.25em] text-zinc-400">
            <a href="#" className="hover:text-white transition">
              HOME
            </a>

            <a href="#" className="hover:text-white transition">
              PROJECTS
            </a>

            <a href="#" className="hover:text-white transition">
              ABOUT
            </a>

            <a href="#" className="hover:text-white transition">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Welcome */}
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -120 }}
          transition={{
            duration: 1.8,
            delay: 1.2,
            ease: "easeInOut",
          }}
          className="absolute text-center text-3xl md:text-6xl tracking-[0.2em] md:tracking-[0.3em] font-light px-6"
        >
          WELCOME TO SAVLABS
        </motion.h1>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 2.2,
            ease: "easeOut",
          }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-7xl tracking-[0.2em] md:tracking-[0.35em] font-light">
            Próximamente
          </h2>

          <p className="mt-6 text-zinc-500 tracking-[0.25em] md:tracking-[0.35em] text-[10px] md:text-sm">
            TECHNOLOGY • DEVELOPMENT • GAMING
          </p>

          <button
            className="
              mt-10
              rounded-xl
              border
              border-white/20
              px-6
              py-3
              md:px-8
              md:py-4
              tracking-[0.2em]
              text-sm
              transition
              hover:bg-white/10
              hover:border-white
            "
          >
            ENTER
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 md:py-8 text-center text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-zinc-600">
        © 2026 SAVLABS • ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
