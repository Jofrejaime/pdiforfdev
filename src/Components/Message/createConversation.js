import { CREATE_CONVERSATION } from "../services/api";

async function  createConversation({members, request}){

const {url, options} =  CREATE_CONVERSATION(members);
  await request(url, options) 

}
export {createConversation}