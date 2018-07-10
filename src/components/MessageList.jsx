import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message, AppHeader, NavBar, ChatBar } from '../components'
import { postMessages, getProjects } from '../actions';
import { withRouter } from 'react-router-dom';


class MessageList extends Component {
    state = {
        newMessage: ''
    }

    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
    }

    newMessage = () => {
        const { dispatch, index, username, projects } = this.props;
        const { newMessage } = this.state;
        const timestamp = Date.now();
        const postMethod = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                timestamp,
                message: newMessage
            })
        }
        fetch(`https://rocky-hollows-88234.herokuapp.com/project/${projects[index].projectName}/messages`, postMethod)
            .then(res => res.json())
            .then(data => {
                dispatch(postMessages(data.username, data.timestamp, data.message, projects[index].projectName))
            })
        
        this.setState({newMessage: ''});
    }
    componentWillMount = () => {
        const { history, username } = this.props;
        if(!username) {
            history.push('/')
        }
    }
    componentDidMount = () => {
        setInterval(() => {
        const { dispatch, username } = this.props;
        if(username) {
        fetch(`https://rocky-hollows-88234.herokuapp.com/projects/${username}`)
            .then(res => res.json())
            .then(data => {
                dispatch(getProjects(data))
            })
    }}, 5000)}
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
                <ChatBar onChange={this.onChange} newMessage={this.newMessage} text={this.state.newMessage}></ChatBar>
                <NavBar></NavBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        username: state.username
    }
}
export default withRouter(connect(mapStateToProps)(MessageList))