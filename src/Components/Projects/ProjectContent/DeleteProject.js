import React from 'react'
import useFetch from '../../../Hooks/useFetch';
import { DELETE_PROJECT } from '../../services/api';
import styles from './ProjectContent.module.css'
function DeleteProject({id}) {
  const {loading, request} = useFetch()
 async function deleteProject(){
    const confirm = window.confirm('Tem certeza que dezeja deletar?')  
    if(confirm){
    const {url, options} = DELETE_PROJECT(id);
    const {response} = await request(url, options);
   
    if(response.ok) window.location.reload();}
  }
  return (<div>
    {loading? <div className={styles.del} disabled onClick={deleteProject}>Deleting</div>:<div className={styles.del} onClick={deleteProject}>Delete</div>}
  </div>
  )
}

export default DeleteProject