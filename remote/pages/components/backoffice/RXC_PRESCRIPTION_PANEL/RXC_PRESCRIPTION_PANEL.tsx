import React, { FC } from "react";

const DEFAULT_LABELS = {
  pupillaryDistanceSubtitle:
    "You can select the default settings of 61 for women and 64 for men if you have an average or low prescription. If you have a strong prescription or if you want to know your exact Pupillary Distance, please ",
  selectNewFrame: "Select new frame",
  title: "Enter your prescription",
  subtitle:
    "Insert the parameters you find on your prescription in the table below.",
  rightEye_initials: "OD",
  rightEye_name: "(Right)",
  leftEye_initials: "OS",
  leftEye_name: "(Left)",
  sphere: "SPH (Sphere)",
  cylinder: "CYL (Cylinder)",
  axis: "Axis",
  add: "Add",
  addPlaceholder: "None",
  vertical: "Vertical (Δ)",
  baseDirection: "Base Direction",
  horizontal: "Horizontal (Δ)",
  pupillaryDistance: "PD (Pupillary distance)",
  pdLeft: "Left",
  pdRight: "Right",
  iHaveTwoPd: "I have 2 Pupillary Distance numbers",
  commentsTitle: "Comments",
  applyButton: "Continue",
  applyButtonSave: "Save and continue",
  howToRead: "How to read your prescription",
  pupillaryDistanceWarningValue:
    "Please input your pupillary distance, if you don’t have it you can use the default from the above or you can ",
  pupillaryDistanceMisurePDAction: "measure your Pupillary Distance.",
  pupillaryDistanceMisurePDActionHowToRead: "measure your PD",
  pupillaryDistanceWarningTooltip: "Provide text for this tooltip",
  moreOptions: "More options",
  incompatibleFrame:
    "We're sorry - the frames you’ve chosen aren't compatible with your prescription.<br/>Please select another style. Have questions? You can <a href='https://www.glasses.com/gl-us/contact-us'>contact our Customer Service</a> team.",
  incompatibleLenses:
    "We're sorry, the prescription you've entered isn't compatible with our lenses offered online. Find a store near you or contact our <a href='https://www.glasses.com/gl-us/contact-us'>Customer Service</a> team for more information.",
  incompatibleLensTypeErrorSingle:
    "You selected single vision lenses, but your saved prescription is for progressive lenses. We have updated your prescription below. Please check that it’s still valid.",
  incompatibleLensTypeErrorProgressive:
    "You selected progressive lenses, but your saved prescription is for single vision lenses. We have updated your prescription below. Please check that it’s still valid.",
  clearAll: "clear all",
  alerts_pdValueWarningDigitalOptometrySmaller:
    "The selected Pupillary Distance is smaller than average, we suggest double checking your prescription. You can leave the default values written above or you can ",
  alerts_pdValueWarningDigitalOptometryLarger:
    "The selected Pupillary Distance is larger than average, we suggest double checking your prescription. You can leave the default values written above or you can ",
  alerts_pdValueWarningSmaller:
    "The selected Pupillary Distance is smaller than average, we suggest double checking your prescription.</b></br>You can leave the default setting of 63 which is the average measurement for adults.<br>If we need any more information about your prescription, one of our experts will be in touch.",
  alerts_pdValueWarningLarger:
    "The selected Pupillary Distance is larger than average, we suggest double checking your prescription.</b></br>You can leave the default setting of 63 which is the average measurement for adults.<br>If we need any more information about your prescription, one of our experts will be in touch.",
  alerts_pdValueWarning2:
    "The selected Pupillary Distance is smaller than average, we suggest double checking your prescription. If you don’t have the Pupillary Distance here .",
  alerts_missingBaseDir: "Please choose the base direction for your prism",
  alerts_missingPrismValues: "Please choose the prism value",
  alerts_missingValues: "Complete the missing values",
  alerts_incompatibleWithPrescriptionTitle:
    "Sorry! The frame you’ve chosen isn’t compatible with your prescription",
  alerts_incompatibleWithPackagesTitle:
    "Sorry! The prescription you've chosen isn't compatible with any of our available lenses for this frame",
  alerts_shopCompatible: "Shop compatible frames",
  alerts_clearAll: "Clear all",
  alerts_agreementTextMobile:
    "By clicking this box, I confirm that the prescription values entered above are taken from a valid (not expired) prescription issued to me, signed by a licensed optometrist or ophthalmologist.",
  alerts_axisRangeError:
    "The AXIS values you’ve inserted are not correct! These values must be between 1 and 180.",
  alerts_axisZeroError:
    "The AXIS values you’ve inserted are not correct! If CYL value is higher or lower than 0,  AXIS values can’t be 0.",
  alerts_sphPositiveNegativeWarning:
    "You’ve inserted 1 positive and 1 negative value, which is very rare. <br>We suggest double checking your prescription. If this is correct, you can proceed.",
  alerts_pdValueWarning:
    "The selected Pupillary Distance is outside the normal range, we suggest double checking your prescription. You can leave the default setting of 63 which is the average measurement for adults. \nIf we need any more information about your prescription, one of our experts will be in touch.",
  alerts_requiredToProceed: "This is required to proceed",
  alerts_incompatibleWithPrescriptionBody:
    "but don’t worry, compatible frames are available",
  alerts_agreementText:
    "By clicking this box, I confirm that the prescription values entered above are taken from a valid (not expired) prescription issued to me, signed by a licensed optometrist or ophthalmologist.",
  digitalOptometry_title: "How to measure your Pupillary Distance",
  digitalOptometry_appSubtitle:
    "Your Pupillary Distance, or PD, is the distance in millimeters (mm) from the center of one pupil to the center of the other. It indicates exactly which part of the lens you look through, ensuring optimal comfort and clarity. You can measure with the app or manually.",
  digitalOptometry_manuallySubtitle:
    "Your Pupillary Distance, or PD, is the distance in millimeters (mm) from the center of one pupil to the center of the other. You can measure with the app or manually.",
  digitalOptometry_toggle_app: "WITH THE APP",
  digitalOptometry_toggle_manually: "MANUALLY",
  digitalOptometry_opthyDesc:
    "<b>Get your glasses just right with Opthy.</b><br/><p>Opthy measures your Pupillary Distance, allowing you to find the most comfortable, personalized fit.</p><p>App available on iPhone X and above.</p>",
  digitalOptometry_manuallyContent:
    "<div>If you want, you can measure your Pupillary Distance (PD) yourself by following these steps:</div><ul><li>Grab a small ruler in one hand, and have your pencil and paper handy.</li><li>Now position yourself approximately 8 inches (20 cm) away from a mirror.</li><li>Close your left eye and align the 0 over the center of your right pupil.</li><li>Measure the distance from your right to your left pupil.</li><li>The number that lines up directly over your left pupil is your PD (an average PD for an adult ranges between 58 and 65).</li></ul>",
  manualPreviewTitle: "Your prescription details",
  seeDetails_sphere: "SPH",
  seeDetails_cylinder: "CYL",
  seeDetails_axis: "Axis",
  seeDetails_add: "ADD",
  seeDetails_pd: "PD",
  seeDetails_od: "OD",
  seeDetails_right: "Right",
  seeDetails_left: "Left",
  seeDetails_os: "OS",
  seeDetails_vertical: "Vertical Prism (Δ)",
  seeDetails_baseDirection: "Base Direction",
  seeDetails_horizontal: "Horizontal Prism (Δ)",
  issueDate_label: "Issue date (MM/YYYY)",
  issueDate_missingError: "Please insert date",
  issueDate_formatError: "The date entered is not valid",
  issueDate_tooltipText:
    "Before submitting your prescription, please check the expiration date to make sure it is current and valid. We only accept prescriptions that have been issued within the last 2 years. By selecting the tick box and continuing below, you agree to our privacy policy and T&Cs.",
  samePrescriptionBothEyes: "Same prescription for both eyes",
  continueModal_titleNoAdd: "ARE YOU SURE YOU WANT TO CONTINUE?",
  continueModal_messageNoAdd:
    "Please make sure to enter the Addition (ADD) value if it is listed in your prescription, otherwise please proceed without.",
  continueModal_continueNoAdd: "Continue without (add)",
  continueModal_title: "Send prescription later",
  continueModal_message:
    "By clicking on continue, you will be skipping the prescription step. We’ll ask for it after your order, either by uploading it or having us call your doctor.",
  continueModal_continue: "Yes, continue",
  continueModal_cancel: "No, go back",
  noPowerModal_title: "continue with non-prescription lenses",
  noPowerModal_subtitle:
    "You have not entered a prescription for your glasses. Would you like to proceed with non-prescription lenses?",
  noPowerModal_continue: "yes, continue",
  noPowerModal_cancel: "no, cancel",
  addPrismValues: "My prescription includes prism values",
  whatIsIt: "What is PD (Pupillary Distance)",
  editTitle: "Edit your prescription",
  withoutPrescriptionFromMyAccount:
    "You don’t have a prescription saved in your account. Add your prescription below and save it for future purchases or go back and choose another method.",
  californian_toggle: "Are you a California resident?",
  californian_info:
    "Please note that besides adding prescription values manually, California residents are also required to electronically transmit their valid prescription.",
  californian_infoCMD:
    "Please note that besides adding prescription values manually, <b>California residents are also required to electronically transmit their valid prescription</b>. Choose an option to proceed.",
  californian_chooseTitle: "CHOOSE HOW TO SEND YOUR PRESCRIPTION",
  californian_uploadTitle: "UPLOAD YOUR PRESCRIPTION",
  californian_uploadDesc:
    "We accept the following file formats: .pdf, .png, .jpeg, .gif, .tiff, .bmp, .docx (max 10 MB) and IWork pages.",
  californian_uploadButton: "Upload",
  californian_callMyDoc: "CALL MY DOCTOR",
  californian_callMyDocButton: "FIND YOUR DOCTOR",
  californian_yes: "YES",
  californian_no: "NO",
  californian_modalMissingPrescription_title: "Missing prescription values",
  californian_modalMissingPrescription_subtitle:
    "If you don’t fill the values we won’t be able to suggest the right lens for you",
  californian_modalMissingPrescription_bottonYes: "YES, CONTINUE",
  californian_modalMissingPrescription_bottonNo: "NO, GO BACK",
  proceedCheckbox:
    "By clicking this box, I confirm that the prescription values entered above are taken from a unexpired written prescription issued to me, signed by a licensed optometrist or ophthalmologist.",
  proceedCheckboxError: "Required to proceed",
  savePrescriptionInAccount: "Save prescription in My Account",
  newPrescriptionNameError: "Prescription name field cannot be empty",
  prescriptionName: "Prescription name",
};

interface RXC_PRESCRIPTION_PANEL_TYPE {
  enablePrism: boolean;
  enablePrismComment: boolean;
  enableDigitalOptometry: boolean;
  targetDigitalOptometry: ["Single Vision", "Progessive"];
  enableAgreementCheckbox: boolean;
  pupillaryDistanceSubtitle: string;
  selectNewFrame: string;
  title: string;
  subtitle: string;
  rightEye_initials: string;
  rightEye_name: string;
  leftEye_initials: string;
  leftEye_name: string;
  sphere: string;
  cylinder: string;
  axis: string;
  add: string;
  addPlaceholder: string;
  vertical: string;
  baseDirection: string;
  horizontal: string;
  pupillaryDistance: string;
  pdLeft: string;
  pdRight: string;
  iHaveTwoPd: string;
  commentsTitle: string;
  applyButton: string;
  applyButtonSave: string;
  howToRead: string;
  pupillaryDistanceWarningValue: string;
  pupillaryDistanceMisurePDAction: string;
  pupillaryDistanceMisurePDActionHowToRead: string;
  pupillaryDistanceWarningTooltip: string;
  moreOptions: string;
  incompatibleFrame: string;
  incompatibleLenses: string;
  incompatibleLensTypeErrorSingle: string;
  incompatibleLensTypeErrorProgressive: string;
  clearAll: string;
  alerts_pdValueWarningDigitalOptometrySmaller: string;
  alerts_pdValueWarningDigitalOptometryLarger: string;
  alerts_pdValueWarningSmaller: string;
  alerts_pdValueWarningLarger: string;
  alerts_pdValueWarning2: string;
  alerts_missingBaseDir: string;
  alerts_missingPrismValues: string;
  alerts_missingValues: string;
  alerts_incompatibleWithPrescriptionTitle: string;
  alerts_incompatibleWithPackagesTitle: string;
  alerts_shopCompatible: string;
  alerts_clearAll: string;
  alerts_agreementTextMobile: string;
  alerts_axisRangeError: string;
  alerts_axisZeroError: string;
  alerts_sphPositiveNegativeWarning: string;
  alerts_pdValueWarning: string;
  alerts_requiredToProceed: string;
  alerts_incompatibleWithPrescriptionBody: string;
  alerts_agreementText: string;
  digitalOptometry_title: string;
  digitalOptometry_appSubtitle: string;
  digitalOptometry_manuallySubtitle: string;
  digitalOptometry_toggle_app: string;
  digitalOptometry_toggle_manually: string;
  digitalOptometry_opthyDesc: string;
  digitalOptometry_manuallyContent: string;
  issueDate_label: string;
  issueDate_missingError: string;
  issueDate_formatError: string;
  issueDate_tooltipText: string;
  samePrescriptionBothEyes: string;
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
  addPrismValues: string;
  whatIsIt: string;
  editTitle: string;
  withoutPrescriptionFromMyAccount: string;
  californian_toggle: string;
  californian_info: string;
  californian_infoCMD: string;
  californian_chooseTitle: string;
  californian_uploadTitle: string;
  californian_uploadDesc: string;
  californian_uploadButton: string;
  californian_callMyDoc: string;
  californian_callMyDocButton: string;
  californian_yes: string;
  californian_no: string;
  californian_modalMissingPrescription_title: string;
  californian_modalMissingPrescription_subtitle: string;
  californian_modalMissingPrescription_bottonYes: string;
  californian_modalMissingPrescription_bottonNo: string;
  proceedCheckbox: string;
  proceedCheckboxError: string;
  savePrescriptionInAccount: string;
  newPrescriptionNameError: string;
  prescriptionName: string;
}

const RXC_PRESCRIPTION_PANEL: FC<RXC_PRESCRIPTION_PANEL_TYPE> = (props) => {
  return <div>RXC_PRESCRIPTION_PANEL</div>;
};

export default RXC_PRESCRIPTION_PANEL;
