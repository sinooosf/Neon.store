import { CATEGORIES } from "../data/products.js";

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-[var(--paper-2)] py-14 sm:py-16 lg:py-20">
      <h2 className="mb-8 text-center text-xl font-black tracking-tight sm:text-2xl">
        SHOP BY CATEGORY
      </h2>

      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-5 lg:px-8">
        {CATEGORIES.map((c) => (
          <a
            key={c.id}
            href="#trending"
            className="group relative aspect-[3/4] overflow-hidden bg-[var(--ink)]"
          >
            <img
              src={c.image}
              alt={c.label}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="mb-2 text-sm font-bold tracking-wide text-white sm:text-base">
                {c.label.toUpperCase()}
              </p>
              <span className="inline-block bg-white px-3 py-2 text-[10px] font-bold tracking-widest text-[var(--ink)]">
                SHOP NOW
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
