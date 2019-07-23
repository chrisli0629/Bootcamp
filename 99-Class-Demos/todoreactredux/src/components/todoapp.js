import React from 'react'
import TodoList from './todolist.js'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   text: "Call mom"
        // }
      ]
    }
  }

  addItem = (event) =>  {
    // 0. do nothing if the field is empty
    if(!this.inputNode.value){ return }

    // 1. prevent default behavior of the form element
    event.preventDefault()

    // 2. build a new todo object with the user's input        
    var newTodo = {
        id: Date.now(),
        text: this.inputNode.value
    }

    // 3. update the state with the new todo
    //    using the callback form of setState
    this.setState(function(previousState){
        var previousTodos = previousState.todos
        var newTodos = previousTodos.push(newTodo)
        return newTodos
    })

    // 4. empty out the input box
    this.inputNode.value = "" 
  }

  deleteItem = (id) => {
    // 0. get the todos from the state
    var previousTodos = [...this.state.todos]

    // 1. filter out the deleted todo object
    var filteredTodos = previousTodos.filter(function(todo){
        return todo.id !== id
    })

    // 2. update the state with the filtered todos
    this.setState({
        todos: filteredTodos
    })
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