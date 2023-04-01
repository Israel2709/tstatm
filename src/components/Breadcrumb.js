import React, { useCallback, useState } from "react";
import BreadcrumbIndicator from "./BreadcrumbIndicator";
const Breadcrumb = () => {
  const [currentStep, setCurrentStep] = useState({
    step: 1,
    isCompleted: false,
    progress: "20%",
  });
  const [steps, setSteps] = useState([
    {
      step: 1,
      isCompleted: false,
      progress: "20%",
    },
    {
      step: 2,
      isCompleted: false,
      progress: "40%",
    },
    {
      step: 3,
      isCompleted: false,
      progress: "61%",
    },
    {
      step: 4,
      isCompleted: false,
      progress: "82%",
    },
  ]);

  const nextStep = useCallback(() => {
    const stepIndex = currentStep.step + 1;
    if (stepIndex <= steps.length) {
      const newSteps = [...steps];
      const updatedSteps = newSteps.map((step) =>
        step.step < stepIndex ? { ...step, isCompleted: true } : step
      );
      setCurrentStep(steps.find((step) => step.step === stepIndex));
      setSteps(updatedSteps);
    }
  }, [currentStep]);
  return (
    <div className="w-100 custom-breadcrumb">
      <div className="w-100 d-flex justify-content-evenly mb-3">
        {steps.map((step) => (
          <BreadcrumbIndicator
            {...step}
            current={step.step === currentStep.step}
          />
        ))}
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-label="Register Progress"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-main-red rounded"
          style={{ width: currentStep.progress }}
        ></div>
      </div>
      <button onClick={nextStep}>next</button>
    </div>
  );
};

export default Breadcrumb;
