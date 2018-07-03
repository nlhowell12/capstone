import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Channel extends Component {
    state = {
        newMessage: ''
    }
    componentWillMount = () => {
        const { history, username } = this.props;
        if(!username) {
            history.push('/')
        }
    }
    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
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

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default withRouter(connect(mapStateToProps)(Channel));