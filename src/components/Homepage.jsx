import React, { Component } from 'react';
import { RecentActivity, AppHeader, ProjectListing, NavBar, Tasks, SuccessMessage } from '../components';
import { connect } from 'react-redux';
import { getProjects } from '../actions'

class Homepage extends Component {
    state={
        modal: true
    }

    changeModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    componentDidMount = () => {
        const { dispatch } = this.props;
        fetch('https://rocky-hollows-88234.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                dispatch(getProjects(data))
            })
    }
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
                <Tasks projects={projects.slice(-4)}></Tasks>
                <NavBar></NavBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        activities: state.activities
    }
}

export default connect(mapStateToProps)(Homepage);