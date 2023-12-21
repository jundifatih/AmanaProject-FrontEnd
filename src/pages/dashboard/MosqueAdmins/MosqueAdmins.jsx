/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./MosqueAdmins.module.css";
import Image from "../../../assets/Profile.svg";
import Image2 from "/src/assets/ImageTim/Jundi.png";
import { Link } from "react-router-dom";
const MosqueAdmins = () => {
  return (
    <main className={`col-10 ${styles.Main}`}>
      <Link to="/dasbor" className={`${styles.Breadcrumb}`}>
        Daftar Imam
      </Link>
      <div className={`${styles.Row}`}>
        <div className={`col-12 ${styles.Container}`}>
          <div className={`${styles.Row} ${styles.Header}`}>
            Daftar Imam
            <button>tambah pengurus</button>
          </div>
          <div className={`${styles.Row} ${styles.Body}`}></div>
        </div>
      </div>
    </main>
  );
};

export default MosqueAdmins;
