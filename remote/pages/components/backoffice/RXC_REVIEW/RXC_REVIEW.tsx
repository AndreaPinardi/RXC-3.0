import React, { FC } from "react";

interface RXC_REVIEW_PANEL_TYPE {
    steps_advancedPrescription_manual_manualPreviewTitle: string;
    steps_advancedPrescription_manual_seeDetails_sphere: string;
    steps_advancedPrescription_manual_seeDetails_cylinder: string;
    steps_advancedPrescription_manual_seeDetails_axis: string;
    steps_advancedPrescription_manual_seeDetails_add: string;
    steps_advancedPrescription_manual_seeDetails_pd: string;
    steps_advancedPrescription_manual_seeDetails_od: string;
    steps_advancedPrescription_manual_seeDetails_right: string;
    steps_advancedPrescription_manual_seeDetails_left: string;
    steps_advancedPrescription_manual_seeDetails_os: string;
    steps_advancedPrescription_manual_seeDetails_vertical: string;
    steps_advancedPrescription_manual_seeDetails_baseDirection: string;
    steps_advancedPrescription_manual_seeDetails_horizontal: string;
}

const RXC_REVIEW_PANEL: FC<RXC_REVIEW_PANEL_TYPE> = (props) => {
  return <div>RXC_REVIEW_PANEL</div>;
};

export default RXC_REVIEW_PANEL;
