import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postProject } from '../actions';

class NewProjectPage extends Component {
    state = {
        projectName: '',
        summary: '',
        targetAudience: '',
        dates: '',
        location: '',
        estimateLink: '',
        leads: ''
    }
    checkSubmit = () => {
        const { projects } = this.props;
        const { projectName } = this.state;
        let projectNames = [];
        projects.map(project => projectNames.push(project.projectName))
        if(projectNames.includes(projectName)) {
            alert("Project name is already in use, please choose another.")
        } else {
            this.submit()
        }
    }
    submit = () => {
        const { history, dispatch } = this.props;
        const { projectName, summary, targetAudience, dates, location, estimateLink, leads } = this.state;
        let method = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                projectName,
                summary,
                targetAudience,
                dates,
                location,
                estimateLink,
                leads,
                tasks: [],
                channel: {
                    messages:[]
                }
            })
        }
        fetch('https://rocky-hollows-88234.herokuapp.com/projects', method)
            .then(res => res.json())
            .then(data => {
                dispatch(postProject(data))
            })
            .then(() => {
                this.setState({
                    projectName: '',
                    summary: '',
                    targetAudience: '',
                    dates: '',
                    location: '',
                    estimateLink: '',
                    leads: ''
                })
            })
            .then(() => {
                history.push('/projects')
            })
    }
    render() {
        return (
            <div className="loginWrap">
                <div className='loginForm'>
                <img src={require("../capstoneLogo.png")} alt="logo"/>
                    <h4>Enter your new Project</h4>
                    <div className='inputWrap'>
                        <input type="text" placeholder="Project Name" onChange={this.onChange('projectName')}/>
                        <input type="text" placeholder="Summary" onChange={this.onChange('summary')}/>
                        <input type="text" placeholder="Target Audience" onChange={this.onChange('targetAudience')}/>
                        <input type="text" placeholder="Dates" onChange={this.onChange('dates')}/>
                        <input type="text" placeholder="Location" onChange={this.onChange('location')}/>
                        <input type="text" placeholder="Leads" onChange={this.onChange('leads')}/>
                        <input type="text" placeholder="Estimate Link" onChange={this.onChange('estimateLink')}/>
                    </div>
                    <button className='loginButton' onClick={evt => this.checkSubmit()}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default withRouter(connect(mapStateToProps)(NewProjectPage))