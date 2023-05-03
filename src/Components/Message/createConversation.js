import { CREATE_CONVERSATION } from "../services/api";

async function  createConversation({members, request}){

const {url, options} =  CREATE_CONVERSATION(members);
 const {json, response} =  await request(url, options) 
return {json, response}

}
export {createConversation}