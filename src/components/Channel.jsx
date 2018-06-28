import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Channel extends Component {
    state = {
        newMessage: ''
    }
    sendMessage = () => {
        
    }
    render() {
        const { project, history, id } = this.props;
        return (
            <div className="channel" onClick={() => history.push(`/channel/${id}`)}>
                <img src={require('../channelIcon.png')} className="channelIcon" alt="channelIcon"/>
                <h2>{project.projectName}</h2>
                <img src={require('../rightArrow.png')} className="rightArrow" alt="rightArrow"/>
            </div>
        )
    }
}

export default withRouter(Channel);