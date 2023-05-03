import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
import { FIND_USER, FOLLOW_USER, filesUrl } from "../../services/api";
import styles from "./Profile.module.css";
import "boxicons";
import Feed from "../../Feed/Feed";
import useMedia from "../../../Hooks/useMedia";
import Skills from "./Skills";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Loading from "../../Helper/Loading";
import Error from "../../Helper/Error";
import FollowUser from "./FollowUser";
import { createConversation } from "../../Message/createConversation";
function Profile() {
  const { data: logedUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { data, request, loading, error } = useFetch();
  const [projects, setProjects] = React.useState(true);
  const [followers, setFollowers] = useState([]);
  const [languages, setLanguages] = useState();
  const [areas, setAreas] = useState();
  const [tool, setTool] = useState();
  const location = useLocation();

  const media = useMedia("(min-width: 992px)");
  const name = location.pathname.replace("/", "");
  useEffect(() => {
    async function findUser() {
      const { url, options } = FIND_USER({ name });
      const { json, response } = await request(url, options);
      if (response.ok) setFollowers(json.profile.Follow);
    }
    findUser();
  }, [name, request]);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <div className={styles.profilePage}>
          <header className={styles.profile + " " + styles.container_profile}>
            <div className={styles.profile_container + " " + styles.grid}>
              <div className={styles.profile_data}>
                <div className={styles.profile_border}>
                  <div className={styles.profile_perfil}>
                    {data.profile.photo_url && (
                      <img
                        src={filesUrl + data.profile.photo_url}
                        alt={data.userName}
                      />
                    )}
                  </div>
                </div>
                <h2 className={styles.profile_name}>
                  {data.profile.firstName + " " + data.profile.lastName}
                  <p className={styles.profile_profession}>{data.userName}</p>
                </h2>
               
                <h3 className={styles.profile_profession}>
                  {data.profile.AreaofProfile.map((area) => (
                    <span
                      key={area.areaLabel}
                      className={styles.profile_profession}
                    >
                      {area.areaLabel + " "}
                    </span>
                  ))}
                </h3>
                <p className={styles.profile_profession}>{data.profile.bio}</p>
                <ul className={styles.profile_social}>
                  {data.profile.LinksToProfile.map((link) => (
                    <a
                      target="_blank"
                      href={link.Link.url + link.label}
                      className={styles.profile_social_link} rel="noreferrer"
                    >
                      <li>
                        <img
                          src={filesUrl + link.Link.icon}
                          alt={data.userName}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className={styles.profile_info + " " + styles.grid}>
                <div className={styles.profile_info_group}>
                  <h3 className={styles.profile_info_number}>
                    {followers.length}
                  </h3>
                  <p className={styles.profile_info_description}>followers</p>
                </div>
                <div className={styles.profile_info_group}>
                  <h3 className={styles.profile_info_number}>
                    {data.projects.length}
                  </h3>
                  <p className={styles.profile_info_description}>projects</p>
                </div>
                <div className={styles.profile_info_group}>
                  <h3 className={styles.profile_info_number}>
                    {data._count.Following}
                  </h3>
                  <p className={styles.profile_info_description}>following</p>
                </div>
              </div>
              <div className={styles.profile_buttons}>
                <FollowUser
                  data={data}
                  followers={followers}
                  setFollowers={setFollowers}
                  
                />

                <div className={styles.profile_buttons_small}>
                  <i className=""></i>
                  <a
                    href={"emailto:" + data.email}
                    className={
                      styles.button +
                      " " +
                      styles.button_small +
                      " " +
                      styles.button_gray
                    }
                  >
                    <box-icon name="envelope"></box-icon>
                  </a>
                  <a
                    href=""
                    className={
                      styles.button +
                      " " +
                      styles.button_small +
                      " " +
                      styles.button_gray
                    }
                  >
                    whatsapp
                  </a>
                </div>
              </div>
              {logedUser.id !== data.id && (
                <Link
                  to={`../../message/${data.userName}`}
                  className={styles.message + " " + styles.button}
                  onClick={async ()=> await createConversation({
                    members: [{memberId:logedUser.id}, {memberId: data.id}],
                    request
                  })}
                >
                  message
                </Link>
              )}
              {media && (
                <Skills
                  areas={data.profile.AreaofProfile}
                  languages={data.profile.LanguageOfProfile}
                  tools={data.profile.ToolofProfile}
                />
              )}
            </div>
          </header>
          <div>
            <main className={styles.main}>
              <section className={styles.filters + " " + styles.container}>
                <ul
                  className={styles.filters_content}
                  style={media ? { display: "none" } : {}}
                >
                  <button
                    className={
                      styles.filters_button +
                      ` ${projects && styles.filters_tab_active}`
                    }
                    data-target="#projects"
                    onClick={() => setProjects(!projects)}
                  >
                    Projects
                  </button>
                  <button
                    data-target="#skills"
                    className={
                      styles.filters_button +
                      ` ${!projects && styles.filters_tab_active}`
                    }
                    onClick={() => setProjects(!projects)}
                  >
                    Skills
                  </button>
                </ul>
                <div className={styles.filters_sections}>
                  {media && <h3 className={styles.filters_title}>Projetos</h3>}
                  {projects && <Feed />}
                  {!projects && (
                    <div>
                      {media && (
                        <h3 className={styles.filters_title}>Skills</h3>
                      )}
                      <Skills
                        areas={data.profile.AreaofProfile}
                        languages={data.profile.LanguageOfProfile}
                        tools={data.profile.ToolofProfile}
                      />
                    </div>
                  )}
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
