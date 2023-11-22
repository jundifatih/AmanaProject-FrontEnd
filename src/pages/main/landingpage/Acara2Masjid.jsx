/* eslint-disable react/prop-types */
import styles from "./LandingPage.module.css"
// acara2, masjid2, tanggal2

const Acara2Masjid = (props) => {
    // const {acara2, masjid2, tanggal2} = props;
  return (
    <div className={styles.AcaraPendek}>
        <div className={styles.SekilasAcara}>
            <div className={styles.KotakTanggal}>
                <p className={styles.KotakP}>18 Sep <br /> <span>Senin</span></p>
            </div>
            <div className={styles.RincianAcara}>
                <p className={styles.JudulRincian}>{props.acara2}</p>
                <p className={styles.PenjelasanAcara}>{props.masjid2} | {props.tanggal2}</p>
            </div>
        </div>
        <div className={styles.SekilasAcara}>
            <div className={styles.KotakTanggal}>
                <p className={styles.KotakP}>20 Sep  <br /> <span>Rabu</span></p>
            </div>
            <div className={styles.RincianAcara}>
                <p className={styles.JudulRincian}>{props.acara2}</p>
                <p className={styles.PenjelasanAcara}>{props.masjid2} | {props.tanggal2}</p>
            </div>
        </div>
        <div className={styles.SekilasAcara}>
            <div className={styles.KotakTanggal}>
                <p className={styles.KotakP}>22 Sep  <br /> <span>Jum`at</span></p>
            </div>
            <div className={styles.RincianAcara}>
                <p className={styles.JudulRincian}>{props.acara2}</p>
                <p className={styles.PenjelasanAcara}>{props.masjid2} | {props.tanggal2}</p>
            </div>
        </div>
        <div className={styles.SekilasAcara}>  
            <div className={styles.KotakTanggal}>
                <p className={styles.KotakP}>24 Sep  <br /> <span>Ahad</span></p>
            </div>
            <div className={styles.RincianAcara}>
                <p className={styles.JudulRincian}>{props.acara2}</p>
                <p className={styles.PenjelasanAcara}>{props.masjid2} | {props.tanggal2}</p>
            </div>  
        </div>
    </div>
  )
}

export default Acara2Masjid