import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Projects from "../Projects/Projects";
import styles from "./Discover.module.css";
function Descover() {
  const search = useForm('');
  const linguagens = useForm('')
  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <section className="container">
      <div className={styles.preChose}>
        <div className="titleProject">Web</div>
        <div className="titleProject">Cloud Computing</div>
        <div className="titleProject">Mobile</div>
        <div className="titleProject">Desktop</div>
        <div className="titleProject">DevOpps</div>
      </div>
      <div className={styles.discoverSubtittle}>
        <h3 >Pesquise por:</h3>
      </div>
      
      <form className={styles.discoverForm} onSubmit={handleSubmit}>
        <div>
          <Input
            placeholder={"Tecnologias, Ferramentas, Areas de desenvolvimento"}
            className={styles.discoverForm_Input}
            name={'search'}
            {...search}
            error={''}
          />
          <Button className={styles.discoverForm_Button}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </form>

      <div className={styles.filters}>
        <div className={styles.filtersSection}>
        <Select 
        className={styles.selectLanguages}
        name='linguagens'
        options={[{nome:'Java', ordem: 1}, {nome: 'C#', ordem: 3}, {nome:'C', ordem: 2}, {nome:'C++', ordem: 5}, {nome: '.NET', ordem: 4}, {nome: 'Object C', ordem: 6}]}
        {...linguagens}
        placeholder='Linguagens'
        />
        </div>
      </div>
      <div className={styles.projects}>
        <Projects/>
      </div>
    </section>
  );
}

export default Descover;
