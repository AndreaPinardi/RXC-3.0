import React, { FC } from "react";
import Text from "../../common/Text";

interface RXC_TITLE_DESCRIPTION_TYPE {
  id: number;
  order: number;
  title: string;
  description?: string;
  accordion?: boolean;
  textContent?: string[];
  steps_addOns_label?: string;
}

const RXC_TITLE_DESCRIPTION: FC<RXC_TITLE_DESCRIPTION_TYPE> = (props) => {
  return (
    <div>
      <Text as="h1" weight="bold" align="center" size="3xl" className="mb-2">
        {props?.title}
      </Text>
      <Text as="p" weight="normal" align="center" className="mb-2">
        {props?.description}
      </Text>
    </div>
  );
};

export default RXC_TITLE_DESCRIPTION;
