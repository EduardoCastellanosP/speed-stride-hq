import { MARQUEE_ITEMS } from "@/config/site";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden bg-accent py-3 mb-6">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8">
            {items.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.15em] text-accent-foreground"
              >
                {item}
                <span className="text-accent-foreground/60">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
