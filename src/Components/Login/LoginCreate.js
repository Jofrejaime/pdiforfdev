import React, { useEffect, useState } from "react";
import Button from "../Form/Button";
import { UserContext } from "../../UserContext";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Checkbox, Radio } from "pretty-checkbox-react";
import styles from "./LoginCreate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
const [slide, setSlide] = useState(1);
  function onSubmit(data) {
    console.log(data);
  }

  const { register, handleSubmit, formState: {errors} } = useForm();
  console.log(errors)
  return (
    <section className={styles.criarConta + " animeLeft"} >
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.circleHeader}>
            <span style={slide===1? {backgroundColor: '#0044cc', color: '#fff'}:{}}>1</span>
            <span style={slide===2? {backgroundColor: '#0044cc', color: '#fff'}:{}}>2</span>
          </div>
          <section className={styles.firstState} 
          style={{display: `${slide === 1? 'block':''}`}}>
            <div className={styles.formheader}>
              <div className={styles.title}>
                <div>
                  <h1 className="title">/Cadastre-se</h1>
                </div>
              </div>
              <div className={styles.login}>
               <Link to={'/'}><Button>Login</Button></Link> 
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.names}><div className={styles.inputBox}>
                <label>Primeiro nome</label>
                <input
                  type={"text"}
                  placeholder="Digite o seu primeiro nome"
                  {...register("firstName", {required: true})}
                />
              </div>
              <div className={styles.inputBox}>
                <label>Último nome</label>
                <input
                  type={"text"}
                  placeholder="Digite o seu ultimo nome"
                  {...register("lastName", {required: true})}
                />
              </div>
                </div>
              <div className={styles.inputBox}>
                <label>Digite o seu devName</label>
                <input type={"text"} placeholder="</devName>" 
                  {...register("devName", {required: true})}
                />
              </div>
              <div className={styles.inputBox}>
                <label>Digite o seu email</label>
                <input
                  type={"email"}
                  placeholder="Email"
                  {...register("email", {required: true})}
                />
              </div>
              <div className={styles.inputBox}>
                <label>Palavra passe</label>
                <input
                  type="password"
                  placeholder="Digite a palavra passe"
                  {...register("password", {required: true})}
                />
              </div>
              <div className={styles.inputBox}>
                <label>Confirmar Palavra passe</label>
                <input
                  type="password"
                  placeholder="Confirme a palavra passe"
                  {...register("passwordConfirm", {required: true})}
                />
              </div>

              <div className={styles.inputBox}>
                <label>Selecione Seu Pais</label>
                <Select
                  className={styles.select}
                  placeholder="Selecione seu pais"
                  {...register("country")}
                />
              </div>
              <div className={styles.inputBox}>
                <label></label>
              </div>
            </div>
            <div className={styles.genderGroup}>
              <label> Escola seu Genero</label>
                <Radio  className={styles.genderInput} {...register("genre")} value={"Male"} checked>
                  Masculino
                </Radio>
                <Radio className={styles.genderInput} {...register("genre")} value={"Famale"}>
                  Femenino
                </Radio>
            
            </div>
         
            <div className={styles.next}>
              <Button onClick={() => setSlide(2)} >
              /avançar/profissão
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
            </div>
            
          </section>
          <section className={styles.secondState + " animeLeft"} style={{display: `${slide===2? 'block' :''}`}}>
            <div className={styles.selectProf}>
              <div className={styles.selectGroup}>
                <div className={styles.back} >
                  <Button onClick={()=>setSlide(1)}>voltar</Button>
                </div>
                <input type={'file'} placeholder='Foto de perfil' {...register('profile')}/>
                <label>Selecione as áreas de actuação</label>
                <Select
                  placeholder="Selecione as áreas"
                  isMulti
                  {...register("areas")}
                />
              </div>
              <div className={styles.selectGroup}>
                <label>Selecione as linguagens do teu conhecimento</label>
                <Select
                  placeholder="Selecione as linguagens"
                  isMulti
                  {...register("languages")}
                />
              </div>
            </div>
            <div className={styles.selectGroup}>
              <label>Selecione os Editores que usas</label>
              <Select
                placeholder="Selecione os Editores"
                {...register("editors")}
                isMulti
              />
            </div>
            <Button className={styles.criar} style={{width: '100%'}} onClick={() => handleSubmit(onSubmit)()}>
              Criar Conta
            </Button>
          </section>
        </div>
      </div>
    </section>
  );
}

export default LoginCreate;
