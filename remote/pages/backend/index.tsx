import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getBackofficeConfig } from "./api";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Step from "../step";
import { useDispatch, useSelector } from "react-redux";
import { workflowActions } from "@/redux/slices/workflow";

const Backend = ({ config, rxcBrain }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state: any) => state.workflow.currentStep);
  const {
    data: backofficeConfig,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["backofficeConfig"],
    queryFn: getBackofficeConfig,
  });

  useEffect(() => {
    if (backofficeConfig) {
      dispatch(workflowActions.setSteps(backofficeConfig.layout.right.steps));
    }
  }, [backofficeConfig, dispatch]);

  if (isLoading || isError) return null;

  return (
    <Router>
      <Routes>
        <Route element={<Layout data={backofficeConfig} />}>
          <Route path="*" element={<Step currentStep={currentStep} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Backend;
