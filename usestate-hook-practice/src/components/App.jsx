import React,{ useState }  from "react";


function App() {

  const now = new Date().toLocaleTimeString('en-GB');

  const [currentTime, setTime] = useState(now);
 

  function updateTime(){
    const newTime = new Date().toLocaleTimeString('en-GB');
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
