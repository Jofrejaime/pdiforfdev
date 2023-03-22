import React from 'react'
import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import { GET_PROJECTS } from '../services/api'
import ProjectContent from './ProjectContent/ProjectContent'
import styles from './ProjectModal.module.css'
export default function ProjectModal({project}) {
  const {data, error, loading, request} = useFetch()
  useEffect(()=>{
    const {url, options} = GET_PROJECTS({
      language: 'PHP',
      area: 'WEB',
      user: 'devpleno',
      tool: 'vscode',
      limit: 0,
    });
    const {response, json} = request(url, options);
  }, [ request])
  return (
    <div className={styles.projectModal}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <ProjectContent data={data} />}
      </div>
  )
}
