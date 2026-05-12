// src/types.ts

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  oldPrice?: string;
  qty?: number;
  features?: string[];
};

export type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
};