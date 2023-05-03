import React, { useContext, useState } from "react";
import styles from "./CardUser.module.css";
import { filesUrl } from "../services/api";
import { Link } from "react-router-dom";
import FollowUser from "../User/Profile/FollowUser";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import { createConversation } from "../Message/createConversation";
function CardUser({ user }) {
  const { data: logedUser } = useContext(UserContext);
  const { request } = useFetch();
  const [followers, setFollowers] = useState(() => user.profile.Follow);
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <img src={filesUrl + user.profile.photo_url} alt={user.userName} />
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h2>
            {user.userName} <br />{" "}
            <span>{user.profile.firstName + " " + user.profile.lastName}</span>
            <br />
            <span>
              {user.profile.AreaofProfile.map((area) => area.areaLabel + " ")}
            </span>
          </h2>
          <div className={styles.data}>
            <h3>
              {followers.length}
              <br />
              <span>Seguidores</span>
            </h3>
            <h3>
              {user._count.projects}
              <br />
              <span>Projectos</span>
            </h3>
            <h3>
              {user._count.Following}
              <br />
              <span>Seguindo</span>
            </h3>
          </div>
          {logedUser && (
            <div className={styles.actions}>
              <FollowUser
                data={user}
                followers={followers}
                setFollowers={setFollowers}
              />
              <Link
              onClick={async ()=> await createConversation({
                members: [{memberId:logedUser.id}, {memberId: user.id}],
                request
              })}
                to={"../../message/" + user.userName}     
              >
                Message
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardUser;
