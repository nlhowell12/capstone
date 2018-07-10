import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
    render() {
        const { message, username } = this.props;
        let timestamp = new Date(message.timestamp);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        return (
            <div className="messageWrap">
                <div className='timestamp'>{`${months[timestamp.getMonth()]}  ${timestamp.getDate()}`}</div>
                <div className="messageStyle" style={username === message.username ? {justifyContent: "flex-end"}: {justifyContent: "flex-start"}}>
                    {username !== message.username && <img src={require('../messageUser.png')} alt='userIcon' className='messageUser'></img>}
                    <div className='message' style={username === message.username ? {backgroundColor: '#efefef'}: {backgroundColor: '#00f19d'}}>
                        <div className="messageContent">
                            <div className="messageUsername">
                                <p>{message.username}</p>
                            </div>
                            <div className='messageText'>{message.message}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(Message);