import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ConfigState = {
  content: any;
};

const initialState: ConfigState = {
  content: {},
};

const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    setConfigContent: (state, action: PayloadAction<any[]>) => {
      state.content = action.payload;
    },
  },
});

export const configReducer = configSlice.reducer;
export const configActions = configSlice.actions;
