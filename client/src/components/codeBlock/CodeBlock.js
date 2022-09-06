import React, { useState } from "react";
import { CopyBlock, a11yLight } from "react-code-blocks";
import { sample, TopBar } from ".";
import "./styles.css";

function CodeBlock() {
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);
  return (
    <div className="container mx-auto">
      <TopBar
        language={{
          value: language,
          onChange: (e) => {
            changeDemo(sample[e.target.value]);
            return changeLanguage(e.target.value);
          },
          options: Object.keys(sample).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          )),
        }}
        toggle={{
          checked: lineNumbers,
          onChange: (e) => toggleLineNumbers(!lineNumbers),
        }}
      />
      <div className="demo">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={a11yLight}
          wrapLines={true}
          codeBlock
        />
        <br />
        <CopyBlock
          language="go"
          text={`v := Vertex{X: 1, Y: 2}`}
          codeBlock
          theme={a11yLight}
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}

export default CodeBlock;
