import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [flashId, setFlashId] = useState(null);

  const addItem = useCallback((productId) => {
    setCount((c) => c + 1);
    setFlashId(productId);
    setTimeout(() => setFlashId((id) => (id === productId ? null : id)), 900);
  }, []);

  return (
    <CartContext.Provider value={{ count, addItem, flashId }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
