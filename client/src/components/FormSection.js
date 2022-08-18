import React from "react";
import RegistrationForm from "./RegistrationForm";

function FormSection() {
  return (
    <div className="w3-container w3-content w3-center w3-padding-64">
      <div class="container">
        <div class="row">
          <div class="col border">
            <h2>Normal Lead form</h2>
          </div>
          <div class="col border">
            <h2>Lead form with continued flow</h2>
          </div>
        </div>
        <div class="row">
          <div class="col border">
            <RegistrationForm />
          </div>
          <div class="col border">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
