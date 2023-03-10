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
import validator from "validator";
import { set } from "lodash";
import api from "../services/api";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const [slide, setSlide] = useState(1);
  const [pais, setIPais] = useState("");
  const [areas, setAreas] = useState();
  const [languages, setLanguages] = useState();
  const [tools, setTools]= useState();
  console.log(pais)
  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    fetch("http://localhost:3001/area")
      .then((res) => res.json())
      .then((json) => setAreas(json));

      fetch("http://localhost:3001/tool")
      .then((res) => res.json())
      .then((json) => setTools(json));

    fetch("http://localhost:3001/language")
      .then((res) => res.json())
      .then((json) => setLanguages(json));
  }, []);
  
  function onSubmit(data) {
    console.log(data, ' ', data.gender)
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
       body: JSON.stringify({
        email: data.email,
        userName: data.devName,
        firstName: data.firstName,
        lastName: data.lastName,
        photo_url: data.profile[0],
        genderName: data.gender,
        password: data.password,
        paisLabel: 'Angola',
        areas: ['Desktop', 'Web', 'Jogos']

            })
    }).then((response) =>{
      console.log(response)
      return response.json()
    })
    .then((json)=>{
      console.log(json)
      return json
    })
   
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  console.log({ ...errors });
  const watchPassword = watch("password");
  return (
    <section className={styles.criarConta + " animeLeft"}>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.circleHeader}>
            <span
              style={
                slide === 1 ? { backgroundColor: "#0044cc", color: "#fff" } : {}
              }
            >
              1
            </span>
            <span
              style={
                slide === 2 ? { backgroundColor: "#0044cc", color: "#fff" } : {}
              }
            >
              2
            </span>
          </div>
          <section
            className={styles.firstState}
            style={{ display: `${slide === 1 ? "block" : ""}` }}
          >
            <div className={styles.formheader}>
              <div className={styles.title}>
                <div>
                  <h1 className="title">/Cadastre-se</h1>
                </div>
              </div>
              <div className={styles.login}>
                <Link to={"/"}>
                  <Button>Login</Button>
                </Link>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.names}>
                <div className={styles.inputBox}>
                  <label>Primeiro nome</label>
                  <input
                    type={"text"}
                    placeholder="Digite o seu primeiro nome"
                    {...register("firstName", { required: true })}
                  />
                  {errors?.firstName?.type === "required" && (
                    <p className={styles.error}>Primeiro Nome ?? obrigatorio</p>
                  )}
                </div>
                <div className={styles.inputBox}>
                  <label>??ltimo nome</label>
                  <input
                    type={"text"}
                    placeholder="Digite o seu ultimo nome"
                    {...register("lastName", { required: true })}
                  />
                  {errors?.lastName?.type === "required" && (
                    <p className={styles.error}>Segungo Nome ?? obrigatorio</p>
                  )}
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Digite o seu devName</label>
                <input
                  type={"text"}
                  placeholder="</devName>"
                  {...register("devName", { required: true })}
                />
                {errors?.devName?.type === "required" && (
                  <p className={styles.error}>
                    devName ?? obrigatorio, ele ?? um o teu identificador ??nico{" "}
                  </p>
                )}
              </div>
              <div className={styles.inputBox}>
                <label>Digite o seu email</label>
                <input
                  type={"email"}
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    validate: (value) => validator.isEmail(value),
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className={styles.error}>Email ?? obrigatorio</p>
                )}
                {errors?.email?.type === "validate" && (
                  <p className={styles.error}>Este n??o ?? um email valido</p>
                )}
              </div>
              <div className={styles.inputBox}>
                <label>Palavra passe</label>
                <input
                  type="password"
                  placeholder="Digite a palavra passe"
                  {...register("password", { required: true, minLength: 6 })}
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
                    required: true,
                    validate: (value) => value === watchPassword,
                  })}
                />
                {errors?.passwordConfirm?.type === "required" && (
                  <p className={styles.error}>Confirma????o de passe em falta</p>
                )}
                {errors?.passwordConfirm?.type === "validate" && (
                  <p className={styles.error}>Desigualdade na palavra passe</p>
                )}
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
              <Radio
                className={styles.genderInput}
                {...register("gender")}
                value={"Masculino"}
                checked
              >
                Masculino
              </Radio>
              <Radio
                className={styles.genderInput}
                {...register("gender")}
                value={"Femenino"}
              >
                Femenino
              </Radio>
            </div>

            <div className={styles.next}>
              <Button onClick={() => setSlide(2)}>
                /avan??ar/profiss??o
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </section>
          <section
            className={styles.secondState + " animeLeft"}
            style={{ display: `${slide === 2 ? "block" : ""}` }}
          >
            <div className={styles.selectProf}>
              <div className={styles.selectGroup}>
                <div className={styles.back}>
                  <Button onClick={() => setSlide(1)}>voltar</Button>
                </div>
                <input type={"file"} placeholder="Foto de perfil" {...register("profile")}
                />
                <label>Selecione as ??reas de actua????o</label>
                <Select
                  placeholder="Selecione as ??reas"
                  isMulti
                  options={areas}
                />
              </div>
              <div className={styles.selectGroup}>
                <label>Selecione as linguagens do teu conhecimento</label>
                <Select
                  placeholder="Selecione as linguagens"
                  isMulti
                  options={languages}
                  {...register("languages")}
                />
              </div>
            
            <div className={styles.selectGroup}>
              <label>Selecione os Editores que usas</label>
              <Select
                placeholder="Selecione os Editores"
                {...register("editors")}
                options={tools}
                isMulti
              />
            </div>
            <Button
              className={styles.criar}
              style={{ width: "100%" }}
              onClick={() => handleSubmit(onSubmit)()}
            >
              Criar Conta
            </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default LoginCreate;
