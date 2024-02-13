import useAttributeTileList from "@/hooks/useAttributeTileList";
import React, { FC } from "react";
import Card from "../../layout/Card";

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
  attribute,
}) => {
  const { options, onSelect } = useAttributeTileList(attribute);
  return (
    <div>
      {options.map((tile) => (
        <Card key={tile.id} onClick={() => onSelect(tile.id)}>
          {tile.title}
        </Card>
      ))}
    </div>
  );
};

export default RXC_ATTRIBUTE_TILE_LIST;
