import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';
import About from './components/About';
import Shopping from './components/Shopping';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router className='App'>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/shopping" component={Shopping} />
        <Route path="/login" component={LogIn} /> 
        <Route path="/signup" component={SignUp} /> 
        <Route path="/logout" component={LogOut} /> 
      </Router>
    );
  }
}

export default App;