import React from "react";
import styles from "./UserProfile.module.css";
import Profile from "../../../assets/Profile.svg";
import { Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <main className={`col-10 ${styles.Main}`}>
      <div className={`col-4 ${styles.Card}`}>
        <div className={`${styles.CardBody} ${styles.Profile}`}>
          {" "}
          <img
            className={`${styles.ProfilePic}`}
            src={Profile}
            alt=""
            srcset=""
          />
          <small>cahyadibudiman633@gmail.com</small>
          <small> 085777227772</small>
        </div>
      </div>
      <div className={`col-8 ${styles.Card}`}>
        <div className={`${styles.CardHeader}`}>
          <div
            style={{
              color: "var(--main-blue)",
              borderBottom: "2px solid var(--main-blue)",
            }}
          >
            Update Profil
          </div>
          <div>Pengaturan Akun</div>
        </div>
        <div className={`${styles.CardBody}`}>
          <h3>Informasi Umum</h3>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Nama Depan</div>
            <div className={`col-8`}>Budiman</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Nama Belakang</div>
            <div className={`col-8`}>Cahyadi</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Telepon</div>
            <div className={`col-8`}>085777227772</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Jenis Kelamin</div>
            <div className={`col-2`}>
              <input type="radio" name="" id="" checked /> Pria
            </div>
            <div className={`col-2`}>
              <input type="radio" name="" id="" /> Wanita
            </div>
          </div>
        </div>
        <div className={`${styles.CardFooter}`}>
          <Link
            style={{
              backgroundColor: "var(--main-blue)",
              color: "var(--white)",
              padding: "0.5rem 1rem",
              border: 0,
              textDecoration: "none",
              borderRadius: "0.3rem",
              borderBottom: "2px solid var(--main-blue)",
            }}
          >
            Simpan
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
