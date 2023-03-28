import React from "react";
import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { GET_PROJECTS, POST_VIEWS } from "../services/api";
import Project from "./Project";
import styles from "./Projects.module.css";
import { UserContext } from "../../UserContext";
export default function Projects({setModalProject}) {
  const { loading, error, request } = useFetch();
  const [data, setData] = React.useState([])
  const {data: logedUser} = React.useContext(UserContext)
  useEffect(() => {
    async function fetchProjects() {
      const { url, options } = GET_PROJECTS({
        language: 'PHP',
        area: 'WEB',
        user: 'devpleno',
        tool: 'vscode',
        limit: 0,
      });
      const{json} = await request(url, options);
      setData(json)
    }
    fetchProjects();
  }, [request]);
 
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
          {data.map((project) => (
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
