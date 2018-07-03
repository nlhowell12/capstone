import React, { Component } from 'react';
import { RecentActivity, AppHeader, ProjectListing, NavBar, SuccessMessage } from '../components';
import { connect } from 'react-redux';
import { getProjects } from '../actions'
import { withRouter } from 'react-router-dom';

class Homepage extends Component {
    state={
        modal: true
    }

    changeModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    componentWillMount = () => {
        const { username, history } = this.props;
        if(!username) {
            history.push('/')
        }
    }
    componentDidMount = () => {
        const { dispatch, username } = this.props;
        if(username) {
        fetch(`https://rocky-hollows-88234.herokuapp.com/projects/${username}`)
            .then(res => res.json())
            .then(data => {
                dispatch(getProjects(data))
            })
    }}
    render() {
        const { modal } = this.state;
        const { projects, activities } = this.props;
        return (
            <div className="homepage">
                    {(modal && projects.length === 0 && activities.length === 0) && <div className="backdrop"></div>}
                    {(modal && projects.length === 0 && activities.length === 0) && <SuccessMessage changeModal={this.changeModal}></SuccessMessage>}
                <AppHeader></AppHeader>
                <RecentActivity></RecentActivity>
                <ProjectListing></ProjectListing>
                <NavBar></NavBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        activities: state.activities,
        username: state.username
    }
}

export default withRouter(connect(mapStateToProps)(Homepage));