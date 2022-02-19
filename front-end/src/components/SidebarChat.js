import React from 'react'
import '../style/sidebarchat.css'
import {Avatar} from '@material-ui/core'

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
        <Avatar/>
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>Last Message</p>
        </div>
    </div>
  )
}

export default SidebarChat