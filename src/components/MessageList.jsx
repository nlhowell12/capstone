import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message, AppHeader, NavBar, ChatBar } from '../components'


class MessageList extends Component {
    render() {
        const { projects, index } = this.props;
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                <div className="messageList">
                    <div className="channelName">
                    <p>{projects[index].projectName}</p>
                    </div>
                    {projects[index].channel.messages.map((message, id) => <Message key={id} id={id} message={message}></Message>)}
                </div>
                <ChatBar></ChatBar>
                <NavBar></NavBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}
export default connect(mapStateToProps)(MessageList)