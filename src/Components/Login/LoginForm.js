import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Button from "../Form/Button";
import Input from "../Form/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import stylesBtn from "../../Components/Form/Button.module.css";
function LoginForm() {
  const username = useForm("email");
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label={"User"} type={"text"} name="username" {...username} />
        <Input
          label={"Password"}
          type={"password"}
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/lostPass">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? cadastra-se na plataforma</p>{" "}
        <Link className={stylesBtn.button} to={"/login/createAccount"}>
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
