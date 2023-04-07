import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import ProjectCommentsForm from "./ProjectCommentsForm";
import styles from "./ProjectContent.module.css";
import { filesUrl } from "../../services/api";
import formatDate from "../../Helper/formatDate";
import { NavLink } from "react-router-dom";
function ProjectComments({ id, commentsList, project }) {
  const [comments, setComments] = React.useState(() => commentsList);
  const { login, data } = useContext(UserContext);
  const commentsSection = React.useRef(null)
  React.useEffect(()=>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])
  return (
    <div className='container'>
      <div className={styles.comments } >
        <ul className={styles.commentsList} ref={commentsSection}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.comment}>
              <div className={styles.headerComment}>
                <NavLink to={comment.User.userName}>
                <div className={styles.commenter}>
                  <img
                    src={filesUrl + "/" + comment.User.profile.photo_url}
                    alt={comment.User.userName}
                  />
                </div></NavLink>
                <div className={styles.contentHeaderComment}>
                  <div className={styles.userName}>{comment.User.userName}</div>
                  <div className={styles.commentDate}>{formatDate(comment.created_at)}</div>
                </div>
              </div>
              <div className={styles.contentComment}>{comment.content}</div>
            </li>
          ))}
        </ul>
      </div>
      {login && <ProjectCommentsForm project={project} id={id} userId={data.id} setComments={setComments} />}
    </div>
  );
}

export default ProjectComments;
