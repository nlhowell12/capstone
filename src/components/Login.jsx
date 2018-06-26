import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
    render () {
        const { history } = this.props
        return (
            <div>
            <div className='loginWrap'>
                <div className='loginForm'>
                <img src={require("../images/capstoneLogo.png")} alt="logo"/>
                    <h4>Sign in to your Workspace</h4>
                    <div className='inputWrap'>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button className='loginButton'>LOGIN</button>
                    <a onClick={() => {history.push('/signup')}}>Don't have an account? Create one!</a>
                    <a onClick={() => {history.push('/forgot')}}>Forgot Password?</a>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Login)