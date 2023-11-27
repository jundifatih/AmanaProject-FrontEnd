import CardAcara from "./CardAcara"
import DataAcaraMasjid from "../landingpage/DataAcaraMasjid"
import styles from "./StyleAcara.module.css"

const Acara = () => {
const data = DataAcaraMasjid.map((item)=>{
    return(
    <CardAcara
    key={item.poster}
    poster={item.poster}
    acara={item.acara}
    masjid={item.masjid}
    tanggalShort={item.tanggalShort}
    tagline={item.tagline}
    />
    )
    })
  return (
    <div className={styles.Acara}>
        <div className={styles.Judul}>
            <h2>Acara Mendatang</h2>
            <button>Lainnya</button>
        </div>
        <div className={styles.KomponenAcara}>
            {data}
        </div>
    </div>
  )
}

export default Acara