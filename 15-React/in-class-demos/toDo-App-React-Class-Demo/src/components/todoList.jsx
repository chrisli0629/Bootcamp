import React from 'react';
import TodoItems from './todoItems';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items:[]
    };
  }
  addItem = (event) => {
    if(this._inputNode.value) {
        var newItem = {
            text: this._inputNode.value,
            key: Date.now()
        }
        this.setState(
          (prevState)=>{
            var items = prevState.items;
            var newItems = items.push(newItem);
            return newItems;
          }
        )
        this._inputNode.value = "";
        event.preventDefault();
    }
  }
  // deleteItem would be used in the todoItems component
  // to delete individual <li>'s
  deleteItem = key => {
    // some of array filter magic
    // will remove the todo item with "key" from state
    var previousItems = [...this.state.items];
    var filteredItems = previousItems.filter(
      item=>
      // returns true or false.  if true, then included
      // in the filter, else excluded from the result
      item.key !== key
    )
    // now replace the items array in the state object
    this.setState({
      // is a shallow update, where only items is replaced within
      // the state object on this component
      items: filteredItems
    })
  }
  render() {
    return (
      <div className="todoListMain" >
        <div className="header">
          {/* onSubmit accepts both click on the button as well
          as pressing the Enter key on the keyboard */}
          <form onSubmit={this.addItem}>
            <input type="text" placeholder="enter item" ref={(a)=>this._inputNode = a} />
            <button type="submit">Add</button>
          </form>
        </div>
        {/* List of todo items */}
        <TodoItems 
           items={this.state.items} 
           deleteItem={this.deleteItem}
        />
      </div >
    )
  }
}

export default TodoList;