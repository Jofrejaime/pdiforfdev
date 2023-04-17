import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AsideheaderInbox,
  Container,
  HeaderOfMessageList,
  InboxList,
  InboxListContainer,
  ItemBoxMessage,
  ListOfMessage,
  PanelMessage,
  PanelMessageHeader,
  ThreadList,
} from "./MessageStyles";
import {
  FIND_CONVERSATION_ROOM,
  FIND_USER,
  LIST_CONVERSATION,
  LIST_MESSAGES_BY_CONVERSATION,
  SEND_MESSAGE,
  filesUrl,
} from "../services/api";
import useFetch from "../../Hooks/useFetch";
import styles from "./Message.module.css";
import { UserContext } from "../../UserContext";
import formatDate from "../Helper/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import useForm from "../../Hooks/useForm";
import ContentItemMessageBox from "./ContentItemMessageBox";
import ContentConversasion from "./ContentConversasion";
import PanelHeader from "./PanelHeader";
import ItemList from "./ItemList";
function Message() {
  const [onLineUsers, setOnlineUsers] = useState(false);
  const message = useForm("");
  const { data: logedUser, socket } = useContext(UserContext);
  const { pathname } = useLocation();
  const { data, request } = useFetch();
  const scroll = useRef();
  const [messages, setMessages] = useState(false);
  const [specificConversation, setSpecificConversation] = useState(false);

  useEffect(() => {
    socket.on("getUsers", (data) => {
      setOnlineUsers(data);
    });
  }, [socket]);

  const getConversations = useCallback(async () => {
    const { url, options } = LIST_CONVERSATION({ member: logedUser.id });
    const { json, response } = await request(url, options);
    if (response.ok && json) {
      setListConversation(json);
    }
  }, [logedUser.id, request]);
  const [listConversation, setListConversation] = useState([]);
  useEffect(() => {
    getConversations();
  }, [getConversations]);
  useEffect(() => {
    async function getUser() {
      const name = pathname.split("/")[2];
      if (name) {
        const { url, options } = FIND_USER({ name });
        const { json, response } = await request(url, options);
        if (response.ok && !json.message)
          if (listConversation) {
            const conversa = listConversation.filter((conversation) =>
              conversation.MemberToConversation.some(
                (member) => member.member.userName === name
              )
            );

            if (conversa.length > 0) setSpecificConversation(...conversa);
          }
      }
    }
    getUser();
  }, [request, pathname, listConversation]);

 
 

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages(data);
      console.log(data);
    });
  }, [socket]);

  useEffect(() => {
    async function getMessages() {
      if (specificConversation) {
        const { url, options } = LIST_MESSAGES_BY_CONVERSATION({
          id: specificConversation.id,
        });
        const { json, response } = await request(url, options);
        if (response.ok) {
          setMessages(json);
        }
      }
    }
    getMessages();
  }, [request, specificConversation]);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <section id="message" className={styles.message}>
      <Container>
       <ItemList onLineUsers={onLineUsers} specificConversation={specificConversation}  setSpecificConversation={setSpecificConversation} listConversation={listConversation}/>
        <PanelMessage>
          <PanelMessageHeader>
            {specificConversation ? (
              specificConversation.MemberToConversation.map(
                (member) =>
                  member.memberId !== logedUser.id && (
                  <PanelHeader member={member} key={member.memberId} />
                  )
              )
            ) : (
              <div>Selecione uma conversa</div>
            )}
          </PanelMessageHeader>
          {messages && (
           <ContentConversasion messages={messages} specificConversation={specificConversation} setMessages={setMessages}/>
          )}
        </PanelMessage>
      </Container>
    </section>
  );
}

export default Message;
