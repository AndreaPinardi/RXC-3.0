import React, { FC } from "react";

interface RXC_0_POWER_POPUP_TYPE {
  continueModal_titleNoAdd: string;
  continueModal_messageNoAdd: string;
  continueModal_continueNoAdd: string;
  continueModal_title: string;
  continueModal_message: string;
  continueModal_continue: string;
  continueModal_cancel: string;
  noPowerModal_title: string;
  noPowerModal_subtitle: string;
  noPowerModal_continue: string;
  noPowerModal_cancel: string;
}

const RXC_0_POWER_POPUP: FC<RXC_0_POWER_POPUP_TYPE> = ({
  continueModal_titleNoAdd = "ARE YOU SURE YOU WANT TO CONTINUE?",
  continueModal_messageNoAdd = "Please make sure to enter the Addition (ADD) value if it is listed in your prescription, otherwise please proceed without.",
  continueModal_continueNoAdd = "Continue without (add)",
  continueModal_title = "Send prescription later",
  continueModal_message = "By clicking on continue, you will be skipping the prescription step. We’ll ask for it after your order, either by uploading it or having us call your doctor.",
  continueModal_continue = "Yes, continue",
  continueModal_cancel = "No, go back",
  noPowerModal_title = "continue with non-prescription lenses",
  noPowerModal_subtitle = "You have not entered a prescription for your glasses. Would you like to proceed with non-prescription lenses?",
  noPowerModal_continue = "yes, continue",
  noPowerModal_cancel = "no, cancel",
}) => {
  return <div>RXC_0_POWER_POPUP</div>;
};

export default RXC_0_POWER_POPUP;
