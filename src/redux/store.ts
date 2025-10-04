import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import favsReducer from "./slices/favSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa localStorage (web)

// Configuración de persistencia solo para favs
const favsPersistConfig = {
    key: "favs",
    storage,
};

const persistedFavsReducer = persistReducer(favsPersistConfig, favsReducer);

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favs: persistedFavsReducer,
    },
});

export const persistor = persistStore(store);

// Tipos para usar en hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;