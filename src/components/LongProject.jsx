import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LongProject extends Component {
    render() {
        const { project, id, history } = this.props
        return (
            <div className="upperProject" onClick={() => history.push(`/project/${id}`)}>
            <img className="projectFile" src={require("../projectFile.png")} alt="projectFile"/>
            <h2>{project.projectName}</h2>
        </div>
        )
    }
}

export default withRouter(LongProject);