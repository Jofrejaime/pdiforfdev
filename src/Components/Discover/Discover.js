import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Projects from "../Projects/Projects";
import styles from "./Discover.module.css";
import { SomeArea } from "./DiscoverStyles";
import Web from '../../assets/img/areasImages/web.jpg'
import Cloud from '../../assets/img/areasImages/cloud.png'
import Desktop from '../../assets/img/areasImages/desktop.jpg'
import Mobile from '../../assets/img/areasImages/mobile.png'
import Devops from '../../assets/img/areasImages/devops.jpg'
import Jogos from '../../assets/img/areasImages/jogos.jpeg'
function Descover() {
  const search = useForm("");
  const linguagens = useForm("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="container">
      <div className={styles.preChose}>
        <SomeArea src={Web} className={" titleProject"}>
          <div className={styles.area}>Web</div>
        </SomeArea>
        <SomeArea src={Cloud} className={" titleProject"}>
          <div className={styles.area }>Cloud Computing</div>
        </SomeArea>
        <SomeArea src={Mobile} className={" titleProject"}>
          <div className={styles.area}>Mobile</div>
        </SomeArea>
        <SomeArea src={Desktop} className={" titleProject"}>
          {" "}
          <div className={styles.area }>Desktop</div>
        </SomeArea>
        <SomeArea src={Devops} className={" titleProject"}>
          <div className={styles.area}>DevOps</div>
        </SomeArea>
        <SomeArea src={Jogos} className={" titleProject"}>
          <div className={styles.area}>Jogos</div>
        </SomeArea>
      </div>
      {/*<img src={process.env.PUBLIC_URL + '/pdilogo.jpg'}/>*/}
      <div className={styles.discoverSubtittle}>
        <h3>Pesquise por:</h3>
      </div>

      <form className={styles.discoverForm} onSubmit={handleSubmit}>
        <div>
          <Input
            placeholder={"Devs, Tecnologias, Areas de desenvolvimento"}
            className={styles.discoverForm_Input}
            name={"search"}
            {...search}
            error={""}
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
            name="linguagens"
            options={[
              { nome: "Java", ordem: 1 },
              { nome: "C#", ordem: 3 },
              { nome: "C", ordem: 2 },
              { nome: "C++", ordem: 5 },
              { nome: ".NET", ordem: 4 },
              { nome: "Object C", ordem: 6 },
            ]}
            {...linguagens}
            placeholder="Linguagens"
          />
        </div>
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
    </section>
  );
}

export default Descover;
