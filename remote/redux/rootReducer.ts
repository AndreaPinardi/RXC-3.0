import { configReducer } from "./slices/config";
import { workflowReducer } from "./slices/workflow";

const rootReducer = {
  config: configReducer,
  workflow: workflowReducer,
};

export default rootReducer;
