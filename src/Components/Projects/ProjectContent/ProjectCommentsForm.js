import React, { useCallback, useContext, useEffect } from "react";
import Button from "../../Form/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { COMMENT_ON_PROJECT, CREATE_NOTIFICATION } from "../../services/api";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import styles from './ProjectContent.module.css'
import { UserContext } from "../../../UserContext";
import createNotifications from "../../Notifications/createNotifications";
function ProjectCommentsForm({ id, userId, setComments, project}) {
  const { request } = useFetch();
  const {socket} = useContext(UserContext)
  const comment = useForm('')

    
  async function handleSubmit(event) {
    event.preventDefault();    
    const { url, options } = COMMENT_ON_PROJECT(id, { comment: comment.value }, userId);
    const { json, response } = await request(url, options);
    console.log(json)
    if(response.ok){
      comment.value =null;
      socket.emit('comment', json)
        if(project.userId !== userId)
      createNotifications({
        issuerId: userId,
        receiverId: project.userId,
        content:"comentou no seu projeto " + project.title,
        request: request
      })
    }
  }
  useEffect(()=>{
    socket.on('comment', (data)=>{
      if(data.projectId === project.id)
      setComments(comments=>[...comments, data])
    })
  },[project.id, setComments, socket])
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
    <textarea 
    placeholder="Comente..."
    className={styles.textarea} name={'comment'} {...comment}/>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faPaperPlane} beatFade />
      </button>
    </form>
  );
}

export default ProjectCommentsForm;
