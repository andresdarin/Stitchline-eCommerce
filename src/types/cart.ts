// cart.ts
import type { Product } from './product';

export type CartItem = {
    product: Product;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};

export type CartContextType = {
    items: CartItem[];
    addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
    removeFromCart: (productId: string, size: string, color: string) => void;
    updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
};
