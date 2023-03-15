import { faFileCircleCheck, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Projects from "../Projects/Projects";
import { filesUrl, GET_AREAS, GET_LANGUAGES, GET_USERS } from "../services/api";
import styles from "./Discover.module.css";
import { SomeArea } from "./DiscoverStyles";
function Descover() {
  const search = useForm("");
  const linguagens = useForm("");
  const [areas, setAreas] = useState([]);
  const [languages, setLanguages] = useState([]) 
  const {error, loading, request} = useFetch()
  const [getUsers, setUsers] = useState([])
   useEffect(()=>{
  async  function callAreas(){
      const {url, options} = GET_AREAS();
      const {response, json} = await request(url, options);
      if(response.ok){
      
        setAreas(json)
      }
    }
    async function callLanguages(){
      const {url, options} = GET_LANGUAGES();
      const {response, json} = await request(url, options);
      if(response.ok){
        setLanguages(json)
      }
    }
    async function callUsers(){
      const {url, options} = GET_USERS();
      const {response, json} = await request(url, options);
      if(response.ok){
        setUsers(json)
        console.log(json)
      }
    }
    callUsers()
    callLanguages()
    callAreas()
  },[]) 
  
    function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="container">
      <div className={styles.preChose}>
        {
        areas && areas.map(area => <  SomeArea src={`${filesUrl}/${area.image_url}`} className={" titleProject"}>
        <div className={styles.area}>{area.label}</div>
      </SomeArea>)
        }
      </div>
      {/*<img src={process.env.PUBLIC_URL + '/pdilogo.jpg'}/>*/}
      <div className={styles.discoverSubtittle}>
        <h3>Pesquise por:</h3>
      </div>

      <form className={styles.discoverForm} onSubmit={handleSubmit}>
        <div>
          <Input
            placeholder={"Devs, Tecnologias, Areas de desenvolvimento"}
            className={styles.discoverForm_Input}
            name={"search"}
            {...search}
            error={""}
          />
          <Button className={styles.discoverForm_Button}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </form>

      <div className={styles.filters}>
        <div className={styles.filtersSection}>
          <Select
            className={styles.selectLanguages}
            name="linguagens"
            options={languages}
            {...linguagens}
            placeholder="Linguagens"
          />
        </div>
      </div>
    <div className={styles.users}>
      <div className={styles.userContainer}>
         {getUsers && getUsers.map((user) => 
    <div className={styles.user}>
      <div className={styles.userContent}>
    <div className={styles.photo}>
      <picture>
        <img src={`${filesUrl}/users/${user.profile.photo_url}`} alt={user.userName}/>
      </picture>
    </div>
    <div className={styles.info}><div className={styles.userInfo}>
      <div className={styles.username}>{`</${user.userName}>`}</div>
      <div className={styles.stars}><FontAwesomeIcon icon={faStar}/> {user.Star.length}</div>
      <div className={styles.projects}>
        <FontAwesomeIcon icon={faFileCircleCheck}/> {user.projects.length}</div>
    </div></div>
    
    <div className={styles.seguir}>
      <span>seguir</span>
    </div>
    </div>
  </div>
      )}
      </div>
      </div> 
      <div className={styles.projects}>
        <Projects />
      </div>
    </section>
  );
}

export default Descover;
