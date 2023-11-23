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
import { Link, useLocation } from "react-router-dom";
import Dashboard from "../../../assets/icons/Dashboard";

const Sidebar = () => {
  const pathname = useLocation().pathname;
  return (
    <aside className={`col-2 ${styles.Aside}`}>
      <div className={styles.User}>
        <img src={Profile} alt="" />
        <div>
          <h4>Masjid Al Ikhlas</h4>
          <small>Budiman Cahyadi</small>
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
          Pengurus Masjid
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
        <Link to="/" className={`${styles.NavItem}`}>
          <Logout />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
