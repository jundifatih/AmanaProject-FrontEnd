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
          <div className={`${styles.Row} ${styles.Body}`}>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`col-8 ${styles.CardBody}`}>
                <div className={` ${styles.CardItem}`}>
                  <h3>Budiman Cahyadi</h3>
                  <small> 085777227772</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
            <div className={`col-5 ${styles.Card}`}>
              <div className={`col-4 ${styles.CardBanner}`}>
                <img
                  src={Image2}
                  className={`${styles.Img}`}
                  alt="Banner acara"
                />
              </div>
              <div className={`col-8 ${styles.CardBody}`}>
                <div className={`${styles.CardItem}`}>
                  <h3>Muhammad Jundi Fatih</h3>
                  <small> 0812345678</small>
                </div>
                <div className={`${styles.Row} ${styles.Buttons}`}>
                  <button className={`${styles.Primary}`}>Edit</button>
                  <button className={`${styles.Danger}`}>Hapus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MosqueAdmins;
