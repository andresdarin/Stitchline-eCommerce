// redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductItem } from "@/types/product";

interface CartState {
    items: ProductItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Agregar producto
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const index = state.items.findIndex(item => item.id === product.id);
            if (index >= 0) {
                state.items[index].quantity++;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        // Quitar producto
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // Incrementar cantidad
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity < 10) item.quantity++;
        },
        // Decrementar cantidad
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity--;
        },
        // Vaciar carrito
        clearCart: (state) => {
            state.items = [];
        },
        // Cargar desde localStorage (opcional)
        setCart: (state, action: PayloadAction<ProductItem[]>) => {
            state.items = action.payload;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
