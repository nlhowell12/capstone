import React, { Component } from 'react';
import { Channel } from '../components'
import { connect } from 'react-redux'
import { AppHeader, NavBar } from '../components'

class ChannelsList extends Component {
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
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ChannelsList);
