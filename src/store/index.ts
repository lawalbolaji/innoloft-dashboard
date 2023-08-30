import { combineReducers, PreloadedState, configureStore } from "@reduxjs/toolkit";
import { rootConfigSlice } from "../config/app.config.slice";
import { productSlice } from "../scenes/Product.slice";

// Warn: register app reducers here
const rootReducer = combineReducers({
    configs: rootConfigSlice.reducer,
    product: productSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
