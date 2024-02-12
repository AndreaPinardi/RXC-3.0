import React, { FC } from "react";

interface RXC_ATTRIBUTE_TILE_LIST_TYPE {
  svg?: boolean;
  attribute: string;
  addTilesTitlePrefix?: [];
  activateMoneySavingsBadge?: boolean;
  valueDependency?: string;
  viewMode?: string;
  nestedViewMode?: string;
  nestedComponents?: Object[];
  autoProceed?: boolean;
}

const RXC_ATTRIBUTE_TILE_LIST: FC<RXC_ATTRIBUTE_TILE_LIST_TYPE> = ({
  nestedViewMode = "inside",
}) => {
  return <div>RXC_ATTRIBUTE_TILE_LIST</div>;
};

export default RXC_ATTRIBUTE_TILE_LIST;
