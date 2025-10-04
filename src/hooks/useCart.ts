// hooks/useProductCart.ts
import { useEffect, useMemo, useState } from "react";
import type { Product, ProductItem } from "@/types/product";

export const useProductCart = () => {
    const [cart, setCart] = useState<ProductItem[]>([]);
    const MAX_ITEMS = 10;
    const MIN_ITEMS = 1;

    // Cargar carrito desde localStorage solo en cliente
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) setCart(JSON.parse(storedCart));
        }
    }, []);

    // Guardar carrito en localStorage solo en cliente
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const handleAddToCart = (product: Product) => {
        const index = cart.findIndex(item => item.id === product.id);

        if (index >= 0) {
            const updatedCart = [...cart];
            updatedCart[index].quantity++;
            setCart(updatedCart);
        } else {
            const newItem: ProductItem = { ...product, quantity: 1 };
            setCart([...cart, newItem]);
        }
    };

    const handleRemoveFromCart = (id: Product['id']) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const handleIncreaseQuantity = (id: Product['id']) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id && item.quantity < MAX_ITEMS
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const handleDecreaseQuantity = (id: Product['id']) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id && item.quantity > MIN_ITEMS
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() =>
        cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        [cart]
    );

    return {
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    };
};
