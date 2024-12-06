// import React, { useState } from 'react';
// import './App.css';
// import Child from './Components/Child'; 

// function App() {
//   const [user, setUser] = useState({
//     name: 'mohit',
//     age: 23,
//     location: 'haryana',
//   });

//   const updateLocation = (newLocation) => {
//     setUser((prevUser) => ({
//       ...prevUser,
//       location: newLocation, 
//     }));
//   };

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <p>Current User Location: {user.location}</p>
//       <Child userData={user} updateLocation={updateLocation} />
//       
     
     
//     </div>
//   );
// }

// export default App;












import React, { useState } from 'react';
import './App.css';
import Child from './Components/Child';

function App() {
  const [users, setUsers] = useState([
    { name: 'mohit', age: 23, location: 'haryana' },
    { name: 'rahul', age: 25, location: 'delhi' },
    { name: 'priya', age: 22, location: 'mumbai' },
  
  ]);

  const updateLocation = (index, newLocation) => {
    console.log(index);
    setUsers((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, location: newLocation } : user
      )
    );
  };

  return (
    <div>
      <h1>User Detail:</h1>
      <div className="cards-container">
        {users.map((user, index) => (
          <Child  
            // key={index}
            userData={user}
            updateLocation={(newLocation) => updateLocation(index, newLocation)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

