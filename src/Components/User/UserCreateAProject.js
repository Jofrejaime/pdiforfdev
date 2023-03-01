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
import { uniqueId } from "lodash";
const areas = [
  {
    ordem: 1,
    nome: "Mobile",
  },
  { ordem: 2, nome: "Web" },
  { ordem: 3, nome: "Cloud Computing" },
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
  const github = useForm();
  const selectArea = useForm();
  const [file, setFiles] = useState(null);

  React.useEffect(() => {
    let id = uniqueId();
    setArea([
      ...area,
      <p id={id}>
        {selectArea.value} <span onDoubleClick={removeItemArea}>x</span>
      </p>,
    ]);
  }, [selectArea.value]);
  function removeItemArea({ target }) {
  let id = target.parentNode.id
   setArea([...area, area.splice(id - 2, 1)]);
  }
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
            name={"gitHub"}
            {...github}
          />
          <Select
            label={"Area de desenvolvimento"}
            options={areas}
            name={"area"}
            {...selectArea}
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
          <Button>Criar</Button>
        </form>

        {(prev || !mobile) && (
          <div
            className={`${styles.preview} ${
              mobile ? styles.previewMobile : ""
            } ${prev ? styles.prev : ""}`}
          >
            <h2 className={"titleProject"}>{titulo.value}</h2>
            <p className={"description"}>{desc.value}</p>
            {file && <FileList files={file} page={"create"} />}

            <p className={"gitHubLink"}>{github.value}</p>
            <p className={'areas'}>
              {area}
            </p>
            <p>{tech}</p>
            <p>{ferramenta}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default UserCreateAProject;
