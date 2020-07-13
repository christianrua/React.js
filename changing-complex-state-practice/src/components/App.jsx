import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){

    const {value,name} = event.target;
    //same as above
    /* 
    const newValue =  event.target.value;
    const inputName  = event.target.name;
    */

    

    setContact(prevValue => {
      /*
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName === "lName"){
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        };} else if (inputName === "email"){
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: newValue
          };
      }*/
      //same as above
      return{
        ...prevValue,
        [name]:value
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
        onChange={handleChange}
        value={contact.fName}
        name="fName" 
        placeholder="First Name" 
        />
        <input 
        onChange={handleChange}
        value={contact.lName}
        name="lName" 
        placeholder="Last Name" 
        />
        <input 
        onChange={handleChange}
        value={contact.email}
        name="email" 
        placeholder="Email" 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
