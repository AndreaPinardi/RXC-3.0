import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBackofficeConfig } from "./api";
import Workflow from "../workflow";

const Backend = ({ config, rxcBrain }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["config"],
    queryFn: getBackofficeConfig,
  });

  if (isLoading || isError) return null;
  return <Workflow steps={data?.steps} />;
};

export default Backend;
