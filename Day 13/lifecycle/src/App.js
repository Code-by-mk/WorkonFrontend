import React from 'react';
import ClassComponent from './Components/ClassComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.show ? <ClassComponent />:<h1>child component removed</h1>
        }
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
