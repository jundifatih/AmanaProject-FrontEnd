import React, { useEffect, useState } from "react";

import styles from "./MosqueProfile.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MosqueProfile = () => {
  const { id } = useParams();
  const [mosque, setMosque] = useState("");
  const [takmir, setTakmir] = useState("");
  const getMosque = async () => {
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/mosque/${id}`;
    const response = await axios(API_ENDPOINT);
    setMosque(response.data.data);
  };
  const getWebAdmin = async () => {
    const token = localStorage.getItem("Authorization");
    const API_ENDPOINT = `${
      import.meta.env.VITE_API_URL
    }/protected/takmir/webadmin`;
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        Authorization: `${token}`,
      },
    });
    setMosque(response.data?.mosque);
    setTakmir(response.data?.takmir);
  };

  useEffect(() => {
    getWebAdmin();
  }, []);
  return (
    <main className={`col-10 ${styles.Main}`}>
      <div className={`col-4 ${styles.Card}`}>
        <div className={`${styles.CardBody} ${styles.Profile}`}>
          {" "}
          <img
            className={`${styles.ProfilePic}`}
            src={`http://localhost:3000/${mosque?.pic}`}
            alt=""
            srcset=""
          />
          <small>
            <strong>{mosque?.name}</strong>
          </small>
          <small>{mosque?.address}</small>
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
            <div className={`col-8`}>{mosque?.name}</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Alamat</div>
            <div className={`col-8`}>{mosque?.address}</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Latitude & Longitude</div>
            <div className={`col-8`}>
              {mosque?.latitude}, {mosque?.longitude}
            </div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Telepon</div>
            <div className={`col-8`}>{mosque?.phone}</div>
          </div>
          <hr style={{ margin: "1rem 0rem" }} />
          <h3>Informasi Kepengurusan</h3>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Ketua DKM</div>
            <div className={`col-8`}>-</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}>Bendahara</div>
            <div className={`col-8`}>-</div>
          </div>
          <div className={`${styles.Row}`}>
            <div className={`col-4`}> Admin Website</div>
            <div className={`col-8`}>{takmir.name}</div>
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
