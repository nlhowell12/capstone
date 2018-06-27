import React, { Component } from 'react';
import { NavBar, AppHeader, LongProject } from '../components';
import { connect } from 'react-redux';

class ProjectsPage extends Component {
    render() {
        const { projects } = this.props
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                    <div className="projectsPageDisplay">
                    {projects.map((project, id) => <LongProject key={id} id={id} project={project}></LongProject>)}
                    </div>
                <NavBar></NavBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectsPage);