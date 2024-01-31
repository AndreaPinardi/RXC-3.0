import React, { FC } from 'react'

const DEFAULT_LABELS = {
  insuranceButtonLabel: "Add insurance benefits",
  applyingInsurance: "Applying insurance benefits",
  insuranceLabelRemove: "Remove insurance benefits",
  price_totalFrameLens_frame: "Frame price",
  price_totalFrameLens_frameLensTotal: "Frame + lenses price",
}

interface RXC_HEAD_NAV_TYPE {
  insuranceButtonLabel: string;
  applyingInsurance: string;
  insuranceLabelRemove: string;
  price_totalFrameLens_frame: string;
  price_totalFrameLens_frameLensTotal: string;
}

const RXC_HEAD_NAV: FC<RXC_HEAD_NAV_TYPE> = ({
  insuranceButtonLabel = DEFAULT_LABELS.insuranceButtonLabel,
  applyingInsurance = DEFAULT_LABELS.applyingInsurance,
  insuranceLabelRemove = DEFAULT_LABELS.insuranceLabelRemove,
  price_totalFrameLens_frame = DEFAULT_LABELS.price_totalFrameLens_frame,
  price_totalFrameLens_frameLensTotal = DEFAULT_LABELS.price_totalFrameLens_frameLensTotal,
}) => {
  return (
    <div>RXC_HEAD_NAV</div>
  )
}

export default RXC_HEAD_NAV