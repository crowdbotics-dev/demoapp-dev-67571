import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const products_get_products_id_read = createAsyncThunk(
  "products_response_get_getSingleProducts/products_get_products_id_read",
  async payload => {
    const response = await apiService.products_get_products_id_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const products_response_get_getSingleProductsSlice = createSlice({
  name: "products_response_get_getSingleProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [products_get_products_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [products_get_products_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [products_get_products_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  products_get_products_id_read,
  slice: products_response_get_getSingleProductsSlice
}
