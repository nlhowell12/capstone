import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppHeader, NavBar, LongProject } from '../components';
import { withRouter } from 'react-router-dom';

class ProjectOverview extends Component {
    componentWillMount = () => {
        const { history, username } = this.props;
        if(!username) {
            history.push('/')
        }
    }
    render() {
        const { index, projects } = this.props;
        const project = projects[index];
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                <div className="projectOverview">
                    <h1>Project Overview</h1>
                    <LongProject project={project} id={index}></LongProject>
                    <div className="lowerProject">
                        <ul>
                            <li>{`Leads: ${project.leads}`}</li>
                            <li>{`Summary: ${project.summary}`}</li>
                            <li>{`Target Audience: ${project.targetAudience}`}</li>
                            <li>{`Estimate Link:  ${project.estimateLink}`}</li>
                            <li>{`Dates/Location: ${project.dates}; ${project.location}`}</li>
                        </ul>
                    </div>
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

export default withRouter(connect(mapStateToProps)(ProjectOverview));