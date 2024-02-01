import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from "../step";

const Workflow = ({ steps }) => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Step currentStep={steps?.[0]} />} />
      </Routes>
    </Router>
  );
};

export default Workflow;
