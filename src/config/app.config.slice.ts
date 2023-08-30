/* eslint-disable @typescript-eslint/no-unused-vars */
import { SliceCaseReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type RootConfig = {
    id: number;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
};

type RootConfigState = {
    status: "idle" | "loading" | "success" | "error";
    error: string | null;
    entity: RootConfig;
};

const defaultConfig: RootConfig = {
    id: 1,
    logo: "https://img.innoloft.de/logo.svg",
    mainColor: "#272e71",
    hasUserSection: true,
};

export const loadConfig = createAsyncThunk("", async (appId: number) => {
    const response = await fetch(`https://api-test.innoloft.com/configuration/${appId}/`);
    const rootConfig = (await response.json()) as RootConfig;
    return rootConfig;
});

export const rootConfigSlice = createSlice<RootConfigState, SliceCaseReducers<RootConfigState>, "product">({
    name: "product",
    initialState: {
        entity: defaultConfig,
        status: "idle",
        error: null,
    } satisfies RootConfigState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadConfig.pending, (state, _) => {
                state.status = "loading";
            })
            .addCase(loadConfig.rejected, (state, _) => {
                state.status = "error";
                state.error = "error loading config";
            })
            .addCase(loadConfig.fulfilled, (state, action) => {
                state.status = "success";
                state.entity = action.payload;
            });
    },
});

// TODO: export selectors
