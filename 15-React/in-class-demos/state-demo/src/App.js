import React from 'react';
import './App.css';

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = { favColor: 'red'};
   }

   componentDidMount() {
       console.log('component was mounted')
   }
   
   componentWillMount(){
       console.log('component will mount')
   }

   componentDidUpdate(){
       console.log('component did update')
   }

   componentWillUnmount(){
       console.log('component will unmount')
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
