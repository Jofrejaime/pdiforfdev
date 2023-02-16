import React from "react";
import styles from "./UserHeaderNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faSignOutAlt,
  faStarHalfStroke,
  faTools,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import Add from "../Add/AddButton";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext); 
  const [mobileMenu, setMobilemenu] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const {pathname} = useLocation();
  React.useEffect(()=>{
    setMobilemenu(false);
  },[pathname])
  return (<>
   {mobile && <button aria-label='menu' className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={()=>setMobilemenu(!mobileMenu)}></button>} 
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink
        to={"/user"}
        className={styles.button}
        end
        activeClassName={styles.active}
      >
        <FontAwesomeIcon icon={faUsersRectangle} />
        {mobile && "Meus Projetos"}
      </NavLink>
      <NavLink
        to={"stats"}
        className={styles.button}
        activeClassName={styles.active}
      >
        <FontAwesomeIcon icon={faStarHalfStroke} />
        {mobile && "Estátisticas"}
      </NavLink>
      <NavLink
        to={"createaproject"}
        className={styles.button}
        activeClassName={styles.active}
      >
        <FontAwesomeIcon icon={faAdd} />
        {mobile && "Criar Novo Projecto"}
      </NavLink>
      <NavLink
        to={"definition"}
        className={styles.button}
        activeClassName={styles.active}
      >
        <FontAwesomeIcon icon={faTools} />
        {mobile && "Adicionar Foto"}
      </NavLink>

      <button onClick={userLogout} className={styles.button}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        {mobile && "Sair"}
      </button>
    </nav>
    </>
  );
}

export default UserHeaderNav;
