import React from 'react'

class TodoList extends React.Component {
  render() { 
    var todolist = this.props.todos;
    var todolistJSX = todolist.map(
      (todo) => {
        // below you want to pass an anonymous function which
        // executes the deleteItem function with the todo.id
        // closured in
        return (
          <li 
            key={todo.id}
            onClick={() => this.props.deleteItem(todo.id)}
          >
              {todo.text}
          </li>
        )
      }
    )

    // return the JSX defined above
    return(
      <ul>
        {todolistJSX}
      </ul>
    )
  }

// Note: commenting this out as this is not that useful
// and it is not working

//   static defaultProps = {
//     todos: [{
//         id: 1,
//         text: 'Visit mom on her birthday' 
//     },
//     {
//         id: 2,
//         text: 'Buy nice bouquet of flowers before visit' 
//     }]
//   }

}

export default TodoList;