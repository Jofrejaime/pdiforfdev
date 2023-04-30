import React from 'react'
import styles from './LoginPassReset.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import Logo from '../../assets/img/Logo.png'
function LoginPassReset() {
  const pass  = useForm('pass')
  return (
    <div className={styles.lost}>
      <div className={styles.back}><img src={Logo} alt="logo"/></div>
      <section className={styles.container}>
        <h1 className="title">Resetar a Senha</h1>
        <form>
          <Input name={"pass"} label={"nova palavra passe"} type={"text"} {...pass} />
          <Button>Actualizar</Button>
        </form>
      </section>
    </div>
  )
}

export default LoginPassReset