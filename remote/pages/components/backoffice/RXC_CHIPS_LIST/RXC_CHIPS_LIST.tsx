import React, { FC } from "react";

interface RXC_CHIPS_LIST_TYPE {
  attribute: string;
  title?: string;
  description?: string;
  valueDependency?: string;
  viewMode?: string;
  nestedViewMode?: string;
  nestedComponents?: [];
}

const RXC_CHIPS_LIST: FC<RXC_CHIPS_LIST_TYPE> = ({
  nestedViewMode = "outside",
}) => {
  return <div>RXC_CHIPS_LIST</div>;
};

export default RXC_CHIPS_LIST;
