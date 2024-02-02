import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ConfigState = {};

const initialState: ConfigState = {};

const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {},
});

export const configReducer = configSlice.reducer;
export const configActions = configSlice.actions;
