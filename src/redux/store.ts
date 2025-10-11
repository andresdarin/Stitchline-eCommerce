// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favsReducer from "./slices/favSlice";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// ✅ Fix para SSR - Storage que funciona en servidor y cliente
const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: string) {
            return Promise.resolve();
        },
    };
};

// ✅ Storage que funciona tanto en server como client
const storage = typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Configuración de persistencia
const cartPersistConfig = {
    key: "cart",
    storage,
};

const favsPersistConfig = {
    key: "favs",
    storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedFavsReducer = persistReducer(favsPersistConfig, favsReducer);

// ✅ Fix para serialización - Middleware personalizado
export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        favs: persistedFavsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredActionsPaths: ['meta.arg', 'payload.timestamp'],
                ignoredPaths: ['items.dates'],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;