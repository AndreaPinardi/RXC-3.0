import { useEffect, useState } from "react";

export default function Step({ currentStep }) {
  const [stepComponents, setStepComponents] = useState(null);

  useEffect(() => {
    if (currentStep?.stepItems?.length) {
      const importComponents = async () => {
        const componentPromises = currentStep.stepItems.map(
          (step) => import(`../components/${step.id}/${step.id}`)
        );

        try {
          const loadedComponents = await Promise.all(componentPromises);
          setStepComponents(loadedComponents.map((module) => module.default));
        } catch (error) {
          console.error("Error loading components:", error);
        }
      };
      importComponents();
    }
  }, [currentStep]);

  console.log(stepComponents);

  return (
    <>
      {stepComponents?.length &&
        stepComponents.map((Component, index) => (
          <div key={index}>
            <Component {...currentStep.stepItems[index]} />
          </div>
        ))}
    </>
  );
}
