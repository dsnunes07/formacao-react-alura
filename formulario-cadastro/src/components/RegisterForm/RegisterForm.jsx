import React from "react";
import PersonalData from "../PersonalData/PersonalData";
import ShippingData from "../ShippingData/ShippingData";
import UserData from "../UserData/UserData";

function RegisterForm({ submitForm, validateCPF }) {
  return (
    <>
      <UserData />
      <PersonalData submitAction={submitForm} validateCPF={validateCPF} />
      <ShippingData />
    </>
  );
}

export default RegisterForm;
