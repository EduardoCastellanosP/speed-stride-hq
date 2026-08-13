import { Check, Sparkles } from "lucide-react";
import { FOUNDER } from "@/config/site";

export function Founder() {
  return (
    <section id="contact" className="bg-background px-5 pb-28 md:px-8 md:pb-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={FOUNDER.image}
            alt={FOUNDER.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6 pt-20">
            <p className="text-xl font-black uppercase tracking-tight text-foreground">
              {FOUNDER.name}
            </p>
            <p className="text-sm text-muted-foreground">{FOUNDER.role}</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {FOUNDER.eyebrow}
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {FOUNDER.title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {FOUNDER.paragraph}
          </p>

          <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
            {FOUNDER.badges.map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors duration-300 hover:border-accent/60"
              >
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
