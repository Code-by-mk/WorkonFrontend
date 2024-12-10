import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Sports = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1>Welcome to Sports Blog</h1>
      <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}

export default Sports
