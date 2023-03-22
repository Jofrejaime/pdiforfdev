import React from "react";
import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { GET_PROJECTS } from "../services/api";
import Project from "./Project";
import styles from "./Projects.module.css";
export default function Projects({setModalProject}) {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    async function fetchProjects() {
      const { url, options } = GET_PROJECTS({
        language: 'PHP',
        area: 'WEB',
        user: 'devpleno',
        tool: 'vscode',
        limit: 0,
      });
      const{json} = request(url, options);
      console.log(json)
    }
    fetchProjects();
  }, [request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.projects + " animeLeft"}>
        <div className={styles.projectsContent}>
          {data.map((project) => (
            <Project
              key={project.value}
              project={project}
              setModalProject={setModalProject}
            />
          ))}
        </div>
      </div>
    );
}
