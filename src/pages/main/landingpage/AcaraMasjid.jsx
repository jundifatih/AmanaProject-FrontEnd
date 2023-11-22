/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"

const AcaraMasjid = (props) => {
  // const {poster, acara, masjid, tanggal, pukul, deskripsi} = props;
    return (
      <div className={styles.AcaraUtama}>
          <div className={styles.PosterAcara}>
            <img src={props.poster} alt="poster"/>
          </div>
          <div className={styles.KeteranganAcara}>
            <h3 className={styles.ChildKeteranganAcara}>{props.acara}</h3>
            <p className={styles.ChildKeteranganAcara}>{props.masjid} <span>{props.tanggal}</span></p>
            <p className={styles.ChildKeteranganAcaraPukul}>{props.pukul}</p>
            <p className={styles.ChildKeteranganAcaraDesk}>{props.deskripsi}</p>
            <Link to="berita">
            <button className={styles.btnDetail}>Lihat Detailnya</button>
            </Link>
          </div>
      </div>
   )
}

export default AcaraMasjid;