import { faFileCircleCheck, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Projects from "../Projects/Projects";
import { filesUrl, GET_AREAS, GET_LANGUAGES, GET_USERS } from "../services/api";
import styles from "./Discover.module.css";
import { SomeArea } from "./DiscoverStyles";
import Feed from "../Feed/Feed";
import CardUser from "./CardUser";
function Descover() {
  const search = useForm("");
  const linguagens = useForm("");
  const [areas, setAreas] = useState([]);
  const [languages, setLanguages] = useState([]) 
  const {error, loading, request} = useFetch()
  const [getUsers, setUsers] = useState([])
  const {data} = useContext(UserContext)
  const [onClickArea, setOnClickArea] = useState('')
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
      }
    }
    if(search.value === ''){
    callUsers()}

    callLanguages()
    callAreas()
  },[request, search]) 
    function handleSubmit(event) {
    event.preventDefault();
  }
  useEffect(()=>{
    if(setUsers.length>0 && search.value !== '')
    setUsers(getUsers.filter(user=>user.userName.startsWith(search.value)))
  },[getUsers, search])
  return (
    <section id="discover" className="container">
      <div className={styles.preChose}>
        {
        areas && areas.map(area => 
        <SomeArea key={area.value} src={`${filesUrl}/${area.image_url}`} className={" titleProject"} onClick={({target})=>setOnClickArea(target.innerText)}>
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
    <div style={data && data.id === user.id? {display: 'none'}: {display: 'flex'}} key={user.id} className={styles.user}>
    <CardUser className={styles.user} user={user}/>
  </div>
      )}
      </div>
      </div> 
      <div className={styles.projects}>
        <Feed area={onClickArea && onClickArea} language={linguagens.value && linguagens.value} label={search.value && search.value}/>
      </div>
    </section>
  );
}
 
export default Descover;
