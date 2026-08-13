import { useEffect, useState } from "react";
import { Infinity as InfinityIcon, Menu, X } from "lucide-react";
import { BRAND } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <InfinityIcon className="h-8 w-8 shrink-0 text-foreground" strokeWidth={1.5} />
          <span className="sr-only">{BRAND.name}</span>
        </a>

        <ul className="hidden items-center justify-center gap-8 md:flex">
          {BRAND.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs font-semibold tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#about"
            className="hidden rounded-full border border-foreground/60 px-5 py-2 text-xs font-bold tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:inline-flex"
          >
            {BRAND.ctaNav}
          </a>
          {/* <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-foreground md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button> */}
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {BRAND.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold tracking-[0.15em] text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
