import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Message from './Message'
import UserMessage from './UserMessage'
import Inbox from './message/Inbox'

function MessageIndex() {
  return (
    <div className="container">
      <Routes>
        <Route path='/:username'  element={<Message />}/>
        <Route path='/' element={<Message />}/>
        <Route  path='/mess' element={<Inbox/>}/>
      </Routes>
    </div>
  )
}

export default MessageIndex