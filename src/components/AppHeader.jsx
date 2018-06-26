import React, { Component } from 'react';

class AppHeader extends Component {
    render() {
        return (
            <div className="appHeader">
                <img src={require("../images/coopLogo.png")} alt=""/>
                <img className="userImage" src={require("../images/userProfile.png")} alt=""/>
            </div>
        )
    }
}

export default AppHeader;