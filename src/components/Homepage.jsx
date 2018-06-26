import React, { Component } from 'react';
import RecentActivity from './RecentActivity.jsx'
import AppHeader from './AppHeader.jsx'

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <AppHeader></AppHeader>
                <RecentActivity></RecentActivity>
            </div>
        )
    }
}

export default Homepage