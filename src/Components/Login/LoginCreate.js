import React from 'react'
import Button from '../Form/Button'
import styles from "./LoginCreate.module.css"

function handleSubmit(){

}
function LoginCreate() {
  return (
   <section className='animeLeft'>
    <h1 className='title'>Cadastre-se</h1>
    <form onSubmit={handleSubmit}>
    <Button>Cadastrar</Button>
    </form>
   </section>
  )
}

export default LoginCreate