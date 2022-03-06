import React from 'react'
import "./SidebarChannel.css";
import SetchannelInfo from './features/counter/appSlice';
import {useDispatch} from 'react-redux';
function SidebarChannel({id,channelName}) {
  const dispatch = useDispatch();
  return (
    <div className="sidebarChannel" onClick={()=>
      
      dispatch(
        SetchannelInfo({
          channelId:id,
          channelName:channelName,
        })
      )}>
        <h4><span className="sideBarChannel_hash">#</span>{channelName}</h4>
    </div>
  );
}

export default SidebarChannel;