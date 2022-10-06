import React, { useState } from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import { sample, TopBar } from ".";
import "./styles.css";

// NOTE: This component is NOT being used!!!
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
          theme={atomOneLight}
          wrapLines={true}
          codeBlock
        />
        <br />
        <CopyBlock
          language="go"
          text={`v := Vertex{X: 1, Y: 2}`}
          codeBlock
          theme={atomOneLight}
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}

export default CodeBlock;
