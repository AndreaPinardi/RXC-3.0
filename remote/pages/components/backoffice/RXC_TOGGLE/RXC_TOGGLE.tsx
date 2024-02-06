import React, { FC, useState } from "react";
import { Switch } from "@headlessui/react";

interface RXC_TOGGLE_TYPE {
  nestedComponents?: React.ReactElement[];
  attribute: string;
  title?: string;
  description?: string;
  showInfoIcon?: boolean;
}

const RXC_TOGGLE: FC<RXC_TOGGLE_TYPE> = (props) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-blue-600 ui-not-checked:bg-gray-200"
      >
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1" />
      </Switch>
    </>
  );
};

export default RXC_TOGGLE;
