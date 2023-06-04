import React from "react";
import styles from "../Projects.module.css";

import Button from "../../Form/Button";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { DENUNCIAR } from "../../services/api";
function Denunciar({ project }) {
  const request = useFetch();
  const denuncia = useForm("");
  async function denunciar() {
    const { url, options } = DENUNCIAR({ project, denuncia });
    const { response, json } = await request(url, options);
    if (response.ok) window.location.reload();
  }
  return (
    <div className={styles.optionList}>
      <h3>Denunciar</h3>
      <input name="denuncia" id="denuncia" type="text" {...denuncia} />
      <Button onClick={() => denuncia.value !== "" && denunciar()}>
        Denunciar
      </Button>
    </div>
  );
}

export default Denunciar;
