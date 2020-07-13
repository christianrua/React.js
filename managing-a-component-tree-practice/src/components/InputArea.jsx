/*import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={() =>{props.handleChangeProps(props.inputValueProp)}} type="text" value={props.inputValueProp} />
      <button onClick={()=>{props.addItemProp()}}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
*/

import React,{useState} from "react";

function InputArea(props) {

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }


  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={()=>
      {
        props.onAdd(inputText);
        setInputText("");
      }
      }>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
