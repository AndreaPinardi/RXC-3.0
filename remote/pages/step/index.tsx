import useComponentsLoader from "@/hooks/useComponentsLoader";

export default function Step({ currentStep }) {
  const components = useComponentsLoader(currentStep.components);
  return <>{components}</>;
}
