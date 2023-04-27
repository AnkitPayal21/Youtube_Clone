import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../Utils/ChatSlice"
import { generateChatMessages, generateChatNames } from "../Utils/helper"
import ChatMessage from "./ChatMessage"


const LiveChat = () => {
    
    const [liveMessage, setLiveMessage] = useState('')
    const dispatch = useDispatch()
   const messageSend=(e)=>{
        e.preventDefault()

        dispatch(
            addMessage({
                name:"Ankit Payal",
                message: liveMessage
            })
        )
        setLiveMessage('')
   }
    const chatmessage = useSelector((store) => store.chat.message)
useEffect(()=>{
    const poll = setInterval(()=>{
        dispatch(
            addMessage({
                name:generateChatNames(),
                message:generateChatMessages()
            })
        )
    },2000)
   
    return ()=> clearInterval(poll)
},[])

  return (
    <div>
    <div className="h-[510px] mr-8 p-3 rounded-lg bg-gray-100 overflow-y-scroll flex flex-col-reverse">
        {chatmessage.map((c)=> <ChatMessage
        name={c.name}
        message={c.message}/>)}
       
    </div>
    <form className="p-2 mr-8  bg-gray-200 rounded-b-lg" onSubmit={(e)=> {
        e.preventDefault()
        dispatch(
            addMessage({
                name:"Ankit Payal",
                message: liveMessage
            }))
        setLiveMessage('')}}>
        <input className="w-4/5 "  type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        <button className="ml-3 bg-red-500 text-white px-2" onClick={(e)=>messageSend(e)}>send</button>
    </form>
    </div>
  )
}

export default LiveChat