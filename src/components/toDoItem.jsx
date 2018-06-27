import React, { Component } from 'react'
import { markComplete } from '../actions';
import { connect } from 'react-redux';

class ToDoItem extends Component {
    render () {
      const { id, completed, title, dispatch } = this.props
    return (
        <li className={completed ? "completed" : null}>
          <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={completed} onChange={evt => dispatch(markComplete(id))}/>
          <label>{title}</label>
          </div>
        </li>
    )
    }
  }

  export default connect()(ToDoItem)