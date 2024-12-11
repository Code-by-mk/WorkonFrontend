import React from 'react';
import { data } from '../App';

const ChildC = () => {
  return (
    <div>
          {/* <h1>{student}</h1> */}
      <data.Consumer>
        {(student2) => {
          return <h2>Student name is: {student2}</h2>;
        }}
      </data.Consumer>
    </div>
  );
};

export default ChildC;

