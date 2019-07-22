import React from 'react'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    render(){
        return (
            <div>
                <div>
                    Todo App in React
                </div>
            </div>
        )
    }
}

export default TodoApp