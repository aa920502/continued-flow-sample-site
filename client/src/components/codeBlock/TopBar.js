import React from "react";
import Select from "./Select";
import Toggle from "./Toggle";
import "./styles.css";

export default function ({ toggle, language }) {
  return (
    <div className="inputContainer">
      <Toggle {...toggle} />
      <Select {...language} />
    </div>
  );
}
