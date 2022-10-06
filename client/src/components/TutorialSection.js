import React from "react";
import UserSelectionForm from "./multiSelect/UserSelectionForm";
import CodeBlock from "./codeBlock/CodeBlock";

function TutorialSection() {
  return (
    <div className="w3-container w3-content  w3-padding-64">
      <div className="container">
        <div className="row">
          <UserSelectionForm />
        </div>
      </div>
    </div>
  );
}

export default TutorialSection;
