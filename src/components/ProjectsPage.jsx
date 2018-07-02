import React, { Component } from 'react';
import { NavBar, AppHeader, LongProject } from '../components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProjectsPage extends Component {
    render() {
        const { projects, history } = this.props
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                    <div className="projectsPageDisplay">
                    {projects.map((project, id) => <LongProject key={id} id={id} project={project}></LongProject>)}
                    <button onClick={() => {history.push('/newProject')}}><p>+</p></button>
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

export default withRouter(connect(mapStateToProps)(ProjectsPage));