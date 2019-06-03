import React, { Component } from 'react';
import './App.css';
import List from './List'

class App extends Component {
  state = {
    todos: [
      {id: 1, name: "pickles", complete: true, },
      {id: 2, name: "kumbucha", complete: true, },
      {id: 3, name: "hemp lip balm", complete: true, }
    ]
  }

  renderTodos = () => {
    const { todos, } = this.state;
    return todos.map( todo => <li key={todo.id}> {todo.name}</li>
    )
  };


  render() {
    return (
      <div>
        <ul>
          { this.renderTodos() }
        </ul>
      </div>
    )
  }
}

export default App;
