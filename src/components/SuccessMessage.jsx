import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SuccessMessage extends Component {
    render () {
        return (
            <div className='successMessage'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>
                <h3>Success!</h3>
                <h5>Your account has been created</h5>
                <p>You now have the ability to manage projects, create and complete assignments, and chat on channels!</p>
                <button>CONTINUE TO APP</button>
                <a>GO TO PROFILE SETTINGS</a>
            </div>
        )
    }
}

export default withRouter(SuccessMessage)