import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Stopwatch from "./Components/Stopwatch";

function App() {
  const [time, setTime] = useState({
    ms: 0,
    s: 0,
    mn: 0,
    h: 0,
  });

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
         <Stopwatch 
             time={time} 
         />
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;
