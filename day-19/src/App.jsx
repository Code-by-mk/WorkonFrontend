import { createContext, useState } from 'react'
import './App.css'
import Child from './Components/ChildA'
import ChildA from './Components/ChildA';


const data = createContext();

function App() {

  // let student = "Mohit Saini";
  var student2 = "Rohit";

  return (
    <>
      {/* <Child student={student}/> */}

      <data.Provider value={student2}>
        <ChildA />
      </data.Provider>
    </>
  )

}

export default App

export { data };
