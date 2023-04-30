import React from "react";
import styles from "./LoginPassLost.module.css";
import Input from "../Form/Input";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Logo from '../../assets/img/Logo.png'
function LoginPassLost() {
  const email = useForm("email");
  return (
    <div className={styles.lost}>
      <div className={styles.back}><img src={Logo} alt="logo"/></div>
      <section className={styles.container}>
        <h1 className="title">Perdeu a senha?</h1>
        <form>
          <Input name={"email"} label={"email"} type={"text"} {...email} />
          <Button>Enviar email</Button>
        </form>
      </section>
    </div>
  );
}

export default LoginPassLost;
