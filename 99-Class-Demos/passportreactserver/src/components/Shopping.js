import React, { Component } from 'react';
import NavLinks from './NavLinks'

class Shopping extends Component{
  render() {
    return (
      <div className="App">
        <NavLinks />
        <h1>Welcome to Shopping page</h1>
      </div>
    );
  } 
}

export default Shopping;