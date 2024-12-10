import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>WELCOME to About Page</h1>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default About
