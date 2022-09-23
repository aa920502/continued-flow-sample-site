import React, { useEffect, useState } from "react";
import Select from "react-select";

function OptionValue(props) {

    const operation_options = [
        { value: "LR", label: "Lead Retrieval" },
        {value: "LPR", label: "Lead Parse and Profile"},
        { value: "LAQ", label: "Lead Ads Quality Integration" },
    ];

    function handleChange(value) {
        props.onChange("options", value);
    }

    return (
        <div style={{ margin: "1rem 0" }}>
            <label htmlFor="color">Choose Operation </label>
            <Select
                id="color"
                onChange={handleChange}
                options={operation_options}
            />
        </div>
    );
}

export default OptionValue;
