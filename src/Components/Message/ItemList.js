import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AsideheaderInbox, HeaderOfMessageList, InboxList, InboxListContainer, ItemBoxMessage, ListOfMessage, ThreadList } from './MessageStyles'
import styles from './Message.module.css'
import { FIND_CONVERSATION_ROOM } from '../services/api'
import useFetch from '../../Hooks/useFetch'
import { UserContext } from '../../UserContext'
function ItemList({listConversation, specificConversation, onLineUsers, setSpecificConversation}) {
  const {request} = useFetch()
  const {data: logedUser, socket} = useContext(UserContext)
  async function getConverse(id) {
    const { url, options } = FIND_CONVERSATION_ROOM({ id });
    const { json, response } = await request(url, options);
    if (response.ok) {
      setSpecificConversation(...json);
  
      json.map( converse =>
    
      socket.emit('select_conversation', {
        id: converse.id,
        username: logedUser.userName,
        userId: logedUser.id
      }))
    }
  }
  return (
    
    <InboxList>
    <AsideheaderInbox>
      <HeaderOfMessageList>Lista de Mensagens</HeaderOfMessageList>
    </AsideheaderInbox>
    <InboxListContainer>
      <ThreadList>
        <ListOfMessage>
          {listConversation.length > 0 &&
            listConversation.map((conversation) => (
              <ItemBoxMessage
                className={styles.markthread}
                style={
                  specificConversation.id === conversation.id
                    ? { backgroundColor: "#f2f2f2", width: "100%" }
                    : { backgroundColor: "" }
                }
                key={conversation.id}
                onClick={() => getConverse(conversation.id)}
              >
                <Link
                  to={
                    "../../message/" +
                    conversation.MemberToConversation.find(
                      (user) => user.memberId !== logedUser.id
                    ).member.userName
                  }
                >
                 
                </Link>
              </ItemBoxMessage>
            ))}
        </ListOfMessage>
      </ThreadList>
    </InboxListContainer>
  </InboxList>
  )
}

export default ItemList