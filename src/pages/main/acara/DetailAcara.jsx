import styles from "./DetailAcara.module.css"

const DetailAcara = () => {
  return (
    <div className={styles.DetailAcara}>
        <div className={styles.ImageAcara}>
            <img src="src/assets/ImageAcara/Maulidnabi.png" alt="poster" />
        </div>
        <div className={styles.DetailProfil}>
            <div className={styles.profil}>
                <img src="src/assets/ImageMasjid/Al-Insan.jpg" alt="" className={styles.FotoProfil}/>
                <p className={styles.masjid}>Masjid Al-Insan</p>
            </div>
            <div className={styles.headlineacara}>
                <h1 className={styles.heading}>Maulid Nabi</h1>
                <p className={styles.tagline}>Ayo saksikan momen bersejarah peringatan Maulid Nabi!</p>
                <p className={styles.tanggal}>Senin, 18 September 2023 <span>20:00 WIB</span></p>
            </div>
            <h3>Deskripsi Acara</h3>
            <p>Maulid Nabi adalah saat yang istimewa untuk mengingat dan memahami ajaran-ajaran yang diberikan oleh Nabi Muhammad SAW. Mari bergabung bersama-sama untuk merenungkan pesan-pesan kebaikan yang telah beliau sampaikan.hormatan kepada Rasulullah SAW.</p>
        </div>
    </div>
  )
}

export default DetailAcara;