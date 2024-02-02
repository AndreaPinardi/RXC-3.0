import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBackofficeConfig } from "./api";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Step from "../step";

const Backend = ({ config, rxcBrain }) => {
  const {
    data: backOfficeData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["config"],
    queryFn: getBackofficeConfig,
  });

  if (isLoading || isError) return null;

  return (
    <Router>
      <Routes>
        <Route element={<Layout data={backOfficeData} />}>
          <Route
            path="*"
            element={
              <Step currentStep={backOfficeData.layout.right.steps[0]} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Backend;
