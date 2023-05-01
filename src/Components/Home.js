import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Top10 from "./Top10Dev/Top10";
import Feed from "./Feed/Feed";
import { UserContext } from "../UserContext";
import { FIND_PROJECT_FOR_FEED } from "./services/api";
import useFetch from "../Hooks/useFetch";
import { ToastContainer } from "react-toastify";
function Home() {
  const { data: logedUser } = useContext(UserContext);
  const {request} = useFetch()
  const [projects, setPojects] = useState()

  useEffect(() => {
   async function projects (){
      const {url, options} =  FIND_PROJECT_FOR_FEED({follower: logedUser.id})
      const {json, response} = await request(url, options);
      if(response.ok) 
      setPojects(json)
    }
    projects()
    
  }, [ logedUser, request]);

  return (
    <div>
      <Top10 />
      <section className={"container"}>
        <div className={styles.today}>
          <p className={styles.texto}>Para Hoje</p>
        </div>
      </section>
      <section className="container">
       {projects && <Feed projects={projects} />
}      </section>

    </div>
  );
}

export default Home;
