import { ArrowRight, Check, Sparkles, type LucideIcon } from "lucide-react";
import { ClipboardList, Footprints, Medal } from "lucide-react";
import { SERVICES } from "@/config/site";

const ICONS: Record<string, LucideIcon> = { Footprints, ClipboardList, Medal };

export function Services() {
  return (
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {SERVICES.eyebrow}
          </span>
          <h2 className="mt-7 text-4xl font-black uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {SERVICES.title}
          </h2>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold tracking-[0.1em] text-accent-foreground transition-transform duration-300 hover:scale-105"
          >
            {SERVICES.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col gap-8">
          {SERVICES.cards.map((card) => {
            const Icon = ICONS[card.icon] ?? Medal;
            return (
              <article
                key={card.title}
                className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-border p-7"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent">
                  <Icon className="h-6 w-6 text-accent-foreground" />
                </div>

                <div className="relative mt-24">
                  <h3 className="max-w-xs text-3xl font-black uppercase leading-tight tracking-tight text-foreground md:text-4xl">
                    {card.title}
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
