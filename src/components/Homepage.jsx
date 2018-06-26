import React, { Component } from 'react';
import RecentActivity from './RecentActivity.jsx'
import AppHeader from './AppHeader.jsx'
import ProjectListing from './ProjectListing.jsx'

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <AppHeader></AppHeader>
                <RecentActivity></RecentActivity>
                <ProjectListing></ProjectListing>
            </div>
        )
    }
}

export default Homepage