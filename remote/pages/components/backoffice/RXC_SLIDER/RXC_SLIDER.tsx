import React, { FC, useState } from "react";
import { Switch } from "@headlessui/react";

interface RXC_SLIDER_TYPE {
  attribute: string;
  valueDependency?: string;
  viewMode?: string;
  nestedViewMode?: string;
  nestedComponents?: [];
  title?: string;
  description?: string;
  showInfoIcon?: boolean;
}

const RXC_SLIDER: FC<RXC_SLIDER_TYPE> = ({ nestedViewMode = "outside" }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="relative w-full">
      <Switch.Group>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className="relative inline-flex h-10 w-full items-center rounded-full bg-secondary"
        >
          <Switch.Label
            className="absolute top-2 left-4 z-10 text-white ui-checked:text-black"
            passive
          >
            option 1
          </Switch.Label>
          <Switch.Label
            className="absolute top-2 right-4 z-10 text-black ui-checked:text-white"
            passive
          >
            option 2
          </Switch.Label>
          <span className="inline-block h-10 w-1/2 transform rounded-full bg-primary transition ui-checked:translate-x-full" />
        </Switch>
      </Switch.Group>
    </div>
  );
};

export default RXC_SLIDER;
