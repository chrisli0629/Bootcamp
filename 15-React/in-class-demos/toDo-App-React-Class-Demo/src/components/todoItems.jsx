import React from 'react';

class TodoItems extends React.Component {
    createListItem = (item) => {
        // console.log('createListItem fired with ', item)
        return (
            <li 
              key={item.key} 
              // make sure you are passing a function, not
              // executing this function like so ...
              //   onClick=this.deleteItem(item.key)
              onClick={() => this.deleteItem(item.key)} 
            > 
                {item.text} 
            </li>
        )
    }

    // reference to the deleteItem defined in the parent
    // component todoList.  this is a way to pass data from
    // the child to the parent
    deleteItem = key => {
        this.props.deleteItem(key);
    }

    render(){
        var todoItems = this.props.items;
        var listItems = todoItems.map(
            this.createListItem
        )
        // console.log('listItems is ', listItems)
        return (
           <ul>
               {listItems}
           </ul>
       )
   }
}

export default TodoItems;