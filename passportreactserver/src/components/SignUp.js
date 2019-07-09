import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const url = 'http://localhost:3001';

// var config = {
//   headers: {'Access-Control-Allow-Origin': 'http://localhost:3001'}
// };


class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            signedUp: false
        }
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  usernameChange(e){
    // setUserName(e.target.value)
    this.setState({
        username: e.target.value
    })
    console.log('username: ', this.state.username);
  }

  passwordChange(e){
      this.setState({
          password: e.target.value
      })
    console.log('password: ', this.state.password);
  }
  
  
  handleSubmit(e){
    e.preventDefault();
    this.setState({
        errorMessage: ''
    })
    console.log('username in submit: ', this.state.username)
    console.log('password in submit: ', this.state.password)
    axios
      .post(`${url}/signup`, {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        console.log('Hello ', response.data.username);
        this.setState({
            password: '',
            username: '',
            signedUp: true
        })
      })
      .catch(error => {
        console.error('ERROR from signup: ', error.response.data)
        this.setState({
            password: '',
            username: '',
            errorMessage: error.response.data
        })
      })
  }
  

  
  render() {
        if (this.state.signedUp) {
            return <Redirect to={{ pathname: "/home" }} />
        }
        return (
        <form onSubmit={this.handleSubmit} className='signup'>
          <h1>Sign up Page</h1>
          <input type="text" value={this.state.username} onChange={this.usernameChange} placeholder="username"/>
          <input type="password" value={this.state.password} onChange={this.passwordChange}placeholder="password"/>
          <button>Submit</button>
        
          <h1 className='errorMessage'>{this.state.errorMessage}</h1>
          <h1>Click <Link to="/login">here</Link> to log back in.</h1>
        </form>
        
        )
  }

  
}

export default SignUp;