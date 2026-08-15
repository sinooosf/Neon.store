import { FiInstagram, FiSend } from "react-icons/fi";
import { SiTiktok, SiWhatsapp } from "react-icons/si";

const SHOP_LINKS = ["All Products", "Hoodies", "T-Shirts", "Pants", "Accessories"];
const COMPANY_LINKS = ["About Us", "Contact Us", "Shipping & Delivery", "Returns & Refunds", "Privacy Policy"];
const HELP_LINKS = ["FAQs", "Track Your Order", "Size Guide", "Terms & Conditions"];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-[var(--line)] bg-white pb-8 pt-12 sm:pt-16">
      <div className="mx-auto mb-12 grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-1">
          <p className="mb-3 text-xl font-black tracking-tight">NEON</p>
          <p className="mb-4 max-w-[220px] text-sm leading-relaxed text-[var(--muted)]">
            Thrifted culture. Curated style. Pieces with a past, made for the present.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-60">
              <FiInstagram className="h-4.5 w-4.5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="transition-opacity hover:opacity-60">
              <SiTiktok className="h-4 w-4" />
            </a>
            <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition-opacity hover:opacity-60">
              <SiWhatsapp className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <FooterCol title="Shop" links={SHOP_LINKS} />
        <FooterCol title="Company" links={COMPANY_LINKS} />
        <FooterCol title="Help" links={HELP_LINKS} />

        <div>
          <p className="mb-4 text-xs font-bold tracking-widest">NEWSLETTER</p>
          <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
            Get exclusive updates on new drops and special offers.
          </p>
          <form
            className="flex items-stretch border border-[var(--ink)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-3 py-2.5 text-sm outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-11 items-center justify-center bg-[var(--ink)] text-white transition-colors hover:bg-[var(--ink-soft)]"
            >
              <FiSend className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <p className="border-t border-[var(--line)] pt-6 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Neon. All rights reserved.
      </p>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="font-bold text-xs tracking-widest mb-4">{title.toUpperCase()}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
