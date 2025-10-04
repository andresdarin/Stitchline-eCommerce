// src/redux/slices/favSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product"; // ✅ usa el tipo global

interface FavoritesState {
    items: Product[];
}

const initialState: FavoritesState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favs",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Product>) => {
            const exists = state.items.find(p => p.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(p => p.id !== action.payload);
        },
        toggleFavorite: (state, action: PayloadAction<Product>) => {
            const exists = state.items.find(p => p.id === action.payload.id);
            if (exists) {
                state.items = state.items.filter(p => p.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
        },
        clearFavorites: (state) => {
            state.items = [];
        },
    },
});

export const { addFavorite, removeFavorite, toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
