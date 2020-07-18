import React,{useState} from "react";

function CreateArea(props) {

  const [noteItem, setNoteItem] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {value,name} = event.target;
    //const newValue = event.target.value;
    //setInputText(newValue);
    setNoteItem(prevValue => {
      return{
      ...prevValue,
      [name]:value
    }
  });
  }

  function handleOnClick(event){
    props.onAdd(noteItem);
    setNoteItem({title: "",content: ""});
    event.preventDefault(); //prevents that the from refresh the page, thats the default event
  }  

  return (
    <div>
      <form>
        <input 
        onChange={handleChange}
        value={noteItem.title}
        name="title" 
        placeholder="Title"
         />
        <textarea 
        onChange={handleChange}
        value={noteItem.content}
        name="content" 
        placeholder="Take a note..." 
        rows="3" />
        <button onClick={handleOnClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
