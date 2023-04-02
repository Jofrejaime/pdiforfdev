import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBoxOpen,
  faEnvelope,
  faHome,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import useMedia from "../../Hooks/useMedia";
import Notification from "../../Components/Notifications/Notifications";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import './assets/css/styles.css'
import { filesUrl } from "../services/api";
// Jofre
function Header() {
  const { data, login } = useContext(UserContext);

  const [display, setDisplay] = React.useState("");
  const [mobileMenu, setMobilemenu] = React.useState(false);
  const mobile = useMedia("(max-width: 67px)");
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/login" || pathname === "/login/createAccount")
      setDisplay("none");
    else setDisplay(" ");
    setMobilemenu(false);
  }, [pathname]);
  return (
    <>
      <section className={styles.bg_w}>
        {" "}
        <header className={'header'} id="header">
          <nav className={`nav container`}>
            <NavLink to={login ? "/" : "login"} className={styles.logo + ' nav_logo'}>
                  <Logo />
                </NavLink> 
                <div className="nav_menu" id="nav_menu">
                <ul className="nav_list">
              <li className={styles.link + ' nav_item'}>
                <NavLink to={login ? "/" : "login"} className={styles.link_a + ' nav_link'}>
                  <FontAwesomeIcon icon={faHome} className="nav_icon" />
                  <p className="nav_name">home</p>
                </NavLink>
              </li>
              <li className={styles.link + ' nav_item'}>
                <NavLink to={"discover"} className={styles.link_a + ' nav_link'}>
                  <FontAwesomeIcon className="nav_icon" icon={faBoxOpen} />
                  <p className="nav_name">discover</p>
                </NavLink>
              </li>

              <li className={styles.link + " nav_item " + styles.notification}>
                <NavLink
                  to={mobile ? (login ? "notification" : "login") : "#"}
                  className={styles.link_a + ' nav_link'}
                >
                  <FontAwesomeIcon icon={faBell} className="nav_icon"/>
                  <p className="nav_name">notification</p>
                </NavLink>
                <li
                  className={mobile ? "" : styles.notification_show}
                  style={{ display: `${mobile ? "none" : "flex"}` }}
                >
                  <Notification />
                </li>
              </li>
              <li className={styles.link+ ' nav_item'} >
                <NavLink
                  to={login ? "message" : "login"}
                  className={styles.link_a + ' nav_link'}
                >
                  <FontAwesomeIcon icon={faEnvelope} className=" nav_icon"/>
                  <p className="nav_name">message</p>
                </NavLink>
              </li>
            </ul>
            </div>
            {console.log(data)}
          {data && <Link to={data.userName}> <img src={filesUrl+data.profile.photo_url} alt="" className="nav_img"/></Link>}  
            
          </nav>
          
          
        </header>
      </section>
    </>
  );
}

export default Header;
