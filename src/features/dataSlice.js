import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (_) => {
  },
});

export const dataReducer = DataSlice.reducer;
export const {} = DataSlice.actions;
