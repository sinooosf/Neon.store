import { useRef, useState } from "react";
import { PRODUCTS } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const DOTS = 4;

export default function TrendingProducts() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setActive(Math.round(ratio * (DOTS - 1)));
  };

  const scrollToDot = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * i) / (DOTS - 1), behavior: "smooth" });
  };

  return (
    <section id="trending" className="py-14 sm:py-16 lg:py-20">
      <h2 className="mb-8 px-4 text-center text-xl font-black tracking-tight sm:px-6 sm:text-2xl">
        TRENDING NOW
      </h2>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mx-auto flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar snap-x snap-mandatory sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {PRODUCTS.map((p) => (
          <div key={p.id} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[220px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: DOTS }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToDot(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              active === i ? "bg-[var(--ink)]" : "bg-[var(--line)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
