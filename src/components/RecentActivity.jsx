import React, { Component } from 'react';
import Activity from './Activity.jsx'
import { connect } from 'react-redux'

class RecentActivity extends Component {
    render () {
        const { activities } = this.props;
        return (
            <div className='recentActivity'>
                <h2>Recent Activity</h2>
                {activities.map((activity, id) => <Activity key={id} activity={activity}></Activity>)}
                <a>VIEW ALL</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps)(RecentActivity);