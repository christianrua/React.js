import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  

  function handleOnClick(event) {
    //setHeadingText("Submitted");
    setHeadingText(name);

    event.preventDefault(); //prevents that the from refresh the page, thats the default event
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleChange(event){
    setName(event.target.value);
    console.log(event.target.value);
    //console.log(event.target.placeholder);
    //console.log(event.target.type);

  }

  return (
    <div className="container">
      <h1 id="header">Hello {headingText}</h1>
      <form onClick={handleOnClick}>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        value = {name}
      >
        Submit
      </button>
      </form>
    </div>
  );
}

export default App;
