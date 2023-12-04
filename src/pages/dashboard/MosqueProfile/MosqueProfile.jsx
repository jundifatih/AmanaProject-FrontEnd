import React from "react";

import styles from "./MosqueProfile.module.css";
import Profile from "/src/assets/ImageMasjid/Al-Ikhlas2.jpg";
import { Link } from "react-router-dom";

const MosqueProfile = () => {
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
          <small>
            <strong>Masjid Al-Ikhlas</strong>
          </small>
          <small>
            Jl. Bojong Pd. Terong No.105, Bojong Pd. Terong, Kec. Cipayung, Kota
            Depok, Jawa Barat 16436
          </small>
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
            Tentang Masjid
          </div>
        </div>
        <div className={`${styles.CardBody}`}>
          <h3>Informasi Umum</h3>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Nama</div>
            <div className={`col-8`}>Masjid Al-Ikhlas</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Alamat</div>
            <div className={`col-8`}>
              Jl. Bojong Pd. Terong No.105, Bojong Pd. Terong, Kec. Cipayung,
              Kota Depok, Jawa Barat 16436
            </div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Latitude & Longitude</div>
            <div className={`col-8`}>
              -6.426713330984473, 106.80632012479394
            </div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Telepon</div>
            <div className={`col-8`}>0812 8543 7226</div>
          </div>
          <hr style={{ margin: "1rem 0rem" }} />
          <h3>Informasi Kepengurusan</h3>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Ketua DKM</div>
            <div className={`col-8`}>Muzaki Abdullah Irsyad</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Bendahara</div>
            <div className={`col-8`}>Muhammad Jundi Fatih</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}> Admin Website</div>
            <div className={`col-8`}>Budiman Cahyadi</div>
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
            Edit
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MosqueProfile;
