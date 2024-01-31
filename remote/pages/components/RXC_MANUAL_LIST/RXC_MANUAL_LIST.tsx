import React, { FC } from 'react'


interface RXC_MANUAL_LIST_TYPE {
    svg?: boolean;
    values: {
      title?: string;
      description?: string;
      key: string;
      component?: string;
      view: "popup" | "replace";
    }[];
}

const RXC_MANUAL_LIST: FC<RXC_MANUAL_LIST_TYPE> = ({svg, values}) => {
  return (
    <div>RXC_MANUAL_LIST</div>
  )
}

export default RXC_MANUAL_LIST;