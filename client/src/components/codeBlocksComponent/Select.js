import React from "react";
import "./styles.css";

export default function (props) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <div className="inputContainer">
        <select
          {...props}
          value={props.value}
          className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline items-center"
        >
          {props.options}
        </select>
      </div>
    </div>
  );
}
