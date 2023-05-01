import React, { useState } from "react";
import styles from "./UserCreateAProject.module.css";
import reactStringReplace from "react-string-replace";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import useMedia from "../../Hooks/useMedia";
import useForm from "../../Hooks/useForm";
import Upload from "./Upload/Upload";
import Button from "../Form/Button";
import Select from "react-select";
import FileList from "./FileList/FileList";
import { SomeArea } from "../Discover/DiscoverStyles";
import GIT from "../../assets/img/areasImages/github.webp";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import {
  CREATE_PROJECT,
  filesUrl,
  GET_AREAS,
  GET_LANGUAGES,
  GET_PROJECTS,
  GET_TOOLS,
} from "../services/api";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import "boxicons";
import { toast } from "react-toastify";
function UserCreateAProject() {
  const [areas, setAreas] = React.useState([]);
  const [languages, setLanguages] = React.useState([]);
  const [tools, setTools] = React.useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const mobile = useMedia("(max-width: 670px)");
  const [prev, setPrev] = useState(false);
  const titulo = useForm();
  const desc = useForm();
  const repository = useForm();
  const [file, setFiles] = useState(null);
  const { data } = useContext(UserContext);
  const { loading, request } = useFetch();
  const callFiles = (files) => {
    setFiles(files);
  };
  useEffect(() => {
    async function callAreas() {
      const { url, options } = GET_AREAS();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setAreas(json);
      }
    }
    async function callLanguages() {
      const { url, options } = GET_LANGUAGES();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setLanguages(json);
      }
    }
    async function callTools() {
      const { url, options } = GET_TOOLS();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setTools(json);
      }
    }
    callAreas();
    callLanguages();
    callTools();
  }, [request]);
 async function handleSubmit (event) {
    event.preventDefault();
    const areas = selectedAreas.map((area) => area.label);
    const languages = selectedLanguages.map((language) => language.label);
    const tools = selectedTools.map((tool) => tool.label);

    const { url, options } = CREATE_PROJECT({
      userId: data.id,
      title: titulo.value,
      description: desc.value,
      repository: repository.value,
      userName: data.userName,
      tools: tools,
      areas: areas,
      languages: languages,
    });

    const { response, json } = await request(url, options);
    
    if(response.ok) {
   await toast.success('Projecto criado com sucesso')
   window.location.reload() }
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
            userName={data.userName}
            projectTitle={titulo.value}
          />
          <Input
            label={"GitHub [opcional]"}
            placeholder="ex: htttps://www.github.com/username/repository"
            name={"repository"}
            {...repository}
          />

          <Select
            className={styles.select}
            options={languages}
            isMulti
            placeholder={"Linguagens"}
            onChange={(item) => setSelectedLanguages(item)}
          />
          <Select
            className={styles.select}
            options={areas}
            isMulti
            placeholder={"Áreas"}
            onChange={(item) => setSelectedAreas(item)}
          />
          <Select
            className={styles.select}
            placeholder={"Ferramentas"}
            options={tools}
            isMulti
            onChange={(item) => setSelectedTools(item)}
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
                {repository.value && (
                  <a
                    target={"_blank"}
                    href={`http://www.${repository.value}`}
                    rel="noreferrer"
                  >
                    <div>
                      <p className={"gitHubLink"}>
                        {repository.value ? repository.value : ""}
                      </p>
                    </div>{" "}
                  </a>
                )}
              </SomeArea>
            </div>{" "}
            <div className="areas">
              {" "}
              {selectedAreas.map((area) => (
                <SomeArea
                  key={area.value}
                  src={`${filesUrl}/${area.image_url}`}
                  className={"titleProject"}
                >
                  <div className={styles.area}>{area.label}</div>
                </SomeArea>
              ))}
            </div>
            <div className={"habilities"}>
              <div className="languages">
                <h4>Linguagens do Projeto</h4>
                <div className="images">
                  {selectedLanguages.map((language) => (
                    <img
                      src={filesUrl + language.icon_url}
                      alt={language.label}
                    />
                  ))}
                </div>
              </div>
              <div className="tools">
                <h4>Ferramentas do Projecto</h4>
                <div className="images">
                  {selectedTools.map((tool) => (
                    <img src={filesUrl + tool.icon_url} alt={tool.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default UserCreateAProject;
