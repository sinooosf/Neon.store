import MainPicture from '../assets/mainImg.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="mx-auto grid min-h-[420px] w-full max-w-7xl items-center gap-8 px-4 py-12 sm:min-h-[520px] sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <p className="mb-4 font-mono text-[11px] tracking-[0.25em] text-white/70 sm:text-xs">
            NEW ARRIVALS
          </p>
          <h1 className="mb-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            THRIFTED.
            <br />
            CURATED.
          </h1>
          <p className="mx-auto mb-8 max-w-xs text-sm leading-relaxed text-white/70 sm:text-base lg:mx-0">
            Premium thrifted pieces. Handpicked for quality. Priced for you.
          </p>
          <a
            href="#trending"
            className="inline-block sm:bg-white px-8 py-4 text-xs font-bold tracking-widest text-[var(--ink)] transition-colors sm:hover:bg-white/90 bg-white/90"
          >
            SHOP NOW
          </a>
        </div>

      <div className="relative h-72 min-h-[280px] w-full overflow-hidden sm:h-[420px] lg:h-full lg:min-h-[520px]">
        <img
          src={MainPicture}
          alt="Model wearing a NEON piece"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            grayscale
            contrast-125

            max-sm:h-[90%]
            max-sm:w-[90%]
            max-sm:left-[7.5%]
          "
        />

        {/* KEEP THE ORIGINAL GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/15 to-transparent lg:from-[var(--ink)] lg:via-transparent lg:to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 to-transparent" />
      </div>
      </div>
    </section>
  );
}
