import React, { Component } from 'react';
import List from './List'
import TodoForm from './TodoForm'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     todos: [
       { id: 1, name: "spinach", complete: false, },
       { id: 2, name: "mushrooms", complete: false, },
       { id: 3, name: "kumbucha", complete: false, },
     ]
   };

   this.addItem = this.addItem.bind(this);
  }


  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

addItem = (name) => {
  const todo = { name, id: this.getUniqueId(), complete: false, };
  this.setState({ todos: [todo, ...this.state.todos], });
};

handleClick = (id) => {
  this.setState({
    todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    })
  })
}


// old js


  render() {
    return (
      <div>
      <TodoForm  addItem={this.addItem} />
      <List name="Grocery list" items={this.state.todos} todoClick={this.handleClick} />
    </div>
    );
  }
}

export default App;
