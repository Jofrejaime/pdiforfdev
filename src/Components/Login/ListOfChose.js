import React from 'react'
import styles from './LoginCreate.module.css'
function ListOfChose({list}) {
 
  return (
   <ul className={styles.paisesSelecionado}>
    {list.map((chose)=>{
      <li key={chose.nome}>{chose.nome}</li>
    })}
   </ul>
  )
}

export default ListOfChose