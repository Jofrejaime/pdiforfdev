import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
import { CREATE_NOTIFICATION, FOLLOW_USER } from "../../services/api";
import useFetch from "../../../Hooks/useFetch";
import styles from "./Profile.module.css";
import createNotifications from "../../Notifications/createNotifications";
function FollowUser({ data, setFollowers }) {
  const { data: logedUser } = useContext(UserContext);
  const [classe, setClasse] = useState("");
  const [frase, setFrase] = useState("");
  const { request } = useFetch();
  const follow = useCallback(async () => {
    const FollowingProfile = await logedUser.Following.some(
      (following) => following.followingId === data.profile.id
    );
    if (FollowingProfile) {
      setFrase("following");
      setClasse(styles.following);
    } else {
      setFrase("follow");
      setClasse(styles.button);
    }
  }, [data.profile.id, logedUser.Following]);
  useEffect(() => {
    follow();
  }, [follow]);

  async function Follow() {
    const follower = logedUser.id;
    const following = data.profile.id;
    const { url, options } = FOLLOW_USER({ follower, following });
    const { json, response } = await request(url, options);
    console.log(json, response);
    if (response.ok) {
      if (frase === "follow") {
        setClasse(styles.following);
        setFrase("following");
        setFollowers(json);
        createNotifications({
          issuerId: logedUser.id,
          receiverId: data.id,
          content: "seguiu você",
          request: request,
        });
      } else {
        setFrase("follow");
        setClasse(styles.button);
        setFollowers(json);
      }
    }
  }
  return (
    <div>
      {data && data.profile.id === logedUser.profile.id ? (
        <button className={styles.button}>Editar</button>
      ) : (
        <button onClick={Follow} className={classe}>
          {frase}
        </button>
      )}
    </div>
  );
}

export default FollowUser;
