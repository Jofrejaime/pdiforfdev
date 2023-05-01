import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Button from "../Form/Button";
import Input from "../Form/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import Toast from "../Helper/Toast";
import { toast } from "react-toastify";
function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
     
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles.container + " animeLeft"}>
       
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label={"User"} type={"text"} name="username" {...username} />
        <Input
          label={"Password"}
          type={"password"}
          
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
        <p>
          Ainda não possui conta?{" "}
          <Link className={styles.cadastre_se} to={"/login/createAccount"}>
            cadastra-se
          </Link>{" "}
          na plataforma
        </p>{" "}
      </div>
    </section>
  );
}

export default LoginForm;
