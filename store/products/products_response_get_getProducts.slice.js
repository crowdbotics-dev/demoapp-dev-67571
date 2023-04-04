import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const products_get_products_list = createAsyncThunk(
  "products_response_get_getProducts/products_get_products_list",
  async payload => {
    const response = await apiService.products_get_products_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const products_response_get_getProductsSlice = createSlice({
  name: "products_response_get_getProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [products_get_products_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [products_get_products_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [products_get_products_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  products_get_products_list,
  slice: products_response_get_getProductsSlice
}
