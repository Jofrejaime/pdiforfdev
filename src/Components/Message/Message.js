import React from "react";
import styles from "./Message.module.css";
import { NavLink, Routes } from "react-router-dom";
import avatar from "../../assets/img/avatar.jpg";
import {
  AsideheaderInbox,
  Container,
  HeaderOfMessageList,
  InboxList,
  InboxListContainer,
  ListOfMessage,
  ThreadList,
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
              <ListOfMessage>Grupo e Amigos</ListOfMessage>
            </ThreadList>
          </InboxListContainer>
        </InboxList>
      </Container>
    </section>
  );
}

export default Message;
