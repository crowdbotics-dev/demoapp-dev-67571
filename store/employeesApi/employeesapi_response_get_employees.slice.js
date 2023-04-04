import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const employeesapi_get_employees_list = createAsyncThunk(
  "employeesapi_response_get_employees/employeesapi_get_employees_list",
  async payload => {
    const response = await apiService.employeesapi_get_employees_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const employeesapi_response_get_employeesSlice = createSlice({
  name: "employeesapi_response_get_employees",
  initialState,
  reducers: {},
  extraReducers: {
    [employeesapi_get_employees_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [employeesapi_get_employees_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [employeesapi_get_employees_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  employeesapi_get_employees_list,
  slice: employeesapi_response_get_employeesSlice
}
