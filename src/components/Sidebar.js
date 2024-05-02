import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';

function Sidebar() {
const[conversations, setConversations] = useState([
 {
  name : "Anshul Jain",
  lastmessage: "Kha pr h",
  timestamp: "today"

 },
 {
  name : "Rajeev Kailash",
  lastmessage: "Mail send kr dena",
  timestamp: "today"

 },
 {
  name : "Ankur Rawat",
  lastmessage: "what up !",
  timestamp: "today"

 },
 {
  name : "Satish Kaushik",
  lastmessage: "aane ke baad ",
  timestamp: "today"

 }


]);







  return (
    <div className='sidebar-container'>
    <div className='sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        </div>
       

      <div>
        <IconButton>
            <PersonAddIcon/>
        </IconButton>
        <IconButton>
          <GroupAddIcon/>
        </IconButton>
        <IconButton>
            <AddCircleIcon/>
        </IconButton>
        <IconButton>
        <NightlightIcon/>
        </IconButton>
        </div>
       
        </div>
    <div className='sb-search'>
        <IconButton>
        <SearchIcon/>
        </IconButton>
     
        <input placeholder='Search' className='search-box'/>
    </div>
    <div className='sb-conversations'>
      {
        conversations.map((conversation) => {

        return <ConversationItem props = {conversation} key={conversation.name}/>
        })
      }
        
        </div>



    </div>
  )
}

export default Sidebar