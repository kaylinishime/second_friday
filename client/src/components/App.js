import React, { Component } from 'react';
import Navbar from './navbar';
import Coverimage from './coverimage'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          {this.props.children}
        <Coverimage />



      </div>

    );
  }
}

export default App;
