import React, { Component } from 'react'
import { withRouter } from 'react-router';

class Signup extends Component {
    render () {
        const { history } = this.props
        return (
            <div>
            <div className='loginWrap'>
                <div className='loginForm'>
                <img src={require("../capstoneLogo.png")} alt="logo"/>
                    <h4>Create an Account</h4>
                    <div className='inputWrap'>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Access Code" />
                        <input type="text" placeholder="Password" />
                        <input type="text" placeholder="Re-Enter Password" />
                    </div>
                    <button className='loginButton'>SIGN UP</button>
                    <a onClick={() =>{history.push('/')}}>Already have an account?</a>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Signup)