import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


const url = 'http://localhost:3001';

class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: this.props.loggedin,
      signedUp: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(`Test to see: ${[e.target.name]} and value: ${e.target.value}` );
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('username in login submit: ', this.state.username)
    console.log('password in login submit: ', this.state.password)
    axios
      .post(`${url}/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        console.log('Hello from login', response.data);
        this.setState({
          
          password: '',
          username: '',
          loggedIn: true
        })
      })
      .catch(error => {
        console.error('ERROR with logging in!!!!! ', error);
        this.setState({
          loggedIn: false,
          signedUp: true
        })
      })
  }
  

  render() {
    let {loggedIn, signedUp, username, password} = this.state;
    if (loggedIn) {
      return <Redirect to={{ pathname: "/home" }} />
    } else if(signedUp){
      return <Redirect to={{ pathname: '/signup'}} />
    } else {
      return (
        <form onSubmit={this.handleSubmit} className='login'>
          <h1>Log in Page</h1>
          <input type="text" name='username' value={username} onChange={this.handleChange} placeholder="username"/>
          <input type="password" name='password' autocomplete="current-password" value={password} onChange={this.handleChange} placeholder="password"/>
          <button>Submit</button>
        </form>
      )
    }
  }
}

export default LogIn;