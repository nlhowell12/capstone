import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

class AppHeader extends Component {
    state = {
        modal: false
    }

    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
    }
    logoutAuth = () => {
        const { dispatch, history } = this.props;
        dispatch(logout())
        history.push('/')
    }

    render() {
        const { modal } = this.state;
        const { username } = this.props;
        return (
            <div className="appHeader">
                <img src={require("../coopLogo.png")} alt="coopLogo"/>
                <div className="username">
                    <p style={ { color: '#00f19d' } }>
                        {username}
                    </p>
                </div>
                <img className="userImage" src={require("../userProfile.png")} alt="userImage" onClick={evt => this.setState({modal: !modal})}/>
                {modal && <div className="loginModal"><p onClick={evt => this.logoutAuth()}>Logout</p></div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default withRouter(connect(mapStateToProps)(AppHeader));