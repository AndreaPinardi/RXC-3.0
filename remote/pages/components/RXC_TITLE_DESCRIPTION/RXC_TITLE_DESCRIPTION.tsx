import React, { FC } from 'react'

interface RXC_TITLE_DESCRIPTION_TYPE {
    title: string;
    description?: string;
    accordion?: boolean;
    textContent?: string[];
    steps_addOns_label?: string;
}

const RXC_TITLE_DESCRIPTION: FC<RXC_TITLE_DESCRIPTION_TYPE> = (props) => {
  return (
    <div>RXC_TITLE_DESCRIPTION</div>
  )
}

export default RXC_TITLE_DESCRIPTION