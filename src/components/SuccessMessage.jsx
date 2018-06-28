import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SuccessMessage extends Component {
    render () {
        const { changeModal } = this.props
        return (
            <div className='successMessage'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#00f19d" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline className="path check" fill="none" stroke="#00f19d" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>
                <h3>Success!</h3>
                <h6>Your account has been created</h6>
                <p>You now have the ability to manage projects, create and complete assignments, and chat on channels!</p>
                <button onClick={evt => changeModal()}>CONTINUE TO APP</button>
                <a>GO TO PROFILE SETTINGS</a>
            </div>
        )
    }
}

export default withRouter(SuccessMessage)