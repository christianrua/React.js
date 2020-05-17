import React from "react";
import ReactDOM from "react-dom";

const firstName = "Christian";
const lastName = "Rua";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {`${firstName} ${lastName}, whenever you type, thats appears`}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
