import React, { Component } from 'react';

class ChatBar extends Component {
    render() {
        const { onChange, newMessage, text } = this.props;
        return (
            <div className="chatBar">
               <img src={require('../addFile.png')} alt="addFile"/>
               <img src={require('../addPhoto.png')} alt=""/>
               <img src={require('../addImage.png')} alt=""/>
               <img src={require('../microphone.png')} alt=""/> 
               <div className="messageInput">
                   <input type="text" placeholder="Aa" className="invisInput" onChange={onChange('newMessage')} onKeyPress={evt => evt.key === 'Enter' ? newMessage() : null } value={text}/>
                   <img src={require('../smileyFace.png')} alt=""/>
               </div>
               <img src={require('../likeButton.png')} alt=""/>
            </div>
        )
    }
}

export default ChatBar;