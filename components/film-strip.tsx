const frames: { id: string; note: string; leak?: boolean; fog?: boolean }[] = [
  { id: "01", note: "First morning" },
  { id: "02", note: "Ordinary day", leak: true },
  { id: "03", note: "On video", fog: true },
];

function Sprockets() {
  return (
    <div className="flex w-4 shrink-0 flex-col items-center justify-around py-1.5 sm:w-5">
      {Array.from({ length: 4 }, (_, index) => (
        <span
          key={index}
          className="h-2.5 w-3 rounded-[2px] bg-lightbox shadow-[inset_0_1px_1px_rgba(28,20,15,0.45)] sm:h-3 sm:w-3.5"
        />
      ))}
    </div>
  );
}

export function FilmStrip() {
  return (
    <figure className="mx-auto w-full max-w-[22rem] lg:max-w-[24rem] lg:-rotate-2 lg:transition-transform">
      <div className="relative overflow-hidden rounded-[2px] bg-gradient-to-b from-[#f0a56c] via-film to-film-deep px-2 py-2.5 shadow-[0_28px_50px_-28px_rgba(40,22,8,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-black/15">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        <p className="relative px-1 pb-2 text-center font-mono text-[10px] tracking-[0.16em] text-[#3f1d0e] uppercase sm:tracking-[0.2em]">
          FurFotos · Life journal
        </p>
        <div className="relative flex flex-col gap-1.5">
          {frames.map((frame) => (
            <div key={frame.id} className="flex bg-film-deep/30">
              <Sprockets />
              <div className="relative aspect-[3/2] min-w-0 flex-1 bg-negative shadow-[inset_0_0_48px_rgba(0,0,0,0.55)]">
                {frame.leak ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(240,165,108,0.42),transparent_46%)]" />
                ) : null}
                {frame.fog ? (
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent" />
                ) : null}
                <div className="absolute inset-1 ring-1 ring-white/10" />
                <div className="absolute right-2 bottom-1.5 left-2 flex items-end justify-between font-mono text-[10px] tracking-[0.16em] text-[#f6ddc4] uppercase sm:text-[11px]">
                  <span>{frame.id}</span>
                  <span>{frame.note}</span>
                </div>
              </div>
              <Sprockets />
            </div>
          ))}
        </div>
        <p className="relative px-1 pt-2 text-center font-mono text-[9px] tracking-[0.28em] text-[#3f1d0e] uppercase sm:text-[10px]">
          Photo · Video · Soon
        </p>
      </div>
      <figcaption className="mt-4 text-center font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
        Three blank pages from a pet’s life
      </figcaption>
    </figure>
  );
}
