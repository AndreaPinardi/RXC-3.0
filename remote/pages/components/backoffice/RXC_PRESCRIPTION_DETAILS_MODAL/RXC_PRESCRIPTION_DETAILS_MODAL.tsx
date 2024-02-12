import React, { FC } from "react";

interface RXC_PRESCRIPTION_DETAILS_MODAL_TYPE {
  title: string;
  edit: string;
  sphere: string;
  cylinder: string;
  axis: string;
  add: string;
  pd: string;
  od: string;
  right: string;
  left: string;
  os: string;
  vertical: string;
  baseDirection: string;
  horizontal: string;
}

const RXC_PRESCRIPTION_DETAILS_MODAL: FC<
  RXC_PRESCRIPTION_DETAILS_MODAL_TYPE
> = ({
  title = "Your prescription details",
  edit = "Edit prescription",
  sphere = "SPH",
  cylinder = "CYL",
  axis = "Axis",
  add = "ADD",
  pd = "PD",
  od = "OD",
  right = "Right",
  left = "Left",
  os = "OS",
  vertical = "Vertical Prism (Δ)",
  baseDirection = "Base Direction",
  horizontal = "Horizontal Prism (Δ)",
}) => {
  return <div>RXC_PRESCRIPTION_DETAILS_MODAL</div>;
};

export default RXC_PRESCRIPTION_DETAILS_MODAL;
