import React, { Component } from 'react';

class Activity extends Component {
    render() {
        const { activity } = this.props
        return (
            <div className='activity'>
                <img src={require("../images/capstoneLogo.png")} alt="userPhoto"/>
                <p>{`${activity.user} ${activity.activity}`}</p>
            </div>
        )
    }
}

export default Activity;