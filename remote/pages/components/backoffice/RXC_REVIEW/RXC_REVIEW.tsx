import React, { FC } from "react";

interface RXC_REVIEW_PANEL_TYPE {
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
  title: string;
  discountTitle: string;
  firstLineReview: string;
  lensRecapTitle: string;
  insuranceButtonLabel: string;
  insuranceButtonLabelRemove: string;
  oneYearCoverageAdd: string;
  seeDetails: string;
  paymentInstallments_modal_paypal: string;
  paymentInstallments_modal_title: string;
  paymentInstallments_modal_subtitle: string;
  paymentInstallments_modal_affirm: string;
  paymentInstallments_modal_afterpay: string;
  paymentInstallments_modal_klarna: string;
  paymentInstallments_modal_terms: string;
  paymentInstallments_modal_learnMore: string;
  paymentInstallments_installmentsLabel: string;
  subtitle: string;
  tooltip: string;
}

const RXC_REVIEW_PANEL: FC<RXC_REVIEW_PANEL_TYPE> = ({
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
  title = "Review your selections",
  discountTitle = "40% off prescription lenses is automatically applied",
  firstLineReview = "Frame:",
  lensRecapTitle = "Lenses:",
  insuranceButtonLabel = "Add insurance benefits",
  insuranceButtonLabelRemove = "Remove insurance benefits",
  oneYearCoverageAdd = "Add",
  seeDetails = "See details",
  paymentInstallments_modal_paypal = "With ###PAYMENT_TYPE###, pay in ###INSTALLMENTS### easy payments of just ###MONTHLY_PRICE###",
  paymentInstallments_modal_title = "Shop now. Pay later.",
  paymentInstallments_modal_subtitle = "Select ###PAYMENT_TYPE### as your payment method at checkout \n to pay in interest-free installments, with no hidden fees.",
  paymentInstallments_modal_affirm = "With ###PAYMENT_TYPE###, pay in ###INSTALLMENTS### interest-free payments of just ###MONTHLY_PRICE###",
  paymentInstallments_modal_afterpay = "With ###PAYMENT_TYPE###, make ###INSTALLMENTS### interest-free payments, every two weeks.",
  paymentInstallments_modal_klarna = "With ###PAYMENT_TYPE###, pay in ###INSTALLMENTS### interest-free payments of just ###MONTHLY_PRICE###",
  paymentInstallments_modal_terms = "You must be over 18, a resident of the U.S., and meet additional eligibility criteria to qualify. Late fees may apply. \n <a href='#' style= 'color:rgba(87, 93, 155, 1); font-weight: 600; letter-spacing:0.16px'>Click here</a> for complete terms. Loans to California residents made or arranged are pursuant to a California Finance Lenders Law",
  paymentInstallments_modal_learnMore = "Learn more",
  paymentInstallments_installmentsLabel = "Pay over time in interest-free installments with ###PAYMENT_TYPE###",
  subtitle = "Your glasses will come with best in class Ray-Ban technology.",
  tooltip = "Ensure your eyewear with an extended warranty for unlimited repair and replacement at any LensCrafters store.",
}) => {
  return <div>RXC_REVIEW_PANEL</div>;
};

export default RXC_REVIEW_PANEL;
