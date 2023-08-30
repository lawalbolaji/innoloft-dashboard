import { combineReducers, PreloadedState, configureStore } from "@reduxjs/toolkit";

// Warn: register app reducers here
const rootReducer = combineReducers({});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
