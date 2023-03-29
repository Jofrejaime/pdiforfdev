import styles from "./UserHeaderNav.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faSignOutAlt,
  faStarHalfStroke,
  faTools,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";

function UserHeaderNav() {
  const { userLogout, data } = React.useContext(UserContext);
  const [mobileMenu, setMobilemenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    setMobilemenu(false);
  }, [pathname]);
  
  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobilemenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <div className={`${mobile ? styles.link : ''}`}>
          {" "}
          <NavLink
            to={`/${data.userName}`}
            className={styles.button}
            end
          >
            <FontAwesomeIcon icon={faUsersRectangle} />
            {mobile && "Meus Projetos"}
          </NavLink>
        </div>
        <div className={`${mobile ? styles.link : ''}`}>
          {" "}
          <NavLink
            to={"stats"}
            className={styles.button}
          >
            <FontAwesomeIcon icon={faStarHalfStroke} />
            {mobile && "Estátisticas"}
          </NavLink>
        </div>
        <div className={`${mobile ? styles.link : ''}`}>
          <NavLink
            to={"createaproject"}
            className={styles.button}
          >
            <FontAwesomeIcon icon={faAdd} />
            {mobile && "Novo Projecto"}
          </NavLink>
        </div>
        <div className={`${mobile ? styles.link : ''}`}>
          <NavLink
            to={"definition"}
            className={styles.button}
          >
            <FontAwesomeIcon icon={faTools} />
            {mobile && "Difinições"}
          </NavLink>
        </div>
        <div className={`${mobile ? styles.link : ''}`}>
          <button onClick={userLogout} className={styles.button}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            {mobile && "Sair"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default UserHeaderNav;
