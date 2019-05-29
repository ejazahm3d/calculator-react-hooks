import React, { useEffect, useState } from "react";
import "./App.css";
import buttons from "./buttons/buttons";
import Button from "./Button";

const App = () => {
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
    console.log(e.target.textContent);
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="container">
        <div id="display">Display</div>
        <div className="grid-container">
          <Button buttons={buttons} onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
