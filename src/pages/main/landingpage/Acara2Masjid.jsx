/* eslint-disable react/prop-types */
import styles from "./LandingPage.module.css"
// acara2, masjid2, tanggal2

const Acara2Masjid = (props) => {
    
    // const {acara2, masjid2, tanggal2} = props;
  return (
    <>
    <div className={styles.AcaraPendek}>
        <div className={styles.SekilasAcara}>
            <div className={styles.KotakTanggal}>
                <p className={styles.KotakP}>{props.tanggalShort} <br /> <span>{props.hari}</span></p>
            </div>
            <div className={styles.RincianAcara}>
                <p className={styles.JudulRincian}>{props.acara}</p>
                <p className={styles.PenjelasanAcara}>{props.masjid} | {props.tanggal}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Acara2Masjid