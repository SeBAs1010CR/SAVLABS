import type { Dictionary } from "@/lib/i18n";

export default function Marquee({ dict }: { dict: Dictionary }) {
  const items = [...dict.home.marquee, ...dict.home.marquee];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/40 py-6 backdrop-blur-sm">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-14 pr-14 text-sm tracking-[0.3em] text-zinc-500 md:text-lg"
          >
            <span className="transition-colors hover:text-white">{item}</span>
            <span className="text-zinc-700">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
