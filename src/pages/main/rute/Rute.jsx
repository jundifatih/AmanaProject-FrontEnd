import styles from "./Rute.module.css"

const Rute = () => {
  return (
    <div className={styles.rute}>
        <div className={styles.ProfilMasjid}>
            <div className={styles.ImageMasjid}>
                <img src="src/assets/ImageMasjid/Al-Insan.jpg" alt="Masjid" />
            </div>
            <div className={styles.DescMasjid}>
                <h1>Masjid Al-Insan</h1>
                <p>Gg. Nangka No.34, RT.4/RW.10, Kp. Tengah, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13540</p>
                <button>Rute Sekarang</button>
            </div>
        </div>
        <div className={styles.maps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4543148562018!2d106.8536161754224!3d-6.28773516564492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f27d4e8f4bd1%3A0x9e57ad1c1870b023!2sMasjid%20Al%20-%20Insan!5e0!3m2!1sen!2sid!4v1701951124973!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Rute;