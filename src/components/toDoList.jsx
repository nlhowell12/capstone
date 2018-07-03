import React, { Component } from 'react';
import ToDoItem from './toDoItem.jsx';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class ToDoList extends Component {
  state = {
    modal: false,
    newTodo: ''
  }
  postNewTodo = () => {
    const { dispatch, title } = this.props;
    const { newTodo, modal } = this.state;
    const postMethod = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taskName: newTodo,
        completed: false
      })
    }
    fetch(`https://rocky-hollows-88234.herokuapp.com/project/${title}/tasks`, postMethod)
      .then(res => res.json())
      .then(task => {
        dispatch(addTodo(task, title))
        this.setState({modal: !modal, newTodo: ''})
      })
  }
  onChange = stateProp => evt => {
    this.setState({[stateProp]: evt.target.value})
}
    render () {
      const { todos, title } = this.props
      const { modal, newTodo } = this.state;
      return (
        <div className='todoWrap'>
          <div className="todoListTitle">
            <h3>{title}</h3>
            <button onClick={evt => this.setState({modal: !modal})}><p>+</p></button>
            {modal && <div className="todoModal"><input type="text" placeholder="Add new todo" onChange={this.onChange('newTodo')} value={newTodo}/><button onClick={evt => this.postNewTodo()}>+</button></div>}  
          </div>
          <ul className="todo-list">
          {todos.map((todo, id) => <ToDoItem key={id} id={todo.id} completed={todo.completed} title={todo.taskName}/>)}
          </ul>
        </div>
      )
    }
  }

  export default connect()(ToDoList);