import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import spaceman2 from "../assets/spaceman-2.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import edit from "../assets/edit.png"
import Steps from "../components/Steps";
import Breadcrumb from "../components/Breadcrumb";
import NameForm from "../components/NameForm";
import PhoneForm from "../components/PhoneForm";
import TermsForm from "../components/TermsForm";
import VerificationForm from "../components/VerificationForm";

const RegisterForm = () => {
  const navigate = useNavigate();
  const nextStep = () => {
    const stepIndex = currentStep.step + 1;
    console.log(stepIndex);
    if (stepIndex <= steps.length) {
      const newSteps = [...steps];
      const updatedSteps = newSteps.map((step) =>
        step.step < stepIndex ? { ...step, isCompleted: true } : step
      );
      setCurrentStep(steps.find((step) => step.step === stepIndex));
      setSteps(updatedSteps);
    } else if (stepIndex > steps.length) {
      navigate("/confirmation");
    }
  };
  const [currentStep, setCurrentStep] = useState({
    step: 1,
    isCompleted: false,
    progress: "20%",
    image: step1,
    title: (
      <>
        <h1 className="text-center ms-3 fs-lg fw-bold text-uppercase">
          te queremos
          <span className="text-main-red"> conocer</span>
        </h1>
      </>
    ),
    description:
      "Queremos saber que eres tú , por favor ingresa los siguientes datos:",
    form: <NameForm handler={nextStep} />,
  });

  const [steps, setSteps] = useState([
    {
      step: 1,
      isCompleted: false,
      progress: "20%",
      image: step1,
      title: (
        <>
          <h1 className="text-center ms-3 fs-lg fw-bold text-uppercase">
            te queremos
            <span className="text-main-red"> conocer</span>
          </h1>
        </>
      ),
      description:
        "Queremos saber que eres tú , por favor ingresa los siguientes datos:",
      form: <NameForm handler={nextStep} />,
    },
    {
      step: 2,
      isCompleted: false,
      progress: "40%",
      image: step2,
      title: (
        <>
          <h1 className="text-center ms-3 fs-lg fw-bold text-uppercase">
            valida tu
            <span className="text-main-red"> celular</span>
          </h1>
        </>
      ),
      description: (
        <>
          <p className="fs-4 mb-0">Necesitamos validar tu número para continuar</p>
          <p className="fs-5">Ingresa tu número a 10 dígitos y te enviremos un código SMS.</p>
        </>
      ),
      form: <PhoneForm handler={nextStep} />,
    },
    {
      step: 3,
      isCompleted: false,
      progress: "61%",
      image: step3,
      title: (
        <>
          <h1 className="text-center ms-3 fs-lg fw-bold text-uppercase">
            código de
            <span className="text-main-red"> verificación</span>
          </h1>
        </>
      ),
      description: (
        <>
          <p>
            Te enviamos un SMS al número:<br />
            +52 55 1850 9196
            <img src={edit} alt="edit"></img>
          </p>
          <p>Ingresa el código de verificación:</p>
        </>
      ),
      form: <VerificationForm handler={nextStep} />,
    },
    {
      step: 4,
      isCompleted: false,
      progress: "82%",
      image: step4,
      title:  (
        <>
          <h1 className="text-center ms-3 fs-lg fw-bold text-uppercase">
            términos y
            <span className="text-main-red"> condiciones</span>
          </h1>
        </>
      ),
      form: <TermsForm handler={nextStep} />,
    },
  ]);

  return (
    <div className="container">
      <div className="row vh-75">
        <div className="col-12 col-md-8 d-flex h-100 align-items-center">
          <div className="w-100">
            <Breadcrumb stepList={steps} currentStep={currentStep} />
            <Steps image={currentStep.image}>{currentStep.title}</Steps>
            <p className="fs-4 text-white">{currentStep.description}</p>
            {currentStep.form}
          </div>
        </div>
        <div className="col-12 col-md-4 h-100 d-flex align-items-center">
          <img src={spaceman2} alt="imageSpaceman2" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
