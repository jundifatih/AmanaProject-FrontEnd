import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/Logo-Amana.png";
import Profile from "../../../assets/Profile.svg";
import { Chevy } from "../../../assets/icons/Chevron";
import Bars from "../../../assets/icons/Bars";

const Navbar = ({ takmir }) => {
  const [display, setDisplay] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize >= 768) {
      setDisplay("desktop");
    } else if (windowSize >= 600) {
      setDisplay("tab");
    } else {
      setDisplay("mobile");
    }
  }, [windowSize]);
  return (
    <nav className={styles.Nav}>
      <div className={styles.Logo}>
        <img src={Logo} alt="" />
        Amana
      </div>
      {(display == "desktop" || display == "tablet") && (
        <div className={styles.User}>
          <img
            src={`http://localhost:3000/${takmir?.pic}`}
            style={{ width: "3.5rem", borderRadius: "99rem" }}
            alt=""
          />
          <>
            {takmir?.name}
            <Chevy />
          </>
        </div>
      )}
      {display == "mobile" && <Bars />}
    </nav>
  );
};

export default Navbar;
