import React, { Component } from 'react';
import Card from './Card';  // Corrected import of the Card component

class Parent extends Component {
  constructor(props) {
    super(props);  
    this.name = "mohit"; 
    this.age=23;
    this.location="mumbai"; 
  }

  render() {
    return (
      <div>
        <h1>Welcome Here!</h1>
        <Card user={this.name} age={this.age}    location={this.location}    />  
      </div>
    );
  }
}

export default Parent;
