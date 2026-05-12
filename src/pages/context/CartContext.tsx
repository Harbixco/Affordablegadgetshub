// src/context/CartContext.tsx

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product, CartContextType } from "../../../types";
import { notifySuccess, notifyError } from "../notified/notifications";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        notifySuccess(`Increased quantity of ${product.name} 🛒`);
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p
        );
      } else {
        notifySuccess(`${product.name} added to cart 🛒`);
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const product = prev.find((p) => p.id === id);
      if (product) notifyError(`${product.name} removed from cart ❌`);
      return prev.filter((p) => p.id !== id);
    });
  };

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: (p.qty || 1) + 1 } : p))
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: (p.qty || 1) - 1 } : p))
        .filter((p) => (p.qty || 1) > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};