import React, { Component } from 'react';
import { Channel } from '../components'
import { connect } from 'react-redux';
import { AppHeader, NavBar } from '../components';
import { withRouter } from 'react-router-dom';

class ChannelsList extends Component {
    componentWillMount = () => {
        const { history, username } = this.props;
        if(!username) {
            history.push('/')
        }
    }
    render() {
        const { projects } = this.props
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                <div className="channelsList">
                {projects.map((project, id) => <Channel key={id} id={id} project={project}></Channel>)}
                </div>
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

export default withRouter(connect(mapStateToProps)(ChannelsList));
