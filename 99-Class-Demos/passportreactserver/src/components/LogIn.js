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
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameChange(e){
    this.setState({
      username: e.target.value
    })
    console.log('username: ', this.state.username);
  }

  passwordChange(e){
    this.setState({
      password: e.target.value
    })
    // setPassword(e.target.value)
    console.log('password: ', this.state.password);
  }
  
  handleSubmit(e){
    e.preventDefault();
    console.log('username in login submit: ', this.state.username)
    console.log('password in login submit: ', this.state.password)
    axios
      .post(`${url}/login`, {
        // headers: {'Access-Control-Allow-Origin': '*'},
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
    if (this.state.loggedIn) {
      return <Redirect to={{ pathname: "/home" }} />
    } else if(this.state.signedUp){
      return <Redirect to={{ pathname: '/signup'}} />
    } else {
      return (
        <form onSubmit={this.handleSubmit} className='login'>
          <h1>Log in Page</h1>
          <input type="text" value={this.state.username} onChange={this.usernameChange} placeholder="username"/>
          <input type="password" value={this.state.password} onChange={this.passwordChange}placeholder="password"/>
          <button>Submit</button>
        </form>
      )
    }
  }
}

export default LogIn;