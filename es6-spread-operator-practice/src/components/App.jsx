import React, { useState } from "react";




function App() {

  const [item,setItem] =useState("");
  const [toDoList,setToDoList]=useState([])
  

  function handleOnChange(event){
    const newValue = event.target.value;
    setItem(newValue);
   
  }

  function handleOnClick(event){
    
    setToDoList((prevItems) => {
      return [...prevItems,item];
    });
    setItem("");
   
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form" >
        <input type="text" 
          name="item"
          value={item}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {toDoList.map(toDoItem => <li>{toDoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
