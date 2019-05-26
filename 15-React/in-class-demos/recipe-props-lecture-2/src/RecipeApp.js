import React, { Component } from 'react';
import Recipe from './Recipe';
import './styles/RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
	 <div className="App">
     <Recipe title="Pasta" ingredients={["flour", "water"]} />
       </div>
    );
  }
}

export default RecipeApp;