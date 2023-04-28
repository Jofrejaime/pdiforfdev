/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SomeArea } from "../../Discover/DiscoverStyles";
import { DELETE_PROJECT, STAR_ON_PROJECT, filesUrl } from "../../services/api";
import GIT from "../../../assets/img/areasImages/github.webp";
import styles from "./ProjectContent.module.css";
import ProjectComments from "./ProjectComments";
import FileList from "../../User/FileList/FileList";
import stylesH from "../../../Components//NavigationBar/Header.module.css";
import { UserContext } from "../../../UserContext";
import useFetch from "../../../Hooks/useFetch";
import DeleteProject from "./DeleteProject";
import starProject from "./StarOnProject";

export default function ProjectContent({ data, setModalProject }) {
  const { data: logedUser } = useContext(UserContext);
  const { allFiles, findedProject } = data;
  const [star, setStar] = React.useState(() => findedProject.Stars);
  const [starred, setStared] = React.useState('Stars');
  const { request } = useFetch();
  function handleClick(event) {
    //  if (event.target === event.currentTarget) setModalProject(null);
  }

  React.useEffect(() => {
    setStared("Stars");
    if(logedUser){
    const starred = star.find((star) => star.userId === logedUser.id);
    if (starred) setStared("Starred");}
  }, [logedUser, star]);
  return (
    <div className={styles.projectContent} onClick={handleClick}>
      { data && allFiles && findedProject &&  <div>
         <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.about}>
            <h2 className={"titleProject " + styles.m0}>
              {findedProject.title}
            </h2>
            <div className={styles.author}>
              <Link
                className={stylesH.profile}
                to={`../../${findedProject.user.userName}`}
              >
                <picture>
                  <img
                    src={filesUrl + findedProject.user.profile.photo_url}
                    alt={findedProject.user.userName}
                  />
                </picture>
              </Link>
              <p>By {findedProject.user.userName}</p>
            </div>
          </div>
          <div className={styles.status}>
            {logedUser && findedProject.userId === logedUser.id && (
              <DeleteProject id={findedProject.id} />
            )}
            { (
              <div
                className={starred === "Stars" ? styles.stars : styles.starred}
                onClick={() =>
                  starProject({ setStar, request, logedUser, findedProject, starred })
                }
              >
                {starred + " "} {star.length}
              </div>
            )}
            <div className={styles.views}>
              Views {findedProject._count.Views}
            </div>
          </div>
        </div>
      </header>
      <section className={styles.contents}>
        <h4 className={"description"}>{findedProject.description}</h4>
        <div className={styles.fileList}>
          <FileList
            page={"project"}
            files={allFiles}
            findedProject={findedProject}
          />
        </div>
        <div className={styles.more}>
          <div className={styles.git}>
            {findedProject.repository && (
              <SomeArea src={GIT}>
                <a
                  target={"_blank"}
                  href={`http://${findedProject.repository}`}
                  rel="noreferrer"
                >
                  <div>
                    <p className={"gitHubLink"}>{findedProject.repository}</p>
                  </div>{" "}
                </a>
              </SomeArea>
            )}
          </div>{" "}
          <div className="areas">
            {" "}
            {findedProject.AreaOfProject.map((area) => (
              <SomeArea
                key={area.Area.value}
                src={`${filesUrl}/${area.Area.image_url}`}
                className={"titleProject"}
              >
                <div className={styles.area}>{area.Area.label}</div>
              </SomeArea>
            ))}
          </div>
          <div className={"habilities"}>
            <div className="languages">
              <h4>Linguagens do Projeto</h4>
              <div className="images">
                {findedProject.LanguageOfProject.map((language) => (
                  <img
                    key={language.Language.value}
                    src={filesUrl + language.Language.icon_url}
                    alt={language.Language.label}
                  />
                ))}
              </div>
            </div>
            <div className="tools">
              <h4>Ferramentas do Projecto</h4>
              <div className="images">
                {findedProject.ToolOfProject.map((tool) => (
                  <img
                    key={tool.Toll.value}
                    src={filesUrl + tool.Toll.icon_url}
                    alt={tool.Toll.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {findedProject.Comment && (
          <ProjectComments
            id={findedProject.id}
            project={findedProject}
            commentsList={findedProject.Comment}
          />
        )}
      </section>
      </div>}
     
     
   
    </div>
  );
}
