import React from 'react'
import { useNavigate } from 'react-router-dom'


const Education = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Welcome to Education Blog</h1>
      <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}

export default Education
