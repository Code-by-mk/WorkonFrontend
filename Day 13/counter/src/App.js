import React, { useState } from "react"; 
import './App.css';

function App() {

  const [count,setCount]=useState(0);

  const increase = ()=> {
    setCount(count + 1);
  }
  return (
   <>
     <div style={{margin:'250px'}}>
      <h1>Welcome here!</h1>
      <h2>{count}</h2>
      <button onClick={increase}>click me</button>
      </div> 
   </>
  );
}

export default App;
