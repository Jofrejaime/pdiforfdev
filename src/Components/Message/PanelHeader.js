import React from 'react'
import { filesUrl } from '../services/api'

function PanelHeader({member}) {
  return (
    <div>
    <div>
      <span>
        <div>
          <a href={`../../${member.member.userName}`}>
            <img
              src={filesUrl + member.member.profile.photo_url}
              alt={member.member.userName}
            />
          </a>
        </div>
        <span>
          {member.member.profile.firstName +
            " " +
            member.member.profile.lastName}
        </span>
      </span>
    </div>
  </div>
  )
}

export default PanelHeader