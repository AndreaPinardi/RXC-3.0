import React, { FC } from "react";

const DEFAULT_LABELS = {
  title: "Your prescription details",
  edit: "Edit prescription",
};

interface RXC_PRESCRIPTION_DETAILS_MODAL_TYPE {
  title: string;
  edit: string;
}

const RXC_PRESCRIPTION_DETAILS_MODAL: FC<
  RXC_PRESCRIPTION_DETAILS_MODAL_TYPE
> = (props) => {
  return <div>RXC_PRESCRIPTION_DETAILS_MODAL</div>;
};

export default RXC_PRESCRIPTION_DETAILS_MODAL;
