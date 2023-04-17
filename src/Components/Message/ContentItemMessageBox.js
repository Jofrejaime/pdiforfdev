import React from 'react'
import {
  ContentItemMessage,
  MessageAvatar,
  MessageItemContent,

} from "./MessageStyles";
import styles from './Message.module.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { filesUrl } from '../services/api';
import formatDate from '../Helper/formatDate';

function ContentItemMessageBox({conversation, onLineUsers}) {
  const {data: logedUser} = useContext(UserContext)
  return (
    <ContentItemMessage>
    <MessageAvatar>
      <div className={styles.profile_border}>
        {conversation.MemberToConversation.map(
          (member) =>
            member.memberId !== logedUser.id && (
              <NavLink to={""} key={member.memberId}>
                <div className={styles.profile_perfil}>
                  <img
                    src={
                      filesUrl +
                      member.member.profile.photo_url
                    }
                    className={
                      onLineUsers &&
                      onLineUsers.some(
                        (user) =>
                          user.username ===
                          member.member.userName
                      ) &&
                      styles.activeUser
                    }
                    alt={member.member.userName}
                  />
                </div>
              </NavLink>
            )
        )}
      </div>
    </MessageAvatar>
    <MessageItemContent>
      <div>
        {conversation.MemberToConversation.map(
          (member) =>
            member.memberId !== logedUser.id && (
              <span key={member.memberId}>
                <span
                  className={
                    onLineUsers &&
                    onLineUsers.some(
                      (user) =>
                        user.username ===
                        member.member.userName
                    ) &&
                    styles.activeUser
                  }
                >
                  {member.member.userName}
                </span>
              </span>
            )
        )}
        <div>
          <span></span>
          <p>
            {conversation.Messages.length > 0
              ? `${formatDate(
                  conversation.Messages[
                    conversation.Messages.length - 1
                  ].created_at
                )}`
              : `${formatDate(conversation.created_at)}`}
          </p>
        </div>
      </div>
      <p>
        {conversation.Messages.length > 0 &&
          `${
            conversation.Messages[
              conversation.Messages.length - 1
            ].content
          }`}
      </p>
    </MessageItemContent>
  </ContentItemMessage>
  )
}

export default ContentItemMessageBox