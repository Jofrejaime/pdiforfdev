import useFetch from "../../Hooks/useFetch";
import { CREATE_NOTIFICATION } from "../services/api";

import React from 'react'

async function CreateNotification({issuerId, receiverId, content, }) {
  const {request} = useFetch()
  const { url, options } = CREATE_NOTIFICATION({
    issuerId,
    receiverId,
    content,
  });
  const { json, response } = await request(url, options);
}

export default CreateNotification