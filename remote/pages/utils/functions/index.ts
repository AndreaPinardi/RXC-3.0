export function getChannelFromBrand(brand) {
  switch (brand) {
    case "arnette":
      return "AN";
    case "clearly":
      return "CL";
    case "costa":
      return "CM";
    case "davidclulow":
      return "DC";
    case "default":
      return "LC";
    case "framesdirect":
      return "FD";
    case "glasses":
      return "GL";
    case "oakley":
      return "OO";
    case "oliverpeoples":
      return "OP";
    case "opsm":
      return "OPSM";
    case "osi":
      return "OSI";
    case "persol":
      return "PO";
    case "rayban":
      return "RB";
    case "sgh":
      return "SGH";
    case "targetoptical":
      return "TO";
    default:
      return "LC";
  }
}
export const cleanRule = (lensPackage: any) =>
  (!lensPackage.color || !lensPackage.color.length) &&
  (!lensPackage.blueLight || !lensPackage.blueLight.length) &&
  (!lensPackage.transition || !lensPackage.transition.length) &&
  (!lensPackage.colorCategory || !lensPackage.colorCategory.length);

export const blueLightRule = (lensPackage: any) =>
  lensPackage.blueLight &&
  lensPackage.blueLight.length &&
  (!lensPackage.transition || !lensPackage.transition.length);

export const transitionRule = (lensPackage: any) =>
  lensPackage.transition && lensPackage.transition.length;

export const sunRule = (lensPackage: any) =>
  lensPackage?.color &&
  lensPackage?.color.length &&
  (!lensPackage.transition || !lensPackage.transition.length);

export const env = () => {
  const scripts = Array.from(document.getElementsByTagName("script"));
  const rxcScript = scripts.find((script) => {
    return script.src.includes("rxc.js");
  });
  const splittedScript = rxcScript?.src.split(/[//]/);
  const env = splittedScript?.[3];
  return env;
};
