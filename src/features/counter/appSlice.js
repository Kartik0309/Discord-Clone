import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelId:null,
  ChannelName:null,
};



export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    SetchannelId: (state,action) => {
     
      state.app += action.payload;
    },
    
  },
});

export const { SetchannelId } = appSlice.actions;


export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state)=>state.app.ChannelName; 


export default appSlice.reducer;
