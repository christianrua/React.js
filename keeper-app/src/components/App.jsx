import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {

  return (
    <div>
      <Heading />
      {notes.map(noteItem => (
        <Note title={noteItem.title}
          content={noteItem.content}
         />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;