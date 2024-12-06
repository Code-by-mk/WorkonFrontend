// import React from 'react';

// const Child = (props) => {
//   const ChangeLocation = () => {
//     props.updateLocation('Delhi'); 
//   };

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Name: {props.userData.name}</p>
//       <p>Age: {props.userData.age}</p>
//       <p>Location: {props.userData.location}</p>
//       <button onClick={ChangeLocation}>Change Location to Delhi</button>
     
//     </div>
    
//   );
// };

// export default Child;









import React from 'react';

const Child = (props) => {
  const handleChangeLocation = () => {
    const newLocation = prompt(`Enter new location for ${props.userData.name}:`);
    if (newLocation) {
      props.updateLocation(newLocation);
    }
  };

  return (
    <div className="card">
      <h2>Students</h2>
      <p>Name: {props.userData.name}</p>
      <p>Age: {props.userData.age}</p>
      <p>Location: {props.userData.location}</p>
      <button onClick={handleChangeLocation}>Change Location</button>
    </div>
  );
};

export default Child;

