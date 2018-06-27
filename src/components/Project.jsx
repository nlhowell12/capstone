import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Project extends Component {
    render() {
        const { project, history, id } = this.props
        return (
            <div className="project" onClick={() => {history.push(`/project/${id}`)}}>
                <img className="projectFile" src={require("../projectFile.png")} alt="projectFile"/>
                <h3>{project.projectName}</h3>
            </div>
        )
    }
}

export default withRouter(Project)