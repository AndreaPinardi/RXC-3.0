import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Step from "./step/index";
import Button from "./components/common/Button";
import Checkbox from "./components/common/Checkbox";
import TextInput from "./components/common/TextInput";
import { Text } from "./components/common/Text";
import Card from "./components/layout/Card";

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
        <Text as="h1" weight="bold" align="center" size="3xl" className="mb-2">
          Title
        </Text>
        <Text as="p" weight="normal" align="center" className="mb-2">
          subtitle
        </Text>

        <div className="flex flex-col gap-4 p-5">
          <Checkbox onChange={() => {}} label="test" />
          <Card>
            <div className="border w-32"></div>
            <div className="flex flex-col p-4">
              <Text as="h3" weight="bold" align="left" className="mb-2">
                Title
              </Text>
              <Text as="p" weight="normal" align="left" className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ac
                nunc amet sed at vitae enim.
              </Text>
            </div>
          </Card>
        </div>

        <Routes>
          <Route path="*" element={<Step currentStep={currentStep} />} />
        </Routes>
      </div>
    </Router>
  );
}
