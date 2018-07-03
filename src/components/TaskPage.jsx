import React, { Component } from 'react';
import { NavBar, AppHeader, Tasks } from '../components'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class TaskPage extends Component {
    componentWillMount = () => {
        const { history, username } = this.props;
        if(!username) {
            history.push('/')
        }
    }
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
        projects: state.projects,
        username: state.username
    }
}

export default withRouter(connect(mapStateToProps)(TaskPage));