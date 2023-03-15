import React, { useState } from "react";
import styles from "./UserCreateAProject.module.css";
import reactStringReplace from "react-string-replace";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import Select from "../Form/Select";
import useMedia from "../../Hooks/useMedia";
import useForm from "../../Hooks/useForm";
import Upload from "./Upload/Upload";
import Button from "../Form/Button";
import FileList from "./FileList/FileList";
import Multiselect from "../Form/Multiselect";
import { SomeArea } from "../Discover/DiscoverStyles";
import GIT from "../../assets/img/areasImages/github.webp";
import MultiselectLinguagens from "../Form/MultiSelectLinguagens";
const areas = [
  {
    value: 1,
    label: "Mobile",
  },
  { value: 2, label: "Web" },
  { value: 3, label: "Cloud Computing" },
];
const techs = [
  { value: 1, label: "Java", url: "./react.png" },
  { value: 2, label: "Javascript", url: "./react.png" },
];

const ferramentas = [
  { ordem: 1, nome: "notebook" },
  { ordem: 2, nome: "vscode" },
];
function UserCreateAProject() {
  const [area, setArea] = React.useState([]);
  const [tech, setTechs] = React.useState([]);
  const [ferramenta, setFerramenta] = React.useState([]);
  const mobile = useMedia("(max-width: 670px)");
  const [prev, setPrev] = useState(false);
  const titulo = useForm();
  const desc = useForm();
  const github = useForm();
  const [file, setFiles] = useState(null);


  const callFiles = (files) => {
    setFiles(files);
    console.log(files.File)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  fetch('http://localhost:3001/user', 
  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
       body: JSON.stringify({
        email: titulo.value,
        userName: desc.value,
        
      })
    })
      .then((response) =>{
        console.log(response)
        return response.json()
      })
      .then((json)=>{
        console.log(json)
        return json
      })
   
  };
  return (
    <>
      {mobile ? (
        <div className={styles.createHeader}>
          <button className={styles.btnHeader} onClick={() => setPrev(false)}>
            Form
          </button>{" "}
          <button onClick={() => setPrev(true)} className={styles.btnHeader}>
            preview
          </button>
        </div>
      ) : (
        ""
      )}

      <section
        className={`${mobile ? styles.createMobile : ""} ${
          styles.create
        } animeLeft`}
      >
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Descreva o seu projeto"
            label={"Titulo do projeto"}
            type="text"
            name={"titulo"}
            {...titulo}
          />

          <TextArea
            label={"Descrição do projecto"}
            name={"desc"}
            placeholder="Descreva o teu projeto"
            {...desc}
          />

          <Upload
            label={"Adiciona Aquivos [imagem obrigatorio]"}
            callFiles={callFiles}
          />
          <Input
            label={"GitHub [opcional]"}
            placeholder="ex: htttps://www.github.com/username/repository"
            name={"gitHub"}
            {...github}
          />

          <MultiselectLinguagens
            buscarLinguagens={()=>{}}
            label={"Linguagens usadas"}
            options={techs}
            placeholder={"Linguagens"}
          />
          <Multiselect
            buscarAreas={()=>{}}
            options={areas}
            placeholder={"Áreas"}
            label="Areas de desenvolvimento"
          />
          <Select
            label={"Ferramenta usadas [opcional]"}
            options={ferramentas}
            setValue={setFerramenta}
            name={"Ferramentas"}
          />
          <Button>Criar</Button>
        </form>

        {(prev || !mobile) && (
          <div
            className={`${styles.preview} ${
              mobile ? styles.previewMobile : ""
            } ${prev ? styles.prev : ""}`}
          >
            <h2 className={"titleProject"}>{titulo.value}</h2>
            <h4 className={"description"}>{desc.value}</h4>
            {file && (
              <div className={styles.fileList}>
                <FileList files={file} page={"create"} />
              </div>
            )}
            <div className={styles.git}>
              <SomeArea src={GIT}>
                {github.value && (
                  <a target={"_blank"} href={`http://www.${github.value}`}>
                    <div>
                      <p className={"gitHubLink"}>
                        {github.value ? github.value : ""}
                      </p>
                    </div>{" "}
                  </a>
                )}
              </SomeArea>
            </div>
            <p className="areas">{tech}</p>
            <p className={"areas"}>{area}</p>
            <p className={"areas"}>
              <p>{ferramenta}</p>
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default UserCreateAProject;
