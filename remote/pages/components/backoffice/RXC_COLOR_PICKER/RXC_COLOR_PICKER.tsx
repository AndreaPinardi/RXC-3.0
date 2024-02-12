import React, { FC } from "react";

interface RXC_COLOR_PICKER_TYPE {
  title?: string;
  description?: string;
  attribute: string;
  valueDependency?: string;
  viewMode?: string;
  nestedViewMode?: string;
  nestedComponents?: [];
}

const RXC_COLOR_PICKER: FC<RXC_COLOR_PICKER_TYPE> = ({
  nestedViewMode = "outside",
}) => {
  return <div>RXC_COLOR_PICKER</div>;
};

export default RXC_COLOR_PICKER;
