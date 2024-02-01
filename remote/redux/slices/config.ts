import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ConfigState = {
  steps?: any[];
};

const initialState: ConfigState = {
  steps: null,
};

const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    setSteps: (state, action: PayloadAction<any[]>) => {
      state.steps = action.payload;
    },
  },
});

export const configReducer = configSlice.reducer;
export const configActions = configSlice.actions;
