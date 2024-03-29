import React, { FC } from "react";

interface RXC_FOOTER_TYPE {
  insuranceButtonLabel: string;
  applyingInsurance: string;
  insuranceLabelRemove: string;
  price_totalFrameLens_frame: string;
  price_totalFrameLens_frameLensTotal: string;
  showAddToBag?: boolean;
}

const RXC_FOOTER: FC<RXC_FOOTER_TYPE> = ({
  insuranceButtonLabel = "Add insurance benefits",
  applyingInsurance = "Applying insurance benefits",
  insuranceLabelRemove = "Remove insurance benefits",
  price_totalFrameLens_frame = "Frame price",
  price_totalFrameLens_frameLensTotal = "Frame + lenses price",
}) => {
  return <div className="mt-auto">RXC_FOOTER</div>;
};

export default RXC_FOOTER;
