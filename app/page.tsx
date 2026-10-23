import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FilmStrip } from "@/components/film-strip";
import { Button } from "@/components/ui/button";

const facts = [
  { label: "Photos", value: "The stills you meant to keep" },
  { label: "Videos", value: "The clips you almost lost" },
  { label: "One life", value: "In the order it happened" },
];

export default function Home() {
  return (
    <div
      className="relative flex min-h-svh flex-1 flex-col overflow-hidden bg-sea text-foreground"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 68% 46% at 82% -8%, rgb(86 186 196 / 20%), transparent 62%), linear-gradient(180deg, #0e6486 0%, #0d7384 52%, #0c6a78 100%)",
      }}
    >
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
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-foreground uppercase">
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
              Photo and video journal
            </p>
            <h1 className="mt-4 text-foreground">
              <span className="block w-full max-w-[22rem] rounded-[1.75rem] bg-white p-2 shadow-[0_28px_50px_-18px_rgba(0,0,0,0.85)] ring-1 ring-white/15">
                <Image
                  src="/furfotos-logo.png"
                  alt="FurFotos"
                  width={960}
                  height={844}
                  priority
                  className="h-auto w-full"
                />
              </span>
              <span className="font-display mt-6 block text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] tracking-[-0.03em] text-rust italic">
                Coming soon
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-foreground/85">
              A journal of your pet’s life. Photos and videos, kept in the
              order they happened — the first morning, the ordinary Tuesday,
              the clip you almost didn’t save. The pages open soon.
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
                render={<a href="mailto:furfotos@gmail.com" />}
              >
                <Mail />
                Write to us
              </Button>
              <a
                href="mailto:furfotos@gmail.com"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                furfotos@gmail.com
              </a>
            </div>
          </section>

          <FilmStrip />
        </main>

        <footer className="flex flex-col gap-2 border-t border-foreground/10 pt-4 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>furfotos.com</p>
          <p>The journal is still blank.</p>
        </footer>
      </div>
    </div>
  );
}
