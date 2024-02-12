import React, { FC } from "react";

interface RXC_MANUAL_LIST_TYPE {
  svg?: boolean;
  values: {
    title?: string;
    description?: string;
    key: string;
  }[];
}

const RXC_MANUAL_LIST: FC<RXC_MANUAL_LIST_TYPE> = (props) => {
  return <div>RXC_MANUAL_LIST</div>;
};

export default RXC_MANUAL_LIST;
