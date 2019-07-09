import React from 'react';
import { Link } from 'react-router-dom'; 

 export default function NavLinks() {
  return (
    <div className="App">
        <Link to="/Home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/logout">logout</Link>
    </div>
  );
}