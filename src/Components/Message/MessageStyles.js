import styled from "styled-components";

export const Inbox = styled.div``;

export const Container = styled.div`
  width: calc(100vw - 70px);
  height: calc(100vh);
  background-color: #fff;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0 0 0 /15%);
  height: calc(100vh - 55px - 62px - 33px);
  display: flex;
  font-family: var(--type-code1);
`;
export const InboxList = styled.div`
  width: 360px;
  border-right: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const AsideheaderInbox = styled.div`
  display: flex;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid #ededed;
`;
export const InboxListContainer = styled.div`
  border-top: 1px solid #ededed;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;
export const ThreadList = styled.div`
  height: 100%;
`;
export const ListOfMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5px 5px 10px;
  width: 100%;
`;
export const HeaderOfMessageList = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  width: 100%;
`;
export const ItemBoxMessage = styled.li`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  margin-bottom: 2px;
  padding: 10px;
  position: relative;
  transition: background-color 0.15s linear;
`;
export const ContentItemMessage = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const MessageItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  max-width: calc(100% - 50px - 20px);
  position: relative;
  gap: 4px;
  div {
    color: #333333;
    display: flex;
    gap: 4px;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      flex: 0 1 auto;
      font-size: 14px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    div {
      align-items: center;
      display: flex;
      flex: 0 0 auto;
      span {
        background-color: #707070;
        border-radius: 4px;
        display: block;
        height: 10px;
        margin: 0 5px;
        min-width: 1px;
        position: relative;
      }
      p {
        color: #707070;
        font-size: 12px;
      }
    }
  }
  p {
    color: #707070;
    font-size: 14px;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const MessageAvatar = styled.div`
  margin-right: 10px;
  position: relative;
`;
export const UserAvatarContent = styled.div`
  position: relative;
  z-index: 1;
  a {
    display: block;
    height: 100%;
    width: 100%;
    img {
      height: 50px;
      width: 50px;
      min-height: 50px;
      min-width: 50px;
      border-radius: 50%;
    }
  }
`;

//UserMessageHeaderPanel
export const PanelMessage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const PanelMessageHeader = styled.div`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  border-radius: 0 4px 0 0;
  display: flex;
  height: 61px;
  padding: 20px;
  width: 100%;
  div {
    align-items: center;
    display: flex;
    flex-grow: 1;
    div {
      align-items: center;
      display: flex;
      flex-grow: 1;
      span {
        align-items: center;
        display: flex;
        div {
          a {
            height: 25px;
            width: 25px;
            min-height: 25px;
            min-width: 25px;
            position: relative;
            transition: filter 0.2s linear;
            img {
              border-radius: 50%;
              display: block;
              height: 100%;
              width: 100%;
            }
          }
        }
        span {
          margin-left: 10px;
        }
      }
    }
  }
`;
export const ConversationContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ConversationContentWapper = styled.div`
  flex-grow: 1;
  height: 0;
  overflow: auto;
  @media (min-width: 1024px) {
    padding: 20px 10%;
  }
  @media (min-width: 603) {
    padding: 20px 6%;
  }
`;
export const ConversationList = styled.ul`
  display: flex;
  flex-basis: auto;
  flex-direction: column-reverse;
  flex-grow: 1;
  gap: 20px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 20px 10%;
  }
  @media (min-width: 603px) {
    padding: 20px 6%;
  }

  li {
    p {
      color: #707070;
      font-size: 12px;
      font-weight: 600;
      margin: 20px auto 10px;
      text-align: center;
    }
    div {
      align-items: flex-end;
      display: flex;
      justify-content: flex-end;
      position: relative;
      div {
        background: #0057ff;
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        max-width: 490px;
        padding: 15px 20px;
        position: relative;
        white-space: pre-line;
        word-break: break-word;
        z-index: 1;
      }
    }
  }
  li {
  }
  .sendedMessage {
    background: #f7f7f7;
    color: #333333;
    font-size: 14px;
    line-height: 20px;
    max-width: 490px;
    padding: 15px 20px;
    position: relative;
    white-space: pre-line;
    word-break: break-word;
    z-index: 1;
    border-radius: 8px;
    span {
      justify-content: flex-start;
      margin-left: 0;
      margin-right: 10%;
      p {
        margin-top: 0;
        margin-bottom: 0;
        background: #f7f7f7;
      }
    }
  }
`;
//Input
export const InputSectionContainer = styled.div`
  border-top: 1px solid #ededed;
  padding: 15px;
  display: flex;
  height: 100px;
`;
export const InputSection = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;
export const TextAreaSection = styled.div`
  @media (max-width: 1080px) {
    width: 60%;
  }
  display: flex;
  justify-content: space-between;
  max-width: 490px;
  height: 100%;

  textarea {
    max-width: calc(100vw - 690px);
    width: 100%;
    min-width: calc(100vw - 800px);
    margin-right: 20px;
    resize: none;
    overflow: auto;
  }
  label {
    padding: 0;
  }
`;
