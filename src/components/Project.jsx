import React, { Component } from 'react';

class Project extends Component {
    render() {
        const { project } = this.props
        return (
            <div className="project">
                <img className="projectFile" src={require("../projectFile.png")} alt="projectFile"/>
                <h3>{project.projectName}</h3>
            </div>
        )
    }
}

export default Project