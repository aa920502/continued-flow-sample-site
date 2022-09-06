import React, { useEffect, useState } from "react";
import Select from "react-select";

function MySelect(props) {
  const options = [
    { value: "Name", label: "Name" },
    { value: "Email", label: "Email" },
    { value: "Phone", label: "Phone" },
  ];

  function handleChange(value) {
    // this is going to call setFieldValue and manually update values.topcis
    props.onChange("fields", value);
  }

  function handleBlur() {
    // this is going to call setFieldTouched and manually update touched.topcis
    props.onBlur("fields", true);
  }

  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor="color">Fields to prefill (select at least 1) </label>
      <Select
        id="color"
        options={options}
        isMulti
        isClearable
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
      />
      {!!props.error && props.touched && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{props.error}</div>
      )}
    </div>
  );
}

export default MySelect;
