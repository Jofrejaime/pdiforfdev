import React from 'react'
import ProfileInfo from '../Profile/ProfileInfo'
import Trabalhos from '../Profile/Trabalhos'

function Feed() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px'}}>
    <ProfileInfo />
    <Trabalhos />
  </div>
  )
}

export default Feed