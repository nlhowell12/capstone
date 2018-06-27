import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project.jsx'


class ProjectListing extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="projectListing">
                <h2>Projects</h2>
                <div className="moreDiv">
                <h5>Showing most recent project activity</h5>
                <a>MORE</a>
                </div>
                <div className="projectsDisplay">
                    {projects.map((project, id) => <Project key={id} id={id} project={project}></Project>)}
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
export default connect(mapStateToProps)(ProjectListing);