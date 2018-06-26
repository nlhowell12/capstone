import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ForgotPassword extends Component {
    render () {
        const { history } = this.props
        return (
            <div>
            <div className='loginWrap'>
                <div className='loginForm'>
                <img src={require("../capstoneLogo.png")} alt="logo"/>
                    <h4>Please enter your email</h4>
                    <div className='inputWrap'>
                        <input type="email" placeholder="Email" />
                    </div>
                    <button className='loginButton'>Submit</button>
                    <a onClick={() =>{history.push('/')}}>Back to login</a>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(ForgotPassword)