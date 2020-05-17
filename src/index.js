//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDom from "react-dom";

const companyName = "ACDEGAM_4.0";
const year_development = 2020;

ReactDom.render(
  <div>
    <p>Develop by {companyName}</p>
    <p>Copyrigth {year_development}</p>
  </div>,
  document.getElementById("root")
);
