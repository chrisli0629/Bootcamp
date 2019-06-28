import React, {Component} from 'react';
import './App.css';

// export const colors = ['red', 'blue', 'green', 'orange', 'yellow'];
export const colors = ['red', 'blue', 'orange', 'yellow', 'green'];

export const randNum = () => Math.floor(Math.random()*colors.length);
console.log(randNum());


export const randColor = (colors, randNum) => colors[randNum()];

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'purple'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  

  changeColor(){
    let backgroundColor = randColor(colors, randNum);
    this.setState({
      backgroundColor
    })
  }

  render() {
    
    const theStyles = {
      width: "50%",
      margin: '10% auto',
      border: '5px orange solid',
      backgroundColor: this.state.backgroundColor
    }

    return (
      <div className="App" data-test='component-app' style={theStyles}>
        <h1>Hello!</h1>
        <button onClick={this.changeColor}>Click Me</button>
      </div>
    );
  }
}

export default App;

