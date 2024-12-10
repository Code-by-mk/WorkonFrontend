import React, { useState } from 'react';
import Child from './Child';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { name: 'mohit', age: 23, location: 'haryana' },
    { name: 'rahul', age: 25, location: 'delhi' },
    { name: 'priya', age: 22, location: 'mumbai' },
    { name: 'Sumit', age: 26, location: 'UP' },
    { name: 'Robert', age: 28, location: 'Kolkata' },
  ]);

  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);

//   const updateLocation = (index, newLocation) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user, i) =>
//         i === index ? { ...user, location: newLocation } : user
//       )
//     );
//   };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li onClick={() => navigate('/')} className="nav-item">
            Home
          </li>
          <li onClick={() => navigate('/about')} className="nav-item">
            About Us
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setBlogDropdownOpen(true)}
            onMouseLeave={() => setBlogDropdownOpen(false)}
          >
            Blog
            {isBlogDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate('/blog/sports')} className="nav-item">
                  Sports Blog
                </li>
                <li
                  onClick={() => navigate('/blog/education')}
                  className="nav-item"
                >
                  Education Blog
                </li>
              </ul>
            )}
          </li>
        </ul>
        <li>
            <button id="button" onClick={()=> window.location.href="https://ugcnet.nta.ac.in/"}>Click me</button>
        </li>
      </nav>
      <h1>Student Detail:</h1>
      <div className="cards-container">
        {users.map((user, index) => (
          <Child
            key={index}
            userData={user}
            updateLocation={(newLocation) => updateLocation(index, newLocation)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
