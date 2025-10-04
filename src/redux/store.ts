// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favsReducer from "./slices/favSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favs: favsReducer
    },
});

// Tipos para usar en hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
