import { Infinity as InfinityIcon } from "lucide-react";
import { STATS } from "@/config/site";

export function Stats() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <InfinityIcon className="mx-auto h-10 w-10 text-foreground" strokeWidth={1.25} />
        <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {STATS.title}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {STATS.items.map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-black text-accent md:text-6xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
