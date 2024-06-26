import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatArea({props}) {
  return (
    <div className='chatarea-container'>
     <div className='chatArea-header'>
      {/* <p className='con-icon'>{props.name[0]}</p> */}
      <div className='header-text'>
        {/* <p className='con-title'>{props.name}</p>
        <p className='con-timestamp'>{props.name}</p> */}

      </div>
      <IconButton>
        <DeleteIcon/>
      </IconButton>
     </div>
     <div className='message-container'>

      
     </div>
     <div className='text-input-area'>
        <input placeholder='Type a Message' className='search-box'></input>

        <IconButton>
          <SendIcon/>
        </IconButton>
     
        
     
     </div>
    
    
    
    </div>
  )
}

export default ChatArea