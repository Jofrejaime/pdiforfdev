import React, { useState } from "react";
import styles from "./Top10.module.css";
import useFetch from "../../Hooks/useFetch";
import { TOP_10 } from "../services/api";
import ProjectUserCard from "./ProjectUserCard";
function Top10() {
  const [topDev, setTopDev] = useState([]);
  const { request } = useFetch();
  React.useEffect(() => {
    async function top10() {
      const { url, options } = TOP_10();
      const { json, response } = await request(url, options);
      if (response.ok) setTopDev(json);
    }
    top10();
  }, [request]);
  return (
    <section id="home" className={styles.top_10}>
      <div className="container">
        <h1 className={styles.title}>topDev 10</h1>
        <p className={styles.texto}>Melhores Talentos do Mês</p>
        <div className={styles.devs_Top10}>
          {topDev &&
            topDev.map((top10) => (
              <div key={top10.project.id} className={styles.dev_Box}>
                <ProjectUserCard info={top10} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Top10;
