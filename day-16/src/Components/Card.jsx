import React, { Component } from 'react';  

class Card extends Component {  

  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div>
        <h1>{this.props.user}</h1>  
        <h2>{this.props.age}</h2>  
        <h2>{this.props.location}</h2>  
      
      </div>
    );
  }
}

export default Card;
