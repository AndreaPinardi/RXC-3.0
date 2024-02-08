import React, { FC } from "react";

interface RXC_ATTRIBUTE_TILE_LIST_TYPE {
  svg?: boolean;
  attribute: string;
  addTilesTitlePrefix?: ["designType"];
  activateMoneySavingsBadge?: boolean;
}

const RXC_ATTRIBUTE_TILE_LIST: FC<RXC_ATTRIBUTE_TILE_LIST_TYPE> = (props) => {
  return <div>RXC_ATTRIBUTE_TILE_LIST</div>;
};

export default RXC_ATTRIBUTE_TILE_LIST;
