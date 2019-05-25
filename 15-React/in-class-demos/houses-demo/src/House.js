import React, {Component} from 'react';
import './House.css';

class House extends Component{
    render(){
        const address = Math.ceil(Math.random() * 1000);
        return(
            <div className='house'>
                <div className='address'>
                    { address } - { this.props.number }
                </div>
                <div className='people'>
                    { this.props.people }
                </div>
            </div>
        )
    }
}

class Person extends Component{
    render(){
        return(
            <div>
                <hr />
                <p><strong>Name:</strong>{ this.props.name }</p>
                <p><strong>Quest:</strong>{ this.props.quest }</p>
                <p><strong>Favorite Color:</strong>{ this.props.favColor }</p>
                <button className="waveButton">Wave to the people!</button>
                <hr />
            </div>
        )
    }
}

export { House, Person };