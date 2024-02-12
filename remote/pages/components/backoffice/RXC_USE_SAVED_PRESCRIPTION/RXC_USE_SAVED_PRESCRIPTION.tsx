import React, { FC } from "react";

interface RXC_USE_SAVED_PRESCRIPTION_TYPE {
  title: string;
  subtitle: string;
  subtitleAdd: string;
  prescriptionName: string;
  uploadedOn: string;
  today: string;
  yesterday: string;
  justUpdated: string;
  olderThanYearBanner: string;
  showPrescription: string;
}

const RXC_USE_SAVED_PRESCRIPTION: FC<RXC_USE_SAVED_PRESCRIPTION_TYPE> = ({
  title = "Select your prescription",
  subtitle = "Choose the preferred prescription and we’ll take care of the rest. \n Can’t find it?",
  subtitleAdd = "Add a new prescription",
  prescriptionName = "Prescription name",
  uploadedOn = "Last updated: ",
  today = "Today",
  yesterday = "Yesterday",
  justUpdated = "Just updated",
  olderThanYearBanner = "This prescription was uploaded 1 year ago. Please check if it is still valid.",
  showPrescription = "show prescription",
}) => {
  return <div>RXC_USE_SAVED_PRESCRIPTION</div>;
};

export default RXC_USE_SAVED_PRESCRIPTION;
