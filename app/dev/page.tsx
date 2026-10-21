import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { journalPhotos } from "@/lib/journal-photos";

export const metadata: Metadata = {
  title: "Dev bench — FurFotos",
  description: "A private route for trying FurFotos layouts, copy, and photos.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/dev" },
};

export default function DevPage() {
  return (
    <div className="min-h-svh bg-black text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-10 sm:py-8">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="font-display text-xl tracking-tight sm:text-2xl">
            FurFotos
          </Link>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-foreground uppercase">
            <span className="size-1.5 rounded-full bg-film" />
            Dev bench
          </p>
        </header>

        <main className="py-12 sm:py-16">
          <p className="font-mono text-[11px] tracking-[0.32em] text-muted-foreground uppercase">
            /dev
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] tracking-[-0.03em] text-rust italic">
            Try things here
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-foreground/85">
            This route is the scratch page. The coming-soon page stays as it is.
            Change a layout, a line of copy, or a photo treatment in{" "}
            <code className="font-mono text-[0.95rem] text-foreground">app/dev/page.tsx</code>.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-12 rounded-md px-5 text-[15px]"
              render={<Link href="/" />}
            >
              Coming soon page
            </Button>
          </div>

          <section className="mt-16 border-t border-foreground/15 pt-10">
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Logo
            </h2>
            <div className="mt-5 w-full max-w-sm rounded-[1.75rem] bg-white p-2 ring-1 ring-white/15">
              <Image
                src="/furfotos-logo.png"
                alt="FurFotos"
                width={960}
                height={844}
                priority
                className="h-auto w-full"
              />
            </div>
          </section>

          <section className="mt-16 border-t border-foreground/15 pt-10">
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Journal photos
            </h2>
            {journalPhotos.length === 0 ? (
              <p className="mt-5 max-w-md text-foreground/85">
                No photos yet. Add one in <code className="font-mono">lib/journal-photos.ts</code>{" "}
                and it will show up here.
              </p>
            ) : (
              <ul className="mt-5 grid gap-6 sm:grid-cols-2">
                {journalPhotos.map((photo) => (
                  <li key={photo.src} className="min-w-0">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full rounded-md"
                    />
                    <p className="mt-3 text-sm leading-snug">{photo.alt}</p>
                    <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                      {photo.src}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
