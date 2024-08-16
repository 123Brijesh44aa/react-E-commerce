import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchAllProducts} from "./productApi";
import {FetchAllProductsResponse, Product} from "../../utils/types";
import {WritableDraft} from "immer"

interface productSliceType {
    products: Product[];
    status: string;
}

const initialState: productSliceType = {
    products: [],
    status: "idle"
}

export const fetchAllProductsAsync = createAsyncThunk(
    "product/fetchAllProducts",
    async () => {
        const response: FetchAllProductsResponse = await fetchAllProducts();
        // The value we return becomes the "fulfilled" action payload
        return response.data
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductsAsync.pending, (state:WritableDraft<productSliceType>) => {
                state.status = "loading";
            })
            .addCase(fetchAllProductsAsync.fulfilled, (state:WritableDraft<productSliceType>, action) => {
                state.status = "idle";
                state.products = action.payload;
            });
    },
});


export const selectAllProducts = (state: { product: productSliceType }) => state.product.products;
export default productSlice.reducer;