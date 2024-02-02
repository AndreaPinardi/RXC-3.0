import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type WorkflowState = {
  steps?: any[];
  currentStep: object;
};

const initialState: WorkflowState = {
  steps: null,
  currentStep: {},
};

const workflowSlice = createSlice({
  name: "workflow",
  initialState: initialState,
  reducers: {
    setSteps: (state, action: PayloadAction<any[]>) => {
      state.steps = action.payload;
      state.currentStep = state.steps[0];
    },
    setCurrentStep: (state, action: PayloadAction<any[]>) => {
      state.currentStep = action.payload;
    },
  },
});

export const workflowReducer = workflowSlice.reducer;
export const workflowActions = workflowSlice.actions;
