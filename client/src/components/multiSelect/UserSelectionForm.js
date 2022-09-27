import React from "react";

import "./formik-demo.css";
import { withFormik } from "formik";
import * as Yup from "yup";
import {useState } from "react";
import MySelect from "./MySelect";
import { CopyBlock, atomOneLight, Code } from "react-code-blocks";
import CodeSnippets from "../codeBlock/CopeSnippets";

function UserSelectionForm() {
  const [leadRetrieval, setLeadRetrieval] = useState("");
  const [leadParse, setLeadParse] = useState("");
  const [leadQuality, setLeadQuality] = useState("");
  const [user, setUser] = useState("");

  const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
      lead_id: Yup.string()
        .length(15, "this needs to be 15 characters")
        .required("Lead ID is required!"),
      fields: Yup.array()
        .min(1, "Select at least 1 field to prefill")
        .of(
          Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
          })
        ),
    }),
    mapPropsToValues: (props) => ({
      lead_id: "",
      fields: [],
    }),
    handleSubmit: (values, { setSubmitting }) => {
      setLeadRetrieval("Lead Retrieval");
      setLeadParse(CodeSnippets(values.lead_id, "LPR", values.fields));
      setLeadQuality(CodeSnippets(values.lead_id, "LAQ", values.fields));
    },
    setFieldValue: (values) => {
      console.log("test");
    },
    displayName: "MyForm",
  });

  const MyForm = (props) => {
    const {
      values,
      touched,
      dirty,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      setFieldValue,
      setFieldTouched,
      isSubmitting,
    } = props;

    let output = parseInput(props.values.fields).join();
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="lead_id" style={{ display: "block" }}>
          Lead ID
        </label>
        <input
          id="lead_id"
          placeholder="Enter your lead ID"
          value={values.lead_id}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {String(values.lead_id).length > 0 &&
          String(values.lead_id).length != 15 && (
            <div style={{ color: "red", marginTop: ".5rem" }}>
              Please enter 15 digit lead ID
            </div>
          )}
        <MySelect
          value={values.fields}
          onChange={setFieldValue}
          onBlur={setFieldTouched}
          error={errors.fields}
          touched={touched.fields}
        />
        <button
          type="button"
          className="outline"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <div className="code_block">  
        <h4>Lead Retrieval</h4>
        <CopyBlock className="inline-block"
          language="go"
          text={leadRetrieval}
          text={user}
          codeBlock
          theme={atomOneLight}
          showLineNumbers={false}
        />
        <h4>Lead Parse and Prefill</h4>
        <CopyBlock className="inline-block"
          language="go"
          text={leadParse}
          codeBlock
          theme={atomOneLight}
          showLineNumbers={false}
        />
        <h4>Lead Ads Quality Integration</h4>
        <CopyBlock className="inline-block"
          language="go"
          text={leadQuality}
          codeBlock
          theme={atomOneLight}
          showLineNumbers={false}
        />
        </div>
      </form>
    );

    function parseInput(fields) {
      let result = [];
      if (fields.length === 0) {
        return result;
      }
      for (let i = 0; i < fields.length; i++) {
        let value = fields[i].value;
        result.push(value);
      }
      return result;
    }
  };

  const MyEnhancedForm = formikEnhancer(MyForm);

  return (
    <div>
      <div className="w3-container w3-content w3-padding-64">
        <MyEnhancedForm />
      </div>
    </div>
  );
}

export default UserSelectionForm;
