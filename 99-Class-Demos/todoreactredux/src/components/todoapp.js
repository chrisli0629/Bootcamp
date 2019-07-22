import React from 'react'
import TodoList from './todolist.js'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    addItem(){

    }

    deleteItem(){

    }

    render(){
        return (
            <div>
                <div>
                    Todo App in React
                </div>
                <form onSubmit={this.addItem}>
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
                   <TodoList 
                        todos={this.state.todos}
                        deleteItem={this.deleteItem}
                   />
                </div>
            </div>
        )
    }
}

export default TodoApp