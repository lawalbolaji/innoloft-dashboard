/* eslint-disable @typescript-eslint/no-unused-vars */
import { SliceCaseReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: 0 | 1;
    profilePicture: string;
    position: string;
};

type Company = {
    name: string;
    logo: string;
    address: {
        country: {
            name: string;
        };
        city: {
            name: string;
        };
        street: string;
        house: string;
        zipCode: string;
        longitude: string;
        latitude: string;
    };
};

export type Product = {
    id: number;
    name: string;
    description: string;
    picture: string;
    type: { id: number; name: string };
    categories: Array<{ id: number; name: string }>;
    implementationEffortText: string | null;
    investmentEffort: string;
    trl: { id: number; name: string };
    video: string;
    user: User;
    company: Company;
    businessModels: Array<{ id: number; name: string }>;
};

export const loadProduct = createAsyncThunk("product/loadProduct", async (productId: number, thunkAPI) => {
    try {
        const response = await window.fetch(`https://api-test.innoloft.com/product/${productId}/`);

        if (response.ok) {
            const product = (await response.json()) as Product;

            return product;
        }

        // TODO: need better errors from the api but this will do for now
        return thunkAPI.rejectWithValue(response.statusText);
    } catch (error: unknown) {
        return thunkAPI.rejectWithValue((error as Error).toString());
    }
});

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (updates: Partial<Omit<Product, "id">>, thunkAPI) => {
        try {
            const { entity } = (thunkAPI.getState() as RootState).product;

            if (entity !== undefined) {
                const response = await window.fetch(`https://api-test.innoloft.com/product/${entity.id}/`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updates),
                });

                if (response.ok) {
                    const updatedProduct = (await response.json()) as Product;

                    return updatedProduct;
                }

                return thunkAPI.rejectWithValue(response.statusText);
            }
        } catch (error: unknown) {
            return thunkAPI.rejectWithValue((error as Error).toString());
        }

        // !!! app should never enter this state
        return thunkAPI.rejectWithValue("Missing product id");
    }
);

export const updateProductVideoUrl = createAsyncThunk(
    "product/updateProductVideoUrl",
    async (updates: Pick<Product, "video">, thunkAPI) => {
        try {
            const { entity } = (thunkAPI.getState() as RootState).product;

            if (entity !== undefined) {
                const response = await window.fetch(`https://api-test.innoloft.com/product/${entity.id}/`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updates),
                });

                if (response.ok) {
                    const updatedProduct = (await response.json()) as Product;

                    return updatedProduct;
                }

                return thunkAPI.rejectWithValue(response.statusText);
            }
        } catch (error: unknown) {
            return thunkAPI.rejectWithValue((error as Error).toString());
        }

        // !!! app should never enter this state
        return thunkAPI.rejectWithValue("Missing product id");
    }
);

export type Status = "idle" | "loading" | "success" | "error";

type ProductState = {
    entity: Product | undefined;
    requestStatus: {
        load: {
            all: Status;
        };
        update: Record<"core" | "video", Status>;
    };
    requestError: {
        load: {
            all: string | null;
        };
        update: Record<"core" | "video", string | null>;
    };
};

export const productSlice = createSlice<ProductState, SliceCaseReducers<ProductState>, "product">({
    name: "product",
    initialState: {
        entity: undefined,
        requestStatus: {
            load: {
                all: "idle",
            },
            update: {
                core: "idle",
                video: "idle",
            },
        },
        requestError: {
            load: {
                all: null,
            },
            update: {
                core: null,
                video: null,
            },
        },
    } satisfies ProductState,
    reducers: {
        productUpdateIdled(state, _: unknown) {
            state.requestStatus.update.core = "idle";
            state.requestError.update.core = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProduct.pending, (state, _) => {
                state.requestStatus.load.all = "loading";
                state.requestError.load.all = null;
            })
            .addCase(loadProduct.rejected, (state, action) => {
                console.log({ action });
                state.requestStatus.load.all = "error";
                state.requestError.load.all = action.payload as string;
            })
            .addCase(loadProduct.fulfilled, (state, action) => {
                state.entity = action.payload;
                state.requestStatus.load.all = "success";
            })
            .addCase(updateProduct.pending, (state, _) => {
                state.requestStatus.update.core = "loading";
                state.requestError.update.core = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                // TODO: add toast notify user that update failed
                state.requestStatus.update.core = "error";
                state.requestError.update.core = action.payload as string;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.requestStatus.update.core = "success";
                state.entity = action.payload;
            })
            .addCase(updateProductVideoUrl.pending, (state, _) => {
                state.requestStatus.update.video = "loading";
                state.requestError.update.video = null;
            })
            .addCase(updateProductVideoUrl.rejected, (state, action) => {
                state.requestStatus.update.video = "error";
                state.requestError.update.video = action.payload as string;
            })
            .addCase(updateProductVideoUrl.fulfilled, (state, action) => {
                state.requestStatus.update.video = "success";
                state.entity = action.payload;
            });
    },
});

// TODO: export selectors
export const selectProductUpdateRequestStatus = (state: RootState) => state.product.requestStatus.update.core;
export const selectProductLoadRequestStatus = (state: RootState) => state.product.requestStatus.load.all;
export const selectProductDetails = (state: RootState) => state.product.entity; // this is fine, since we destroy the entity on update anyway

export const { productUpdateIdled } = productSlice.actions;
