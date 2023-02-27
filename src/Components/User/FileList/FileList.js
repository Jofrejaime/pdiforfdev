import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  Container,
  FileInfo,
  Preview,
  State,
  Image,
  Video,
} from "./FileListStyle";

function FileList({ files, page }) {
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
