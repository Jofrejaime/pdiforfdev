import React, { useContext, useEffect, useState } from "react";
import styles from "./MessageStyle.module.css";
import { UserContext } from "../../UserContext";
import { filesUrl } from "../services/api";
import formatDate from "../Helper/formatDate";
import { Link } from "react-router-dom";
function ConversationItem({
  conversation,
  setOtherMember,
  setSpecificConversation,
  specificConversation,
  onLineUsers,
}) {
  const { data: logedUser } = useContext(UserContext);
  const [member, setMember] = useState(false);
  useEffect(() => {
    if (conversation)
      setMember(
        ...conversation.MemberToConversation.filter(
          (member) => member.memberId !== logedUser.id
        )
      );
  }, [conversation, logedUser.id]);
  let online = false;
  if (onLineUsers && member)
    online = onLineUsers.some(
      (user) => user.username === member.member.userName
    );
  const same = specificConversation === conversation;
  return (
    <Link
      to={member &&
        "../../message/" +
        member.member.userName
      }
      className={
        same
          ? styles.discussion + " " + styles.message_active
          : styles.discussion
      }
      onClick={() => setSpecificConversation(conversation)}
    >
      <div
        className={styles.photo}
        style={member?{
          backgroundImage: `url(${filesUrl + member.member.profile.photo_url})`
        }: {}}
      >
        {online && <div className={styles.online}></div>}
      </div>
      <div className={styles.desc_contact}>
        <p className={styles.name}>{member && member.member.userName}</p>
        <p className={styles.message}>
          {" "}
          {conversation.Messages.length > 0 &&
            `${
              conversation.Messages[conversation.Messages.length - 1].content
            }`}
        </p>
      </div>
      <div className={styles.timer}>
        {conversation.Messages.lengh > 0
          ? formatDate(
              conversation.Messages[conversation.Messages.length - 1].created_at
            )
          : formatDate(conversation.created_at)}
      </div>
    </Link>
  );
}

export default ConversationItem;
