import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import {Avatar} from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {selectUser} from './features/counter/userSlice';
import {useSelector} from 'react-redux';
import db, {auth} from './firebase';
import { useState } from 'react';
import {useEffect} from 'react';
import { onSnapshot,collection,addDoc,doc } from "firebase/firestore";

function Sidebar() {
  const user=useSelector(selectUser);
  const [channels,setChannels]=useState([]);
  
  useEffect(() => {
    onSnapshot(collection(db,"channels"),(Snapshot)=>
    setChannels(
            Snapshot.docs.map((doc)=>({
            id:doc.id,
            channel:doc.data(),
        }))
    )
    );
},[]);
    const handleAddChannel=() =>{
      const channelName=prompt("Enter A new Channel");

      if(channelName){
           addDoc(collection(db, "channels"),{
              channelName:channelName
          });    
      }
  } 
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <h3>Kartik Chauhan</h3>
            <ExpandMoreIcon/>
        </div>
        <div className="sidebar_channels">
            <div className="sidebar_channelsHeaders">
                <div className="sidebar_header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                </div>
                <AddIcon onClick={handleAddChannel} className="sidebar_addChannel"/>
            </div>
            <div className="sidebar_channelsList">
                {channels.map(({id,channel})=>(
                    <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                ))}
            </div>
        </div>
        <div className="sidebar_voice">
            <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large"/>
            <div className="sidebar_voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebar_voiceIcons">
                <InfoOutlinedIcon/>
                <CallIcon/>
            </div>
        </div>
        <div className="sidebar_profile">
            <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
            <div className="sidebar_profileInfo">
                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0,5)}</p>
            </div>
            <div className="sidebar_profileIcons">
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar