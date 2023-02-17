import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Message from './Message'
import UserMessage from './UserMessage'

function MessageIndex() {
  return (
    <div className="container">
      <Routes>
        <Route path='/'  element={<Message />}/>
        <Route path='user' element={<UserMessage />}/>
      </Routes>
    </div>
  )
}

export default MessageIndex