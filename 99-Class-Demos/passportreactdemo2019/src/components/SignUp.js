import React, { Component } from 'react';

class SignUp extends Component {
  
  render() {
    return (
        <form onSubmit={this.handleSubmit} className='signup'>
            <h1>Sign up Page</h1>
            <input type="text" placeholder="username"/>
            <input type="password"  placeholder="password"/>
            <button>Submit</button>
            <h1 className='errorMessage'>Error Message</h1>
        </form>
    )
  }
}

export default SignUp;