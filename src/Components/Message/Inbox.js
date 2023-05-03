import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./MessageStyle.module.css";
import FormMessage from "./FormMessage";
import ConversationItem from "./ConversationItem";
import SearchMessage from "./SearchMessage";
import HeaderMessage from "./HeaderMessage";
import ChatConversation from "./ChatConversation";
import {
  FIND_USER,
  LIST_CONVERSATION,
  LIST_MESSAGES_BY_CONVERSATION,
  USER_GET,
} from "../services/api";
import useFetch from "../../Hooks/useFetch";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import { createConversation } from "./createConversation";
function Inbox() {
  const [onLineUsers, setOnlineUsers] = useState(false);
  const { data: logedUser, socket } = useContext(UserContext);
  
  const { data, request } = useFetch();
  const scroll = useRef();
  const [otherMember, setOtherMember] = useState(false);
  const [messages, setMessages] = useState(false);
  const [specificConversation, setSpecificConversation] = useState(false);
  const [listConversation, setListConversation] = useState([]);
  const location = useParams()
  
  useEffect(() => {
    socket.on("getUsers", (data) => {
      setOnlineUsers(data);
    });
  }, [socket]);

  const getMessages = useCallback(async () => {
    if (specificConversation) {
      const { url, options } = LIST_MESSAGES_BY_CONVERSATION({
        id: specificConversation.id,
      });
      const { json, response } = await request(url, options);
      if (response.ok) {
        setMessages(json);
      }
    }
  }, [request, specificConversation]);
  const getConversations = useCallback(async () => {
    const { url, options } = LIST_CONVERSATION({ member: logedUser.id });
    const { json, response } = await request(url, options);
    if (response.ok && json) {
      setListConversation(json);
    }
  }, [logedUser.id, request]);
  useEffect(() => {
    getConversations();
  }, [getConversations]);
  useEffect(() => {
    async function getUser() {
      const name = location.username;
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

            if (conversa.length > 0) {
              setSpecificConversation(...conversa);
              setOtherMember(
                conversa &&
                  conversa.MemberToConversarion.filter(
                    (member) => member.memberId !== logedUser.id
                  )
              );
            }
          }
      }
    }
    getUser();
  }, [request, listConversation, logedUser, location.username]);

  useEffect(() => {
    getMessages();
  }, [getMessages, request, specificConversation]);

  useEffect(() => {
    socket.on("message", (data) => {
      console.log('aqui')
      if (specificConversation.id === data.conversationId) {
        setMessages((messages) => [...messages, data]);
      }
    });
  }, [socket, specificConversation]);
  return (
    <div className={'container '+styles.container}>
      <div className={styles.row}>
        <section className={styles.discussions}>
          <SearchMessage
            setListConversation={setListConversation}
            listConversation={listConversation}
            getConversations={getConversations}
          />
          {listConversation &&
            listConversation.map((conversation) => (
              <ConversationItem
                specificConversation={specificConversation}
                setSpecificConversation={setSpecificConversation}
                conversation={conversation}
                onLineUsers={onLineUsers}
                setOtherMember={setOtherMember}
              />
            ))}
        </section>
        <section className={styles.chat + " " + styles.beetwen}>
          <HeaderMessage specificConversattion={specificConversation} />
          <ChatConversation
            messages={messages}
            specificConversation={specificConversation}
          />
          <FormMessage specificConversation={specificConversation} />
        </section>
      </div>
    </div>
  );
}

export default Inbox;
