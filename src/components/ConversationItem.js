import React from 'react'

function ConversationItem({props}) {
  console.log("propsin conversation",props)
  return (
    <div className='conversation-container'>
     <p className='con-icon'> {props.name[0]}</p>
     <p className='con-title'>{props.name}</p>
     <p className='con-lastmessage'>{props.lastmessage}</p>
     <p className='con-timestamp'>{props.timestamp}</p>

    </div>
  )
}

export default ConversationItem