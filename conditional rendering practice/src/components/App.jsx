import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form type = "login"/> : <Form type = "register"/> }
    </div>
  );
}

export default App;
