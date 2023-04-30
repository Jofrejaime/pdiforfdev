import React, { useEffect, useState } from "react";
import Button from "../Form/Button";
import { UserContext } from "../../UserContext";
import { useForm } from "react-hook-form";
import Select from "react-select";
import styles from "../Login/LoginCreate.module.css";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import api, { API_URL, CREATE_USER, GET_AREAS, GET_COUNTRIES, GET_LANGUAGES, GET_LINKS, GET_TOOLS, UPDATE_USER, filesUrl } from "../services/api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Input from "../Form/Input";
import { filesize } from "filesize";
import axios from "axios";

function UserDifinition() {

  const { userLogin, data } = React.useContext(UserContext);
  const [slide, setSlide] = useState(1);
  const [pais, setIPais] = useState("");
  const usernames =[{label: 'gitlab', username: '' },{label: 'github', username: '' }, {label: 'instagram', username: '' }, {label: 'facebook', username: '' }, {label: 'linkedin', username: '' }]
  const linklabel = useForm('')
  const navigate = useNavigate();
  const [links, setLinks]= useState([])
  const [linksOn, setLinksOn] = useState([])
  const [areas, setAreas] = React.useState([]);
  const [languages, setLanguages] = React.useState([]);
  const [tools, setTools] = React.useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedPais, setSelectedPais] = useState([])
  const { error, loading, request } = useFetch();
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUsername] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] =  useState('')
  const [image, setImage]  =useState(false)
  useEffect(() => {
    async function callAreas() {
      const { url, options } = GET_AREAS();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setAreas(json);
      }
    }
    async function callLanguages() {
      const { url, options } = GET_LANGUAGES();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setLanguages(json);
      }
    }
    async function callTools() {
      const { url, options } = GET_TOOLS();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setTools(json);
      }
    }
    async function callLinks(){
      const {url, options} = GET_LINKS()
      const {response, json} = await request(url, options)
      if(response.ok){
        setLinks(json)
      }
    }
    callLinks()
    callAreas();
    callLanguages();
    callTools();
  }, [request]);
  useEffect(()=>{
    if(data){
       setEmail(data.email)
     setUsername(data.userName)
       setLastname(data.profile.lastName)
       setBio(data.profile.bio)
       setFirstname(data.profile.firstName)
       setImage(data.profile.photo_url && {url: filesUrl+data.profile.photo_url})
    }
  },[data])
  useEffect(() => {
    async function callCountries() {
      const { url, options } = GET_COUNTRIES();
      const { response, json } = await request(url, options);
      if (response.ok) setIPais(json);
    }
    callCountries();
  }, [request]);

  async function onSubmit(date) {
 
    const{url, options} = UPDATE_USER(date, email, usernames, userName, firstName, lastName, bio, selectedAreas, selectedLanguages, selectedPais, selectedTools, data.id)
    const {json, response} = await request(url, options)
    
    if(image) {
      const img = new FormData();
      img.append('file', image)
      api.patch('user/update/img/'+data.id,  img).then(res => console.log(res))}
    if(response.ok)window.location.reload()
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  
  const watchPassword = watch("password");
function Linkar ({target}){
usernames.find(username=>username.label===target.name).username=target.value
}
function Setima({target}){
  setImage(target.files[0])
}
  return (
    <section className={styles.criarConta + " animeLeft"}>
     
      <div className={styles.form}>
      <div>
        <input style={{display: 'none'}} type="file" name="image" id="file" onChange={Setima} accept="image/*"/>
        <br/>
        <label htmlFor="file" className={styles.editImage}>
          {image && <img style={{borderRadius: '50%', width: '100px', height: '100px'}} src={ image.url? image.url:URL.createObjectURL(image)} alt="image"/>}
        </label>
        
      </div>
        <div className={styles.inputGroup}>
          <div className={styles.names}>
            <div className={styles.inputBox}>
              <label>Primeiro nome</label>
              <Input
                type={"text"}
                placeholder="Digite o seu primeiro nome"
              value={firstName}
              onChange={(target)=>setFirstname(target.value)}

              />
             
            </div>
            <div className={styles.inputBox}>
              <label>Último nome</label>
              <Input
                type={"text"}
                placeholder="Digite o seu ultimo nome"
                value={lastName}
                onChange={(target)=>setLastname(target.value)}
              />
            
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Digite o seu devName</label>
            <input
              type={"text"}
              name="devName"
              placeholder="</devName>"
            value={userName}
            onChange={(target)=>setUsername(target.value)}
            />
          
          </div>
          <div className={styles.inputBox}>
            <label>Digite o seu devName</label>
            <input
              type={"text"}
              name="whatsapp"
              placeholder="whatsapp"
            value={whatsapp}
            onChange={(target)=>setWhatsapp(target.value)}
            />
          
          </div>
          <div className={styles.inputBox}>
            <label>Digite o seu email</label>
            <input
              type={"email"}
              placeholder="Email"
            value={email}
            onChange={(target)=>setEmail(target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Palavra passe</label>
            <input
              type="password"
              placeholder="Digite a palavra passe"
              {...register("password", {  minLength: 6 })}
            />
            {errors?.password?.type === "required" && (
              <p className={styles.error}>Palavra passe em falta</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className={styles.error}>Pelo menos 6 caracteres</p>
            )}
          </div>
          <div className={styles.inputBox}>
            <label>Confirmar Palavra passe</label>
            <input
              type="password"
              placeholder="Confirme a palavra passe"
             
              {...register("passwordConfirm", {
              
                validate: (value) => value === watchPassword,
              })}
            />
            {errors?.passwordConfirm?.type === "required" && (
              <p className={styles.error}>Confirmação de passe em falta</p>
            )}
            {errors?.passwordConfirm?.type === "validate" && (
              <p className={styles.error}>Desigualdade na palavra passe</p>
            )}
          </div>
          <div className={styles.inputBox}>
            <label>Difina a tua bio</label>
            <textarea
            rows={3}
              type={"bio"}
              placeholder="Digita sua bio"
            value={bio}
            onChange={({target})=>setBio(target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Digite as suas skills</label>
           
          <Select
            className={styles.select}
            options={languages}
            isMulti
            placeholder={"Linguagens"}
            onChange={(item) => setSelectedLanguages(item)}
          />
          <br/>
          <Select
            className={styles.select}
            options={areas}
            isMulti
            placeholder={"Áreas"}
            onChange={(item) => setSelectedAreas(item)}
          />
          <br/>
          <Select
            className={styles.select}
            placeholder={"Ferramentas"}
            options={tools}
            isMulti
            onChange={(item) => setSelectedTools(item)}
          />
          <br/>
          <label>Seleciona o seu pais</label>
          <Select
            className={styles.select}
            placeholder={"Pais"}
            options={pais}
            onChange={(item) => setSelectedPais(item)}
          />
          <br/>
          </div>
          <div>
            <h3>Links</h3>
            <br/>
            <Select
            className={styles.select}
            placeholder={"Links"}
            options={links}
            isMulti
            onChange={(item) => setLinksOn(item)}
          />
          <br/>
          <div>
            {linksOn.length>0 && <section>
              {linksOn.map(link=><div>
                <label>{link.label}</label>
                
                <Input type='text' name={link.label} placeholder={link.label+" username"}
               
                 onChange={Linkar}/>
              </div>)}
              </section>}
          </div>
          </div>
         
        </div>

        <br />
        {loading ? (
          <Button
            className={styles.criar}
            style={{ width: "100%" }}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Processando...
          </Button>
        ) : (
          <Button
            className={styles.criar}
            style={{ width: "100%" }}
            onClick={() => handleSubmit(onSubmit)()}
          >
           Actualizar
          </Button>
        )}
        <Error error={error} />
      
      </div>
    </section>
  );
}

export default UserDifinition;
