import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx';


class ToDoList extends Component {
    render () {
      const { todos, title } = this.props
      return (
        <div className='todoWrap'>
          <h3>{title}</h3>
          <ul className="todo-list">
          {todos.map((todo, id) => <ToDoItem key={id} id={todo.id} completed={todo.completed} title={todo.taskName}/>)}
          </ul>
        </div>
      )
    }
  }

  

  export default ToDoList;