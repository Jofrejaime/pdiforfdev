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
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import useMedia from "../Hooks/useMedia";
// Jofre
function Header() {
  const [display, setDisplay] = React.useState("");
  const [mobileMenu, setMobilemenu] = React.useState(false);
  const mobile = useMedia("(max-width: 45rem)");
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (
      pathname === "/login" ||
     pathname === "/login/createAccount"
    )
      setDisplay("none");
    else setDisplay(" ");
    setMobilemenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <header className={styles.header} style={{ display: display }}>
          {" "}
          <button
            aria-label="menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobilemenu(!mobileMenu)}
          ></button>{" "}
          <NavLink to={"/"} className={styles.logo}>
            <Logo />
          </NavLink>{" "}
        </header>
      )}

      <header className={`${ mobile ? '':styles.header}`} >
        <nav
          className={`${
            mobile ? styles.navMobile : `${styles.nav} container`
          } ${mobileMenu && styles.navMobileActive}`}
          style={{ display: display }}
        >
          {!mobile && (
            <NavLink to={"/"} className={styles.logo}>
              <Logo />
            </NavLink>
          )}
          <div className={styles.link}>
            <NavLink to="/" className={styles.link_a}>
              <FontAwesomeIcon icon={faHome} />
              <p>home</p>
            </NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to="discover" className={styles.link_a}>
              <FontAwesomeIcon icon={faBoxOpen} />
              <p>discover</p>
            </NavLink>
          </div>

          <div className={styles.link}>
            <NavLink to={"notification"} className={styles.link_a}>
              <FontAwesomeIcon icon={faBell} />
              <p>notification</p>
            </NavLink>
          </div>
          <div className={styles.link}>
            <NavLink to={"message"} className={styles.link_a}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>message</p>
            </NavLink>
          </div>
          {mobile ? (
            <div className={styles.link}>
              <NavLink to={"user"} className={styles.link_a}>
                <FontAwesomeIcon icon={faPersonBooth} />
                <p>profile</p>
              </NavLink>
            </div>
          ) : (
            <NavLink to={"user"} className={styles.profile}>
              P
            </NavLink>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
