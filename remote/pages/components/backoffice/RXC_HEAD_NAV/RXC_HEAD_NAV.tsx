import React, { FC } from "react";

const DEFAULT_LABELS = {
  insuranceButtonLabel: "Add insurance benefits",
  applyingInsurance: "Applying insurance benefits",
  insuranceLabelRemove: "Remove insurance benefits",
  price_totalFrameLens_frame: "Frame price",
  price_totalFrameLens_frameLensTotal: "Frame + lenses price",
};

interface RXC_HEAD_NAV_TYPE {
  insuranceButtonLabel: string;
  applyingInsurance: string;
  insuranceLabelRemove: string;
  price_totalFrameLens_frame: string;
  price_totalFrameLens_frameLensTotal: string;
}

const RXC_HEAD_NAV: FC<RXC_HEAD_NAV_TYPE> = ({
  insuranceButtonLabel = "Add insurance benefits",
  applyingInsurance = "Applying insurance benefits",
  insuranceLabelRemove = "Remove insurance benefits",
  price_totalFrameLens_frame = "Frame price",
  price_totalFrameLens_frameLensTotal = "Frame + lenses price",
}) => {
  return <div>RXC_HEAD_NAV</div>;
};

export default RXC_HEAD_NAV;
