import React, { useState } from "react";
import styles from "./UserCreateAProject.module.css";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import Select from "../Form/Select";
import useMedia from "../../Hooks/useMedia";
import useForm from "../../Hooks/useForm";
import Upload from "./Upload/Upload";
import { Image } from "./UserCreateStyle";
import FileList from "./FileList/FileList";

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
  const mobile = useMedia("(max-width: 670px)");
  const [prev, setPrev] = useState(false);
  const titulo = useForm();
  const desc = useForm();
  const [file, setFiles] = useState(null);

  const callFiles = (files) => {
    setFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
          />
          <Select
            label={"Area de desenvolvimento"}
            options={areas}
            setValue={setArea}
            name={"area"}
          />
          <Select
            label={"Linguagens usadas"}
            options={techs}
            setValue={setTechs}
            name={"linguagens"}
          />
          <Select
            label={"Ferramenta usadas [opcional]"}
            options={ferramentas}
            setValue={setFerramenta}
            name={"ferramenta"}
          />
        </form>

        {(prev || !mobile) && (
          <div
            className={`${styles.preview} ${
              mobile ? styles.previewMobile : ""
            } ${prev ? styles.prev : ""}`}
          >
            <h2 className={"title"}>{titulo.value}</h2>
            <h3 className={""}>{desc.value}</h3>
            {file && <FileList files={file} page={"create"} />}
          </div>
        )}
      </section>
    </>
  );
}

export default UserCreateAProject;
