import React, { useEffect, useState } from "react";
import Button from "../Form/Button";
import { UserContext } from "../../UserContext";
import { useForm } from "react-hook-form";
import Select from "react-select";
import styles from "./LoginCreate.module.css";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import api, { CREATE_USER, GET_COUNTRIES } from "../services/api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { toast } from "react-toastify";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const [slide, setSlide] = useState(1);
  const [pais, setIPais] = useState("");
  const navigate = useNavigate();
  const { error, loading, request } = useFetch();
  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    async function callCountries() {
      const { url, options } = GET_COUNTRIES();
      const { response, json } = await request(url, options);
      if (response.ok) setIPais(json);
    }
    callCountries();
  }, [request]);

  async function onSubmit(data) {
    const { url, options } = CREATE_USER(data);
    const { json, response } = await request(url, options);
    if(json.message === 'User Already Exists!')
    toast.info('Este usuario já existe')
    if (response.ok){ 
      userLogin(data.devName, data.password);
      toast.success('Bem Vindo ao pdifordev')
    }
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
      <div className={styles.form}>
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
              {...register("userName", { required: true })}
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
            Criar Conta
          </Button>
        )}
        <Error error={error} />
      </div>
    </section>
  );
}

export default LoginCreate;
