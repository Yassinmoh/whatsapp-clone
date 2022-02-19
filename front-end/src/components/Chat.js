import React, { useState } from 'react'
import '../style/chat.css'
import { IconButton, Avatar } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from '../axios'

const Chat = ({messages}) => {
  const [input,setInput]=useState('')
  const messageInfo={
    message:input,
    name:'Demo app',
    timestamp:'just now',
    received:true
  }
  const sendMessage=async (e)=>{
    e.preventDefault();
    await axios.post('/message/new',messageInfo)
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body" >
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__reciever"}`} key={Math.random()}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type a message" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat