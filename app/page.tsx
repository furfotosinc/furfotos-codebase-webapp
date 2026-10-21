import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FilmStrip } from "@/components/film-strip";
import { Button } from "@/components/ui/button";

const facts = [
  { label: "Who sits", value: "Dogs, cats, and company" },
  { label: "Where", value: "Studio and at home" },
  { label: "What you keep", value: "Prints, not just files" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-1 flex-col overflow-hidden bg-[radial-gradient(ellipse_at_50%_38%,var(--lightbox-hot),var(--lightbox)_58%,#c3d3dc)] text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 hidden sm:block"
      >
        <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-foreground/25" />
        <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-foreground/25" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-foreground/25" />
        <span className="absolute right-0 bottom-0 h-4 w-4 border-r border-b border-foreground/25" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-6 sm:px-10 sm:py-8">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl tracking-tight sm:text-2xl">
            FurFotos
          </Link>
          <p className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/45 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-film opacity-70 motion-reduce:hidden" />
              <span className="relative size-1.5 rounded-full bg-film-deep" />
            </span>
            Coming soon
          </p>
        </header>

        <main className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-10">
          <section className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.32em] text-muted-foreground uppercase">
              Pet portraits
            </p>
            <h1 className="mt-4 text-foreground">
              <span className="block w-full max-w-[22rem] rounded-[1.75rem] bg-white p-2 shadow-[0_22px_40px_-24px_rgba(28,20,15,0.45)] ring-1 ring-black/10">
                <Image
                  src="/furfotos-logo.png"
                  alt="FurFotos"
                  width={960}
                  height={799}
                  priority
                  className="h-auto w-full"
                />
              </span>
              <span className="font-display mt-6 block text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] tracking-[-0.03em] text-rust italic">
                Coming soon
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-foreground/85">
              Portraits of the dogs, cats, and other animals who run the house.
              Galleries, booking, and prints will live here. The first sittings
              are already on the books.
            </p>

            <ul className="mt-8 grid gap-5 border-t border-foreground/15 pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <li key={fact.label}>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug">{fact.value}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-3">
              <Button
                size="lg"
                className="h-12 rounded-md px-5 text-[15px]"
                render={<a href="mailto:hello@furfotos.com" />}
              >
                <Mail />
                Write to the studio
              </Button>
              <a
                href="mailto:hello@furfotos.com"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                hello@furfotos.com
              </a>
            </div>
          </section>

          <FilmStrip />
        </main>

        <footer className="flex flex-col gap-2 border-t border-foreground/10 pt-4 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>furfotos.com</p>
          <p>The first frames are still in the camera.</p>
        </footer>
      </div>
    </div>
  );
}
