import React, { Component } from 'react'

export class Login extends Component {
    render () {
        return (
            <div>
            <div className='loginWrap'>
                
                <div className='loginForm'>
                <img src={require("../images/capstoneLogo.png")} alt="logo"/>
                    <h4>Sign in to your Workspace</h4>
                    <div className='inputWrap'>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <button className='loginButton'>LOGIN</button>
                    <a href="">Don't have an account? Create one!</a>
                    <a href="">Forgot Password?</a>
                </div>
            </div>
            </div>
        )
    }
}

export default Login