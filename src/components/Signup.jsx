import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../actions'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passCheck: '',
        incompleteModal: false

    }
    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
    }
    signupAuth = () => {
        const { username, email, password, passCheck } = this.state;
        const { dispatch, history } = this.props;
        let signupMethod = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        }
        if(username && email && password && (password === passCheck)) {
        fetch('https://rocky-hollows-88234.herokuapp.com/signup', signupMethod)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    dispatch(login(data.username, data.email))
                    this.setState({
                        username: '',
                        email: '',
                        password: '',
                        passCheck: '',
                        incompleteModal: false
                
                    })
                    history.push('/home')
                } else {
                    alert("There was a problem creating your account, please try again later.")
                }
            })
    } else {
        this.setState({...this.state, incompleteModal: !this.state.incompleteModal})
    }
}
    render () {
        const { history } = this.props;
        const { password, passCheck, incompleteModal } = this.state;
        return (
            <div>
            <div className='loginWrap'>
                <div className='loginForm'>
                <img src={require("../capstoneLogo.png")} alt="logo"/>
                    <h4>Create an Account</h4>
                    <div className='inputWrap'>
                        <input type="text" placeholder="Username" onChange={this.onChange('username')}/>
                        <input type="email" placeholder="Email" onChange={this.onChange('email')}/>
                        <input type="password" placeholder="Password" onChange={this.onChange('password')}/>
                        <input type="password" placeholder="Re-Enter Password" onChange={this.onChange('passCheck')}/>
                        {password !== passCheck && <p style={{color: 'red', textAlign: 'center'}}>Passwords do not match</p>}
                        {incompleteModal && <p style={{color: 'red'}}>Please complete all fields and then submit</p>}
                    </div>
                    <button className='loginButton' onClick={evt => this.signupAuth()}>SIGN UP</button>
                    <a onClick={() =>{history.push('/')}}>Already have an account?</a>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(connect()(Signup))