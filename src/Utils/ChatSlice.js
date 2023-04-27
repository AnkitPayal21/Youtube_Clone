import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Config";

const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.splice(OFFSET_LIVE_CHAT, 1)
            state.message.unshift(action.payload)
        }
    }
})
export const {addMessage} = ChatSlice.actions

export default ChatSlice.reducer;