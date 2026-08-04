import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/10 py-6 md:py-8 text-center text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-zinc-600">
      {dict.footer}
    </footer>
  );
}
