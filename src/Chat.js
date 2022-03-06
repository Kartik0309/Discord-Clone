import React from 'react';
import './chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'; 
import Message from './Message';
import {useSelector} from 'react-redux';
import {selectChannelId,selectChannelName} from './features/counter/appSlice';
import {selectUser} from './features/counter/userSlice';
function Chat() {
    const user=useSelector(selectUser);
    const channelId=useSelector(selectChannelId);
    const channelName=useSelector(selectChannelName);
  return (
    <div className="chat">
        <ChatHeader channelName={channelName}/>
        <div className="chat_messages">
            <Message/>
            <Message/>
            <Message/>
        </div>
        <div className="chat_input">
            <AddCircleIcon fontSize="large"/>
            <form>
                <input placeholder={"Message #TEST CHANNEL"}/>
                <button className="chat_inputButton" type="submit">Send Message</button>
            </form>
            <div className="chat_inputIcons">
                <CardGiftcardIcon fontSize="large"/>
                <GifIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
            </div>
        </div>
    </div>
  )
}

export default Chat