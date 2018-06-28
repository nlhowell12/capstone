import React, { Component } from 'react';
import { NavBar, AppHeader, Tasks } from '../components'
import { connect } from 'react-redux'

class TaskPage extends Component {
    render() {
        const { projects } = this.props;
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                <Tasks projects={projects}></Tasks>
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

export default connect(mapStateToProps)(TaskPage);