import { PROMOS } from "../data/products.js";

export default function PromoBanners() {
  return (
    <section className="bg-[var(--paper-2)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {PROMOS.map((p) => (
          <div key={p.id} className="group relative aspect-[4/3] overflow-hidden bg-[var(--ink)]">
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-70 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
              <div>
                <p className="text-lg font-black leading-tight text-white sm:text-xl">{p.title}</p>
                <p className="mt-1 text-sm text-white/75">{p.subtitle}</p>
              </div>
              <a
                href="#trending"
                className="inline-block w-fit bg-white px-5 py-3 text-[11px] font-bold tracking-widest text-[var(--ink)] transition-colors hover:bg-white/90"
              >
                {p.cta.toUpperCase()}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
