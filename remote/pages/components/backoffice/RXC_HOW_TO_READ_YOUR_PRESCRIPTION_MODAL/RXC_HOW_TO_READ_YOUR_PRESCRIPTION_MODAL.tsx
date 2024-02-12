import React, { FC } from "react";

interface RXC_HOW_TO_READ_YOUR_PRESCRIPTION_MODAL_TYPE {
  title: string;
  subtitle: string;
  rightEye_name: string;
  rightEye_description: string;
  leftEye_name: string;
  leftEye_description: string;
  sphere_name: string;
  sphere_description: string;
  cylinder_name: string;
  cylinder_description: string;
  axis_name: string;
  axis_description: string;
  add_name: string;
  add_description: string;
  infoText: string;
  customerService: string;
}

const RXC_HOW_TO_READ_YOUR_PRESCRIPTION_MODAL: FC<
  RXC_HOW_TO_READ_YOUR_PRESCRIPTION_MODAL_TYPE
> = ({
  title = "How to read your prescription",
  subtitle = "If you have a prescription for eyeglasses, the prescription information will typically include the following:",
  rightEye_name = " OD (Right Eye)",
  rightEye_description = 'OD stands for "oculus dexter" which is Latin for "right eye".',
  leftEye_name = " OS (Left Eye)",
  leftEye_description = 'OS stands for "oculus sinister" which is Latin for “left eye”.',
  sphere_name = "Sphere (SPH) - also known as Power (PWR)",
  sphere_description = "They mean the same thing: the strength of your prescription. If you're nearsighted you will have a minus (-) before your values, and if you’re or farsighted you will have a plus (+).",
  cylinder_name = "Cylinder (CYL)",
  cylinder_description = "This is for people with astigmatism. This is when one part of the eye needs more correction than the rest. The Cylinder value is written with a minus (-) sign.",
  axis_name = "Axis",
  axis_description = "This is only for people with astigmatism. The axis is a number between 0 and 180 and determines the orientation of the Cylinder (CYL).",
  add_name = "Add",
  add_description = "This indicates the additional magnifying power that is added to the lens to correct presbyopia, a common age-related condition that affects near vision.",
  infoText = "If any of this information isn’t included in your prescription, you can leave the field blank.",
  customerService = "Not sure about something? Call our Customer Service experts",
}) => {
  return <div>RXC_HOW_TO_READ_YOUR_PRESCRIPTION_MODAL</div>;
};

export default RXC_HOW_TO_READ_YOUR_PRESCRIPTION_MODAL;
