import React, { Component } from 'react';
import { RecentActivity, AppHeader, ProjectListing, NavBar, Tasks } from '../components';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <AppHeader></AppHeader>
                <RecentActivity></RecentActivity>
                <ProjectListing></ProjectListing>
                <Tasks></Tasks>
                <NavBar></NavBar>
            </div>
        )
    }
}

export default Homepage