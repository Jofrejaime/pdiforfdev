import React, { useState } from "react";
import styles from "./UserCreateAProject.module.css";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import Select from "../Form/Select";
import useMedia from "../../Hooks/useMedia";

const areas = [
  {
    ordem: 1,
    nome: "Mobile",
  },
  { ordem: 2, nome: "Web" },
];
const techs = [
  { ordem: 1, nome: "Java" },
  { ordem: 2, nome: "Javascript" },
];
const ferramentas = [
  { ordem: 1, nome: "codePan" },
  { ordem: 2, nome: "VSCODE" },
];
function UserCreateAProject() {
  const [area, setArea] = React.useState([]);
  const [tech, setTechs] = React.useState([]);
  const [ferramenta, setFerramenta] = React.useState([]);
  const [img, setImg] = React.useState({});
  const [vd, setVid] = React.useState({});
  const [aud, setAud] = React.useState({});
  const mobile =  useMedia("(max-width: 670px)");
  const [prev, setPrev] = useState(false);

  function handleImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  
  function handleAud({ target }) {
    setAud({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  
  function handleVid({ target }) {
    setVid({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  }
  
    
  return (<>
      {mobile ? <div className={styles.createHeader}> 
      <button className={styles.btnHeader} onClick={()=>setPrev(false)}>Form</button> <button onClick={()=>setPrev(true)} className={styles.btnHeader}>preview</button></div> : '' }
      
    <section className={`${ mobile? styles.createMobile:''} ${styles.create} animeLeft`}>
      
      <form onSubmit={handleSubmit}>
        <Input label={"Titulo do projeto"} type="text" name={"titulo"}  />
       
        <TextArea label={"Descrição do projecto"} name={"desc"} />
        <Input
          label={"Adicionar Imagem [recomendado]"}
          type={"file"}
          id="img"
          name={"imgage"}
          onChange={handleImg}
        />
        <Input
          label={"Adicionar Video"}
          type="file"
          id="video"
          name="video"
          onChange={handleVid}
        />
        <Input
          label={"Adicionar Audio"}
          type="file"
          id="audio"
          name="audio"
          onChange={handleAud}
        />
        <Input
          label={"GitHub [opcional]"}
          placeholder="ex: htttps://www.github.com/username/repository"
        />
        <Select
          label={"Area de desenvolvimento"}
          options={areas}
          setValue={setArea}
        />
        <Select
          label={"Linguagens usadas"}
          options={techs}
          setValue={setTechs}
        />
        <Select
          label={"Ferramenta usadas [opcional]"}
          options={ferramentas}
          setValue={setFerramenta}
        />
     
      </form>   
      {(img.preview || prev) && (
          <div
            className={`${styles.preview} ${mobile ? styles.previewMobile:''} ${prev ? styles.prev : '' }`}
            style={{ borderImage: `url('${img.preview}')`}}
          > </div>
        )}
    </section>
    </>
  );
}

export default UserCreateAProject;
