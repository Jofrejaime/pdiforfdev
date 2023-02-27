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
