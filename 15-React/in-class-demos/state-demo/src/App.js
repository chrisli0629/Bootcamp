import React from 'react';
import './App.css';

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = { favColor: 'red'};
   }

   render() {
       return(
           <div>
               My favorite color is {this.state.favColor}
           </div>
       );
   }
}


export default App;
