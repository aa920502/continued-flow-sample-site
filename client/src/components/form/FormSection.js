import React from "react";
import RegistrationForm from "./RegistrationForm";
import RegistrationFormWithContinuedFlow from "./RegistrationFormWithContinuedFlow";

function FormSection() {
  return (
    <div className="w3-container w3-content  w3-padding-64">
      <div className="container">
        <div className="row w3-center">
          <div className="col ">
            <h2>Normal Lead form</h2>
          </div>
          <div className="col ">
            <h2>Lead form with continued flow</h2>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <RegistrationForm />
          </div>
          <div className="col ">
            <RegistrationFormWithContinuedFlow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
