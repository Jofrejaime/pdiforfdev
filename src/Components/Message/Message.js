import React from "react";
import { NavLink} from "react-router-dom";
import TextArea from "../Form/TextArea";
import Button from '../Form/Button'
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
function Message() {
  return (
    <section>
      <h1 className="title">Mensagens</h1>
      <Container>
        <InboxList>
          <AsideheaderInbox>
            <HeaderOfMessageList>Lista de Mensagens</HeaderOfMessageList>
          </AsideheaderInbox>
          <InboxListContainer>
            <ThreadList>
              <ListOfMessage>
                <div>
                  <ItemBoxMessage>
                    <ContentItemMessage>
                      <MessageAvatar>
                        <UserAvatarContent>
                          <NavLink to={""}>
                            <img src={Avatar} alt="Jofre Jaime" />
                          </NavLink>
                        </UserAvatarContent>
                      </MessageAvatar>
                      <MessageItemContent>
                        <div>
                          <span>
                            <span>Jofre Jaime</span>
                          </span>
                          <div>
                            <span></span>
                            <p>4 de set. de 2023</p>
                          </div>
                        </div>
                        <p>Bom dia, quero participar deste teu projecto</p>
                      </MessageItemContent>
                    </ContentItemMessage>
                  </ItemBoxMessage>
                </div>
              </ListOfMessage>
            </ThreadList>
          </InboxListContainer>
        </InboxList>
        <PanelMessage>
          <PanelMessageHeader>
            <div>
              <div>
                <span>
                  <div>
                    <a>
                      <img src={Avatar} alt="Jofre Jaime" />
                    </a>
                  </div>
                  <span>Jofre Jaime</span>
                </span>
              </div>
            </div>
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
              
            </ConversationContentWapper><InputSectionContainer>
              <TextAreaSection>
                <TextArea rows='' placeholder={'Escreva sua mensagem'}></TextArea>   
                <div><Button >Enviar</Button></div> 
              </TextAreaSection>
        
              </InputSectionContainer>
          </ConversationContent>
        </PanelMessage>
      </Container>
    </section>
  );
}

export default Message;
