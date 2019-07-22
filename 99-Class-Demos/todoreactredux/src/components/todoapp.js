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
                <form>
                    <input 
                        type="text" 
                        placeholder="What do you need to do?" 
                        ref={(node)=>{
                            this.inputNode = node;
                        }}
                    />
                    <button type="submit">Add</button> 
                </form>
                <div>
                    Todo List Comes Here
                </div>
            </div>
        )
    }
}

export default TodoApp