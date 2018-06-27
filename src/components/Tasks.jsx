import React, { Component } from 'react';
import ToDoList from './toDoList'
import { connect } from 'react-redux'

class Tasks extends Component {
    render() {
        const { projects } = this.props
        return (
            <div className='taskWrap'>
            <h2>My Tasks</h2>
            {projects.map((project, id) => <ToDoList key={id} title={project.projectName} todos={project.tasks}></ToDoList>)}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
      projects: state.projects
    }
  }

export default connect(mapStateToProps)(Tasks);