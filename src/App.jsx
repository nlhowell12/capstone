import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Login, Signup, ForgotPassword, Homepage, ChannelsList, MessageList, TaskPage, ProjectsPage } from './components'
import './App.css';
import ProjectOverview from './components/ProjectOverview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' render={() => <Login></Login>}/>
          <Route path = '/signup' render={() => <Signup></Signup>}/>
          <Route path = '/forgot' render={() => <ForgotPassword></ForgotPassword>}/>
          <Route path = '/home' render={() => <Homepage></Homepage>}/>
          <Route path = '/projects' render={() => <ProjectsPage></ProjectsPage>}></Route>
          <Route path = '/project/:id' render={({match}) => <ProjectOverview index={match.params.id}></ProjectOverview>}></Route>
          <Route path = '/channels' render={() => <ChannelsList></ChannelsList>}></Route>
          <Route path = '/channel/:id' render={({match}) => <MessageList index={match.params.id}></MessageList>}></Route>
          <Route path = '/tasks' render={() => <TaskPage></TaskPage>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
