import { FiArrowRight } from "react-icons/fi";
import { INSTAGRAM_IMAGES } from "../data/products.js";
import Instgram from "../assets/footerImgInstgram.jpg"

export default function InstagramStrip() {
  return (
    <section className="bg-[var(--ink)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="shrink-0 text-center sm:text-left">
          <p className="text-sm font-bold tracking-wide text-white">FOLLOW US ON INSTAGRAM</p>
          <p className="mt-1 text-xs text-white/60">@neon.thrift</p>
        </div>

        <div className="flex w-full flex-1 gap-2 overflow-x-auto no-scrollbar">
          {INSTAGRAM_IMAGES.map((img) => (
            <img
              key={img.id}
              src={img.image}
              alt="Instagram post"
              className="h-20 w-20 shrink-0 object-cover grayscale transition-all duration-300 hover:grayscale-0 sm:h-24 sm:w-24"
            />
          ))}
        </div>

                <div
          className="relative h-10 w-10 shrink-0 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Instgram})` }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Instagram"
            className="flex h-full w-full items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-[var(--ink)]"
          >
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
