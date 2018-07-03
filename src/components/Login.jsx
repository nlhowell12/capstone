import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
    state = {
        email: '',
        password: '',
        loginSuccess: true
    }
    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
    }
    loginAuth = () => {
        const { email, password } = this.state;
        const { history, dispatch } = this.props;
        let loginMethod = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({
                email,
                password
            })
        }
        fetch(`https://rocky-hollows-88234.herokuapp.com/login`, loginMethod)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    dispatch(login(data.username, email))
                    this.setState({...this.state, loginSuccess: true})
                    history.push('/home')
                } else {
                    this.setState({...this.state, loginSuccess: false})
                }
            })
    }
    render () {
        const { history } = this.props
        const { loginSuccess } = this.state;
        return (
            <div>
            <div className='loginWrap'>
                <div className='loginForm'>
                <img src={require("../capstoneLogo.png")} alt="logo"/>
                    <h4>Sign in to your Workspace</h4>
                    <div className='inputWrap'>
                        <input type="email" placeholder="Email" onChange={this.onChange('email')}/>
                        <input type="password" placeholder="Password" onChange={this.onChange('password')}/>
                    </div>
                    <button className='loginButton' onClick={evt => this.loginAuth()}>LOGIN</button>
                    {!loginSuccess && <p style={{color: 'red'}}>Username or Password is incorrect, please try again</p>}
                    <a onClick={() => {history.push('/signup')}}>Don't have an account? Create one!</a>
                    <a onClick={() => {history.push('/forgot')}}>Forgot Password?</a>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(connect()(Login))