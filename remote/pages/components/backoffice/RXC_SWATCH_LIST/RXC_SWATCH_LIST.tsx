import React, { FC } from "react";

interface RXC_SWATCH_LIST_TYPE {
  price: boolean;
  attribute: string;
  valueDependency?: string;
  viewMode?: string;
  nestedViewMode?: string;
  nestedComponents?: [];
}

const RXC_SWATCH_LIST: FC<RXC_SWATCH_LIST_TYPE> = ({
  nestedViewMode = "outside",
}) => {
  return <div>RXC_SWATCH_LIST</div>;
};

export default RXC_SWATCH_LIST;
