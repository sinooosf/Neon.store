import { FiTruck, FiAward, FiRefreshCw, FiHeadphones } from "react-icons/fi";

const FEATURES = [
  { Icon: FiTruck, title: "Free Shipping", note: "On all orders above ₹1499" },
  { Icon: FiAward, title: "Premium Quality", note: "Handpicked & quality checked" },
  { Icon: FiRefreshCw, title: "Easy Returns", note: "Hassle free returns" },
  { Icon: FiHeadphones, title: "24/7 Support", note: "We're here to help" },
];

export default function Features() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:grid-cols-2 sm:px-6 md:grid-cols-4 md:gap-4 lg:px-8">
        {FEATURES.map(({ Icon, title, note }) => (
          <div key={title} className="flex items-start gap-3 rounded-lg border border-[var(--line)] bg-white/60 p-3 sm:p-4">
            <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="text-xs font-bold leading-tight sm:text-sm">{title}</p>
              <p className="mt-0.5 text-[11px] leading-tight text-[var(--muted)] sm:text-xs">{note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
