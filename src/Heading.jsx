import React from "react";

function Heading() {
  const date = new Date();
  const time = date.getHours();

  const customStyle = {
    color: ""
  };

  var message = "";

  if (time >= 0 && time < 12) {
    customStyle.color = "red";
    message = "Good morning";
  } else if (time >= 12 && time < 18) {
    customStyle.color = "green";
    message = "Good afternoon";
  } else {
    customStyle.color = "blue";
    message = "Good evening";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {message}
    </h1>
  );
}

export default Heading;
