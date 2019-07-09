import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 

class LogOut extends Component {
    render() {
        return (
            <div className="App">
                <h1>You have logged out!!</h1>
                <h1>Click <Link to="/login">here</Link> to log back in.</h1>
            </div>
        );
    }
  
}

export default LogOut;