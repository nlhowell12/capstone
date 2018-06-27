import React, { Component } from 'react';
import { NavBar, AppHeader, Tasks } from '../components'

class TaskPage extends Component {
    render() {
        return (
            <React.Fragment>
                <AppHeader></AppHeader>
                <Tasks></Tasks>
                <NavBar></NavBar>
            </React.Fragment>
        )
    }
}

export default TaskPage;