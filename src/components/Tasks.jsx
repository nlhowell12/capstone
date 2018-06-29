import React, { Component } from 'react';
import ToDoList from './toDoList'

class Tasks extends Component {
    render() {
        const { projects } = this.props
        return (
            <div className='taskWrap'>
            <h2>My Tasks</h2>
            {projects.length === 0 && <p>There are no tasks to display</p> }
            {projects.map((project, id) => <ToDoList key={id} title={project.projectName} todos={project.tasks}></ToDoList>)}
            </div>
        )
    }
};

export default Tasks;