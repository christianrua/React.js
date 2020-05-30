import React from "react";
import DicElement from "./DictElement";
import emojipedia from "../emojipedia";

function renderDict(emojiItem){
  return (
        <DicElement 
          key={emojiItem.id}
          emoji={emojiItem.emoji}
          name={emojiItem.name}
          meaning={emojiItem.meaning}
          />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(renderDict)}
        
      </dl>
    </div>
  );
}

export default App;
