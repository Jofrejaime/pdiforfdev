import React, { useCallback, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import TextArea from "../Form/TextArea";
import Button from "../Form/Button";
import Avatar from "../../assets/img/image.jpg";
import {
  AsideheaderInbox,
  Container,
  ContentItemMessage,
  ConversationContent,
  ConversationContentWapper,
  ConversationList,
  HeaderOfMessageList,
  InboxList,
  InboxListContainer,
  InputSectionContainer,
  ItemBoxMessage,
  ListOfMessage,
  MessageAvatar,
  MessageItemContent,
  PanelMessage,
  PanelMessageHeader,
  TextAreaSection,
  ThreadList,
  UserAvatarContent,
} from "./MessageStyles";
import { FIND_CONVERSATION_ROOM, FIND_USER, GET_USERS, LIST_CONVERSATION, filesUrl } from "../services/api";
import useFetch from "../../Hooks/useFetch";
import { createConversation } from "./createConversation";
import { UserContext } from "../../UserContext";
import formatDate from "../Helper/formatDate";
function Message() {
  const {data: logedUser} = useContext(UserContext)
  const { pathname } = useLocation();
  const { data,request } = useFetch();
  const [specificConversation, setSpecificConversation] =  useState(false)
const getConversations = useCallback(async ()=>{
 
    const {url, options} =  LIST_CONVERSATION({member: logedUser.id});
    const {json, response} = await request(url, options)
    if(response.ok && json){
      setListConversation(json)
    }
    
 
},[logedUser.id, request])
  const [listConversation, setListConversation] = useState([])
  useEffect(() => {
    async function getUser() {
      const name =  pathname.split("/")[2]
      if(name){
      const { url, options } = FIND_USER({ name });
       await request(url, options);}
    }
     getUser();
    getConversations()
  }, [request, pathname, getConversations]);
  
  async function getConverse(id){
    const {url, options} = FIND_CONVERSATION_ROOM({id})
    const {json, response} = await request(url, options)
  if(response.ok) setSpecificConversation(...json)
  }
  console.log(specificConversation)
  return (
    <section id="message">
      <Container>
        <InboxList>
          <AsideheaderInbox>
            <HeaderOfMessageList>Lista de Mensagens</HeaderOfMessageList>
          </AsideheaderInbox>
          <InboxListContainer>
          {  listConversation.length > 0 && listConversation.map(conversation =>
          <ThreadList key={conversation.id} onClick={()=>getConverse(conversation.id)}>
          <ListOfMessage>
            <div>
              <ItemBoxMessage>
                <ContentItemMessage>
                  <MessageAvatar>
                    <UserAvatarContent>
               {conversation.MemberToConversation.map(member=> member.memberId !== logedUser.id && <NavLink to={""}>
                        <img src={filesUrl+member.member.profile.photo_url} alt={member.member.userName} />
                      </NavLink> )
                      }
  
                    </UserAvatarContent>
                  </MessageAvatar>
                  <MessageItemContent>
                    <div>
                    {conversation.MemberToConversation.map(member=> member.memberId !== logedUser.id && <span>
                      <span>{member.member.userName}</span>
                    </span> )
                      }
                      <div>
                        <span></span>
                       <p>{conversation.Messages.length >0 && `${formatDate(conversation.created_at)}`}</p>
                      </div>
                    </div>
                    <p>{conversation.Messages.length > 0 && `${conversation.Messages[conversation.Messages.length - 1].context}`}</p>
                  </MessageItemContent>
                </ContentItemMessage>
              </ItemBoxMessage>
            </div>
          </ListOfMessage>
        </ThreadList>
            )
            
            }
          </InboxListContainer>
        </InboxList>
        <PanelMessage>
          <PanelMessageHeader>
          {specificConversation?  specificConversation.MemberToConversation.map(member => member.memberId !== logedUser.id && <div>
              <div>
                <span>
                  <div>
                    <a>
                      <img src={filesUrl + member.member.profile.photo_url} alt={member.member.userName} />
                    </a>
                  </div>
                  <span>Jofre Jaime</span>
                </span>
              </div>
            </div>)
          : <div>Selecione uma conversa</div>}
          </PanelMessageHeader>
          <ConversationContent>
            <ConversationContentWapper>
              <ConversationList>
                <li>
                  <div className="sendedMessage">
                    <span>
                      <p>Content do Seguidor</p>
                    </span>
                  </div>
                </li>
                <li>
                  <p>4 de setembro de 2022</p>
                  <div>
                    <div>
                      Bom dia Quero participar deste teu projecto nisnvndvsjv
                      svsojod scmsocjsodjcsd snvmsndvoskdv vsvjsodnv sdsod
                    </div>
                  </div>
                </li>
              </ConversationList>
            </ConversationContentWapper>
            <InputSectionContainer>
              <TextAreaSection>
                <TextArea
                  rows=""
                  placeholder={"Escreva sua mensagem"}
                ></TextArea>
                <div>
                  <Button>Enviar</Button>
                </div>
              </TextAreaSection>
            </InputSectionContainer>
          </ConversationContent>
        </PanelMessage>
      </Container>
    </section>
  );
}

export default Message;
