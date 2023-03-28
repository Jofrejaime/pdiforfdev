import React from 'react'
import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import { GET_PROJECT } from '../services/api'
import ProjectContent from './ProjectContent/ProjectContent'
import styles from './ProjectModal.module.css'
export default function ProjectModal({project, setModalProject}) {
  const {data, error, loading, request} = useFetch()
  useEffect(()=>{
    const {url, options} = GET_PROJECT(project.project.id);
       request(url, options);
  }, [project.project.id, request])

  return (
    <div className={styles.projectModal}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <ProjectContent  data={data} setModalProject={setModalProject}/>}
      </div>
  )
}
