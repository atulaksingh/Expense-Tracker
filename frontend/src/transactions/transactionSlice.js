import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (filters = {}) => {
    const params = new URLSearchParams();

    if (filters.type) params.append("type", filters.type);
    if (filters.category) params.append("category", filters.category);
    if (filters.startDate) params.append("startDate", filters.startDate);
    if (filters.endDate) params.append("endDate", filters.endDate);

    const url = params.toString() ? `${API_URL}?${params.toString()}` : API_URL;
    const res = await axios.get(url);
    return res.data;
  }
);
export const addTransaction = createAsyncThunk("transactions/add", async (transaction) => {
  const res = await axios.post(API_URL, transaction);
  return res.data;
});

const transactionSlice = createSlice({
  name: "transactions",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      });
  },
});

export default transactionSlice.reducer;
