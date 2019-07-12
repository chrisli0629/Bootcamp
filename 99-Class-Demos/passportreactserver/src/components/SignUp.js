import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const url = 'http://localhost:3001';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            signedUp: false
        }
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // NOTE: the following code is simplified with the handleChange code above
  // usernameChange(e){
  //   // setUserName(e.target.value)
  //   this.setState({
  //       username: e.target.value
  //   })
  //   console.log('username: ', this.state.username);
  // }

  // passwordChange(e){
  //     this.setState({
  //         password: e.target.value
  //     })
  //   console.log('password: ', this.state.password);
  // }
  
  
  handleSubmit = (e) => {
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
    let {signedUp, username, password, errorMessage} = this.state;
    if (signedUp) {
        return <Redirect to={{ pathname: "/home" }} />
    }
    return (
    <form onSubmit={this.handleSubmit} className='signup'>
      <h1>Sign up Page</h1>
      <input type="text" name='username' value={username} onChange={this.handleChange} placeholder="username"/>
      <input type="password" name='password' autocomplete="current-password" value={password} onChange={this.handleChange} placeholder="password"/>
      <button>Submit</button>
    
      <h1 className='errorMessage'>{errorMessage}</h1>
      <h1>Click <Link to="/login">here</Link> to log back in.</h1>
    </form>   
    )
  }
}

export default SignUp;