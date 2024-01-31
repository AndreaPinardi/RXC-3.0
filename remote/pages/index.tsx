import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Step from "./step/index";
import Button from "./components/common/Button";
import Checkbox from "./components/common/Checkbox";
import TextInput from "./components/common/TextInput";
import { Text } from "./components/common/Text";

const getConfig = async (fn) => {
  const steps = ["step1", "step2", "step3"];
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn(steps)), 2000);
  });
};

export default function Home({ config = null, rxcBrain = null }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getConfig(setSteps);
  }, []);

  const currentStep = useMemo(() => {
    if (!steps.length) return "";
    return steps[currentStepIndex];
  }, [currentStepIndex, steps]);

  const next = () =>
    setCurrentStepIndex((index) =>
      index === steps.length - 1 ? index : index + 1
    );
  const back = () =>
    setCurrentStepIndex((index) => (index === 0 ? index : index - 1));

  return (
    <Router>
      <div>
        <nav className="flex justify-around p-5">
          <Button onClick={back}>confirm</Button>
          <Button onClick={next} variant="secondary">
            confirm
          </Button>
          <Button variant="inverted">confirm</Button>
          <Button variant="link">confirm</Button>
        </nav>
        <Text
          as="h1"
          font="secondary"
          weight="bold"
          align="center"
          size="3xl"
          className="mb-2"
        >
          test font secondary h1
        </Text>
        <Text as="p" weight="normal" align="center" className="mb-2">
          test p
        </Text>
        <Checkbox onChange={() => {}} label="test" font="secondary" />
        <Routes>
          <Route path="*" element={<Step currentStep={currentStep} />} />
        </Routes>
      </div>
    </Router>
  );
}
