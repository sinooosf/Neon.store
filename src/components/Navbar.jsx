import { useState } from "react";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#trending", label: "Shop" },
  { href: "#categories", label: "Collections" },
  { href: "#about", label: "About Us" },
  { href: "#footer", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <a href="#top" className="text-xl font-black tracking-tight sm:text-2xl">
          NEON
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold tracking-wide lg:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-[var(--muted)]">
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button aria-label="Search" className="transition-opacity hover:opacity-60">
            <FiSearch className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="hidden transition-opacity hover:opacity-60 sm:inline-flex">
            <FiUser className="h-5 w-5" />
          </button>
          <a href="#trending" aria-label="Cart" className="relative transition-opacity hover:opacity-60">
            <FiShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-[var(--ink)] px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </a>
          <button
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-[var(--line)] bg-white px-4 py-5 sm:px-6 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-wide"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
