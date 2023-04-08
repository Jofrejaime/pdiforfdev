import { CREATE_CONVERSATION } from "../services/api";

async function  createConversation({members, request}){
  console.log(members, request)
const {url, options} =  CREATE_CONVERSATION(members);
const {json, response} = await request(url, options) 
console.log(json, response)
}
export {createConversation}