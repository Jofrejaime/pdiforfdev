import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { filesUrl } from "../../services/api";
import {
  Container,
  FileInfo,
  Preview,
  State,
  Image,
  Img,
} from "./FileListStyle";

function FileList({ files, page, findedProject }) {
  const audios  =['.mp3', '.wav']
  const videos = ['.mp4', '.MKV', '.mkv']

  if (page === "project")
    return (
      <Container>
        {files.map((file) => (
       
          <Link
            style={{ justifyContent: "center" }}
            key={file}
            target={"_blank"}
            to={filesUrl + findedProject.files + "/" + file}
          >{videos.some(ext => file.endsWith(ext))? <video  width='100%' controls src={filesUrl + findedProject.files + "/" + file}/>: audios.some(ext => file.endsWith(ext))? <audio width='100%' controls src={filesUrl + findedProject.files + "/" + file}/>: 
          <Img src={filesUrl + findedProject.files + "/" + file} />}
          </Link>
        ))} 
      </Container>
    );
  if (page === "create")
    return (
      <Container>
        {files.map((uploadedFile) => (
          <li style={{ justifyContent: "center" }} key={uploadedFile.id}>
            {uploadedFile.file.type.toString()[0] === "i" ? (
              <Image src={uploadedFile.preview} />
            ) : uploadedFile.file.type.toString()[0] === "v" ? (
              <div>
                <video id="video" controls src={uploadedFile.preview} />{" "}
              </div>
            ) : (
              <audio controls src={uploadedFile.preview} />
            )}{" "}
          </li>
        ))}
      </Container>
    );
  if (!page)
    return (
      <Container>
        {files.map((uploadedFile) => (
          <li key={uploadedFile.id}>
            <FileInfo>
              <Preview src={uploadedFile.preview} />
              <div>
                <strong>{uploadedFile.name}</strong>
                <span>
                  {" "}
                  {uploadedFile.readableSize} <button>Excluir</button>
                </span>
              </div>
            </FileInfo>
            <State>
              {!uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: "#092322" },
                  }}
                  strokeWidth={10}
                  percentage={60}
                />
              )}
              {uploadedFile.uploaded && (
                <FontAwesomeIcon icon={faCircleCheck} color="#78e5d5" />
              )}

              {uploadedFile.error && (
                <FontAwesomeIcon icon={faCircleExclamation} color="#e57878" />
              )}
            </State>
          </li>
        ))}
      </Container>
    );
}

export default FileList;
