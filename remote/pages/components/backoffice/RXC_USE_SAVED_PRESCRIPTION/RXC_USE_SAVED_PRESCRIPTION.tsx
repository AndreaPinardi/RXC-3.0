import React, { FC } from "react";

interface RXC_USE_SAVED_PRESCRIPTION_TYPE {
    steps_advancedPrescription_fromMyAccount_title: string;
    steps_advancedPrescription_fromMyAccount_subtitle: string;
    steps_advancedPrescription_fromMyAccount_subtitleAdd: string;
    steps_advancedPrescription_fromMyAccount_prescriptionName: string;
    steps_advancedPrescription_fromMyAccount_uploadedOn: string;
    steps_advancedPrescription_fromMyAccount_today: string;
    steps_advancedPrescription_fromMyAccount_yesterday: string;
    steps_advancedPrescription_fromMyAccount_justUpdated: string;
}

const RXC_USE_SAVED_PRESCRIPTION: FC<RXC_USE_SAVED_PRESCRIPTION_TYPE> = (props) => {
  return <div>RXC_USE_SAVED_PRESCRIPTION</div>;
};

export default RXC_USE_SAVED_PRESCRIPTION;