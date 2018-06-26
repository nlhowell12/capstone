import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Login, Signup, ForgotPassword, SuccessMessage } from './components'
import './App.css' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' render={() => <SuccessMessage></SuccessMessage>}/>
          <Route path = '/signup' render={() => <Signup></Signup>}/>
          <Route path = '/forgot' render={() => <ForgotPassword></ForgotPassword>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
