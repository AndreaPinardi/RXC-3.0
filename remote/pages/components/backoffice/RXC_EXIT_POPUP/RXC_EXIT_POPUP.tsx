import React, { FC } from "react";

const DEFAULT_LABELS = {
  exitTitle: "Are you sure you want to exit?",
  exitSubtitle: "Your lens selection will not be saved",
  exitYes: "Yes, exit",
  exitContinueEditing: "No, continue",
  exitSave: "Save and continue shopping",
};

interface RXC_EXIT_POPUP_TYPE {
  exitTitle: string;
  exitSubtitle: string;
  exitYes: string;
  exitContinueEditing: string;
  exitSave: string;
}

const RXC_EXIT_POPUP: FC<RXC_EXIT_POPUP_TYPE> = ({
  exitTitle = "Are you sure you want to exit?",
  exitSubtitle = "Your lens selection will not be saved",
  exitYes = "Yes, exit",
  exitContinueEditing = "No, continue",
  exitSave = "Save and continue shopping",
}) => {
  return <div>RXC_EXIT_POPUP</div>;
};

export default RXC_EXIT_POPUP;
