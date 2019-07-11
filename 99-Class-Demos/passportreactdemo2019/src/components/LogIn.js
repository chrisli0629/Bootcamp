import React, { Component } from 'react';

class LogIn extends Component {
  
  render() {
      return (
        <form onSubmit={this.handleSubmit} className='login'>
          <h1>Log in Page</h1>
          <input type="text" name='username' placeholder="username"/>
          <input type="password" name='password' placeholder="password"/>
          <button>Submit</button>
        </form>
      )
    }
}

export default LogIn;