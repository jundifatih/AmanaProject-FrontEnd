import React from "react";
import styles from "./Sidebar.module.css";
import Profile from "../../../assets/Profile.svg";
import Triangle from "../../../assets/icons/Triangle";
import Mosque from "../../../assets/icons/Mosque";
import Calendar from "../../../assets/icons/Calendar";
import Files from "../../../assets/icons/Files";
import Person from "../../../assets/icons/Person";
import Logout from "../../../assets/icons/Logout";
import FourPeople from "../../../assets/icons/FourPeople";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../../assets/icons/Dashboard";

const Sidebar = ({ takmir, mosque }) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("run");
    localStorage.removeItem("Authorization");
    navigate("/");
  };
  return (
    <aside className={`col-2 ${styles.Aside}`}>
      <div className={styles.User}>
        <img
          src={`http://localhost:3000/${takmir?.pic}`}
          alt=""
          style={{ width: "3.5rem", borderRadius: "99rem" }}
        />
        <div>
          <h4>{mosque?.name}</h4>
          <small>{takmir?.name}</small>
        </div>
      </div>

      <div className={styles.NavMenu}>
        <Link
          to=""
          className={`${styles.NavItem}`}
          style={
            pathname === "/dasbor"
              ? {
                  fontWeight: "bolder",
                }
              : { fontWeight: "normal" }
          }
        >
          <Dashboard />
          Dasbor
        </Link>

        <div className={`${styles.NavItem} ${styles.NavHead}`}>
          Masjid <Triangle />
        </div>
        <Link
          to="profil-masjid"
          className={`${styles.NavItem}`}
          style={
            pathname.includes("profil-masjid")
              ? {
                  fontWeight: "bolder",
                }
              : { fontWeight: "normal" }
          }
        >
          <Mosque />
          Profil Masjid
        </Link>
        <Link
          to="acara-masjid"
          className={`${styles.NavItem}`}
          style={
            pathname.includes("acara-masjid")
              ? {
                  fontWeight: "bolder",
                }
              : { fontWeight: "normal" }
          }
        >
          <Calendar />
          Acara Masjid
        </Link>
        <Link
          to="laporan-masjid"
          className={`${styles.NavItem}`}
          style={
            pathname.includes("laporan-masjid")
              ? {
                  fontWeight: "bolder",
                }
              : { fontWeight: "normal" }
          }
        >
          <Files />
          Laporan Masjid
        </Link>
        <Link
          to="pengurus-masjid"
          className={`${styles.NavItem}`}
          style={
            pathname.includes("pengurus-masjid")
              ? {
                  fontWeight: "bolder",
                }
              : { fontWeight: "normal" }
          }
        >
          <FourPeople />
          List Imam
        </Link>

        <div className={`${styles.NavItem} ${styles.NavHead}`}>
          Pengguna <Triangle />
        </div>
        <Link
          to="profil-pengguna"
          className={`${styles.NavItem}`}
          style={
            pathname.includes("profil-pengguna")
              ? {
                  fontWeight: "bolder",
                }
              : { fontWeight: "normal" }
          }
        >
          <Person />
          Profil Pengguna
        </Link>
        <div onClick={handleLogout} className={`${styles.NavItem}`}>
          <Logout />
          Logout
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
