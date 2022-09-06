import React from "react";
import "./styles.css";

export default function (props) {
  return (
    <div className="inputContainer">
      <label className="font-bold">Show Line Numbers</label>
      <div>
        <input type="checkbox" {...props} />
      </div>
    </div>
  );
}
