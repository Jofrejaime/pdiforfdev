import React from 'react'
import styles from './MessageStyle.module.css'
import useForm from '../../Hooks/useForm'
import {  LIST_CONVERSATION } from '../services/api'
function SearchMessage({setListConversation, listConversation, getConversations}) {
  
async function handleChange(event){
if(event.target.value!==''){
 const conversas = listConversation.filter(converse => converse.MemberToConversation.some(member=>member.member.userName.startsWith(event.target.value)))
 setListConversation([])
 setListConversation(conversas)
}else getConversations()
}
  return (
    <div className={styles.discussion + ' '+ styles.search}>
    <div className={styles.searchbar}>
      <i className="fa fa-search" aria-hidden="true"></i>
      <input type="text" placeholder="Search..."  onChange={handleChange}/>    </div>
  </div>
  )
}

export default SearchMessage