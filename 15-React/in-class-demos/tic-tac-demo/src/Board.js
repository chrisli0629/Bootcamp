import React, {Component} from 'react';
import Space from './Space';

class Board extends Component{
    constructor(props){
        super(props);
        const spaces = [];
        for(let i = 0; i < 9; i++){
            spaces.push(<Space clickFunc={ this.handleClick } id={i} face=""/>);
        }
        this.state = {
            spaces,
            points:[]
        }
    }
    handleClick = (spaceId, face) => {
        this.state.spaces[spaceId] = <Space clickFunc={ this.handleClick } id={spaceId} face={face}/>;
        var p = this.state.points;
        p[spaceId] = face;
        if((p[0] === p[1] && p[1] === p[2]) && (p[0] && p[1] && p[2])){
            console.log('WINNING');
        }
        this.setState(this.state);
    }
    render(){
        return(
            <div className="Board">
                <div className="board-row">
                    { this.state.spaces[0] }
                    { this.state.spaces[1] }
                    { this.state.spaces[2] }
                </div>
                <div className="board-row">
                    { this.state.spaces[3] }
                    { this.state.spaces[4] }
                    { this.state.spaces[5] }
                </div>
                <div className="board-row">
                    { this.state.spaces[6] }
                    { this.state.spaces[7] }
                    { this.state.spaces[8] }
                </div>
            </div>
        )
    }
}

export default Board;