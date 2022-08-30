import React from "react";
import RegistrationForm from "./RegistrationForm";
import RegistrationFormWithContinuedFlow from "./RegistrationFormWithContinuedFlow";
function FormSection() {
  return (
    <div className="w3-container w3-content w3-center w3-padding-64">
      <div className="container">
        <div className="row">
          <div className="col border">
            <h2>Normal Lead form</h2>
          </div>
          <div className="col border">
            <h2>Lead form with continued flow</h2>
          </div>
        </div>
        <div className="row">
          <div className="col border">
            <RegistrationForm />
          </div>
          <div className="col border">
            <RegistrationFormWithContinuedFlow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
