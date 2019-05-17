import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { House, Person } from './House';

class App extends Component {
  render() {

    const names = ['Bob', 'Jon Snow', 'Shredder', 'Bolo', 'Jigsaw', 'Seamour Butts'];
    const quests = ['Get a donut.', 'Cross the bridge.', 'Slay the dragon.', 'Get the dragon\'s money.', 'Learn React.'];
    const favColors = ['Puce', 'Macaroni Crayon', 'Crow color', 'Booger', 'Magenta'];

    const houseNum = Math.ceil( Math.random() * 10 );
    var housesArray = [];

    for(let i = 1; i <= houseNum; i++){
      const peepsNum = Math.ceil( Math.random() * 5 );
      var peepsArray = [];
      
      for(let i = 1; i <= peepsNum; i++){
        const thisColor = favColors[ Math.floor(Math.random() * favColors.length) ];
        const thisName = names[ Math.floor(Math.random() * names.length) ];
        const thisQuest = quests[ Math.floor(Math.random() * quests.length) ];
        peepsArray.push( <Person name={thisName} quest={thisQuest} favColor={thisColor} /> );

      }
      housesArray.push( <House number={i} people={ peepsArray } /> );
    }
    return (
      <div>
        { housesArray }
      </div>
    );
  }
}

export default App;