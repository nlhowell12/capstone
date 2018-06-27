import React, { Component } from 'react';
import { withRouter } from 'react-router'

class NavBar extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="navBar">
                <img src={require("../navDash.png")}  onClick={() => history.push('/home')} alt="dashboard"/>
                <img src={require("../navProjects.png")} onClick={() => history.push('/projects')} alt="projects"/>
                <img src={require("../navMyTasks.png")} onClick={() => history.push('/tasks')} alt="myTasks"/>
                <img src={require("../navChannels.png")} onClick={() => history.push('/channels')} alt="channels"/>
                <img src={require("../navCalendar.png")} onClick={() => history.push('/home')} alt="calendar"/>
            </div>
        )
    }
}

export default withRouter(NavBar);