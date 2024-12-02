import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [Name, setName] = useState("LIfe Changing Quotes..");
  const [bgColor, setBgColor] = useState("green")



  const handleresult = () => {
    alert("name changes successfully")
    setName("Life is like a mirror ,we get best results when we smile at it.");
    setBgColor("brown");
  }

  




  return (

    <>
      <h1 className="text-4xl text-green-500 text-center mb-12 font-sans ">WELCOME HERE !</h1>
         <div className="app-container h-40" style={{ backgroundColor: bgColor }}>
          <p className='text-white py-10'>{Name}</p>
         </div>  
      <button onClick={handleresult} className="bg-black text-white px-4 py-3 mt-10 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transform hover:scale-105 transition duration-300 ">Click me</button>
    </>
  )
}

export default App












// import React, { useState, useEffect } from 'react';
// import './App.css'; // For custom styles

// function App() {
//   const [Name, setName] = useState("browser");
//   const [showWelcome, setShowWelcome] = useState(true);
//   const [bgColor, setBgColor] = useState("#f0f8ff");

//   const handleresult = () => {
//     setName("Mohit Saini");
//     setBgColor("#ffcccb"); // Change background color
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowWelcome(false); // Hide welcome message after 3 seconds
//     }, 3000);

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, []);

//   return (
//     <div className="app-container" style={{ backgroundColor: bgColor }}>
//       {showWelcome && <div className="welcome-message">Welcome to my page!</div>}
//       <h2>My name is {Name}</h2>
//       <button onClick={handleresult} className="action-button">Click me</button>
//     </div>
//   );
// }

// export default App;


