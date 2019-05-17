import React, {Component} from 'react'

class Space extends Component{
    render(){
        return(
            <div className="Space">
                {this.props.face}
                <button onClick={ () => this.props.clickFunc(this.props.id, "X") }>X</button>
                <button onClick={ () => this.props.clickFunc(this.props.id, "O") }>O</button>
            </div>
        )
    }
}

export default Space;