import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppHeader, NavBar } from '../components'

class ProjectOverview extends Component {
    render() {
        const { index, projects } = this.props;
        const project = projects[index];
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                <div className="projectOverview">
                    <h1>Project Overview</h1>
                    <div className="upperProject">
                    <img className="projectFile" src={require("../projectFile.png")} alt="projectFile"/>
                    <h2>{project.projectName}</h2>
                    </div>
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
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectOverview);