import React, { Fragment } from "react";

const Button = ({ buttons, onButtonClick }) => {
  return (
    <Fragment>
      {buttons.map(button => (
        <button
          key={button.id}
          id={button.id}
          className={button.className}
          onClick={e => onButtonClick(e)}
        >
          {button.text}
        </button>
      ))}
    </Fragment>
  );
};

export default Button;
