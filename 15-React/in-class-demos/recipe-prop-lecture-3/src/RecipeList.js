import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './styles/RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://i.imgtc.com/1a2ZySr.jpg"
      },
      {
        title: "Lobster Macaroni and cheese",
        instructions: "Combine lobster and macaroni.  Blend until creamy",
        ingredients: ["1 large lobster", "8 ounces of macaroni"],
        img: "https://i.imgtc.com/MaWUyUf.jpg"
      },
      {
        title: "Bacon Wrapped Filet Mignon",
        instructions: "Wrap filet mignon in bacon.  Add salt, oil, and pepper to taste.",
        ingredients: ["1 slice of bacon", "1 filet mignon", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://i.imgtc.com/tDcApiJ.jpg"
      }
    ]
  }
  
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={index} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;