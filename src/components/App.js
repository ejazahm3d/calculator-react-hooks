import React from "react";
import "./App.css";

const App = () => {
  const buttons = [
    {
      id: "zero",
      className: "zero btn btn-light"
    }
  ];
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="container">
        <div className="grid-container">
          <button id="zero" className="zero btn btn-light">
            0
          </button>
          <button id="one" className="one btn btn-light">
            1
          </button>
          <button id="two" className="two btn btn-light">
            2
          </button>
          <button id="three" className="three btn btn-light">
            3
          </button>
          <button id="four" className="four btn btn-light">
            4
          </button>
          <button id="five" className="five btn btn-light">
            5
          </button>
          <button id="six" className="six btn btn-light">
            6
          </button>
          <button id="seven" className="seven btn btn-light">
            7
          </button>
          <button id="eight" className="eight btn btn-light">
            8
          </button>
          <button id="nine" className="nine btn btn-light">
            9
          </button>
          <button id="equals" className="equals btn btn-primary">
            =
          </button>
          <button id="multiply" className="multiply btn btn-info">
            x
          </button>
          <button id="divide" className="divide btn btn-info">
            /
          </button>
          <button id="add" className="add btn btn-info">
            +
          </button>
          <button id="subtract" className="substract btn btn-info">
            -
          </button>
          <button id="clear" className="clear btn btn-danger">
            AC
          </button>
          <button id="decimal" className="decimal btn btn-light">
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
