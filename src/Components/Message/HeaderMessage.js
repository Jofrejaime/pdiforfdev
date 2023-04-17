import React, { useContext, useEffect, useState } from 'react'
import styles from './MessageStyle.module.css'
import { UserContext } from '../../UserContext'
function HeaderMessage({specificConversattion}) {
  const {data: logedUser} = useContext(UserContext)
  const [member, setMember] = useState(false)
  useEffect(()=>{
    if(specificConversattion)
    setMember(...specificConversattion.MemberToConversation.filter(
    (member) => member.memberId !== logedUser.id
  ))},[logedUser, specificConversattion])

  return (
    <div className={styles.header_chat}>
            <i className={styles.icon + " fa fa-user-o"} aria-hidden="true"></i>
            <p className={styles.name}>{member && member.member.profile.firstName+' '+member.member.profile.lastName}</p>
            <i
              className={styles.icon + ' ' + styles.clickable+ " fa fa-ellipsis-h right"}
              aria-hidden="true"
            ></i>
          </div>
  )
}

export default HeaderMessage