import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message() {
  return (
    <div className="message">
        <Avatar/>
        <div className="message_info">
            <h4>Kartik Chauhan
                <span className="message_timestamp">Timestamp</span>
            </h4>
            <p>This is a message</p>
        </div>
    </div>
  )
}

export default Message