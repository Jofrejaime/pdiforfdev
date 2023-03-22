import React, { useEffect, useState } from "react";
import Button from "../Form/Button";
import { UserContext } from "../../UserContext";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Radio } from "pretty-checkbox-react";
import styles from "./LoginCreate.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPerson } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import api, {
  GET_AREAS,
  GET_COUNTRIES,
  GET_LANGUAGES,
  GET_TOOLS,
} from "../services/api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [slide, setSlide] = useState(1);
  const [pais, setIPais] = useState("");
  const [areas, setAreas] = useState();
  const [languages, setLanguages] = useState();
  const [tools, setTools] = useState();
  const navigate = useNavigate();
  const { error, loading, request } = useFetch();
  // eslint-disable-next-line no-unused-expressions
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
    async function callCountries() {
      const { url, options } = GET_COUNTRIES();
      const { response, json } = await request(url, options);
      if (response.ok)
        setIPais(json);
      
    }
    callCountries();
    callLanguages();
    callAreas();
    callTools();
  }, [request]);

  async function onSubmit(data) {
    const areas = selectedAreas.map((area) => area.label);
    const languages = selectedLanguages.map((language) => language.label);
    const tools = selectedTools.map((tool) => tool.label);

    const datas = new FormData();
    datas.append("file", data.profile[0]);
    datas.append("lastName", data.lastName);
    datas.append("email", data.email);
    datas.append("firstName", data.firstName);
    datas.append("password", data.password);
    datas.append( "areas", areas);
    datas.append("userName", data.devName);
    datas.append( "languages", languages);
    datas.append("tools", tools);
    datas.append(  "paisLabel", pais);
    datas.append("genderName", data.gender);
    datas.append("bio", data.bio)
    api.post('user', datas).then((response)=>{
      if (response) {
      userLogin(data.devName, data.password)
    }
    }).catch(err=>{
      console.Error(err, 'errr')
    })
    
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

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
            style={{ display: `${slide === 1 ? "block" : "none"}` }}
          >
            <div className={styles.formheader}>
              <div className={styles.title}>
                <div>
                  <h1 className="title">Cadastre-se</h1>
                </div>
              </div>
              <div className={styles.login}>
                <Button onClick={() => navigate("/login")}>Login</Button>
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
                    <p className={styles.error}>Primeiro Nome é obrigatorio</p>
                  )}
                </div>
                <div className={styles.inputBox}>
                  <label>Último nome</label>
                  <input
                    type={"text"}
                    placeholder="Digite o seu ultimo nome"
                    {...register("lastName", { required: true })}
                  />
                  {errors?.lastName?.type === "required" && (
                    <p className={styles.error}>Segungo Nome é obrigatorio</p>
                  )}
                </div>
              </div>
              <div className={styles.inputBox}>
                <label>Digite o seu devName</label>
                <input
                  ref={register}
                  type={"text"}
                  name="devName"
                  placeholder="</devName>"
                  {...register("devName", { required: true })}
                />
                {errors?.devName?.type === "required" && (
                  <p className={styles.error}>
                    devName é obrigatorio, ele é um o teu identificador único{" "}
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
                  <p className={styles.error}>Email é obrigatorio</p>
                )}
                {errors?.email?.type === "validate" && (
                  <p className={styles.error}>Este não é um email valido</p>
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
                  <p className={styles.error}>Confirmação de passe em falta</p>
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
                  options={pais}
                  onChange={(item) => setIPais(item.label)}
                />
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
                avançar
              </Button>
            </div>
          </section>
          <section
            className={styles.secondState + " animeLeft"}
            style={{ display: `${slide === 2 ? "block" : "none"}` }}
          >
            <div className={styles.selectProf}>
              <div className={styles.selectGroup}>
                <div className={styles.back}>
                  <Button onClick={() => setSlide(1)}>voltar</Button>
                </div>
                <div className={styles.photo}>
                  <label className={styles.profilePhoto} htmlFor="file">
                    <FontAwesomeIcon icon={faPerson} />
                  </label>
                  <input
                    style={{ display: "none" }}
                    type={"file"}
                    id={"file"}
                    placeholder="Foto de perfil"
                    {...register("profile")}
                  />
                </div>

                <label>Selecione as áreas de actuação</label>
                <Select
                  placeholder="Selecione as áreas"
                  isMulti
                  options={areas}
                  onChange={(item) => setSelectedAreas(item)}
                />
              </div>
              <div className={styles.selectGroup}>
                <label>Selecione as linguagens do teu conhecimento</label>
                <Select
                  placeholder="Selecione as linguagens"
                  isMulti
                  options={languages}
                  onChange={(item) => setSelectedLanguages(item)}
                />
              </div>

              <div className={styles.selectGroup}>
                <label>Selecione os Editores que usas</label>
                <Select
                  placeholder="Selecione os Editores"
                  {...register("editors")}
                  options={tools}
                  isMulti
                  onChange={(item) => setSelectedTools(item)}
                />
              </div>
              
              {
                loading? <Button
                className={styles.criar}
                style={{ width: "100%" }}
                onClick={() => handleSubmit(onSubmit)()}
              >
             Processando...
              </Button>: <Button
                className={styles.criar}
                style={{ width: "100%" }}
                onClick={() => handleSubmit(onSubmit)()}
              >
                Criar Conta
              </Button>
              }
              <Error error={error}/>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default LoginCreate;
