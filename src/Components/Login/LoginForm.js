import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Button from "../Form/Button";
import Input from "../Form/Input";
import useForm from "../../useForm";
function LoginForm() {
  const username = useForm("email");
  const password = useForm();

  function handleSubmit(event) {event.preventDefault();
    if (username.validate() || password.validate()) {
      
      fetch("http://logando no pdiApi", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label={"User"} type={"text"} name="username" {...username} />
        <Input
          label={"Password"}
          type={"password"}
          name="password"
          {...password}
        />
        <Button>Enter</Button>
      </form>
      <Link to={"/login/createAccount"}>Cadastro</Link>
    </div>
  );
}

export default LoginForm;
