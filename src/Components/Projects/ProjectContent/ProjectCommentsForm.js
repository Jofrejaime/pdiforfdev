import React, { useCallback } from "react";
import Button from "../../Form/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { COMMENT_ON_PROJECT, CREATE_NOTIFICATION } from "../../services/api";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import styles from './ProjectContent.module.css'
function ProjectCommentsForm({ id, userId, setComments, project}) {
  const { request } = useFetch();
  const comment = useForm('')
  async function createNotification() {
    const { url, options } = CREATE_NOTIFICATION({
    
      issuerId: userId,
      receiverId: project.userId,
      content:"comentou no seu projeto " + project.title,
    });
    const { json, response } = await request(url, options);
  }
  async function handleSubmit(event) {
    event.preventDefault();    
    const { url, options } = COMMENT_ON_PROJECT(id, { comment: comment.value }, userId);
    const { json, response } = await request(url, options);
    console.log(json)
    if(response.ok){
      comment.value =null;
      setComments((comments)=>[...comments, json])
      createNotification()
    }
  }
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
