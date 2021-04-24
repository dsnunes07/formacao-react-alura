import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import PersonalData from "../PersonalData/PersonalData";
import ShippingData from "../ShippingData/ShippingData";
import UserData from "../UserData/UserData";

function RegisterForm({ submitAction, validateCPF }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  useEffect(() => {
    if (currentStep === steps.length - 1) {
      submitAction(collectedData);
    }
  })

  const steps = [
    <UserData submitAction={collectData} />,
    <PersonalData submitAction={collectData} validateCPF={validateCPF} />,
    <ShippingData submitAction={collectData} />,
    <Typography variant="h5">Thank you for registering</Typography>
  ]

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data })
    next();
  }
  function next() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Conclusion</StepLabel>
        </Step>
      </Stepper>
      { steps[currentStep]}
    </>
  );
}

export default RegisterForm;
