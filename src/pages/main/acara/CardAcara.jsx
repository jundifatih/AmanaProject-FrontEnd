/* eslint-disable react/prop-types */
import styles from "./StyleAcara.module.css"

const CardAcara = (props) => {
  return (
    <div className={styles.CardAcara}>
        <img src={props.poster} alt="poster" />
        <div className={styles.DescAcara}>
            <div className={styles.Desc1}>
                <p>{props.tanggalShort}</p>
            </div>
            <div className={styles.Desc2}>
                <p>{props.acara}</p>
                <p>{props.masjid}</p>
                <p>{props.tagline}</p>
            </div>
        </div>
    </div>
  )
}

export default CardAcara;