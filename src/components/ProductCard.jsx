import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addItem, flashId } = useCart();
  const justAdded = flashId === product.id;

  return (
    <div className="group">
      <div className="relative aspect-[5/6] overflow-hidden bg-[var(--paper-2)] mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-[var(--ink)] text-white text-[10px] font-bold tracking-widest px-2.5 py-1">
            {product.tag.toUpperCase()}
          </span>
        )}
      </div>

      <p className="text-sm font-semibold leading-snug">{product.name}</p>
      <p className="text-sm text-[var(--muted)] mb-3">₹{product.price.toLocaleString("en-IN")}</p>

      <button
        onClick={() => addItem(product.id)}
        className={`w-full text-center text-[11px] font-bold tracking-widest py-3 border transition-colors ${
          justAdded
            ? "bg-white text-[var(--ink)] border-[var(--ink)]"
            : "bg-[var(--ink)] text-white border-[var(--ink)] hover:bg-white hover:text-[var(--ink)]"
        }`}
      >
        {justAdded ? "ADDED ✓" : "ADD TO CART"}
      </button>
    </div>
  );
}
