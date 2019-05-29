import React, { useEffect, useState } from "react";
import "./App.css";
import buttons from "./buttons/buttons";
import ButtonZeroToNine from "./Button";
import * as math from "mathjs";

const App = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    freeCodeCampScripts();
  }, []);
  const freeCodeCampScripts = () => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  };

  const onButtonClick = e => {
    setInput(input + e.target.textContent);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Calculator</h1>
        <div id="display" className="form-group mb-2 text-right">
          <div className="form-control"> {input}</div>
        </div>
        <div className="grid-container">
          <ButtonZeroToNine buttons={buttons} onButtonClick={onButtonClick} />
          <button
            id="equals"
            className="equals btn btn-info"
            onClick={() => setInput(math.eval(input))}
          >
            =
          </button>
          <button
            id="clear"
            className="clear btn btn-danger"
            onClick={() => setInput("")}
          >
            AC
          </button>
          <button
            id="decimal"
            className="decimal btn btn-info"
            onClick={e => {
              if (input.indexOf(".") === -1)
                setInput(input + e.target.textContent);
            }}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
