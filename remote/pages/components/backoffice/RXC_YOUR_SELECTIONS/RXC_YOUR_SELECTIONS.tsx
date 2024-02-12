import React, { FC } from "react";

interface RXC_YOUR_SELECTIONS_TYPE {
  position: string;
  yourSelections: string;
  editButton: string;
  advancedPrescription_confirmedTitle: string;
  type_confirmedTitle: string;
  brand_confirmedTitle: string;
  lensBundle_confirmedTitle: string;
  treatmentsFamily_confirmedTitle: string;
  gvpTreatment_confirmedTitle: string;
  thickness_confirmedTitle: string;
  designType_confirmedTitle: string;
  treatments_confirmedTitle: string;
  lensColor_confirmedTitle: string;
  color_confirmedTitle: string;
  addOns_confirmedTitle: string;
  alreadyIncluded_confirmedTitle: string;
  protectionplan_confirmedTitle: string;
  price_included: string;
}

const RXC_YOUR_SELECTIONS: FC<RXC_YOUR_SELECTIONS_TYPE> = ({
  position = "top-right",
  yourSelections = "Your selections",
  editButton = "Edit",
  advancedPrescription_confirmedTitle = "Prescription",
  type_confirmedTitle = "Vision need:",
  brand_confirmedTitle = "Lens brand:",
  lensBundle_confirmedTitle = "Lens bundle:",
  treatmentsFamily_confirmedTitle = "Lens type:",
  gvpTreatment_confirmedTitle = "Lens Package:",
  thickness_confirmedTitle = "Thickness:",
  designType_confirmedTitle = "Design Type:",
  treatments_confirmedTitle = "Treatment:",
  lensColor_confirmedTitle = "Color:",
  color_confirmedTitle = "Color:",
  addOns_confirmedTitle = "Finishings:",
  alreadyIncluded_confirmedTitle = "Already Included:",
  protectionplan_confirmedTitle = "Protection plan",
  price_included = "Included",
}) => {
  return <div className="absolute top-2 right-2">RXC_YOUR_SELECTIONS</div>;
};

export default RXC_YOUR_SELECTIONS;
