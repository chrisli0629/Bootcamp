import React, { Component } from 'react';
import NavLinks from './NavLinks'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <NavLinks />
                <h1>Welcome to Home page</h1>
            </div>
        )
    }
}

export default Home;