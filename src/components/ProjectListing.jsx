import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project.jsx';
import { withRouter } from 'react-router-dom';


class ProjectListing extends Component {
    render() {
        const { projects, history } = this.props;
        return (
            <div className="projectListing">
                <h2>Projects</h2>
                <div className="moreDiv">
                <h5>Showing most recent project activity</h5>
                <a onClick={() => history.push('/projects')}>MORE</a>
                </div>
                <div className="projectsDisplay">
                    {projects.map((project, id) => id > projects.length - 5 ? <Project key={id} id={id} project={project}></Project> : null)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}
export default withRouter(connect(mapStateToProps)(ProjectListing));