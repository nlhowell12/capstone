import React, { Component } from 'react';
import { RecentActivity, AppHeader, ProjectListing, NavBar, Tasks, SuccessMessage } from '../components';
import { connect } from 'react-redux';

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

    }
    render() {
        const { modal } = this.state;
        const { projects, activities } = this.props;
        return (
            <div className="homepage">
                <React.Fragment>
                    {(modal && projects.length === 0 && activities.length === 0) && <div className="backdrop"></div>}
                    {(modal && projects.length === 0 && activities.length === 0) && <SuccessMessage changeModal={this.changeModal}></SuccessMessage>}
                </React.Fragment>
                <AppHeader></AppHeader>
                <RecentActivity></RecentActivity>
                <ProjectListing></ProjectListing>
                <Tasks></Tasks>
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