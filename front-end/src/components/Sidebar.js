import React from 'react'
import '../style/sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from '../components/SidebarChat'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='/yassin.png' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat src={'1.jpg'} name={'Ahmed'} last={'Hello yassin!!'}/>
                <SidebarChat src={'2.jpg'} name={'Noor'} last={'Ok sea you tomorrow'}/>
                <SidebarChat src={'3.jpg'} name={'Yousef'} last={'OK '} />
            </div>
        </div>
    )
}

export default Sidebar