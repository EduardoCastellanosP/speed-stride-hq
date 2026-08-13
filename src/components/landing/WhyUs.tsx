import {
  HeartPulse,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "@/config/site";

const ICONS: Record<string, LucideIcon> = { Zap, HeartPulse, TrendingUp, Target };

type Item = { icon: string; title: string; text: string };

function FeatureCard({ item }: { item: Item }) {
  const Icon = ICONS[item.icon] ?? Zap;
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/60">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent">
        <Icon className="h-5 w-5 text-accent-foreground" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="bg-background px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-card/40 p-6 md:p-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {WHY_US.eyebrow}
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            {WHY_US.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            {WHY_US.left.map((i) => (
              <FeatureCard key={i.title} item={i} />
            ))}
          </div>

          <div className="order-first overflow-hidden rounded-2xl lg:order-none">
            <img
              src={WHY_US.image}
              alt="Coaching team"
              loading="lazy"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {WHY_US.right.map((i) => (
              <FeatureCard key={i.title} item={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
