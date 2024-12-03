import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('ClassComponent: constructor');
  }

  componentDidMount() {
    console.log('ClassComponent: componentDidMount');
  }

  componentWillUnmount() {
    console.log('Component unmount called');
  }

  render() {
    console.log('ClassComponent: render');
    return (
      <div className='App'>
        <h1>Student component</h1>
      </div>
    );
  }
}

export default ClassComponent;

