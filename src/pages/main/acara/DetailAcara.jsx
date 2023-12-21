import { useParams } from "react-router-dom";
import styles from "./DetailAcara.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailAcara = () => {
  const { id } = useParams();
  const [acara, setAcara] = useState("");
  const [masjid, setMasjid] = useState("");
  const getAcara = async () => {
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/event/${id}`;
    const response = await axios.get(API_ENDPOINT);
    setAcara(response.data.data);
  };
  const getMasjid = async () => {
    const API_ENDPOINT = `${import.meta.env.VITE_API_URL}/mosque/${
      acara?.mosque_id
    }`;
    const response = await axios.get(API_ENDPOINT);
    console.log(response.data);
    setMasjid(response.data.data);
  };
  useEffect(() => {
    getAcara();
  }, []);
  useEffect(() => {
    getMasjid();
  }, [acara]);
  return (
    <div className={styles.DetailAcara}>
      <div className={styles.ImageAcara}>
        <img src={`http://localhost:3000/${acara?.pic}`} alt="poster" />
      </div>
      <div className={styles.DetailProfil}>
        <div className={styles.profil}>
          <img
            src={`http://localhost:3000/${masjid?.pic}`}
            alt=""
            className={styles.FotoProfil}
          />
          <p className={styles.masjid}>{masjid?.name}</p>
        </div>
        <div className={styles.headlineacara}>
          <h1 className={styles.heading}>{acara?.title}</h1>
          <p className={styles.tagline}>{acara?.tagline}</p>
          <p className={styles.tanggal}>{acara?.tanggal}</p>
        </div>
        <h3>Deskripsi Acara</h3>
        <p>{acara?.description}</p>
      </div>
    </div>
  );
};

export default DetailAcara;
