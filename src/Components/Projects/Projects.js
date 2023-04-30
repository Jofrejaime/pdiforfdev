import React from "react";
import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { GET_PROJECTS, POST_VIEWS } from "../services/api";
import Project from "./Project";
import styles from "./Projects.module.css";
import { UserContext } from "../../UserContext";
import { useLocation, useParams } from "react-router-dom";
export default function Projects({setModalProject, area, language, label, projects}) {
  const { loading, error, request } = useFetch();
  const [data, setData] = React.useState([])
  
  const {data: logedUser} = React.useContext(UserContext)
  const location = useParams()
  
  useEffect(() => {
  if(!projects){
    async function fetchProjects() {let user = location.username;
  if(user==='discover' || user==='pdiforfdev') user=''
      const { url, options } = GET_PROJECTS({
        language: language, 
        area: area,
        userName: user,
        label: label,
      
      });
      const{json, response} = await request(url, options);
      if(response.ok)
      setData(json)
    }
    fetchProjects(); }
    else setData(projects)
  }, [area, label, language, location, projects, request]);
 
  async function setView(target){
    const {url, options} = POST_VIEWS({idProject: target.project.id, user: logedUser.userName})
  await request(url, options);
  }

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.projects + " animeLeft"}>
        <div className={styles.projectsContent}>
          {data.length>0 && data.map((project) => (
            <Project
           setView={setView}
              key={project.project.id}
              project={project}
              setModalProject={setModalProject}
            />
          ))}
        </div>
      </div>
    );
}
