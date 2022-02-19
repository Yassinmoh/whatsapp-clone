import React from 'react'
import '../style/sidebarchat.css'
import {Avatar} from '@material-ui/core'

const SidebarChat = (props) => {
  return (
    <div className="sidebarChat">
        <Avatar src={props.src}/>
        <div className="sidebarChat__info">
            <h2>{props.name}</h2>
            <p>{props.last}</p>
        </div>
    </div>
  )
}

export default SidebarChat