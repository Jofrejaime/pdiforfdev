import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Message from './Message'
import UserMessage from './UserMessage'

function MessageIndex() {
  return (
    <div className="container">
      <Routes>
        <Route path='/:username'  element={<Message />}/>
        <Route path='/' element={<Message />}/>
      </Routes>
    </div>
  )
}

export default MessageIndex