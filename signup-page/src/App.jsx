import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Signup/>}/>
     </Routes>
       
    </>
  )
}

export default App
