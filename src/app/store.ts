import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ipifyApi } from "../services/locationService";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
    reducer: {
        [ipifyApi.reducerPath]: ipifyApi.reducer,
        search: searchSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ipifyApi.middleware),
});

setupListeners(store.dispatch);
